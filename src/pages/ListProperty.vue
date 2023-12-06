<template>
  <div>
    <form action="" class="container" @submit.prevent="onSubmit">
      <div>
        <label for="name">Hotel Name</label>
        <input id="name" type="text" v-model.trim="name" placeholder="The name of your Hotel">
        <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label>Country</label>
        <ul>
          <li v-for="country in possibleCountries">
            <label :for="country.name">{{ country.name }}</label>
            <input :id="country.name" type="radio" :value="country.name" v-model="hotelCountry">
          </li>
        </ul>
      </div>
      <div>
        <label for="city">city</label>
        <select id="city" v-model="hotelCity">
          <option value="" disabled>
            Select
          </option>
          <option v-for="city in filteredCities()" :value="city">
            {{ city }}
          </option>
        </select>
        <div class="input-errors" v-for="error of v$.hotelCity.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label for="price">price</label>
        <input id="price" type="number" v-model="price" placeholder="0">
        <div class="input-errors" v-for="error of v$.price.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label for="img">Image</label>
        <input id="img" type="text" v-model.trim="img"
          placeholder="Please, provide a link to be used as a thumbnail for your listed property">
      </div>
      <div>
        <label>Facilities</label>
        <ul>
          <li v-for="facility in possibleFacilities">
            <label :for="facility">{{ facility }}</label>
            <input :id="facility" type="checkbox" :value="facility" v-model="facilities">
          </li>
        </ul>
      </div>
      <button>Sumbit your property</button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useHotels } from '../store/hotels.js'
import db from '../firebase'
import { collection, doc, setDoc, query, getDocs, getDoc } from 'firebase/firestore'

export default {
  setup() {
    const hotels = useHotels();
    return { hotels, v$: useVuelidate() }
  },
  data() {
    return {
      name: '',
      raiting: 0,
      votes: 0,
      hotelCity: '',
      hotelCountry: 'Germany',
      price: null,
      img: '',
      facilities: [],
      possibleFacilities: ['Free WiFi', 'Private Parking', '24-hour front desk', 'Non-smoking rooms', 'Lift', 'Complimentary breakfast'],
      possibleCountries: [{
        name: 'Germany',
        cities: ['Berlin', 'Munich', 'Cologne']
      },
      {
        name: 'France',
        cities: ['Paris', 'Strasburg', 'Lyon']
      },
      {
        name: 'UK',
        cities: ['London', 'Edinburgh', 'Manchester']
      },
      {
        name: 'Greece',
        cities: ['Athens', 'Rhodos', 'Kavala']
      },
      {
        name: 'Bulgaria',
        cities: ['Sofia', 'Ruse', 'Plovdiv']
      },],
    }
  },
  validations() {
    return {
      name: { required },
      hotelCity: { required },
      price: { required }
    }
  },
  methods: {
    filteredCities() {
      const countryObject = this.possibleCountries.find(
        country => country.name === this.hotelCountry
      );
      return countryObject.cities;
    },
    async onSubmit() {
      const isFilledOut = await this.v$.$validate();
      console.log('Is it all filled out?', isFilledOut, this.v$);
      if (isFilledOut) {
        const newHotel = {
          name: this.name,
          raiting: this.raiting,
          votes: this.votes,
          city: this.hotelCity,
          country: this.hotelCountry,
          price: this.price,
          img: this.img,
          facilities: this.facilities,
        }

        const hotelAlreadyExists = await this.isExistingHotel();

        if (!hotelAlreadyExists) {
          if (!newHotel.img) {
            newHotel.img = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          }
          console.log('added to firebase')
          await setDoc(doc(db, 'hotels', this.name), newHotel)
        }

        this.$router.push('/successfulsubmition/YOUR SUBMITION WAS SUCCESSFULLY SUBMITTED');

      }
    },
    async isExistingHotel() {
      let existInFirebase = false;
      let existInPinia = false;
      const docSnap = await getDoc(doc(db, 'hotels', this.name))
      // const querySnap = await getDocs(query(collection(db, 'hotels')))

      if (docSnap.exists()) {
        existInFirebase = true;
      }

      if (this.hotels.isExisting()) {
        existInPinia = true;
      }
      console.log(existInFirebase && existInPinia)
      return existInFirebase && existInPinia
    }
  },
  watch: {
    hotelCountry() {
      const selectedCountryCities = this.filteredCities();
      if (!selectedCountryCities.includes(this.hotelCity)) {
        this.hotelCity = '';
      }
    }
  }
}
</script>

<style scoped></style>
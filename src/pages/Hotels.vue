<template>
  <div class="main-template">
    <div class="sorting-container">
      <div>
        <label for="sortedCountry">Sort by country</label>
        <select id="sortedCountry" v-model="sortedCountry">
          <option disabled>
            Select
          </option>
          <option v-for="country in hotels.possibleCountries" :value="country.name">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="sortedCity">Sort by city</label>
        <select id="sortedCity" v-model="sortedCity">
          <option disabled>
            Select
          </option>
          <option v-for="city in filteredCities()" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div>
        <button class="show-all" v-if="isSorted" @click="showAllHotels()">Reset</button>
      </div>
    </div>
    <h4 class="number-hotels">Hotels: {{ numberOfRegisteredHotels }}</h4>
    <div v-for="hotel in this.sortedHotels" class="hotels-container">
      <SingleHotelBlock class="hotel-container" :singleHotel="hotel" />
    </div>
  </div>
</template>

<script>
import { useHotels } from '../store/hotels.js';
import db from '../firebase';
import { query, getDocs, collection } from 'firebase/firestore'
import SingleHotelBlock from '../components/SingleHotelBlock.vue';

export default {
  setup() {
    const hotels = useHotels();
    return { hotels };
  },
  data() {
    return {
      sortedCountry: '',
      sortedCity: '',
      isSorted: false
    }
  },
  components: {
    SingleHotelBlock
  },
  async created() {
    const firebaseHotels = await this.getFirebaseHotels();
    this.hotels.addHotelsFromFirebase(firebaseHotels);
  },
  methods: {
    async getFirebaseHotels() {
      const querySnap = await getDocs(query(collection(db, 'hotels')))
      return querySnap
    },
    filteredCities() {
      if (this.sortedCountry) {
        const countryObject = this.hotels.possibleCountries.find(
          country => country.name === this.sortedCountry
        );
        return countryObject.cities;
      }
    },
    showAllHotels() {
      this.sortedCountry = '';
      this.sortedCity = '';
      this.isSorted = false;
    }
  },
  computed: {
    sortedHotels() {
      let sortedHotels = []
      let sortedHotelsByCity = []
      if (this.sortedCountry) {
        this.hotels.allHotels.forEach((hotel) => {
          if (hotel.country === this.sortedCountry) {
            sortedHotels.push(hotel)
          }
        })
        this.isSorted = true
      } else {
        return this.hotels.allHotels
      }

      if (this.sortedCity) {
        sortedHotels.forEach((hotel) => {
          if (hotel.city === this.sortedCity) {
            sortedHotelsByCity.push(hotel)
          }
        })
        this.isSorted = true
        return sortedHotelsByCity
      } else {
        this.isSorted = true
        return sortedHotels
      }
    },
    numberOfRegisteredHotels() {
      return this.sortedHotels.length
    }
  },
  watch: {
    sortedCountry() {
      const selectedCountryCities = this.filteredCities() || [];
      if (!selectedCountryCities.includes(this.sortedCountry)) {
        this.sortedCity = '';
      }
    },
  }
}
</script>

<style scoped>
.main-template {
  margin-left: 20px;
  margin-right: 20px;
}

.sorting-container {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: end;
  justify-content: center;
}

.show-all {
  width: 120px;
  height: 63px;
  padding: 2px;
}

.number-hotels {
  border-bottom: 1px solid rgb(187, 183, 183);
}

.hotels-container {
  margin-top: 20px;
}

.hotel-container {
  border-bottom: 1px dotted rgb(0, 0, 0);
}
</style>
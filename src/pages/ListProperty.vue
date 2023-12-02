<template>
  <div>
    <form action="" class="container">
      <div>
        <label for="name">Hotel Name</label>
        <input id="name" type="text" v-model.trim="name" placeholder="The name of your Hotel">
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
      </div>
      <div>
        <label for="price">price</label>
        <input id="price" type="number" v-model="price">
      </div>
      <div>
        <label for="img">Image</label>
        <input id="img" type="text" v-model.trim="img"
          placeholder="Plese, provide a link to be used as a thumbnail for your listed property">
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
    </form>
    <button>Sumbit your property</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      raiting: 0,
      votes: 0,
      hotelCity: '',
      hotelCountry: 'Germany',
      price: 0,
      img: '',
      id: 0,
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
      },]
    }
  },
  methods: {
    filteredCities() {
      const countryObject = this.possibleCountries.find(
        country => country.name === this.hotelCountry
      );
      return countryObject.cities;
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

<style lang="scss" scoped></style>
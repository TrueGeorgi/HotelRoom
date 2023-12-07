<template>
  <h4>Hotels: {{ numberOfRegisteredHotels }}</h4>
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
  <button v-if="isSorted" @click="showAllHotels()">Show all hotels</button>
  <div v-for="hotel in this.sortedHotels" class="main-container">
    <SingleHotelBlock :singleHotel="hotel" />
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
.name-raiting,
.hotel-info,
.price-book {
  border: 1px solid rgb(180, 180, 180);
}

.main-container,
.general-info,
.name-raiting,
.hotel-info,
.price-book {
  display: flex;
  flex: 1;
}

.general-info-container {
  justify-content: space-between;
  padding: 0 10px;
}

.general-info {
  flex-direction: column;
}

.book-button {
  width: 100px;
}

img {
  width: 200px;
  height: 150px;
  border-radius: 15px;
}


.main-container {
  margin-bottom: 20px;
}
</style>
<template>
  <h4>Hotels: {{ hotels.numberOfRegisteredHotels }}</h4>
  <div v-for="hotel in hotels.allHotels" class="main-container">
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
    }
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
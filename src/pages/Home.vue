<script>
import HotelBlock from '../components/HotelBlock.vue'
import db from '../firebase';
import { query, getDocs, collection } from 'firebase/firestore'
import { useHotels } from '../store/hotels';


export default {
  setup() {
    const hotels = useHotels();
    return { hotels };
  },
  components: {
    HotelBlock,
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
};
</script>

<template>
  <main class="main-box">
    <HotelBlock />
  </main>
</template>

<style>
body {
  margin: 0;
}

.main-box {
  margin: 0 auto;
  margin-top: 30px;
}
</style>

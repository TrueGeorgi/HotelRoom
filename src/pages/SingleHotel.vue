<template>
  <div>
    <img class="pic" :src="hotel.img" alt="Hotel picture">
    <p>{{ hotel.name }}</p>
    <div>
      <div>
        Info
      </div>
      <div>
        <SelectDates @price-object="handleTotalPrice" :price="hotel.price" />
      </div>
      <div v-if="showButon">The total cost will be: {{ priceObject.totalPrice }} $. You are staying for {{
        priceObject.nights }} nights on {{ hotel.price }}$ per night.
      </div>
      <button @click="bookToProfile" v-if="showButon">Book it for {{
        priceObject.totalPrice }}$</button>
    </div>
  </div>
</template>

<script>
import { useHotels } from '../store/hotels'
import db from '../firebase'
import { query, getDocs, collection, setDoc, doc } from 'firebase/firestore'
import SelectDates from '../components/SelectDates.vue'
import { auth } from '../firebase'

export default {
  setup() {
    const hotels = useHotels()
    return { hotels }
  },
  components: {
    SelectDates
  },
  data() {
    return {
      name: '',
      hotel: {},
      found: false,
      priceObject: {},
      isCalculated: false
    }
  },
  computed: {
    showButon() {
      if (this.isCalculated && this.priceObject.totalPrice > 0) {
        return true
      }
    }
  },
  created() {
    this.name = this.$route.params.id;

    this.hotels.allHotels.forEach((hotel) => {
      if (hotel.name === this.name) {
        this.hotel = hotel
        this.found = true;
      }
    })

    if (!this.found) {
      const firebaseHotels = this.getFirebaseHotels();
      firebaseHotels.forEach((fHotel) => {
        if (hotel.name === this.name) {
          this.hotel = hotel
          this.found = true;
        }
      })
    }
  },
  methods: {
    async getFirebaseHotels() {
      const querySnap = await getDocs(query(collection(db, 'hotels')))
      return querySnap
    },
    handleTotalPrice(data) {
      this.priceObject = data
      this.priceObject.user = auth.currentUser.email
      this.priceObject.img = this.hotel.img
      this.priceObject.name = this.hotel.name
      this.isCalculated = true
    },
    async bookToProfile() {
      const user = auth.currentUser;
      if (user) {
        console.log(this.priceObject)
        await setDoc(doc(db, 'bookings', this.hotel.name), this.priceObject)
        console.log('booked')
      }
    }
  }
}
</script>

<style scoped>
.pic {
  width: 250px;
  margin-left: 10px;
}
</style>
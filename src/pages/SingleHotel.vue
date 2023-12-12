<template>
  <div class="main-container">
    <p class="hotel-name">{{ hotel.name }}</p>
    <img class="pic" :src="hotel.img" alt="Hotel picture">
    <div class="location">{{ hotel.city }}, {{ hotel.country }}</div>
  </div>
  <div>
    <div>
      <SelectDates @price-object="handleTotalPrice" :price="hotel.price" />
    </div>
    <div class="calculation-container" v-if="showButon">
      <div class="inner-calculation-container">
        <div class="total-cost-container">
          <p class="total-cost">Total cost:</p>
          <p class="total-cost-number"> {{ priceObject.totalPrice }} $ <span>on {{ hotel.price }}$ per night</span></p>
        </div>
        <p class="nights">Nights: {{ priceObject.nights }}</p>
        <button class="book-it-button" @click="bookToProfile">Book it for {{ priceObject.totalPrice }}$</button>
        <button class="cancel-button" @click="this.isCalculated = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useHotels } from '../store/hotels'
import db from '../firebase'
import { query, getDocs, collection, setDoc, doc, getDoc } from 'firebase/firestore'
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
        const bookingName = `${this.hotel.name} - ${this.priceObject.user}`
        console.log(bookingName)
        console.log(1)
        const bookingExist = await this.checkIfBookingExists(bookingName)
        if (bookingExist) {
          console.log(this.checkIfBookingExists(bookingName))
          alert('You already have a booking for this hotel')
        } else {
          await setDoc(doc(db, 'bookings', bookingName), this.priceObject)
          this.$router.push('/successfulsubmition/Your booking was successful');
        }
      }
    },
    async checkIfBookingExists(bookingName) {
      console.log(2)
      console.log(bookingName)
      const docRef = doc(db, 'bookings', bookingName);
      console.log(docRef)
      const docSnap = await getDoc(docRef);
      console.log(docSnap.exists())
      return docSnap.exists();
    }
  }
}
</script>

<style scoped>
span {
  font-size: 14px;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hotel-name {
  font-size: 28px;
  font-weight: bold;
  margin: 30px 0px;
}

.pic {
  width: 250px;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 5px 10px 7px;
  margin-bottom: 15px;
}

.select-dates {
  display: flex;
  align-items: start;
}

.calculation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(128, 128, 128, 0.7);
}

.inner-calculation-container {
  background-color: white;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  border-radius: 30px;
}

.total-cost-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.total-cost {
  font-size: 28px;
  margin: auto;
  font-weight: bold;
}

.total-cost-number {
  font-style: italic;
}

.cancel-button {
  background-color: rgb(228, 89, 89);
}
</style>
<template>
  <div class="main-container" v-if="userBookings.length > 0">
    <div class="booking-container" v-for="booking in userBookings" :key="booking.name">
      <div class="image-container">
        <img class="pic" :src="booking.data().img" alt="hotel pic">
      </div>
      <div class="info-container">
        <p class="hotel-name">{{ booking.data().name }}</p>
        <p class="nihgts">Nights: {{ booking.data().nights }}</p>
        <p class="total-amount">Total amount: <span class="amount">{{ booking.data().totalPrice }} $</span></p>
        <button class="delete-button" @click="deleteBooking(booking.id)">Delete booking</button>
      </div>
    </div>
  </div>
  <div class="no-bookings" v-else>
    You currently don't have any bookings.
    <fa icon="sad-tear" />
  </div>
</template>

<script>
import db from '../firebase';
import { getDocs, collection, query, deleteDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase';

export default {
  async created() {
    this.allBooking = await this.getAllBookings();
    console.log('1')
    console.log(this.allBooking)
    await this.getUserBookings();
    console.log('2')
    console.log(this.username)
  },
  data() {
    return {
      allBooking: [],
      userBookings: [],
      isLogged: auth.currentUser,
      raiting: null,
    };
  },
  methods: {
    async getAllBookings() {
      const querySnap = await getDocs(query(collection(db, 'bookings')));
      console.log('3')
      return querySnap;
    },
    async getUserBookings() {
      console.log('4');
      for (const doc of this.allBooking.docs) {
        const booking = doc.data();
        console.log('5');
        if (booking.user === this.username) {
          this.userBookings.push(doc);
        }
      }
    },
    async deleteBooking(bookingName) {
      await deleteDoc(doc(db, 'bookings', bookingName))
      console.log(bookingName)
      this.userBookings.splice(bookingName, 1)
    }
  },
  computed: {
    username() {
      if (this.isLogged) {
        console.log('6')
        return auth.currentUser.email;
      }
    },
  },
};
</script>

<style scoped>
.main-container {}

.pic {
  width: 200px;
  height: 150px;
  border-radius: 10%;
}

.booking-container {
  display: flex;
  flex-direction: row;
  column-gap: 25px;
  align-items: center;
  justify-content: left;
  border-bottom: 1px dotted black;
}

.info-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.hotel-name {
  font-weight: bold;
  font-size: 26px;
}

.total-amount {
  font-style: oblique;
}

.amount {
  font-weight: bold;
}

.delete-button {
  width: 210px;
}

.no-bookings {
  margin: auto;
  font-size: 34px;
}
</style>

<template>
  <div v-if="userBookings.length > 0">
    <ul>
      <li v-for="booking in userBookings" :key="booking.name">
        <div>
          <img class="pic" :src="booking.data().img" alt="hotel pic">
          <p>You have booked at the "{{ booking.data().name }}" for {{ booking.data().nights }} nights. You have to pay {{
            booking.data().totalPrice }} $ for your stay.</p>
        </div>
        <button @click="deleteBooking(booking.id)">Delete this booking</button>

      </li>
    </ul>
  </div>
  <div v-else>
    Such Empty
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
.pic {
  width: 250px;
}
</style>

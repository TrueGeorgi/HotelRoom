<template>
  <div>
    <p class="account-message">{{ username }}</p>
    <p class="owe-amount">You owe {{ moneyOwed }}$</p>
    <button @click="loggOut">Sing out</button>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import db from '../firebase';
import { getDoc, getDocs, query, collection } from 'firebase/firestore';

export default {
  async created() {
    const querySnap = await getDocs(query(collection(db, 'bookings')))
    const email = await auth.currentUser.email
    for (const doc of querySnap.docs) {
      if (doc.data().user === email) {
        this.moneyOwed += doc.data().totalPrice
      }
    }
    this.username = auth.currentUser.displayName
  },
  data() {
    return {
      moneyOwed: 0,
      username: '',
      userBookings: []
    }
  },
  methods: {
    loggOut() {
      signOut(auth)
        .then(() => {
          this.$router.push('/log-in');
        })
    },
  }
}
</script>

<style scoped>
.account-message {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
}

.owe-amount {
  display: flex;
  margin: auto;
  width: 400px;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  font-style: italic;
  background-color: rgb(226, 230, 233);
  border-radius: 50px;
}
</style>
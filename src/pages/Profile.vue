<template>
  <div>
    <p>You owe {{ moneyOwed }}$</p>
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
  },
  data() {
    return {
      moneyOwed: 0,
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

<style scoped></style>
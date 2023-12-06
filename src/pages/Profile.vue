<template>
  <div>
    <button @click="loggOut">Sing out</button>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default {
  data() {
    return {

    }
  },
  methods: {
    loggOut() {
      signOut(auth)
        .then(() => {
          this.$router.push('/log-in');
        })
    }
  }
}
</script>

<style scoped></style>
<template>
  <nav>
    <p class="siteName">
      <router-link to="/" class="logo">
        <span class="logoHotel">Hotel</span><span class="logoRoom">Room</span>
      </router-link>
    </p>
    <ul>
      <li>
        <router-link to="/hotels" class="hotels">
          Hotels
        </router-link>
      </li>
      <li v-if="loggedUser">
        <router-link to="/my-bookings">
          My Bookings
        </router-link>
      </li>
      <li v-if="loggedUser">
        <router-link to="/list-property">
          List Property
        </router-link>
      </li>
      <li v-if="loggedUser">
        <router-link to="/profile">
          <fa icon="user-circle" />
        </router-link>
      </li>
      <li v-if="!loggedUser">
        <router-link to="/log-in">
          Log In
        </router-link>
      </li>
      <li v-if="!loggedUser">
        <router-link to="/register">
          Register
        </router-link>

      </li>
    </ul>
  </nav>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      isLoggedAccount: false,
      loggedUser: null
    }
  },
  watch: {
    loggedUser(newVal) {

      if (newVal) {

        console.log('Is logged')
      } else {

        console.log('Is not logged')
      }
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.loggedUser = user;
    })
  }

}
</script>

<style scoped>
nav {
  background-color: rgb(203, 255, 255);

  align-items: center;
  padding: 20px;
}

.logo {
  border-radius: 25px;
  padding: 13px;
  font-weight: bold;
  transition: opacity 0.5s;
}

.logoHotel {
  color: rgb(250, 113, 113);

}

.logo:hover {
  opacity: 0.8;
}

.logoRoom {
  color: rgb(115, 115, 250);
}
</style>
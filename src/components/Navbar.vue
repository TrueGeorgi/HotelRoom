<template>
  <nav>
    <p class="siteName">
      <router-link to="/">
        <span class="logoHotel">Hotel</span><span class="logoRoom">Room</span>
      </router-link>
    </p>
    <ul>
      <li v-for="page in pages">
        <router-link :to="page.link">
          {{ page.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [{
        link: '/',
        text: 'Home'
      },
      {
        link: '/hotels',
        text: 'Hotels'
      },
      {
        link: '/my-bookings',
        text: 'My Bookings'
      },
      {
        link: '/log-in',
        text: 'Log In'
      },]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(203, 255, 255);

  align-items: center;
  padding: 20px;
}

.logoHotel {
  color: blue;
}

.logoRoom {
  color: rgb(255, 81, 0);
}
</style>
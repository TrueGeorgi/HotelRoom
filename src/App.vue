<template>
  <header>
    <Navbar />
  </header>

  <router-view />

  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style scoped></style>
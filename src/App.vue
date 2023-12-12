<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <router-view />

    <footer>
      <Footer />
    </footer>
  </div>
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

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1;
}

footer {
  margin-top: auto;
}
</style>
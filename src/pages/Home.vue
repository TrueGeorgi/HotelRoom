<script>
import HotelBlock from '../components/HotelBlock.vue'


export default {
  components: {
    HotelBlock,
  },
};
</script>

<template>
  <main class="main-box">
    <HotelBlock />
  </main>
</template>

<style>
body {
  margin: 0;
}

.main-box {
  width: 1100px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>

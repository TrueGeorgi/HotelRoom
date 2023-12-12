<template>
  <div class="grid-container">
    <div v-for="hotel in sixRandomHotels()" class="main-container">
      <SingleHotelBlock :singleHotel="hotel" />
    </div>
  </div>
</template>

<script>
import SingleHotelBlock from './SingleHotelBlock.vue';
import { useHotels } from '../store/hotels'
import { mapState } from 'pinia';
export default {
  components: {
    SingleHotelBlock,
  },
  data() {
    return {
    };
  },
  setup() {
    const hotels = useHotels();
    return { hotels };
  },
  computed: {
    ...mapState(useHotels, ['allHotels'])
  },
  mounted() {

  },
  methods: {
    sixRandomHotels() {
      let randomHotels = [];
      let randomNumbers = [];

      for (let i = 1; i <= 6; i++) {
        let randomNum = Math.floor(Math.random() * this.allHotels.length);

        while (randomNumbers.includes(randomNum)) {
          randomNum = Math.floor(Math.random() * this.allHotels.length);
        }

        randomNumbers.push(randomNum);
        randomHotels.push(this.allHotels[randomNum]);
      }
      return randomHotels;
    }
  }
}

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 630px 630px;
  column-gap: 25px;
  row-gap: 30px;
}
</style>
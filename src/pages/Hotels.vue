<template>
  <h4>Hotels: {{ hotels.numberOfRegisteredHotels }}</h4>
  <div>
    <div v-for="hotel in hotels.allHotels" class="main-container">
      <div class="main-container">
        <div class="hotel-pic">
          <img :src="hotel.img" :alt="hotel.name">
        </div>
        <div class="general-info general-info-container">
          <div class="name-raiting general-info-container">
            <div>{{ hotel.name }}</div>
            <div>Raiting:{{ hotel.raiting }} from {{ hotel.votes }} votes</div>
          </div>
          <div class="hotel-info general-info-container">
            <div>Location: {{ hotel.city }}, {{ hotel.country }}</div>
            <div>avilable rooms: YES</div>
          </div>
          <div class="price-book general-info-container">
            <div>Price: {{ hotel.price }}$</div>
            <button class="book-button" @click="goToHotelPage">Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHotels } from '../store/hotels.js';

export default {
  setup() {
    const hotels = useHotels();
    return { hotels };
  },
  mounted() {
    console.log(this.hotels.currentHotels);
    console.log(this.hotels.allHotels);
  }
}
</script>

<style scoped>
.name-raiting,
.hotel-info,
.price-book {
  border: 1px solid rgb(180, 180, 180);
}

.main-container,
.general-info,
.name-raiting,
.hotel-info,
.price-book {
  display: flex;
  flex: 1;
}

.general-info-container {
  justify-content: space-between;
  padding: 0 10px;
}

.general-info {
  flex-direction: column;
}

.book-button {
  width: 100px;
}

img {
  width: 200px;
  height: 150px;
  border-radius: 15px;
}


.main-container {
  margin-bottom: 20px;
}
</style>
display: grid;
grid-template-columns: 550px 550px;
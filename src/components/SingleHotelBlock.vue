<template>
  <div class="hotel-container">
    <div class="img-container">
      <img :src="singleHotel.img" :alt="singleHotel.name">
    </div>
    <div class="info-container">
      <div class="text-container">
        <div class="name-loc-price-container">
          <div class="hotel-name">{{ singleHotel.name }}</div>
          <div class="hotel-location">{{ singleHotel.city }}, {{ singleHotel.country }}</div>
          <div class="hotel-price">
            {{ singleHotel.price }} $ <span class="text-in-hotel-price">per night</span>
          </div>
          <div class="button-container">
            <button class="book-button" @click="goToHotelPage">Book</button>
          </div>
        </div>
        <div class="rat-fac-container">
          <div class="hotel-raiting">Raiting: {{ singleHotel.raiting }} from {{ singleHotel.votes }} votes</div>
          <p>Facilities:</p>
          <ul class="hotel-facilities">
            <li v-for="facility in singleHotel.facilities">{{ facility }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singleHotel: Object
  },
  methods: {
    goToHotelPage() {
      this.$router.push({ name: 'hotel', params: { id: this.singleHotel.name } });
    }
  }
}
</script>

<style scoped>
.hotel-container,
.text-container,
.button-container {
  display: flex;
  flex-direction: row;
}

.name-loc-price-container,
.rat-fac-container {
  display: flex;
  flex-direction: column;
}

.hotel-container {
  column-gap: 20px;
  align-items: top;
}



.text-container {

  column-gap: 30px;
  align-items: top;
}

.name-loc-price-container {
  /* border: 1px solid black; */
  row-gap: 10px;
  align-items: top;
  justify-content: space-between;
  flex: 1;
}

.rat-fac-container {
  row-gap: 10px;
}

.hotel-name {
  font-weight: bold;
  font-size: 21px;
}

.hotel-location {
  font-size: 18px;
  font-style: italic;
}

.text-in-hotel-price {
  font-size: 14px;
}

.hotel-raiting {
  padding-bottom: 10px;
  border-bottom: 1px dotted gray;
}

.hotel-facilities {
  font-size: 16px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.img-container {
  width: 200px;
  height: 150px;
}

.info-container {
  flex: 1;
}

.book-button {
  margin-top: 10px;
  width: 110px;
}

.book-button:active {
  opacity: 0.5;
}
</style>
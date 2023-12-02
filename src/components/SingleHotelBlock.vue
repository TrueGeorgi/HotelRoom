<template>
  <div class="main-container">
    <div class="hotel-pic">
      <img :src="singleHotel.img" :alt="singleHotel.name">
    </div>
    <div class="general-info general-info-container">
      <div class="name-raiting general-info-container">
        <div>{{ singleHotel.name }}</div>
        <div>Raiting:{{ singleHotel.raiting }} from {{ singleHotel.votes }} votes</div>
      </div>
      <div class="hotel-info general-info-container">
        <div>Location: {{ singleHotel.city }}, {{ singleHotel.country }}</div>
        <div>avilable rooms: YES</div>
      </div>
      <div class="price-book general-info-container">
        <div>Price: {{ singleHotel.price }}$</div>
        <button class="book-button" @click="goToHotelPage">Book</button>
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
      this.$router.push({ name: 'hotel', params: { id: this.singleHotel.id } });
    }
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
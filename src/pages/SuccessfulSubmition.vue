<template>
  <div>
    <h1>{{ message }}</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdab4SR0RyiWHNbIQQgFQKl2ZxLqgEbdjuPkkBl0SVg&s"
      alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.message = this.$route.params.message || 'Confirmed';
  }
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
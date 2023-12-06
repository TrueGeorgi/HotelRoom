<template>
  <nav>
    <div>
      <router-link to="/contact-us">
        Contact Us
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(203, 255, 255);
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}

nav div {
  margin: 0 50px;
  /* Adjust margin as needed */
}
</style>
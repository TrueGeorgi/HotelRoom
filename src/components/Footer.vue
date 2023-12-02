<template>
  <nav>
    <div v-for="page in pages">
      <router-link :to="page.link">
        {{ page.text }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          link: '/list-property',
          text: 'List Property'
        },
        {
          link: '/jobs',
          text: 'Jobs'
        },
        {
          link: '/contact-us',
          text: 'Contact Us'
        },]
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
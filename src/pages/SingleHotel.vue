<template>
  <div>
    <h1>the id is {{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style lang="scss" scoped></style>
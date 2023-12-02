<template>
  <div class="main-container">
    <h5>Job name</h5>
    <h5>Location</h5>
    <div class="job-position" v-for="job in openPostions">
      <div class="position">{{ job.name }}</div>
      <div>{{ job.location }}</div>
    </div>
  </div>
  <p>If there is a position that you would like to apply to, send an E-mail to jobs@hotel-room.bg</p>
</template>

<script>
import { useJobPositions } from '../store/jobPositions.js';
import { mapState } from 'pinia';

export default {
  setup() {
    const jobs = useJobPositions();
    return { jobs };
  },
  computed: {
    ...mapState(useJobPositions, ['openPostions']),
  },
  methods: {
    show() {
      console.log(this.openPostions)
    }
  }
}
</script>

<style  scoped>
.main-container {
  display: grid;
  grid-template-columns: 450px 450px;
  border: 1px solid red;
  justify-items: end;
  margin-left: 30px;
}

.job-position {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 250px 150px;
  border: 1px solid blue;
}

.position {
  margin-right: 30px;
  margin-left: 20px;
}
</style>
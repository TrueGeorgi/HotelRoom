<template>
  <div>
    <p>From</p>
    <div>
      <label for="monthFrom">Month</label>
      <select id="monthFrom" v-model="monthFrom">
        <option v-for="month in possibleMonths" :value="month.month">
          {{ month.month }}
        </option>
      </select>
    </div>
    <div>
      <label for="dateFrom">Date</label>
      <select id="dateFrom" v-model="dateFrom">
        <option value="" disabled>
          Select
        </option>
        <option v-for="num in getMonthsDates(monthFrom)" :value="num">
          {{ num }}
        </option>
      </select>
    </div>
    <p>To</p>
    <div>
      <label for="monthTo">Month</label>
      <select id="monthTo" v-model="monthTo">
        <option v-for="month in possibleMonths" :value="month.month">
          {{ month.month }}
        </option>
      </select>
    </div>
    <div>
      <label for="dateTo">Date</label>
      <select id="dateTo" v-model="dateTo">
        <option value="" disabled>
          Select
        </option>
        <option v-for="num in getMonthsDates(monthTo)" :value="num">
          {{ num }}
        </option>
      </select>
    </div>
    <button @click="calculateAndEmitPrice">Calculate days</button>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  props: {
    price: Number
  },
  data() {
    return {
      monthFrom: 'January',
      dateFrom: 1,
      monthTo: 'January',
      dateTo: 1,
      possibleMonths: [
        { month: 'January', days: 31 },
        { month: 'February', days: 28 },
        { month: 'March', days: 31 },
        { month: 'April', days: 30 },
        { month: 'May', days: 31 },
        { month: 'June', days: 30 },
        { month: 'July', days: 31 },
        { month: 'August', days: 31 },
        { month: 'September', days: 30 },
        { month: 'October', days: 31 },
        { month: 'November', days: 30 },
        { month: 'December', days: 31 }
      ],
    }
  },
  validations() {
    return {
      month: { required },
      date: { required },
    }
  },
  emits: ['priceObject'],
  methods: {
    getMonthsDates(pickedMonth) {
      const monthObject = this.possibleMonths.find(
        month => month.month === pickedMonth
      );
      return monthObject.days;
    },
    getMonthsIndex(selectedMonth) {
      for (let index = 0; index < this.possibleMonths.length; index++) {
        if (selectedMonth === this.possibleMonths[index].month) {
          return index
        }
      }
    },
    calculateAndEmitPrice() {
      const sendObject = {
        nights: this.nights,
        totalPrice: this.price * this.nights
      }
      this.$emit('priceObject', sendObject)
    }
  },
  computed: {
    nights() {
      const indexFrom = this.getMonthsIndex(this.monthFrom);
      const indexTo = this.getMonthsIndex(this.monthTo);

      let days = 0;

      if (indexFrom < indexTo) {
        for (let index = indexFrom + 1; index < indexTo; index++) {
          days += this.possibleMonths[index].days;
        }
        days += this.possibleMonths[indexFrom].days - this.dateFrom + 1;
        days += this.dateTo - 1;
      } else if (indexFrom > indexTo) {
        for (let index = indexFrom; index <= 11; index++) {
          days += this.possibleMonths[index].days;
        }
        for (let index = 0; index < indexTo; index++) {
          days += this.possibleMonths[index].days;
        }
        days = days - this.dateFrom + 1;
        days += this.dateTo;
      } else {
        days = this.dateTo - this.dateFrom;
      }
      console.log(days)
      return days;
    },
  }
}
</script>

<style scoped></style>
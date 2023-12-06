<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model.trim="email">
      <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-msg">*{{ error.$message }}</div>
      </div>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password">
      <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-msg">*{{ error.$message }}</div>
      </div>
    </div>
    <button>Log In</button>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  emits: ['loggedIn'],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations() {
    return {
      password: { required },
      email: { required, email },
    }
  },
  methods: {
    async onSubmit() {
      const isFilledOut = await this.v$.$validate();
      console.log('Is it all filled out?', isFilledOut, this.v$);
      this.logIn();
    },
    logIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$emit('loggedIn')
          console.log('Wohoooo')
          this.$router.push(`/successfulsubmition/Welcome ${auth.currentUser.displayName}`);
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>

<style scoped></style>
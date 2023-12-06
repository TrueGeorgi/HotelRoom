<template>
  <form @submit.prevent="onSubmit">
    <div>
      <div>
        <label for="firstName">*First Name</label>
        <input id="firstName" type="text" v-model.trim="firstName">
        <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
          <div class="error-msg">*{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label for="lastName">*Last Name</label>
        <input id="lastName" type="text" v-model.trim="lastName">
        <div class="input-errors" v-for="error of v$.lastName.$errors" :key="error.$uid">
          <div class="error-msg">*{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label for="email">*E-mail</label>
        <input id="email" type="email" v-model.trim="email">
        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
          <div class="error-msg">*{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <label for="password">*Password</label>
        <input id="password" type="password" v-model.trim="password">
        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
          <div class="error-msg">*{{ error.$message }}</div>
        </div>
      </div>
      <!-- <div class="error-msg" v-if="registrationExist">There is an already registered account with this E-mail</div> -->
      <button>Register</button>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
// import db from '../firebase'
// import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  emits: ['loggedIn'],
  data() {
    return {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      // registrationExist: false,
      // isSuccessfullyRegistered: false
    }
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      password: {
        required,
        minLength: minLength(6),
      },
      email: { required, email },
    }
  },
  methods: {
    async onSubmit() {
      const isFilledOut = await this.v$.$validate();
      console.log('Is it all filled out?', isFilledOut, this.v$)
      if (isFilledOut) {
        this.signUp();
      }
      // this.registerUser();
    },
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((credential) => {
          updateProfile(auth.currentUser, {
            displayName: `${this.firstName} ${this.lastName}`
          })
            .then(() => {
              this.$emit('loggedIn')
              this.$router.push('/successfulsubmition/Account successfully created');
            })
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
    // async registerUser() {
    //   const docSnap = await getDoc(doc(db, 'users', this.email.toLowerCase()))

    //   if (docSnap.exists()) {
    //     this.registrationExist = true;
    //   } else {
    //     this.createUser()
    //     this.registrationExist = false;
    //     this.$router.push('/successfulsubmition/Account successfully created');
    //   }
    // },
    // async createUser() {

    //   const newUser = {
    //     firstName: this.firstName,
    //     lastname: this.lastName,
    //     email: this.email,
    //     password: this.password,
    //     isprivateUser: this.isPrivateUser,
    //     bookedHotels: []
    //   }

    //   await setDoc(doc(db, 'users', this.email), newUser)
  }
}
</script>

<style scoped>
.error-msg {
  color: red;
}

.successful-registration {
  background-color: green;
  color: white;
}
</style>
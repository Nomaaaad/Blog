<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your BestBlogs Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <img class="icon" src="../assets/Icons/user-alt-light.svg" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <img class="icon" src="../assets/Icons/user-alt-light.svg" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <img class="icon" src="../assets/Icons/user-alt-light.svg" />
        </div>
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <img class="icon" src="../assets/Icons/envelope-regular.svg" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <img class="icon" src="../assets/Icons/lock-alt-solid.svg" />
        </div>
        <div class="error" v-if="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
// import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      error: null,
      errorMsg: '',
    };
  },
  methods: {
    async register() {
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.firstName !== '' &&
        this.lastName !== '' &&
        this.username !== ''
      ) {
        this.error = false;
        this.errorMsg = '';
        const auth = getAuth();
        const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);

        await setDoc(doc(db, 'users', createUser.user.uid), {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: 'Home' });
        return;
      }
      this.error = true;
      this.errorMsg = 'Please fill out all the fields!';
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>

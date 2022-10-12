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
// import { db } from '@/firebaseInit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseInit';
import { doc, setDoc, collection } from 'firebase/firestore';

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      error: '',
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
        const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const result = await createUser;
        const dataBase = collection(result, 'users');
        // await dataBase.set({
        //   firstName: this.firstName,
        //   lastName: this.lastName,
        //   userName: this.userName,
        //   email: this.email,
        // });
        await setDoc(doc(dataBase, 'cities', 'LA'), {
          name: 'Los Angeles',
          state: 'CA',
          country: 'USA',
        });
        this.$router.push({ name: Home });
        return;
      }
      this.error = true;
      this.errorMsg = 'Please fill out all the fields';
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

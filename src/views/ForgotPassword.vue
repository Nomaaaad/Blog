<template>
  <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal" :modalMessage="modalMessage" />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <img class="icon" src="../assets/Icons/envelope-regular.svg" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import Loading from '../components/Loading.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default {
  name: 'ForgotPassword',
  components: { Modal, Loading },
  data() {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.modalMessage = 'If your account exists, you will receive an email';
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>

import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue'
import Blogs from './views/Blogs.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Profile from './views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      name: "Blogs",
      path: "/blogs",
      component: Blogs,
      meta: {
        title: 'Blogs'
      }
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      name: "Register",
      path: "/register",
      component: Register,
      meta: {
        title: 'Register'
      }
    },
    {
      name: "ForgotPassword",
      path: "/forgot-password",
      component: ForgotPassword,
      meta: {
        title: 'Forgot Password'
      }
    },
    {
      name: "Profile",
      path: "/profile",
      component: Profile,
      meta: {
        title: 'Profile'
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | BestBlogs`;
  next();
});

export default router;

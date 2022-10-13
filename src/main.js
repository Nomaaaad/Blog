import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { getAuth, onAuthStateChanged } from "firebase/auth";


let app2;
const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!app2) {
    const app = createApp(App);
    app.use(router)
    app.use(store)
    app.mount('#app');
  }
})




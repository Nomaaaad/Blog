import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCMoRYPsfExQxPkKt2apBY0_uwV6kwE4g4",
  authDomain: "bestblogs-57f77.firebaseapp.com",
  projectId: "bestblogs-57f77",
  storageBucket: "bestblogs-57f77.appspot.com",
  messagingSenderId: "191693943278",
  appId: "1:191693943278:web:b5791c6172d075b9ec9eff"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export {
  db
}

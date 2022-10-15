import { db } from '../firebase/firebaseInit';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export default {
  toggleEditPost(context, payload) {
    context.commit('toggleEditPost', payload)
  },
  async getCurrentUser(context) {
    const auth = getAuth();
    const user = await auth.currentUser;
    const docRef = await doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    context.commit('setProfileInfo', docSnap.data());
    context.commit('setProfileInitials');

  },

  async updateUserSettings(context) {

    const auth = getAuth();
    const user = await auth.currentUser;
    const dataBase = doc(db, 'users', user.uid)

    await updateDoc(dataBase, {
      firstName: context.state.profileData.profileFirstName,
      lastName: context.state.profileData.profileLastName,
      username: context.state.profileData.profileUsername,
    })


    context.commit('setProfileInitials');
  }
};
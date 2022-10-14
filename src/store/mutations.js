export default {
  toggleEditPost(state, payload) {
    state.profileData.editPost = payload;
  },
  setProfileInfo(state, payload) {
    state.profileData.profileId = payload.id;
    state.profileData.profileEmail = payload.email;
    state.profileData.profileFirstName = payload.firstName;
    state.profileData.profileLastName = payload.lastName;
    state.profileData.profileUsername = payload.username;
  },
  setProfileInitials(state) {
    state.profileData.profileInitials =
      state.profileData.profileFirstName.match(/(\b\S)?/g).join('') +
      state.profileData.profileLastName.match(/(\b\S)?/g).join('');
  },
  updateUser(state, payload) {
    state.profileData.user = payload;
  }
}
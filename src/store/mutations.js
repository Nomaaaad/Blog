export default {
  toggleEditPost(state, payload) {
    state.editPost = payload;
  },
  setProfileInfo(state, payload) {
    state.profileId = payload.id;
    state.profileEmail = payload.email;
    state.profileFirstName = payload.firstName;
    state.profileLastName = payload.lastName;
    state.profileUsername = payload.username;
  },
  setProfileInitials(state) {
    state.profileInitials =
      state.profileFirstName.match(/(\b\S)?/g).join('') +
      state.profileLastName.match(/(\b\S)?/g).join('');
  },
  updateUser(state, payload) {
    state.user = payload;
  }
}
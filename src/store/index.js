import { createStore } from 'vuex';


import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

const store = createStore({
  state() {
    return {
      sampleBlogCards: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'November 1, 2022' },
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'November 1, 2022' },
        { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'November 1, 2022' },
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'November 1, 2022' },
      ],
      editPost: null,
      user: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUsername: null,
      profileId: null,
      profileInitials: null,
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})

export default store
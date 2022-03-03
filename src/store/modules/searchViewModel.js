import { getGitUsersApi } from '@/api/gitUserApi'

// const storage = {
//   fetch() {
//     const arr = []
//     if (localStorage.length > 0) {
//       for (var i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
//         }
//       }
//     }
//     return arr
//   },
// }

const state = {
  gitUsers: [],
  headerText: 'Search Gituser',
  searchText: '',
}
const mutations = {
  addOneItem(state, userItem) {
    var obj = { completed: false, item: userItem }
    localStorage.setItem(userItem, JSON.stringify(obj))
    state.userItems.push(obj)
  },
  removeItem(state, payload) {
    localStorage.removeItem(payload.userItem.item)
    state.userItems.splice(payload.index, 1)
  },
  toggleItem(state, payload) {
    state.userItems[payload.index].completed =
      !state.userItems[payload.index].completed
    localStorage.removeItem(payload.userItem.item)
    localStorage.setItem(payload.item, JSON.stringify(payload.userItem))
  },
  updateSearchText(state, text) {
    state.searchText = text
  },
  setGitUsers(state, data) {
    state.gitUsers = data
  },
}
const getters = {
  getHeaderText: (state) => {
    return state.headerText
  },
  getSearchText: (state) => {
    return state.searchText
  },
  getGitUsers: (state) => {
    return state.gitUsers
  },
}

const actions = {
  changeSearchText({ commit }, value) {
    commit('updateSearchText', value)
  },
  async getGitUsersAction({ commit }) {
    const response = await getGitUsersApi(state.searchText)
    commit('setGitUsers', response.data.items)
    console.log('get Git Users : ', state.gitUsers)

    // if (response.data.total_count === 0) {
    //   commit('fetchListCount', response.data.total_count)
    //   commit('emptyList')
    // } else {
    //   commit('fetchUserInfo', response.data.items)
    //   commit('fetchListCount', response.data.total_count)
    //   commit('nonEmptyList')
    // }
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}

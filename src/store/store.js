import Vuex from 'vuex'

const storage = {
  fetch() {
    const arr = []
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  },
}

import { createStore } from 'vuex'

export default createStore({
  getters: {
    getUserItems(state) {},
  },
  state: {
    headerText: 'Search Gituser',
    userItems: storage.fetch(),
  },
  mutations: {
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
  },
})
// export const store = new Vuex.Store({
//   getters: {
//     getUserItems(state) {},
//   },
//   state: {
//     headerText: 'Search Gituser',
//     userItems: storage.fetch(),
//   },
//   mutations: {
//     addOneItem(state, userItem) {
//       var obj = { completed: false, item: userItem }
//       localStorage.setItem(userItem, JSON.stringify(obj))
//       state.userItems.push(obj)
//     },
//     removeItem(state, payload) {
//       localStorage.removeItem(payload.userItem.item)
//       state.userItems.splice(payload.index, 1)
//     },
//     toggleItem(state, payload) {
//       state.userItems[payload.index].completed =
//         !state.userItems[payload.index].completed
//       localStorage.removeItem(payload.userItem.item)
//       localStorage.setItem(payload.item, JSON.stringify(payload.userItem))
//     },
//   },
// })

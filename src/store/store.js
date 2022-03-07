import { FormCheckboxPlugin } from 'bootstrap-vue'
import { ssrContextKey } from 'vue'
import { createStore } from 'vuex'
import searchViewModel from './modules/searchViewModel'

export default createStore({
  //안녕하세욤,,
  modules: {
    searchViewModel,
  },

  // getters: {
  //   getUserItems(state) {},
  // },
  // state: {
  //   userItems: storage.fetch(),
  // },
  // mutations: {},
  // actions: {},
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

<template>
  <div class="inputBox Shadow">
    <input
      v-model="searchText"
      type="text"
      @:keyup.enter="getGitUsers"
      @input="changeSearchText"
    />
    <span class="addContainer" @click="getGitUsers">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

function useSearchText() {
  const store = useStore()
  const searchText = computed(() => store.getters['getSearchText'])
  //const headerText = computed(() => store.state.searchViewModel.headerText)
  //const searchText = computed(() => store.getters['getSearchText'])
  const changeSearchText = (e) =>
    store.dispatch('changeSearchText', e.target.value)
  const getGitUsers = (e) => store.dispatch('getGitUsersAction')

  return {
    searchText,
    changeSearchText,
    getGitUsers,
  }
}
export default {
  emits: ['addUserItemEvent'],
  setup() {
    return { ...useSearchText() }
  },
  methods: {
    // addUserItem() {
    //   console.log(searchText)
    //   this.$store.commit('addOneItem', this.newUserItem)
    //   this.newUserItem = ''
    // },
    // searchUsers() {
    //   this.$store.commit('getGitUsers')
    // },
  },
}
</script>

<style scoped>
input {
  width: 80%;
  height: 80%;
}
input:focus {
  outline: none;
}
.inputBox {
  background: rgb(231, 155, 155);
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  background: rgb(231, 155, 155);
  border-style: none;
  font-size: 1.2rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>

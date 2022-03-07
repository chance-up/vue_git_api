<template>
  <div id="app">
    <h1>{{ headerText }}</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

function useHeaderText() {
  const store = useStore()
  //const headerText = computed(() => store.state.searchViewModel.headerText)
  const headerText = computed(() => store.getters['getHeaderText'])
  return {
    headerText,
  }
}
export default {
  setup() {
    return {
      ...useHeaderText(),
    }
  },
}
</script>

<style scoped>
h1 {
  color: #2f3852;
  font-weight: 900;
  font-family: 'Tangerine', serif;
  margin: 2.5rem 0 1.5rem;
}
</style>

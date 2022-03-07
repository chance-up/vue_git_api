<template>
  <div>
    <search-header />
    <search-input />
    <search-list />
  </div>
</template>

<script>
import SearchHeader from '@/views/search/components/SearchHeader'
import SearchInput from '@/views/search/components/SearchInput'
import SearchList from '@/views/search/components/SearchList'

export default {
  components: {
    SearchHeader,
    SearchInput,
    SearchList,
  },
  data() {
    return {
      userItems: [],
    }
  },
  created() {},
  methods: {
    deleteOneItem(userItem, index) {
      console.log(userItem)
      console.log('ccs')
      localStorage.removeItem(userItem)
      this.userItems.splice(index, 1)
    },
  },
}
</script>
<style></style>

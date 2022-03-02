<template>
  <div class="inputBox Shadow">
    <input v-model="newUserItem" type="text" @:keyup.enter="addUserItem" />
    <span class="addContainer" @click="addUserItem">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['addUserItemEvent'],
  data() {
    return {
      newUserItem: '',
    }
  },
  methods: {
    addUserItem() {
      this.$store.commit('addOneItem', this.newUserItem)
      this.newUserItem = ''
    },
  },
}
</script>

<style scoped>
input {
  width: 80%;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
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

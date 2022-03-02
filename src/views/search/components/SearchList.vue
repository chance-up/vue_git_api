<template>
  <div>
    <ul>
      <li v-for="(userItem, index) in userItems" :key="userItem" class="shadow">
        <i
          class="fas fa-check checkBtn"
          :class="{ checkBtnCompleted: userItem.completed }"
          @click="toggleComplete(userItem, index)"
        ></i>
        <span :class="{ textCompleted: userItem.completed }">{{
          userItem.item
        }}</span>

        <span class="removeBtn" @click="removeUser(userItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['deleteUserItemEvent'],
  computed: {
    userItems() {
      return this.$store.getters.getUserItems
    },
  },
  mounted() {
    this.$store.dispatch('loadGitUsers')
  },
  methods: {
    removeUser(userItem, index) {
      this.$store.commit('removeItem', { userItem, index })
    },
    toggleComplete(userItem, index) {
      this.$store.commit('toggleItem', { userItem, index })
    },
  },
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>

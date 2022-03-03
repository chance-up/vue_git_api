<template>
  <div>
    <ul>
      <li v-for="(gitUser, index) in gitUsers" :key="gitUser" class="shadow">
        <!-- <i
          class="fas fa-check checkBtn"
          :class="{ checkBtnCompleted: userItem.completed }"
          @click="toggleComplete(userItem, index)"
        ></i> -->
        <span>{{ gitUser.id }}</span>

        <span class="removeBtn" @click="removeUser(userItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

function useValue() {
  const store = useStore()
  const gitUsers = computed(() => store.getters['getGitUsers'])

  return {
    gitUsers,
  }
}
export default {
  emits: ['deleteUserItemEvent'],
  setup() {
    return {
      ...useValue(),
    }
  },
  computed: {
    // userItems() {
    //   //return this.$store.getters.getUserItems
    // },
  },
  mounted() {
    //this.$store.dispatch('getGitUsers')
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

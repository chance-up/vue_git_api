<template>
  <div id="myTab">
    <input v-model="message">
    <p>메시지: {{ message }}</p>

    <input v-html="rawHtml">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml" /></p>

    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <img :src="vueLogo">

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h1>카운터 : {{ num }}</h1>
  </div>
</template>

<script>
export default {
  // ES6문법
  el: '#myTab',
  data: function () {
    return {
      message: 'Some Message',
      rawHtml: 'tttttt',
      seen: false,
      vueLogo: 'https://picsum.photos/id/237/200/300',
      num: 0,
    }
  },
  methods: {
    increment: function () {
      this.num++
    },
    decrement: function () {
      this.num--
    },
  },
}
</script>

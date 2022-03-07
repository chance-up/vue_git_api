<template>
  <div>
    <h1>111ßs</h1>
  </div>
</template>

<script>
export default {
  el: '#myHome',
  data: function () {
    return {
      message: 'helloWorld',
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {
    console.log('mounted')
  },
  updated: function () {
    console.log('updated')
  },
}
</script>

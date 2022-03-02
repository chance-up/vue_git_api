<template>
  <body>
    <div id="app">
      <div id="nav">
        <router-link to="/search"> Search </router-link>
        <router-link to="/"> Home </router-link>
        <router-link to="/about"> About </router-link>
        <router-link to="/comp"> Comp </router-link>
      </div>
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

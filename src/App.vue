<template>
  <div id="app" class="container">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container,.router-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>

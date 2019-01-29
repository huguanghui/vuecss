<template>
  <div class="container">
    <div class="main">Main</div>
    <div class="left">Left</div>
    <div class="right">Right</div>
  </div>
</template>

<style>
.container {
  display: flex;
  min-height: 130px;
}
.main {
  flex-grow: 1;
  background-color: blue;
}
.left {
  order: -1;
  background-color: green;
  flex-basis: 200px;
}
.right {
  background-color: red;
  flex-basis: 300px;
}
</style>

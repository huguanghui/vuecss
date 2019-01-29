<template>
  <div class="container">
    <div class="main">Main</div>
    <div class="left">Left</div>
    <div class="right">Right</div>
  </div>
</template>

<style>
.container {
  position: relative;
}
.main,
.left,
.right {
  top: 0;
  height: 130px;
}
.main {
  margin: 0 300px 0 200px;
  background-color: blue;
}
.right {
  position: absolute;
  width: 300px;
  right: 0;
  background-color: red;
}
.left {
  position: absolute;
  width: 200px;
  background-color: green;
  left: 0;
}
</style>

<template>
  <div>
    <div class="header">
      <h4>header</h4>
    </div>
    <div class="container">
      <div class="middle">
        <h4>middle</h4>
        <p>00000000000000000000000</p>
      </div>
      <div class="left">
        <h4>left</h4>
        <p>11111111111111111111111</p>
      </div>
      <div class="right">
        <h4>right</h4>
        <p>22222222222222222222222</p>
      </div>
    </div>
    <div class="footer">
      <h4>footer</h4>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  min-width: 700px;
}
.header,
.footer {
  border: 1px solid #333;
  background: #aaa;
  text-align: center;
}
.left,
.middle,
.right {
  position: relative;
  float: left;
  min-height: 130px;
}
.container {
  padding: 0 220px 0 200px;
  overflow: hidden;
}
.left {
  margin-left: -100%;
  left: -200px;
  width: 200px;
  background: red;
}
.right {
  margin-left: -220px;
  left: -220px;
  width: 220px;
  background: green;
}
.middle {
  width: 100%;
  background: blue;
  word-break: break-all;
}
.footer {
  clear: both;
}
</style>

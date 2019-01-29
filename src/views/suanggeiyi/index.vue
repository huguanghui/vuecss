<template>
  <div>
    <div class="header">
      <h4>header</h4>
    </div>
    <div class="main">
      <div class="main-inner">
        <h4>main</h4>
        <p>
          HHHHHHHHHHHHHHHHHHH
          hhhhhhhhhhhhhhhhhhhh
          HHHHHHHHHHHHHHHHHHHH
          hhhhhhhhhhhhhhhhhhhh
        </p>
      </div>
    </div>
    <div class="sub">
      <h4>sub</h4>
      <p>
        00000000000000000000
        ooooooooooooooooooo
        0000000000000000000
        0000000999999999999
      </p>
    </div>
    <div class="extra">
      <h4>extra</h4>
      <p>
        22222222222222222
        22222222222222222
      </p>
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
.fonter {
  border: 1px solid #333;
  background: #aaa;
  text-align: center;
}
.sub,
.main,
.extra {
  float: left;
  min-height: 130px;
}
.sub {
  margin-left: -100%;
  width: 200px;
  background: red;
}
.extra {
  margin-left: -220px;
  width: 220px;
  background: blue;
}
.main {
  width: 100%;
}
.main-inner {
  margin-left: 200px;
  margin-right: 220px;
  min-height: 130px;
  background: green;
  word-break: break-all;
}
.footer {
  clear: both;
}
</style>

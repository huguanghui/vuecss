<template>
  <div class="box">
    <span class="item">Hello</span>
    <span class="item">Test</span>
  </div>
</template>

<style>
.box {
  display: flex;
  justify-content: space-between;
}
.item:nth-child(2) {
  align-self: flex-end;
}
</style>

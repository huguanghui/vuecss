<template>
    <div>
        <div class="content-box">Content box</div>
        <br>
        <div class="border-box">Border box</div>
    </div>
</template>

<style>
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}
.content-box {
    box-sizing: content-box;
}
.border-box {
    box-sizing: border-box;
}
</style>

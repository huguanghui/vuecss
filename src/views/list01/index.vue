<template>
  <div>
    <nav class="list1">
      <ul>
        <li><a href="#">Alternative</a></li>
        <li><a href="#">Country</a></li>
        <li><a href="#">Jazz</a></li>
        <li><a href="#">Rock</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
/* 去掉内边距和外边距 */
* {
  margin: 0;
  padding: 0;
}
/* 设置菜单的大小和位置 */
nav {
  margin: 50px;
  width: 150px;
}
/* 给菜单加上边框 */
.list ul {
  border: 1px solid #f00;
  border-radius: 3px;
  padding: 5px 10px 3px;
}
/* 去掉项目符号并为链接添加间距 */
.list ul {
  list-style-type: none;
  padding: 3px 10px;
}
/* "非首位子元素"选择符 */
.list li + li {
  border-top: 1px solid #f00;
}
/* 为链接添加样式 */
.list a {
  text-decoration: none;
  font: 20px Exo, helvetica, arial, sans-serif;
  font-weight: 400;
  color: #000;
  background: #ffed53;
}
.list a:hover {
  color: #069;
}
</style>

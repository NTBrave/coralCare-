<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  /* position: absolute; */
  /* right: 0; */
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3) inset; */
  /* background-color: red; */
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  /* -webkit-box-shadow:inset 006 pxrgba(0,0,0,0.5); */
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.1);
}
</style>

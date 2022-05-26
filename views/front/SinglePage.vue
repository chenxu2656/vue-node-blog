<!-- 单页应用 -->
<template>
  <el-container>
    <el-header>
      <navHeader />
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>
<script setup>
import navHeader from "../../src/components/homePage/Header.vue";
</script>
<style lang="scss" scoped>
.el-header{
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
}
.el-main {
  background-color: $back_color;
  padding: 0px;
  margin-top: 60px;
  height: calc(100vh - 60px);
}
</style>
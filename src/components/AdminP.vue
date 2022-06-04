<template>
  <el-container>
    <el-header>
      <div id="title" class="topbarCon">XCCIT</div>
      <div id="name" class="topbarCon">btfblog 后台管理系统</div>
    </el-header>
    <el-container id="con">
      <el-aside class="el-aside"> <side-menu-bar  /></el-aside>
      <el-main class="el-main">
        <router-view></router-view
      ></el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script setup>
import SideMenuBar from "../components/admin/SideMenuBar.vue";
// import { useRoute } from 'vue-router'
</script>
<style lang="scss" scoped>

.el-header {
  border-bottom: 1px solid gainsboro;
  display: flex;
  height: 60px;
  background-color: $height_color;
  color: white;
  justify-content: space-between;
  .topbarCon {
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
  }
}
#con{
  height: calc(100vh - 120px);
  .el-aside {
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #dddfe5;
  &::-webkit-scrollbar{
    display: none;
  }
}
}

.el-footer {
  border-top: 1px solid #dddfe5;
  bottom: 0px;
  height: 60px;
}

</style>
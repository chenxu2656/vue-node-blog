<template>
  <el-container>
    <el-header>
      <div id="title" class="topbarCon">XCCIT</div>
      <div id="name" class="topbarCon">btfblog 后台管理系统</div>
    </el-header>
    <el-container>
      <el-aside class="el-aside"> <side-menu-bar /></el-aside>
      <el-main class="el-main">
        <router-view></router-view
      ></el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script setup>
import SideMenuBar from "../components/admin/SideMenuBar.vue";
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
.el-aside {
  width: 200px;
}
.el-footer {
  bottom: 0px;
  height: 100px;
}

</style>
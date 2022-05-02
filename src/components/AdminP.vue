<template>
  <el-container>
    <el-header> 
      <div id="title" class="topbarCon">XCCIT</div>
      <div id="name" class="topbarCon">btfblog 后台管理系统</div>
    </el-header>
    <el-main>
      <side-menu-bar />
      <div id="content">
        <router-view></router-view>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script setup>
import SideMenuBar from "../components/admin/SideMenuBar.vue";
</script>
<style lang="scss" scoped>
.el-main {
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
}
.el-header {
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  .topbarCon{
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
  }
}
.el-footer{
  bottom: 0px;
  height: 100px;
}
#content {
  margin: 0px 20px 0px 20px;
  flex-grow: 1;
}
</style>
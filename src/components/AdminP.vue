<template>
  <el-container>
    <el-header> header </el-header>
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
}
#content {
  margin: 0px 20px 0px 20px;
  flex-grow: 1;
}
</style>
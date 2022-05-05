<template>
  <!-- 为了解决刷新页面，路由回到默认active的item, default active 写成一个变量 -->
  <el-menu
    mode="horizontal"
    :default-active="activePath"
    menu-trigger="hover"
    :router="true"
  >
    <el-menu-item index="home" route="/">Home</el-menu-item>
    <!-- <el-sub-menu index="tag">
      <template #title>Category</template>
      <el-menu-item index="front-end" key="">JavaScript</el-menu-item>
      <el-menu-item index="back-end" key="">Node</el-menu-item>
    </el-sub-menu> -->
    <el-menu-item index="tags">Tags</el-menu-item>
    <el-menu-item index="About">About</el-menu-item>
    <el-menu-item index="contact">Contact</el-menu-item>
    <!-- <el-menu-item index="Admin">Admin</el-menu-item> -->
  </el-menu>
</template>
<script setup>
import {ref} from 'vue'
// import { useRouter } from 'vue-router'
const activePath = ref('home')

</script>
<style lang="scss" scoped>
    .el-menu {
      width: 1100px;
      padding: 0px;
      margin: auto;
      border: none;
      box-sizing: border-box;
      justify-content: flex-end;
      .el-sub-menu{
        font-size: $h3_size;
        font-weight: $font_weight_middle;
      }
      .el-menu-item{
        font-size: $h3_size;
        font-weight: $font_weight_middle;
        is.active{
          border-bottom: none;
        }
      }
      
    }
</style>
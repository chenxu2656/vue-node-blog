<template>
  <!-- 为了解决刷新页面，路由回到默认active的item, default active 写成一个变量 -->
  <el-menu
    mode="horizontal"
    :default-active="activePath"
    menu-trigger="hover"
    :router="true"
    text-color="#3490de"
    active-text-color="#f07b3f"
  >
    <el-menu-item index="home" route="/">Home</el-menu-item>
    <el-menu-item index="todo" route="/sp/todo">TodoList</el-menu-item>
    <el-menu-item index="about" route="/about">About</el-menu-item>
    <el-menu-item index="contact" route="/contact">Contact</el-menu-item>
    <!-- <el-menu-item index="Admin">Admin</el-menu-item> -->
  </el-menu>
</template>
<script setup>
import {ref} from 'vue'
import { useRoute } from "vue-router";
const activePath = ref('home')
const url = useRoute().path
console.log(url.split('/')[1]);
if(url.split('/')[1] == 'sp') {
  activePath.value = url.split('/')[2]
} else {
  activePath.value = url.split('/')[1] || 'home';
}


</script>
<style lang="scss" scoped>
    .el-menu {
      width: 1200px;
      padding: 0px;
      margin: auto;
      border: none;
      box-sizing: border-box;
      position: static;
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
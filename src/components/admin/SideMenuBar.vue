<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="home" @click="routerPush(router,'/admin')">
      <el-icon><icon-menu /></el-icon>
      <template #title >总览</template>
    </el-menu-item>
    <el-sub-menu index="article">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>博客管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="createArticle" @click="routerPush(router,'/admin/createBlog')">创建博客 </el-menu-item>
        <el-menu-item index="articleManage" @click="routerPush(router,'/admin/blogList')">博客管理</el-menu-item>
        <el-menu-item index="tagsManagement" @click="routerPush(router,'/admin/tags')">标签管理</el-menu-item>
        <el-menu-item index="categoryManagement" @click="routerPush(router,'/admin/folder')">文件夹管理</el-menu-item>
        <el-menu-item index="draft" @click="routerPush(router,'/admin/draft')">草稿箱</el-menu-item>
        <el-menu-item index="trash" @click="routerPush(router,'/admin/trash')">垃圾箱</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <!-- <el-menu-item index="userManagement">
      <el-icon><icon-menu /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item> -->
    <el-menu-item index="me" >
      <el-icon><icon-menu /></el-icon>
      <template #title>个人中心</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import {routerPush} from '../../js/index'
import {
  Menu as IconMenu
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

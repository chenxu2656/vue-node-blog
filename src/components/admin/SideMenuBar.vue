<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item index="home" @click="routerPush(router, '/admin')">
      <el-icon><icon-menu /></el-icon>
      <template #title>总览</template>
    </el-menu-item>
    <el-sub-menu index="article">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>博客管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          index="createBlog"
          @click="routerPush(router, '/admin/createBlog')"
          >创建博客
        </el-menu-item>
        <el-menu-item
          index="blogList"
          @click="routerPush(router, '/admin/blogList')"
          >博客管理</el-menu-item
        >
        <el-menu-item
          index="folder"
          @click="routerPush(router, '/admin/folder')"
          >文件夹管理</el-menu-item
        >
        <el-menu-item
          index="tags"
          @click="routerPush(router, '/admin/tags')"
          >标签管理</el-menu-item
        >
        <el-menu-item index="draft" @click="routerPush(router, '/admin/draft')"
          >草稿箱</el-menu-item
        >
        <el-menu-item index="trash" @click="routerPush(router, '/admin/trash')"
          >垃圾箱</el-menu-item
        >
        <el-menu-item
          index="qiniuFile"
          @click="routerPush(router, '/admin/qiniuFile')"
          >七牛云</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="frontDesk" @click="routerPush(router, '/admin/frontDesk')">
      <el-icon><icon-menu /></el-icon>
      <template #title>前台配置</template>
    </el-menu-item>
    <el-sub-menu index="sysSetting">
      <template #title>
        <el-icon><setting color="red"/></el-icon>
        <span>系统设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          index="qiniu"
          @click="routerPush(router, '/admin/qiniu')"
          >七牛云设置
        </el-menu-item>
        <el-menu-item index="info" @click="routerPush(router, '/admin/info')">
      <template #title>个人信息</template>
    </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { routerPush } from "../../js/index";
import { Menu as IconMenu, Setting} from "@element-plus/icons-vue";
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute()
const isCollapse = ref(false);
const activePath = ref("home");
activePath.value = route.path.split('/admin/')[1] || 'home'
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-sub-menu {
  height: auto;
}
</style>

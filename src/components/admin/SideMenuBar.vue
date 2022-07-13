<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @select="handleUpdate"
  >
    <el-menu-item index="home" @click="routerPush(router, '/admin')">
      <el-icon><img src="../../../public/images/icons/dashboard.svg" alt=""></el-icon>
      <template #title>后台总览</template>
    </el-menu-item>
    <el-sub-menu index="article">
      <template #title>
        <el-icon><img src="../../../public/images/icons/blog.svg" alt=""></el-icon>
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
        <!-- <el-menu-item
          index="qiniuFile"
          @click="routerPush(router, '/admin/qiniuFile')"
          >七牛云</el-menu-item
        > -->
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="frontDesk" @click="routerPush(router, '/admin/frontDesk')">
      <el-icon><img src="../../../public/images/icons/frontend.svg" alt=""></el-icon>
      <template #title>前台配置</template>
    </el-menu-item>
    <el-menu-item index="sysSetting" @click="routerPush(router, '/admin/sys')">
      <el-icon><img src="../../../public/images/icons/setting.svg" alt=""></el-icon>
      <template #title>系统设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { routerPush } from "../../js/index";
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute()
const isCollapse = ref(false);
const activePath = ref("home");
activePath.value = route.path.split('/admin/')[1] || 'home'
const handleUpdate = (index)=>{
  activePath.value = index
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-sub-menu {
  height: auto;
  
}
.el-icon{
    img{
      width: 20px;
      padding-right: 10px;
    }
  }

</style>

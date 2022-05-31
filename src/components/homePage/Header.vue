<template>
  <!-- 为了解决刷新页面，路由回到默认active的item, default active 写成一个变量 -->
  <el-menu mode="horizontal" :default-active="activePath" menu-trigger="hover" :router="true" text-color="#3490de"
    active-text-color="#f07b3f">
    <el-menu-item index="home" route="/">Home</el-menu-item>
    <el-menu-item v-for="item in itemList" :index="item.index" :key="item._id" @click="customRouter(item.index,item.type)">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute,useRouter } from "vue-router";
import apiRequest from '../../../http/index'
// 获取当前页面的路有来确定 actived header item
const activePath = ref('home')
const url = useRoute().path
const router = useRouter()
const itemList = ref()

const customRouter = (index,type) =>{
  router.push({
    path: `/custom/${type}/${index}`
  })
}
/**
 * @description 获取当前active的index信息
 * @param {*} url 
 * @return index
 * @default 'home'
 */
const activeUrl = (url) => {
  if (url.split('/')[1] == 'sp') {
    return url.split('/')[2]
  } else {
    return url.split('/')[1] || 'home';
  }
}
const handleGetTagList = () => {
    apiRequest({
        url: '/api/navItem/'
    }).then((resp) => {
        itemList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
onMounted(() => {
  activePath.value = activeUrl(url);
  handleGetTagList();
})

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

  .el-sub-menu {
    font-size: $h3_size;
    font-weight: $font_weight_middle;
  }

  .el-menu-item {
    font-size: $h3_size;
    font-weight: $font_weight_middle;

    is.active {
      border-bottom: none;
    }
  }

}
</style>
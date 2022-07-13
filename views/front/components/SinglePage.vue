<!-- 单页应用 -->
<template>
  <el-card class="box-card category" id="blogBlock">
    <v-md-preview :text="blogDetail.content" id="blogCon"></v-md-preview>
  </el-card>
</template>
<script setup>
import { onMounted, ref } from "vue-demi";
import apiRequest from '../../../http/index'
import { useRoute } from "vue-router";
const blogDetail = ref({});
const urlSplit = useRoute().path.split('/')
/**
 * @description 获取所有自定义导航项目
 */
const handleGetTagList = async () => {
  return await apiRequest({
    url: '/api/navItem/'
  })
}
/**
 * @description 根据博客id获取到文章具体内容
 * @param {*} blogId 博客id
 */
const handleBlogDetail = async (blogId) => {
  return apiRequest({
    url: `/api/article/${blogId}`,
  })
};
/**
 * @description 根据路由获取当前房间文章的id 用当前index来匹配
 */
const handleGetBlogId = (itemList) => {
  if (urlSplit[1] == 'custom') {
    return itemList[itemList.findIndex(item => item.index === urlSplit[3])].dataSourceId
  } else if (urlSplit[1] == 'blog') {
    return urlSplit[2]
  }
}
onMounted(async () => {
  const itemList  = await handleGetTagList();
  const blogId = handleGetBlogId(itemList)
  blogDetail.value = await handleBlogDetail(blogId);
});
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
}
.el-card {
  width: 100%;
  margin: auto;
}
</style>
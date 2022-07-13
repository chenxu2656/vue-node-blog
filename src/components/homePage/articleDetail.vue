<template>
  <el-card class="box-card category">
    <div id="blogTitle">
      <div class="title">{{ blogDetail.title }}</div>
      <div class="otherInfo">
        <div class="subtitle">{{ parseTimeStamp(blogDetail.ctime) }}</div>
      </div>
    </div>
    <el-divider></el-divider>
  </el-card>
  <el-card class="box-card category" id="blogBlock">
    <!-- <div >
      {{ blogDetail.content }}
    </div> -->
    <v-md-preview :text="blogDetail.content" id="blogCon"></v-md-preview>
  </el-card>
</template>
<style lang="scss" scoped>
.el-card{
  width: 100%;
}
#blogTitle {
  width: 100%;
  .title {
    text-align: left;
    font-size: 25px;
  }
  .otherInfo {
    display: flex;
    padding-top: 10px;
    justify-content: flex-end;
    .subtitle {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
.el-divider {
  margin-top: 5px;
  margin-bottom: 0px;
}
#blogBlock {
  margin-top: 10px;
  #blogCon {
    text-align: justify;
  }
}
</style>
<script setup>
import { onMounted, ref } from "vue-demi";
import { useRoute } from "vue-router";
import { parseTimeStamp } from "../../js/index";
import apiRequest from '../../../http/index'
const urlSplit  = useRoute().path.split('/')
const blogDetail = ref({});
/**
 * @description 获取所有自定义导航项目
 */
const handleGetTagList = async () => {
  return await apiRequest({
    url: '/api/navItem/'
  })
}
/**
 * @description 根据路由获取当前房间文章的id 用当前index来匹配
 */
const handleGetBlogId = (itemList)=>{
  if (urlSplit[1] == 'custom') {
    return itemList[itemList.findIndex(item=> item.index === urlSplit[3])].dataSourceId
  } else if (urlSplit[1] == 'blog'){
    return urlSplit[2]
  }
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
onMounted(async () => {
  const itemList = await handleGetTagList();
  const blogId = handleGetBlogId(itemList);
  blogDetail.value = await handleBlogDetail(blogId);
});
</script>

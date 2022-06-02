<!-- 单页应用 -->
<template>
  <el-container>
    <el-header>
      <navHeader />
    </el-header>
    <el-main>
  <el-card class="box-card category" id="blogBlock">
    <!-- <div >
      {{ blogDetail.content }}
    </div> -->
    <v-md-preview :text="blogDetail.content" id="blogCon"></v-md-preview>
  </el-card>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>
<script setup>
import navHeader from "../../src/components/homePage/Header.vue";
import axios from "axios";
import { onMounted, ref } from "vue-demi";
import apiRequest from '../../http/index'
import { useRoute } from "vue-router";
let blogId = ""
const itemList = ref([])
const urlSplit  = useRoute().path.split('/')
const handleGetTagList = async() => {
    await apiRequest({
        url: '/api/navItem/'
    }).then((resp) => {
        itemList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
let blogDetail = ref({});
let getCon = async () => {
  let resp = await axios({
    url: `/api/article/${blogId}`,
    method: "get",
  });
  if (resp) {
    blogDetail.value = resp.data;
  }
};
const handleGetBlogId = ()=>{
  if (urlSplit[1] == 'custom') {
    return itemList.value[itemList.value.findIndex(item=> item.index === urlSplit[3])].dataSourceId
  } else if (urlSplit[1] == 'blog'){
    console.log(urlSplit[3]);
    return urlSplit[2]
  }
}
onMounted(async () => {
  await handleGetTagList();
  blogId = handleGetBlogId()
  getCon();
  
});
</script>
<style lang="scss" scoped>
.el-header{
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
}
.el-main {
  background-color: $back_color;
  padding: 0px;
  width: 100%;
  margin-top: 60px;
  height: calc(100vh - 120px);
  border: none;
  .el-card{
width: 100%;
  max-width: 1400px;
  margin: auto;
  margin-top: 20px;
  }
}

</style>
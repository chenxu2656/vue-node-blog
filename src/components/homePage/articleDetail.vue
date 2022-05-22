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
import axios from "axios";
import { onMounted, ref } from "vue-demi";
import { useRoute } from "vue-router";
import { parseTimeStamp } from "../../js/index";
let blogId = ""
const url = useRoute().path;
console.log(`url:${url}`);
if(url === '/about') {
  // 调出关于我的页面
  blogId = '626f7b3d5e85154ee901d305'
} else if(url === '/contact') {
// 调出与我联系
  blogId = '626f7b3d5e85154ee901d305'
} 
else if(url.split("blog/")[1]) {
  blogId = url.split("blog/")[1];
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
onMounted(() => {
  getCon();
});
</script>

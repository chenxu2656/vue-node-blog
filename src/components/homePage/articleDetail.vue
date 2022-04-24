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
#blogTitle {
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
const url = useRoute().path;
const blogId = url.split("blog/")[1];
let blogDetail = ref({});
let getCon = async () => {
  let resp = await axios({
    url: `/api/article/${blogId}`,
    method: "get",
  });
  if (resp) {
    blogDetail.value = resp.data;
    console.log(blogDetail.value);
  }
};
onMounted(() => {
  getCon();
});
</script>

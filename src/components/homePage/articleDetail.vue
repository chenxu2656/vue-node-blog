<template>
  <div id="exportPdf" @click="exportPdf(pdfDom)">导出pdf</div>
  <div id="con" ref="pdfDom">
  <el-card class="box-card category" id="articelDetail">
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
  </div>

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
import exportPdf from 'export-dom2pdf'
const url = useRoute().path;
const blogId = url.split("blog/")[1];
let blogDetail = ref({});
const pdfDom = ref()
let getCon = async () => {
  let resp = await axios({
    url: `/api/article/${blogId}`,
    method: "get",
  });
  if (resp) {
    blogDetail.value = resp.data;
  }
}
onMounted(() => {
  getCon();
  console.log(pdfDom.value);
});
// https://www.cnblogs.com/taohuaya/p/10805585.html#%E6%96%B9%E5%BC%8F%E4%BA%8C:window.print%E6%96%B9%E6%B3%95
</script>

<template>
  <el-card class="box-card" id="createblog">
    <div id="header">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="blogInfo"
      >
        <el-form-item
          label="Title"
          id="title"
          class="lable"
          style="color: #000000"
        >
          <el-input style="width: 460px" v-model="blogInfo.title" />
        </el-form-item>
        <el-form-item label="Category">
          <el-select
            v-model="blogInfo.folders"
            multiple
            placeholder="Select"
            style="width: 460px"
          >
            <el-option
              v-for="item in category"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Tags">
          <el-select
            v-model="blogInfo.tags"
            multiple
            placeholder="Select"
            style="width: 460px"
          >
            <el-option
              v-for="item in tags"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Images">
          <input type="file" name="" id="" @change="selectImg">
            <img :src="blobFile" alt="">
            <el-button class="ml-3" type="success" @click="uploadImg(qiniuToken)">
              upload
            </el-button>
            <span>{{uploadPresent}}</span>
            <span>{{imgUrl}}</span>
        </el-form-item>
        <div id="editor">
          <v-md-editor
            v-model="blogInfo.content"
            height="800px"
            :disabled-menus="[]"
          >
          </v-md-editor>
        </div>
      </el-form>
    </div>
    <!-- <div id="editor">
      <v-md-editor v-model="text" height="800px" :disabled-menus="[]">
      </v-md-editor>
    </div> -->
    <el-button type="primary" @click="postBlog()">创建博客</el-button>
    <el-button type="primary">保存到草稿</el-button>
  </el-card>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import {startUpload,url} from '../../../js/bucket/qiniu'
const blogInfo = reactive({
  title: "",
  folders: [],
  tags: [],
  content: "",
  ctime: Date.now(),
  imgPath: "http://dummyimage.com/120x90",
});
// 判断是编辑还是新建
const router = useRoute();
// 文件id
const blogId = router.path.split("createBlog/")[1];
// 获取七牛云token
let qiniuToken = ref()
// 文件转成blob格式，用来预览
const blobFile = ref()
// 上传至七牛云文件
const files = ref()
// 文件上传百分比
const uploadPresent = ref()
// 返回url
const imgUrl = ref()
const labelPosition = ref("top");
// 文件夹
const category = ["前端", "后端", "数据库"];
// 标签
const tags = ["javascript", "mongodb", "nodejs"];
// 如果是修改，调用这个api
const getCon = async (blogId) => {
  let resp = await axios({
    url: `/api/article/${blogId}`,
    method: "get",
  });
  if (resp) {
    blogInfo.title = resp.data.title;
    blogInfo.content = resp.data.content;
    blogInfo.folders = resp.data.folders;
    blogInfo.tags = resp.data.tags;
    console.log(resp.data);
  }
};
// 创建博客
const postBlog = async () => {
  try {
    let resp = await axios({
      url: "/api/article/",
      method: "post",
      data: blogInfo,
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (resp.data) {
      console.log(resp);
    }
  } catch (err) {
    console.log(`err: ${err}`);
  }
};
// 获取七牛云token
const getToken = async()=>{
  try {
  let data = await axios({
    url: '/api/token/qiniu',
    method: "post",
    headers: {
        token: localStorage.getItem("token"),
      },
  })
  if (data) {
    return data
  }
  } catch(err){
    return err
  }
}
// 选择文件时触发， 一是转成blob并预览，同时获取到上传的文件
const selectImg = (e)=>{
  files.value = e.target.files[0]
  let BlobFormat = URL.createObjectURL(files.value)
  blobFile.value = BlobFormat
}
// 上传七牛云，并返回url
const uploadImg = async(token) =>{
  let tokenParse = token.data.token
  const observable = startUpload(files.value,`${Date.now()}_${files.value.name}`,tokenParse)
  observable.subscribe({
    next(res){
      uploadPresent.value = res.total.percent
      console.dir(res);
    },
    error(err){
      console.dir(err);
    },
    complete(res){
      console.dir(res);
      imgUrl.value = `${url}${res.key}`
    }
  })
}
onMounted(async () => {
  if (blogId) {
    getCon(blogId);
  }
  qiniuToken.value = await getToken()
});
</script>
<style scoped lang="scss">
.el-card {
  margin-top: 10px;
  #editor {
    margin: auto;
    min-height: 1000px;
    .el-form-item__label {
      font-size: 20px;
      font-weight: 800;
    }
  }
}
</style>
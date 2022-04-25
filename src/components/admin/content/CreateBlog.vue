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
        <el-form-item label="Images"> </el-form-item>
        <div id="editor">
          <v-md-editor v-model="blogInfo.content" height="800px" :disabled-menus="[]">
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
const blogInfo = reactive({
  title: "",
  folders: [],
  tags: [],
  content: "",
  ctime: Date.now(),
  imgPath: "http://dummyimage.com/120x90"
});
// 判断是编辑还是新建
const router = useRoute()
const blogId = router.path.split('createBlog/')[1]
let getCon = async (blogId) => {
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
const labelPosition = ref("top");

const category = ["前端", "后端", "数据库"];
const tags = ["javascript", "mongodb", "nodejs"];

const postBlog = async ()=>{
    try{
      let resp = await axios({
          url: "/api/article/",
          method: "post",
          data: blogInfo,
          headers: {
            token: localStorage.getItem('token')
          }
      })
      if (resp.data) {
         console.log(resp); 
      }
    } catch (err) {
      console.log(blogInfo);
      console.log(`err: ${err}`);
    }
  
}
onMounted(()=>{
  if(blogId){
    getCon(blogId)
  }
})
// todo list
// 上传文件到服务器并返回url，在此选用一个 图床吧
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
<template>
  <el-card class="box-card" id="createblog">
    <div id="header">
      <el-form :label-position="labelPosition" label-width="100px" :model="blogInfo">
        <el-form-item label="Title" id="title" class="lable" style="color: #000000">
          <el-input style="width: 100%" v-model="blogInfo.title" />
        </el-form-item>
        <div id="tags">
          <el-form-item label="Category">
            <el-select v-model="optionInfo.folders" multiple placeholder="Select" style="width: 100%"
              @change="transToFolderIdList(categoryList, optionInfo.folders)">
              <el-option v-for="item in categoryList" :key="item._id" :label="item.folderName"
                :value="item.folderName" />
            </el-select>
          </el-form-item>
          <el-form-item label="Tags">
            <el-select v-model="optionInfo.tags" multiple placeholder="Select" style="width: 100%"
              @change="transToTagIdList(tagList, optionInfo.tags)">
              <el-option v-for="item in tagList" :key="item._id" :label="item.tagName" :value="item.tagName" />
            </el-select>
          </el-form-item>
        </div>
        <el-row class="upload" :gutter="20">
          <el-col :span="8">
            <div id="imgUpload">
              <el-form-item label="Images (封面图片)">
                <el-upload class="upload-demo" drag action="#"
                  :http-request="uploadCoverImage" :file-list="fileList" multiple>
                  <img :src="blogInfo.imgPath" alt="" id="imgView" v-if="blogInfo.imgPath" />
                  <img :src="uploadImgUrl" alt="" id="uploadUrl" v-if="!blogInfo.imgPath" />
                  <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="16" id="uploadFile">
            <el-form-item label="上传附件"></el-form-item>    
            <el-upload :show-file-list="false" class="upload-demo"
              action="#" 
              :http-request="handleFileUpload">
              <el-tooltip content="上传附件后点击右侧复制,并粘贴到编辑器" placement="top">
    <el-button type="primary">Click to upload</el-button>
  </el-tooltip>
              
            </el-upload>
            <div id="attachFileList">
              <div class="file" v-for="item in attachFileList" :index="item.name" :key="item.name">
                <a :href="item.url" target="_blank">{{item.name}}</a>
                <img src="../../../../public/images/icons/copy.png" alt="" srcset="" height="20" v-on:click="copyUrl(item.name,item.url)">
              </div>
            </div>
          </el-col>
        </el-row>
        <div id="editor">
          <v-md-editor v-model="blogInfo.content" height="800px" disabled-menus="true" @upload-image="insertLocalImage">
          </v-md-editor>
        </div>
      </el-form>
    </div>
    <div id="createBlog" v-if="isUpdate" class="operationButton">
      <el-button type="primary" @click="cBlog(1, 'post');">创建博客</el-button>
      <el-button type="primary" @click="cBlog(0, 'post')">保存到草稿</el-button>
    </div>
    <div id="updateBlog" v-if="!isUpdate" class="operationButton">
      <el-button type="primary" @click="cBlog(1, 'put', blogId)">更新博客</el-button>
      <el-button type="primary" @click="cBlog(0, 'put', blogId)">保存到草稿箱</el-button>
    </div>
  </el-card>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref, h } from "vue";
import { useRoute, useRouter } from "vue-router";
import { uploadFile } from "../../../js/bucket/qiniu";
import uploadImgUrl from "../../../../public/images/upload.png";
import { routerPush } from "../../../js/index";
import apiRequest from '../../../../http/index'
import { ElMessage } from 'element-plus'
// import Clipboard from 'clipboard' 
const blogInfo = reactive({
  title: "",
  folders: [],
  tags: [],
  content: "",
  ctime: Date.now(),
  imgPath: "",
  tage: 1,
});
// 从数据库获取的所有文件夹的列表
const categoryList = ref();
// 从数据库获取的所有标签的列表
const tagList = ref();
// 绑定在 options 上面
const optionInfo = reactive({
  folders: [],
  tags: [],
});
const fileList = ref();
const attachFileList = ref([])
// 判断是编辑还是新建
const route = useRoute();
const router = useRouter();
// 文件id
const blogId = route.path.split("createBlog/")[1];
// 获取七牛云token
const insertUrl = ref();
// 上传至七牛云文件
const files = ref();
const editorfile = ref();
// 返回url
const labelPosition = ref("top");
const isUpdate = ref(true);
const uploadUrl = ref()
uploadUrl.value = JSON.parse(localStorage.getItem('qiniuToken')).url
const transToFolderIdList = (objList, selectKey) => {
  let folderIdList = [];
  objList.forEach((element) => {
    if (selectKey.includes(element.folderName)) {
      folderIdList.push(element._id);
    }
  });
  blogInfo.folders = folderIdList;
};
const transToTagIdList = (objList, selectKey) => {
  let folderIdList = [];
  objList.forEach((element) => {
    if (selectKey.includes(element.tagName)) {
      folderIdList.push(element._id);
    }
  });
  blogInfo.tags = folderIdList;
};
const transIdListToFolder = (objList, selectKey) => {
  let folderIdList = [];
  objList.forEach((element) => {
    if (selectKey.includes(element._id)) {
      folderIdList.push(element.folderName);
    }
  });
  optionInfo.folders = folderIdList;
};
const transIdListToTag = (objList, selectKey) => {

  let folderIdList = [];
  objList.forEach((element) => {
    if (selectKey.includes(element._id)) {
      folderIdList.push(element.tagName);
    }
  });
  optionInfo.tags = folderIdList;
};
/**
 * 上传本地图片到七牛云 并插入图片链接
 * @param {*} event 
 * @param {*} insertImage 
 * @param {*} files 
 * https://ckang1229.gitee.io/vue-markdown-editor/zh/
 */
const insertLocalImage = async (event, insertImage, files) => {
  editorfile.value = files[0];
  insertUrl.value = await uploadFile(editorfile.value)
  insertImage({
    url: insertUrl.value,
    desc: 'text'
  })
};
// 如果是修改，调用这个api
const getCon = async (blogId) => {
  let resp = await axios({
    url: `/api/article/${blogId}`,
    method: "get",
  });
  if (resp) {
    // 把 tags 和 folder 对应回去
    transIdListToTag(tagList.value, resp.data.tags);
    transIdListToFolder(categoryList.value, resp.data.folders);
    blogInfo.title = resp.data.title;
    blogInfo.content = resp.data.content;
    blogInfo.folders = resp.data.folders;
    blogInfo.tags = resp.data.tags;
    blogInfo.imgPath = resp.data.imgPath;
  }
};
// 创建博客
const cBlog = async (tage, method, blogId = '') => {
  blogInfo.tage = tage
  await apiRequest({
    url: `/api/article/${blogId}`,
    method: method,
    params: blogInfo
  })
  if (tage == 1) {
    successPopup('创建成功','2000')
    routerPush(router, '/admin/blogList')
  } else {
    routerPush(router, '/admin/draft')
  }
}
const successPopup = (message,duration) => {
  ElMessage({
    message: h('p', null, [
      h('i', { style: 'color: green' }, `${message}`),
    ]),
    type: 'success',
    duration: `${duration}`
  })
}
// 选择文件时触发， 一是转成blob并预览，同时获取到上传的文件
const uploadCoverImage = async (e) => {
  files.value = e.file;
  blogInfo.imgPath = await uploadFile(files.value)
};

const handleFileUpload = async (e)=>{
  console.log(e);
  files.value = e.file;
  const filePath = await uploadFile(files.value)
  const file = {
    name: files.value.name,
    url: filePath
  }
  attachFileList.value.push(file)
}
const copyUrl = (name,url)=>{
    let text = `[${name}](${url})`
    let dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    successPopup('复制成功','1000')
}
const folders = async () => {
  let resp = await axios({
    url: "/api/folder",
    method: "get",
  });
  if (resp.data) {
    categoryList.value = resp.data;
  }
};
const tags = async () => {
  let resp = await axios({
    url: "/api/tags",
    method: "get",
  });
  // 
  if (resp.data) {
    tagList.value = resp.data;
  }
};
onMounted(async () => {
  await tags();
  await folders();
  if (blogId) {
    isUpdate.value = false;
    getCon(blogId);
  }

});
</script>
<style scoped lang="scss">
.el-card {
  margin-top: 10px;

  #tags {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;

    .el-form-item {
      width: 47%;
    }
  }

  .upload {
    #imgUpload {
      #imgView {
        width: 100%;
        height: 100%;
      }

      #uploadUrl {
        width: 30%;
      }
    }
    #uploadFile{
      .el-form-item{
        margin-bottom: 0px;
      }
      .el-tooltip{
        padding: 6px 12px;
        background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
      }
      #attachFileList{
        margin-top: 10px;
        height: 120px;
        overflow-y: scroll;
        .file{
          margin-top: 5px;
          a{
            display: inline-block;
            line-height: 20px;
            text-decoration: none;
            color: #52a98b;
          }
          display: flex;
          justify-content: space-between;
          &:hover{
            background-color: #f0f5f9;
            cursor: pointer;
          }
        }
      }
    }
  }

  #editor {
    margin: auto;
    max-height: 1000px;

    .el-form-item__label {
      font-size: 20px;
      font-weight: 800;
    }
  }

  .operationButton {
    margin-top: 20px;

    .el-button {
      background-color: $button_color;
    }
  }

  .el-form-item {
    label {
      font-size: 40px;
    }
  }

}

label {
  color: aquamarine !important;
}
</style>
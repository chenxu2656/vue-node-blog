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
          <el-input style="width: 100%" v-model="blogInfo.title" />
        </el-form-item>
        <div id="tags">
          <el-form-item label="Category">
            <el-select
              v-model="optionInfo.folders"
              multiple
              placeholder="Select"
              style="width: 100%"
              @change="transToFolderIdList(categoryList, optionInfo.folders)"
            >
              <el-option
                v-for="item in categoryList"
                :key="item._id"
                :label="item.folderName"
                :value="item.folderName"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Tags">
            <el-select
              v-model="optionInfo.tags"
              multiple
              placeholder="Select"
              style="width: 100%"
              @change="transToTagIdList(tagList, optionInfo.tags)"
            >
              <el-option
                v-for="item in tagList"
                :key="item._id"
                :label="item.tagName"
                :value="item.tagName"
              />
            </el-select>
          </el-form-item>
        </div>
        <div id="imgUpload">
          <el-form-item label="Images">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="selectImg"
              :file-list="fileList"
              multiple
            >
              <img
                :src="blogInfo.imgPath"
                alt=""
                id="imgView"
                v-if="blogInfo.imgPath"
              />
              <img
                :src="uploadImgUrl"
                alt=""
                id="uploadUrl"
                v-if="!blogInfo.imgPath"
              />
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
            </el-upload>
          </el-form-item>
        </div>

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
    <div id="createBlog" v-if="isUpdate" class="operationButton">
      <el-button type="primary" @click="postBlog(1)">创建博客</el-button>
      <el-button type="primary" @click="postBlog(0)">保存到草稿</el-button>
    </div>
    <div id="updateBlog" v-if="!isUpdate" class="operationButton">
      <el-button type="primary" @click="putBlog(1)">更新博客</el-button>
      <el-button type="primary" @click="putBlog(0)">保存到草稿箱</el-button>
    </div>
  </el-card>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { startUpload, url } from "../../../js/bucket/qiniu";
import uploadImgUrl from "../../../../public/images/upload.png";
const blogInfo = reactive({
  title: "",
  folders: [],
  tags: [],
  content: "",
  ctime: Date.now(),
  imgPath: "",
  tage: 1
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
// 判断是编辑还是新建
const router = useRoute();
// 文件id
const blogId = router.path.split("createBlog/")[1];
// 获取七牛云token
let qiniuToken = ref();
// 文件转成blob格式，用来预览
const blobFile = ref();
// 上传至七牛云文件
const files = ref();
// 文件上传百分比
const uploadPresent = ref();
// 返回url
const imgUrl = ref();
const labelPosition = ref("top");
const isUpdate = ref(true);
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
    console.log(resp.data);
  }
};
// 创建博客
const postBlog = async (tage) => {
  blogInfo.tage = tage
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

// 更新博客
const putBlog = async (tage) => {
  blogInfo.tage = tage
  try {
    let resp = await axios({
      url: `/api/article/${blogId}`,
      method: "put",
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
const getToken = async () => {
  try {
    let data = await axios({
      url: "/api/qiniu/token",
      method: "get",
      headers: {
        token: localStorage.getItem("token"),
      }
    });
    if (data) {
      console.dir(data);
      return data;
    }
  } catch (err) {
    return err;
  }
};
// 选择文件时触发， 一是转成blob并预览，同时获取到上传的文件
const selectImg = (e) => {
  console.dir(e);
  files.value = e.raw;
  let BlobFormat = URL.createObjectURL(files.value);
  blobFile.value = BlobFormat;
  // 上传到七牛云
  uploadImg(qiniuToken.value);
};
// 上传七牛云，并返回url
const uploadImg = async (token) => {
  let tokenParse = token.data.token;
  const observable = startUpload(
    files.value,
    `${Date.now()}_${files.value.name}`,
    tokenParse
  );
  observable.subscribe({
    next(res) {
      uploadPresent.value = res.total.percent;
      console.dir(res);
    },
    error(err) {
      console.dir(err);
    },
    complete(res) {
      console.dir(res);
      imgUrl.value = `${url}${res.key}`;
      blogInfo.imgPath = `${url}${res.key}`;
    },
  });
};
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
  if (resp.data) {
    tagList.value = resp.data;
  }
};
onMounted(async () => {
  tags();
  folders();
  /**
   * 两种情况
   * 1. 创建 博客
   * 2. 更新 博客
   */
  if (blogId) {
    // 创建博客
    isUpdate.value = false;
    getCon(blogId);
  }
  qiniuToken.value = await getToken();
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
  #imgUpload {
    #imgView {
      width: 100%;
      height: 100%;
    }
    #uploadUrl {
      width: 30%;
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
  .operationButton{
    margin-top: 20px;
  }
}
</style>
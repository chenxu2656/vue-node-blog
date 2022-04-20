<template>
  <div id="postListConCon">
    <ul id="articleList">
      <li v-for="article in artList" :key="article.id">
        <el-card class="box-card" id="blog">
          <div class="sunTitle">
            <span>POSTED:</span>
            <span>{{parseTimeStamp(article.ctime)}}</span>
          </div>
          <div class="blogTitle">{{article.title}}</div>
          <div class="blogCon">{{article.content}}</div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue'
export default {
  name: "articleList",
  setup(){
    // 获取数据
    let artList = ref("")
    const getBlogList = async()=>{
      const resp = await axios({
        url: '/api/article',
        method: "get",
      })
      if (resp.data) {
          artList.value = resp.data
          console.log(artList.value);
      }
    }
    let parseTimeStamp = (timeStamp)=>{
      let date = new Date(timeStamp)
      return date.toLocaleString()
    }
    onMounted( getBlogList )
    return {
      artList,
      parseTimeStamp
    }
  }
};
</script>
<style lang="scss" scoped>
#postListConCon {
  height: auto;
  ul#articleList{
    li {
      list-style: none;
      margin-top: 10px;
      .sunTitle{
        text-align: left;
        color: #cacaca;
        font-size: 14px;
      }
      .blogTitle{
        font-family: Ubuntu, Roboto, 'Open Sans', 'Microsoft YaHei', sans-serif;
        font-size: 22px;
        text-align: left;
        padding-top: 10px;
      }
      .blogCon {
        font-size: 16px;
        text-align: justify;
        padding-top: 10px;
        padding-bottom: 10px;
        max-height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-indent: 24px;
      }
    }
  }
}
</style>
<template>
  <div id="postListConCon">
    <ul id="articleList">
      <li v-for="article in artList" :key="article.id">
        <el-card class="box-card" id="blog">
          <div class="sunTitle">
            <span>POSTED: </span>
            <span>{{parseTimeStamp(article.ctime)}}</span>
          </div>
          <div class="blogTitle" @click="articleRouterPush(article._id)" >{{article.title}}</div>
          <div class="blogCon">
            {{article.content}}
          </div>
          <div id="readMore">Read More</div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {parseTimeStamp} from "../../js/index"
let artList = ref("")
 // 创建路由
const router = useRouter();
const getBlogList = async()=>{
  const resp = await axios({
    url: '/api/article',
    method: "get",
  })
  if (resp.data) {
      artList.value = resp.data
  }
}
let articleRouterPush = (id)=>{
  router.push( { path: `/blog/${id}`})
}
onMounted( getBlogList )

</script>
<style lang="scss" scoped>
#postListConCon {
  height: auto;
  ul#articleList{
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
    li{
        list-style: none;
        text-align: left;
        color: #cacaca;
        font-size: 14px;
        .blogTitle{
          font-family: Ubuntu, Roboto, 'Open Sans', 'Microsoft YaHei', sans-serif;
          font-size: 22px;
          text-align: left;
          padding-top: 10px;
        }
        .blogCon {
          font-size: 16px;
          text-align: justify;
          margin: {
            top: 5px;
            bottom: 5px;
          }
          // max-height: 100px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          &:after{
            content: '...';
            position: absolute;
            font-size: 16px;
            right: 7px;
            bottom: 25px;
            width: 100px;
            background-color: white;
            line-height: 20px;
          }
        }
        #readMore{
          position: absolute;
          right: 20px;
          bottom: 25px;
          font-weight: 700;
          font-size: 14px;
          z-index: 10;
          line-height: 20px;
        }
      } 
    li:not(:first-child) {
          margin-top: 10px;
        }
    }
  }
</style>
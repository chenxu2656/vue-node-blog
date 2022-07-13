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
          <!-- <div id="readMore">Read More</div> -->
        </el-card>
        <!-- <slot>
        <EmptyDisplayVue />
    </slot> -->
      </li>
      <el-pagination background 
      layout="prev, pager, next" 
      :page-size="7"
      :total="blogCount" 
      :hide-on-single-page=true
      @current-change="handleChange"
      />
    </ul>
  </div>
</template>
<script setup>
import { ref ,onMounted} from 'vue';
import axios from 'axios'
import { useRouter , useRoute} from 'vue-router'
import {parseTimeStamp} from "../../js/index"
import apiRequest from '../../../http/index'
// import EmptyDisplayVue from "../admin/content/common/EmptyDisplay.vue"
/**
 * 1. 首页
 * 2. 自定义页面
 * 2.1 tag list
 * 2.2 folder list
 */
let artList = ref("")
let itemList = []
let listType = ""
let listName = ""
let sourceId = ""
let queryParams = new Object()
let queryCount = new Object()
let blogCount = ref(0)
 // 创建路由
const router = useRouter();
const urlSplit  = useRoute().path.split('/')
const handleGetTagList = async() => {
    await apiRequest({
        url: '/api/navItem/',
        params: {
            status: true
        }
    }).then((resp) => {
        itemList = resp
    }).catch((err) => {
        console.log(err);
    })
}

const handleId = (navlist,listName)=>{
  return navlist[navlist.findIndex(item=>item.index == listName)].dataSourceId
}
/**
 * @description 返回当前列表类型 
 * @return tag | folder | blogList
 */
const handlegetArticleType = (url)=>{
  return new Promise((res)=>{
if(url[1]=='custom'){
    listType =  url[2]
    listName = url[3]
  } else if (url[1]=='blog'){
    // 说明是某个标签下或者某个文件夹下的列表
    listType = `${url[2]}-id`
    sourceId = url[3]
  }
   else {
    listType =  'blogList'
  }
  res(listType)
  })
  
}

/**
 * 
 * @param {*} listType ,获取当前页面应该展示的数据类型
 */
const handleQueryParams = (listType2)=>{
if(listType2 == 'tag'){
  return {
    type: 'list',
    tagid: handleId(itemList,listName)
  }
} else if (listType2 == 'folder') {
  return {
    type: 'list',
    folderid: handleId(itemList,listName)
  }
} else if (listType2 == 'folder-id') {
  return {
    type: 'list',
    folderid: sourceId
  }
}
else if (listType2 == 'tag-id') {
  return {
    type: 'list',
    tagid: sourceId
  }
}
else {
  return {
    type: 'list',
  }
}
}

/**
 * @description 路由跳转
 * @param {*} id 文章ID
 */
const articleRouterPush = (id)=>{
  router.push( { path: `/blog/${id}`})
}
/**
 * @description 获取文章列表
 */
const getBlogList = async()=>{
  const resp = await axios({
    url: '/api/article',
    method: "get",
    params: queryParams
  })
  if (resp.data) {
      artList.value = resp.data
  }
}
/**
 * @description 获取文章数量
 */
const getBlogCount = async()=>{
  const resp = await axios({
    url: '/api/article',
    method: "get",
    params: queryCount
  })
  if (resp.data) {
      blogCount.value = resp.data
  }
}
const handleChange = async(pageNumber)=>{
  queryParams.skip = (pageNumber-1)*7
  await getBlogList()
}
onMounted(async()=>{
  // 1. 获取所有导航项目
  await handleGetTagList()
  // 2. 
  await handlegetArticleType(urlSplit)
  queryParams = handleQueryParams(listType)
  queryCount = handleQueryParams(listType)
  queryParams.skip = 0
  queryParams.limit = 7
  queryCount.count = 'true'
  
  await getBlogCount()
  await getBlogList()
} )

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
          // &:after{
          //   content: '...';
          //   position: absolute;
          //   font-size: 16px;
          //   right: 7px;
          //   bottom: 25px;
          //   width: 100px;
          //   background-color: white;
          //   line-height: 20px;
          // }
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
    .el-pagination{
      margin-top: 15px;
      justify-content: right;
    }
    }
  }
</style>
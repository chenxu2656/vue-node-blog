<template>
  <div id="postListConCon">
    <ul id="articleList">
      <li v-for="article in artList" :key="article.id">
        <el-card class="box-card" id="archive">
          <label for=""> {{article.title}}</label>
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
        url: 'http://localhost:3001/api/article',
        method: "get",
      })
      if (resp.data) {
          artList.value = resp.data
          console.log(artList.value);
      }
    }
    onMounted( getBlogList )
    return {
      artList
    }
  }
};
</script>
<style lang="scss" scoped>
#postListConCon {
  height: auto;
  ul{
    li {
      list-style: none;
      margin-top: 10px;
    }
  }
}
</style>
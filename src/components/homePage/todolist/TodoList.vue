<!-- 单页应用 -->
<template>
  <el-container>
    <div id="content">
      <el-row :gutter="10">
        <el-col :span="6" class="leftSide"> 
        <el-card>
          My TodoList
        </el-card> </el-col>
        <el-col :span="18" class="con">
          <el-card  v-for="item in a" :key="item.title">
          <div id="itemCon">
            <img src="../../../../public/images/icons/dashboard.svg" alt="" > 
          <span id="itemTitle">{{item.title}}</span>
          </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>
<script setup>
import {ref} from 'vue'
let a = ref()
a = [
  {
    title: "123",
    time: "222"
  },
  {
    title: "1234",
    time: "2224"
  },
  {
    title: "1235",
    time: "2225"
  }
]
</script>
<style lang="scss" scoped>
.el-container {
  background-color: $back_color;
  background-color: #07689f;
  height: 100%;
  margin: 0px;
  #content {
    width: 1200px;
    
    margin: auto;
    height: 100%;
    .leftSide{
      margin-top: 10px;
      height: 100%;
    }
    .con{
      margin-top: 10px;
      height: 100%;
      .el-card{
        margin-bottom: 10px;
        #itemCon{
display: flex;
        align-items: center;
        img{
          height: 20px;
        }
        #itemTitle{
          font-size: 18px;
          padding-left: 20px;
        }
        }
        
      }
    }
  }
}
</style>
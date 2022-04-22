<template>
  <el-row id="container" :gutter="5">
    <el-col :span="6" class="leftSide">
      <left-bar />
    </el-col>
    <el-col :span="18" class="con">
      <article-detail/>
    </el-col>
  </el-row>
</template>
<script setup>
import leftBar from "./homePage/leftbar.vue";
import articleDetail from './homePage/articleDetail.vue'
</script>

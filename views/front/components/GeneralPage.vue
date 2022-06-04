<template>
<div id="content">
        <el-row :gutter="10">
          <el-col :span="6" class="leftSide">
          <keep-alive>
      <leftBar />
      </keep-alive>
            
          </el-col>
          <el-col :span="18" class="con">
            <router-view :key="useRoute().fullPath"></router-view>
          </el-col>
        </el-row>
      </div>
</template>
<script setup>
import leftBar from "../../../src/components/homePage/leftbar.vue";
import { useRoute } from 'vue-router'
</script>
<style lang="scss" scoped>
#content {
    width: 1200px;
    margin: auto;
    height: auto;
    margin-top: 10px;
    .con {
      height: 100%;
      // overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>
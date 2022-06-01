<template>
  <el-container>
    <el-header>
      <navHeader />
    </el-header>
    <el-main>
      <div id="content">
        <el-row :gutter="10">
        <el-col :span="6" class="leftSide">
          <leftBar />
        </el-col>
        <el-col :span="18" class="con">
          <router-view :key="useRoute().fullPath"></router-view>
        </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>
<script setup>
import navHeader from "../../src/components/homePage/Header.vue";
import leftBar from "../../src/components/homePage/leftbar.vue";
import {useRoute} from 'vue-router'
</script>

<style lang='scss' scoped>
.el-header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  z-index: 10;
}
.el-main {
  background-color: $back_color;
  // min-height: 800px;
  margin-top: 60px;
  height: calc(100vh - 120px);
  #content {
    width: 1200px;
    margin: auto;
    height: auto;
    .con{
      height: 100%;
      // overflow-y: scroll;
      overflow-x: hidden;
    }
  }
}
</style>

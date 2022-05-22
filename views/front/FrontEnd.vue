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
          <router-view></router-view>
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
</script>

<style lang='scss' scoped>
.el-header {
  width: 1200px;
  margin: auto;
}
.el-main {
  background-color: $back_color;
  min-height: 800px;
  #content {
    width: 1200px;
    margin: auto;
    height: auto;
  }
}
</style>

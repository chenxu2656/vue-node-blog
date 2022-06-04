<template>
  <el-container>
    <el-header>
      <navHeader />
    </el-header>
    <el-main>
      <router-view :key="useRoute().fullPath"></router-view>
    </el-main>
    <el-footer>
      <!-- 皖ICP备2022003024 <br>
      <span>版权所有：</span>
      <a href="https://github.com/">https://github.com/</a> -->
    </el-footer>
  </el-container>
</template>
<script setup>
import navHeader from "../../src/components/homePage/Header.vue";
import { useRoute } from 'vue-router'
</script>

<style lang='scss' scoped>
.el-header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  z-index: 10;
  // border-bottom: 1px solid $base_color;
}

.el-main {
  background-color: $back_color;
  // min-height: 800px;
  margin-top: 60px;
  height: calc(100vh - 120px);
}

.el-footer {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>

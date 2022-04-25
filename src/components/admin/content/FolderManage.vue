<template>
  <el-card>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-menu-item v-for="item in folders" :index="item._id" :key="item._id"
          >{{ item.folderName }}
        </el-menu-item>
      </el-menu>
    <div>123123</div>
  </el-card></template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const folders = ref([]);
let getCategoryList = async () => {
  let category = await axios({
    url: "/api/folder",
    method: "get",
  });
  if (category.data) {
    folders.value = category.data;
  }
};
onMounted(getCategoryList);
</script>
<style lang="scss" scoped>
.el-card {
  width: 100%;
  margin-top: 20px;
  display: flex;
  .el-menu {
    width: 200px;
  }
}
</style>
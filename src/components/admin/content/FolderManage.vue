<template>
  <el-card>
  <el-table :data="folders" style="width: 100%">
    <!-- <el-table-column type="selection" width="55" /> -->
    <el-table-column label="标题" prop="folderName" />
    <el-table-column label="创建时间" prop="ctime" sortable :formatter="formateCtime"/>
    <el-table-column align="right">
      <template #default="scope">
        <el-button size="small" @click="dialogFormVisible=true">编辑</el-button>
        <el-button size="small" type="danger" @click="handleUpdate(scope.row._id)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" title="修改文件夹名字">
    <el-input v-model="editName" autocomplete="off" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
  </el-card>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {formateCtime} from "../../../js/index.js"
import {folderDelete} from '../../../js/api/index'
import axios from "axios";
const folders = ref([]);
const dialogFormVisible = ref(false)
const editName = ref()
let getCategoryList = async () => {
  let category = await axios({
    url: "/api/folder",
    method: "get",
  });
  if (category.data) {
    folders.value = category.data;
    console.log(folders.value);
  }
};
const handleUpdate = async (folderId)=>{
  const resp = folderDelete(folderId)
  console.log(resp);
}

onMounted(()=>{
  getCategoryList()
});
</script>
<style lang="scss" scoped>
// http://www.vc706.cn/2019/09/11/element-ui-table%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8flex%E5%B8%83%E5%B1%80%E9%97%AE%E9%A2%98/
.el-card {
  margin-top: 20px;
  #folderMa{
    display: flex;
    .el-menu {
    width: 10%;
  }
  #selectedList{
    flex-grow: 1;
    height: 200px;
  }
  }
  
}
</style>
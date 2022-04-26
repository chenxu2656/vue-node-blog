<template>
  <el-card>
    <div id="folderMa">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-menu-item v-for="item in folders" :index="item._id" :key="item._id"
          >{{ item.folderName }}
        </el-menu-item>
      </el-menu>
      <div id="selectedList">
        <div id="table">
          <el-table :data="filterTableData" style="width: 100%" fit>
            <el-table-column type="selection" width="55" />
            <el-table-column label="标题" prop="title" />
            <el-table-column label="创建时间" prop="ctime" sortable :formatter="formateCtime"/>
            <el-table-column align="right">
              <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
              </template>
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="small" @click="handleEdit(scope.row)">取消发布</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.row)" >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          </div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import { computed,onMounted, ref } from "vue";
import axios from "axios";
const folders = ref([]);
const tableData = ref([])
const search = ref('')
let getCategoryList = async () => {
  let category = await axios({
    url: "/api/folder",
    method: "get",
  });
  if (category.data) {
    folders.value = category.data;
  }
};
const filterTableData = computed(() => 
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

const getBlogList = async()=>{
  const resp = await axios({
    url: '/api/article/',
    method: "get",
  })
  if (resp.data) {
      tableData.value = resp.data
      console.log(tableData.value);
  }
}
onMounted(()=>{
  getCategoryList(),
  getBlogList()
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
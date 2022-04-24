<template>
<el-card>
    <div id="operation" v-show="operationView">
        <el-button size="small" type="danger" @click="handleEdit(scope.$index, scope.row)">批量删除</el-button>
        <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">批量删除</el-button> -->
    </div>
    <el-table :data="filterTableData" style="width: 100%" @selection-change="selectionLineChangeHandle">
    <el-table-column type="selection" width="55" />
    <el-table-column label="标题" prop="title" />
    <el-table-column label="创建时间" prop="ctime" sortable :formatter="formateCtime"/>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">取消发布</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
</el-card>
</template>

<script  setup>
import { computed, ref ,onMounted} from 'vue'
import axios from 'axios'
import {formateCtime} from "../../../js/index.js"
const search = ref('')
const tableData = ref([])
const selectedRow = ref([])
// 转换后的数据
const filterTableData = computed(() => 
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
const operationView = computed(() => selectedRow.value.length === 0 ? false : true)
const selectionLineChangeHandle = (data)=>{
    selectedRow.value = data
    console.log(selectedRow);
}
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
// 获取所有的博客
const getBlogList = async()=>{
  const resp = await axios({
    url: '/api/article',
    method: "get",
  })
  if (resp.data) {
      tableData.value = resp.data
      console.log(tableData.value);
  }
}
onMounted( getBlogList )

</script>

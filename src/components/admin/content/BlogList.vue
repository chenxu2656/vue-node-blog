<template>
<el-card>
  <div id="but">
      <el-button type="primary"
        @click="routerPush(router, '/admin/createBlog')"><edit
          style="width: 1em; height: 1em; margin-right: 8px"
        />写一篇</el-button
      >
    </div>
    <div id="operation" v-show="operationView">
        <el-button size="small" type="danger" @click="handleUpdate(selectedRow,-1)">批量删除</el-button>
    </div>
    <el-table :data="filterTableData" style="width: 100%" @selection-change="selectionLineChangeHandle">
    <template v-slot:empty>
        <EmptyDisplayVue />
      </template>
    <el-table-column type="selection" width="55" />
    <el-table-column label="标题" prop="title" />
    <el-table-column label="创建时间" prop="ctime" sortable :formatter="formateCtime"/>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" @click="handleUpdate(scope.row,0)">取消发布</el-button>
        <el-button size="small" type="danger" @click="handleUpdate(scope.row,-1)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>
</template>
<script  setup>
import { computed, ref ,onMounted} from 'vue'
import axios from 'axios'
import {formateCtime,routerPush} from "../../../js/index.js"
import { useRouter } from "vue-router";
import EmptyDisplayVue from "./common/EmptyDisplay.vue";
import { Edit } from "@element-plus/icons-vue";
const router = useRouter()
const search = ref('')
const tableData = ref([])
const selectedRow = ref([])
// 转换后的数据
const filterTableData = computed(() => 
  tableData.value?
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  ): ''
)
const operationView = computed(() => selectedRow.value.length === 0 ? false : true)
const selectionLineChangeHandle = (data)=>{
    selectedRow.value = data
    console.log(selectedRow);
}

const handleUpdate = async(blogs,tage) => {
  console.log(blogs.length);
  let ids = []
  if (blogs.length != undefined) {
    blogs.forEach((item)=>{
      ids.push(item._id)
    })
  } else {
    ids = blogs._id
  }
  console.log(ids);
  await updateBlog(ids,tage)
  getBlogList()
}
const handleEdit = (row)=>{
  routerPush(router,`/admin/createBlog/${row._id}`)
}
const updateBlog = async(ids,tage)=>{
  try {
    let resp = await axios({
      url: "/api/article/list",
      method: "put",
      data: {
        "ids": ids,
        "field": {
          tage: tage
        }
      },
      headers: {
            token: localStorage.getItem('token')
          }
    })
    console.log(resp);
  } catch (err) {
    console.log(err);
  }
}
// 获取所有的博客
const getBlogList = async()=>{
  const resp = await axios({
    url: '/api/article/',
    method: "get",
    params: {
      type: 'list'
    }
  })
  if (resp.data) {
      tableData.value = resp.data
      console.log(tableData.value);
      console.log(tableData.value);
  }
}
onMounted( getBlogList )

</script>
<style scoped lang="scss">
.el-card{
  #but {
    text-align: right;
    .el-button{
      background-color: $button_color;
    }
  }
}
</style>
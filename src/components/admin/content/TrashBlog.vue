<template>
<el-card>
    <div id="operation" v-show="operationView">
        <el-button size="small" type="danger"  @click="dialogVisible = true">批量彻底删除</el-button>
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
        <el-button size="small" @click="handleUpdate(scope.row,1)">恢复</el-button>
        <el-button size="small" type="danger" @click="dialogVisible = true;deleteRow=scope.row" >彻底删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>删除后将不可恢复</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false;handleDelete(deleteRow)"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</el-card>

</template>
<script  setup>
import { computed, ref ,onMounted} from 'vue'
import EmptyDisplayVue from "./common/EmptyDisplay.vue";
import axios from 'axios'
const search = ref('')
const tableData = ref([])
const selectedRow = ref([])
const deleteRow = ref([])
const dialogVisible = ref(false)
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
    deleteRow.value = data
    console.log(selectedRow);
}

const handleDelete = async(blogs) => {
  let ids = []
  if (blogs.length != undefined) {
    blogs.forEach((item)=>{
      ids.push(item._id)
    })
  } else {
    ids = blogs._id
  }
  await deleteBlog(ids)
  getBlogList()
}

const deleteBlog = async(ids)=>{
  try {
    let resp = await axios({
      url: "/api/article/",
      method: "delete",
      data: {
        "ids": ids
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
      type: "trash"
    }
  })
  if (resp.data) {
      tableData.value = resp.data
      console.log(tableData.value);
  }
}
onMounted( getBlogList )

</script>
<style scoped>
.el-card{
  margin-top: 20px;
}
</style>
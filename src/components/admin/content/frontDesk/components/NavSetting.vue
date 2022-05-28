<template>
<div id="but">
      <el-button type="primary"
        @click="createFieldVisible=true"><edit
          style="width: 1em; height: 1em; margin-right: 8px"
        />建一个</el-button
      >
    </div>
    <el-table :data="navItemList" style="width: 100%">
        <el-table-column prop="title" label="TITLE" width="180" />
        <el-table-column prop="index" label="INDEX" width="180" />
        <el-table-column prop="type" label="TYPE" />
        <el-table-column prop="dataSourceId" label="DataSourceId" />
        <el-table-column  label="STATUS">
            <template #default="scope">
                <el-switch
                    v-model="scope.row.open"
                    class="ml-2"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    @change="log(scope.row.open)"
                />
            </template>
        </el-table-column>
        <el-table-column align="right">
      <template #default="scope">
        <el-button size="small" >编辑</el-button>
        <el-button size="small" type="danger" v-on:click="log(scope)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
</template>
<script setup>
import { ref } from 'vue'
import { Edit } from "@element-plus/icons-vue";
const log = (a)=>{
    console.log(a);
}
const navItemList = ref()
navItemList.value = [{
    title: "About", // 顶部标题
    index: "About", // router
    type: "sp", //类型，单页｜文档｜列表（标签｜文件夹）
    open: true,
    dataSourceId: "123",
    id: "1"
},
{
    title: "Contact",
    index: "Contact",
    type: "content",
    open: true,
    dataSourceId: "123",
    id: '2'
},
{
    title: "BlogList-Tag",
    index: "BlogList-Tag",
    type: "BlogList-Tag",
    open: true,
    dataSourceId: "123",
    id: '3'
},
{
    title: "BlogList-Folder",
    index: "BlogList-Folder",
    type: "BlogList-Folder",
    open: true,
    dataSourceId: "123",
    id: '4'
},
{
    title: "About", // 顶部标题
    index: "About", // router
    type: "sp", //类型，单页｜文档｜列表（标签｜文件夹）
    open: true,
    dataSourceId: "123",
    id: "1"
},
{
    title: "Contact",
    index: "Contact",
    type: "content",
    open: true,
    dataSourceId: "123",
    id: '2'
},
{
    title: "BlogList-Tag",
    index: "BlogList-Tag",
    type: "BlogList-Tag",
    open: true,
    dataSourceId: "123",
    id: '3'
},
{
    title: "BlogList-Folder",
    index: "BlogList-Folder",
    type: "BlogList-Folder",
    open: true,
    dataSourceId: "123",
    id: '4'
},
{
    title: "About", // 顶部标题
    index: "About", // router
    type: "sp", //类型，单页｜文档｜列表（标签｜文件夹）
    open: true,
    dataSourceId: "123",
    id: "1"
},
{
    title: "Contact",
    index: "Contact",
    type: "content",
    open: true,
    dataSourceId: "123",
    id: '2'
},
{
    title: "BlogList-Tag",
    index: "BlogList-Tag",
    type: "BlogList-Tag",
    open: true,
    dataSourceId: "123",
    id: '3'
},
{
    title: "BlogList-Folder",
    index: "BlogList-Folder",
    type: "BlogList-Folder",
    open: true,
    dataSourceId: "123",
    id: '4'
},
{
    title: "About", // 顶部标题
    index: "About", // router
    type: "sp", //类型，单页｜文档｜列表（标签｜文件夹）
    open: true,
    dataSourceId: "123",
    id: "1"
},
{
    title: "Contact",
    index: "Contact",
    type: "content",
    open: true,
    dataSourceId: "123",
    id: '2'
},
{
    title: "BlogList-Tag",
    index: "BlogList-Tag",
    type: "BlogList-Tag",
    open: true,
    dataSourceId: "123",
    id: '3'
},
{
    title: "BlogList-Folder",
    index: "BlogList-Folder",
    type: "BlogList-Folder",
    open: true,
    dataSourceId: "123",
    id: '4'
}
]
</script>
<style lang="scss" scoped>
  #but {
    text-align: right;
    .el-button{
      background-color: $button_color;
    }
  }
</style>
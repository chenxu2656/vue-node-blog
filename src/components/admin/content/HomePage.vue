<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple" />123</el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light" />123</el-col>
    <el-col :span="6"><div class="grid-content bg-purple" />123</el-col>
    <el-col :span="6"><div class="grid-content bg-purple" />123</el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.el-row{
  .el-col{
    height: 100px;
    background-color: aqua;
  }
}
</style>
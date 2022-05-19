<template>
  <div id="headBar">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="title"><span>博客<br>数量</span></div>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <div class="title"><span>评论<br>数量</span></div>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
#headBar {
  margin-top: 20px;
  .el-row {
    .el-col {
      .grid-content {
        height: 100px;
        background-color: #15b7b9;
        border-radius: 5px;
        .title{
          display: flex;
          width: 40%;
          height: 100%;
          color: white;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 5px;
        }
      }                                       
    }
  }
}
</style>
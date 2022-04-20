<template>
  <el-card class="box-card category" id="categoryList">
    <div class="categoryTitle">Category</div>
    <el-divider></el-divider>
    <div v-for="o in 4" class="archievskList" :key="o">
      <span>{{ o }}</span>
    </div>
  </el-card>
</template>

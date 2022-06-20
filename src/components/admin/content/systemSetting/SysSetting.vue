<template>
<el-card id="set">
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="七牛云配置" name="first" class="navSetting">
      <QiniuSetting />
    </el-tab-pane>
    <!-- <el-tab-pane label="轮播图设置" name="second" class="carousel">
      <LunboSetting />
    </el-tab-pane> -->
    <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
  </el-tabs>
</el-card>

</template>
<script setup>
import { ref } from 'vue'
// import LunboSetting from './components/LunboSetting.vue'
import QiniuSetting from './components/QiniuSetting.vue';
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 5px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  height: calc(100vh - 280px);
  .navSetting{
    height: calc(100vh - 280px);
    overflow-y: auto;
    &::-webkit-scrollbar {
    display: none;
  }
  }
}
#set{
    margin-top: 10px;
}
</style>

<template>
<el-card id="set">
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="主页设置" name="first">
      <LunboSetting/>
    </el-tab-pane>
    <el-tab-pane label="轮播图" name="second">
        
    </el-tab-pane>
    
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</el-card>

</template>
<script setup>
import { ref } from 'vue'
import LunboSetting from './components/LunboSetting.vue'
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
#set{
    margin-top: 10px;
}
</style>

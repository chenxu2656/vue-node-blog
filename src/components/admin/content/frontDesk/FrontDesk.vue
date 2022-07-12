<template>
<el-card id="set">
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
  <el-tab-pane label="前台信息配置" name="first" class="carousel">
      <FrontDeskInfo />
    </el-tab-pane>
    <el-tab-pane label="导航栏配置" name="second" class="navSetting">
      <NavSettingVue />
    </el-tab-pane>
    
    <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
  </el-tabs>
</el-card>

</template>
<script setup>
import { ref } from 'vue'
import FrontDeskInfo from './components/FrontDeskInfo.vue'
import NavSettingVue from './components/NavSetting.vue';
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

<template>
    <el-container>
      <el-header>
        <navHeader/>
      </el-header>
      <el-main>
        <div id="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        
      </el-footer>
    </el-container>
</template>
<script>
import navHeader from '../../src/components/homePage/Header.vue'
export default {
  name: 'FrontEnd',
  components: {
    navHeader
  },
}
</script>

<style lang='scss' scoped>
  .el-header{
      width: 1200px;
      margin: auto;
  }
  .el-main{
    background-color: $back_color;
    min-height: 800px;
    #content{
      width: 1200px;
      margin: auto;
      height: auto;
    }
  }
</style>

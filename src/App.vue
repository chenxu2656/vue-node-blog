<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <navHeader/>
      </el-header>
      <el-main>
        <div id="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import navHeader from './components/Header.vue'
export default {
  name: 'App',
  components: {
    navHeader
  },

}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f5f9f;
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
    }
  }
}
</style>

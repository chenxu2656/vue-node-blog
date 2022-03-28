<template>
  <div class="common-layout">
    <el-container>
      <el-header>
          <el-menu 
            mode="horizontal"
            default-active="home"
            menu-trigger="hover"
            router='true'
          >
            <el-menu-item index="home" route="/">Home</el-menu-item>
            <el-sub-menu index="tag">
                <template #title>Tag</template>
                <el-menu-item index="front-end" key="">JavaScript</el-menu-item>
                <el-menu-item index="back-end" key="">Node</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="About">About</el-menu-item>
            <el-menu-item index="contact">Contact</el-menu-item>
          </el-menu>
      </el-header>
      <el-main>
        <router-view id="con"></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
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
    .el-menu {
      width: 1000px;
      padding: 0px;
      margin: auto;
      border: none;
      box-sizing: border-box;
      justify-content: flex-end;
      .el-sub-menu{
        font-size: $h3_size;
        font-weight: $font_weight_middle;
      }
      .el-menu-item{
        font-size: $h3_size;
        font-weight: $font_weight_middle;
      }
      
    }
  }
  .el-main{
    background-color: $back_color;
    min-height: 800px;
    #con{
      width: 1200px;
      margin: autos;
    }
  }
}
</style>

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
            <el-menu-item index="home" >Home</el-menu-item>
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
        <router-view></router-view>
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
  color: #2c3e50;
}
</style>

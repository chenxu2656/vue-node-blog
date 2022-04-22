<template>
    <el-container>
      <el-header>
          header
      </el-header>
      <el-main>
          <side-menu-bar/>
        <div id="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</template>
<script setup>
    import SideMenuBar from '../components/admin/SideMenuBar.vue'
</script>
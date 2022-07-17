<template>
  <!-- <div id="back">
    <backCanvas/>
  </div> -->
  <el-container>
    <el-header>
      <navHeader />
    </el-header>
    <el-main>
      <router-view :key="useRoute().fullPath"></router-view>
    </el-main>
    <el-footer>
      <a href="https://wap.miit.gov.cn/" target="_blank" id="record"> {{userInfo.record}}</a>
      &nbsp;&nbsp;
      <span>❤️ Powered By &nbsp;<a href="https://github.com/chenxu2656/vue-node-blog" style="text-decoration: none;"
        target="_blank">BTFBLOG</a> </span>
      
    </el-footer>
  </el-container>
</template>
<script setup>
// import backCanvas from './components/BackCanvas.vue'
import navHeader from "../../src/components/homePage/Header.vue";
import { useRoute } from 'vue-router';
import { onMounted,ref} from 'vue'
import apiRequest from '../../http/index'
const userInfo = ref({
    name: "",
    location: "",
    socialMedia: {
        sina: '',
        github: "",
        segmentfault: "",
        csdn: ""
    },
    avatar: "",
    lunbo: {
        open: false,
        folder: ""
    },
    reward: {
        open: false,
        alipay: "",
        wechat: ""
    },
    record: ""

})
const getFrontDeskInfo = async ()=>{
    const resp = await apiRequest({
        url: "/api/front"
    })
    userInfo.value = resp[0]
}
onMounted(() => {
    getFrontDeskInfo()
})
</script>

<style lang='scss' scoped>
#back {
  width: 100%;
  height: 100%;
  position: absolute;
}
.el-header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid $back_color;
}
.el-main {
  background-color: $back_color;
  // min-height: 800px;
  margin-top: 60px;
  height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

}

.el-footer {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-top: 1px solid $back_color;
  font-size: 15px;
  a {
    color: $base_light_color;
    &#record{
      color: #000;
      text-decoration: none;
    }
  }

}
</style>

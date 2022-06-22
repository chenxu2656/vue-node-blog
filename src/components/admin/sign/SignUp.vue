<template>
  <div id="img">
    <img src="../../../../public/images/icons/SignUp.svg" alt="" srcset="">
  </div>
  <el-card class="box-card" id="login">
    <div id="tit">
      <span>SIGN UP</span>
    </div>
    <div id="loginDiv">
      <el-form 
      ref="ruleFormRef" 
      :model="ruleForm" 
      status-icon 
      :rules="rules" 
      class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" type="username" placeholder="username" />
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" type="email" autocomplete="off" placeholder="Email" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" show-password size="large"
            placeholder="PASSWORD" clearable />
        </el-form-item>
        <el-form-item id="submitButton">
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </el-form-item>
      </el-form>
      <el-divider>Other</el-divider>
      <div id="reg" @click="router.push({ path: '/admin/login/in' })">立即登陆</div>
    </div>

  </el-card>

</template>
<style lang="scss" scoped>
#img {
  height: 70%;

  img {
    height: 100%;
  }
}

#login {
  width: 500px;
  height: auto;
  margin-left: -9%;
  padding: 40px 0px 40px 0px;
  background-color: rgba($color: #fff, $alpha: 0.85);

  #tit {
    width: 100%;
    display: flex;
    font-size: 35px;
    font-weight: 500;
    margin-top: 20px;
    justify-content: center;
    color: #464ca2;
  }

  #loginDiv {
    .el-form {
      .el-form-item {
        width: 85%;
        margin: auto;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 800;
        // .el-input {
        //   height: 70px;
        // }
      }

      #submitButton {
        .el-button {
          width: 249px;
          margin: auto;
          height: 40px;
          background-color: #e1716e;
          border: none;
        }
      }

    }

    .el-divider {
      margin-top: 30px;
    }

    #reg {
      width: calc(85% + 34.5px);
      text-align: right;
      color: #474c9d;
    }
  }



}
</style>
<script setup>
import apiRequest from '../../../../http/index'
import { reactive } from "vue";
import { useRouter } from "vue-router";
let router = useRouter()
const ruleForm = reactive({
  password: "",
  email: "",
  username: "",
  avatar: "http://qiniu-btfblog-bucket.xccit.cn/1654407891481_开心.svg"
});
const handleRegister = () => {
  apiRequest({
    url: "/api/user/register",
    method: "post",
    params: ruleForm
  }).then((resp) => {
    console.log(resp);
    router.push({ path: '/admin/login/in' })
  }).catch((err) => {
    console.log(err);
  })
}
</script>
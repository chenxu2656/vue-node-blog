<template>
  <div id="img">
    <img src="../../../../public/images/icons/SignUp.svg" alt="" srcset="">
  </div>
  <el-card class="box-card" id="login">
    <div id="tit">
      <span>SIGN IN</span>
    </div>
    <div id="loginDiv">
      <el-form ref="ruleFormRef" 
      :model="ruleForm" 
      label-position="top" 
      status-icon 
      :rules="rules"
        class="demo-ruleForm">
        <el-form-item prop="email" >
          <el-input 
          v-model="ruleForm.email" 
          type="email" 
          autocomplete="off" 
          placeholder="Email"
          size="large"
          clearable
          />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input 
            v-model="ruleForm.pass" 
            type="password" 
            autocomplete="off" 
            show-password
            size="large"
            placeholder="PASSWORD"
            clearable
          />
        </el-form-item>
        <el-form-item id="submitButton">
          <el-button type="primary" @click="submitForm(ruleForm.email, ruleForm.pass)">Submit</el-button>
        </el-form-item>
      </el-form>
      <el-divider >Other</el-divider>
      <div id="reg" @click="router.push({ path: '/admin/login/up' })">立即注册</div>
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
    .el-divider{
        margin-top: 30px;
      }
    #reg{
      width: calc(85% + 34.5px);
      text-align: right;
      color: #474c9d;
    }
  }



}
</style>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getSys } from '../../../js/api/sysSetting'
let router = useRouter()
let token = ""
const ruleForm = reactive({
  pass: "",
  email: "",
});
let submitForm = async (email, pass) => {
  let resp = await axios({
    url: "/api/user/login",
    method: "post",
    data: {
      "email": email,
      "password": pass
    }
  })
  console.log(resp);
  if (resp) {
    token = resp.data.token
    //获取七牛云pk,sk,bucketName
    localStorage.setItem("token", token)
    let qiniu = await getSys()
    console.log(qiniu);
    if (qiniu.data.length == 1) {
      // 把信息放到token里面
      localStorage.setItem('qiniuToken', JSON.stringify(qiniu.data[0]))
    } else if (qiniu.data.length == 0) {
      // 用户还没有设置qiniu信息，在后面上传图片的时候handle
      console.log('nothing');
    } else {
      //TODO: 出现多个setting信息, 告诉用户有这个error，
      console.log('err');
    }
    if (localStorage.getItem('prev')) {
      router.push({ path: localStorage.getItem('prev') })
      localStorage.removeItem('prev')
    } else {
      router.push({ path: '/admin' })
    }

  }
}
</script>
<template>
  <div id="con">
    <el-card class="box-card" id="login">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="ruleForm.email" type="email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item id="submitButton">
          <el-button type="primary" @click="submitForm(ruleForm.email,ruleForm.pass)"
            >Submit</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
#con {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( to right, #64b3f4, #c2e59c ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  #login {
    width: 600px;
    padding: 40px 0px 40px 0px;
    .el-form-item {
      margin-right: 120px;
      font-size: 16px;
      font-weight: 800;
    }
    #submitButton {
      .el-button {
        width: 200px;
        margin: auto;
      }
    }
  }
}
</style>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import {getSys} from '../js/api/sysSetting'
let router = useRouter()
let token = ""
const ruleForm = reactive({
  pass: "",
  email: "",
});
let submitForm = async (email,pass)=>{
  let resp = await axios({
    url: "/api/user/login",
    method: "post",
    data: {
      "email": email,
      "password": pass
    }
  })
  console.log(resp);
  if(resp){
    token = resp.data.token
    //获取七牛云pk,sk,bucketName
    localStorage.setItem("token",token)
    let qiniu = await getSys()
    console.log(qiniu);
    if (qiniu.data.length == 1) {
      // 把信息放到token里面
      localStorage.setItem('qiniuToken', JSON.stringify(qiniu.data[0]))
    } else if(qiniu.data.length == 0) {
      // 用户还没有设置qiniu信息，在后面上传图片的时候handle
      console.log('nothing');
    } else {
      //TODO: 出现多个setting信息, 告诉用户有这个error，
      console.log('err');
    }
    router.push({path: '/admin'})
  } 
}
</script>
<template>
<el-card class="box-card" id="login">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
      <el-form-item label="username" prop="username">
          <el-input v-model="ruleForm.username" type="username"/>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="ruleForm.email" type="email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item id="submitButton">
          <el-button type="primary" @click="handleRegister"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <div @click="router.push({path: '/admin/login/in'})">立即登陆</div>
    </el-card>
</template>
<style lang="scss" scoped>
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
</style>
<script setup>
import apiRequest from '../../../../http/index'
import { reactive } from "vue";
import { useRouter } from "vue-router";
let router = useRouter()
const ruleForm = reactive({
  password: "",
  email: "",
  username: ""
});
const handleRegister = ()=>{
    apiRequest({
        url: "/api/user/register",
        method: "post",
        params: ruleForm
    }).then((resp)=>{
        console.log(resp);
        router.push({path: 'admin/login/in'})
    }).catch((err)=>{
        console.log(err);
    })
}
</script>
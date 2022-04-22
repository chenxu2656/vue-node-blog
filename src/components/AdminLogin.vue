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
          <el-button type="primary" @click="submitForm(ruleFormRef)"
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
    background: -webkit-linear-gradient(
      to right,
      #64b3f4,
      #c2e59c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #64b3f4,
      #c2e59c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  #login {
    width: 600px;
    padding: 40px 0px 40px 0px;
    .el-form-item {
      margin-right: 120px;
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
import { reactive, ref } from "vue";
const ruleFormRef = ref();

const ruleForm = reactive({
  pass: "",
  email: "",
});
</script>
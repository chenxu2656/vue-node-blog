<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="email" prop="email">
      <el-input v-model="rules.emailCheck" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item label="passwod" prop="password">
      <el-input v-model.number="rules.passwordcheck" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(rules)"
        >Submit</el-button
      >
    </el-form-item>
  </el-form>
</template>

<template>
    <el-card class="box-card" id="qiniuSetting">
        <div id="con">
            <el-form
                :label-position="labelPosition"
                label-width="100px"
                :model="qiniuSetting"
            >
            <el-form-item label="AccessKey (AK)">
                <el-input style="width: 100%"  v-model="qiniuSetting.pk" />
            </el-form-item>
            <el-form-item label="SecretKey (SK)" >
                <el-input style="width: 100%" v-model="qiniuSetting.sk" />
            </el-form-item>
            <el-form-item label="URL (设置七牛云链接，自己绑定的URL)">
                <el-input style="width: 100%" placeholder="http://qiniu-btfblog-bucket.xccit.cn" v-model="qiniuSetting.url" />
            </el-form-item>
            <el-form-item label="Bucket Name (bucket的名字)">
                <el-input style="width: 100%" placeholder='btfblog' v-model="qiniuSetting.bucketName" />
            </el-form-item>
            </el-form>
        </div>
        <div id="ope">
            <el-button type="primary" @click="setQiniu(qiniuSetting)">保存</el-button>
        </div>
    </el-card>
</template>
<script setup>
import {reactive, ref} from 'vue'
// 表单label位置
const labelPosition = ref('top')
// 定义表单信息
const qiniuSetting = reactive({
    ak: "",
    sk: "",
    url: "",
    bucketName: ""
})
const setQiniu = (obj)=>{
    console.log(obj);
}
</script>
<style lang="scss" scoped>
.el-card{
    margin-top: 10px;
}
</style>
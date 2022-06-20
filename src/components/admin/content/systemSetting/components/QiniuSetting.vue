<template>
    <div class="box-card" id="qiniuSetting">
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
            <el-button type="primary" @click="setQiniu(qiniuSetting)">{{buttonInfo}}</el-button>
        </div>
    </div>
</template>
<script setup>
import {onMounted, reactive, ref} from 'vue'
import {creatSys,updateSys,getSys} from '../../../../../js/api/sysSetting'
// 表单label位置
const labelPosition = ref('top')
// 定义表单信息
const qiniuSetting = reactive({
    pk: "",
    sk: "",
    url: "",
    bucketName: ""
})
let respInfo = {
    data: []
}
//文档id
const settingId = ref()
const buttonInfo = ref('创建')
const setQiniu = async (field)=>{
    if (!settingId.value ) {
            const resp = await creatSys(field)
            //创建完成之后把token放到 localstorage
            localStorage.setItem('qiniuToken',JSON.stringify(resp.data))
            settingId.value = resp.data._id
            buttonInfo.value = '更新'
            console.log(settingId.value);
    } else {
        const resp = await updateSys(settingId.value,field)
        localStorage.removeItem('qiniuToken')
        localStorage.setItem('qiniuToken',JSON.stringify(resp.data))
        console.log(resp);
        console.log('更新了');
    }

}
onMounted(async()=>{
    respInfo = await getSys()
    if (respInfo.data.length > 0) {
        let data = respInfo.data[0]
        Object.keys(qiniuSetting).forEach((key) => {
            qiniuSetting[key] = data[key];
        });
        settingId.value = data._id
        buttonInfo.value = '更新'
        console.log(qiniuSetting);
    } else {
        console.log('没有');
    }
    console.log(respInfo);
})
</script>
<style lang="scss" scoped>
.el-card{
    margin-top: 10px;
}
#ope{
    button{
        background-color: $button_color;
    }
}
</style>
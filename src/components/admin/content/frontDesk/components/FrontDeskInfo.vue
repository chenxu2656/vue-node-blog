<template>
        <div id="uploadcon">
            <el-upload id="upload" class="avatar-uploader" :show-file-list="false" :on-change="uploadAvatar" action="localhost">
                <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>

        <el-form :model="userInfo" label-width="120px" label-position="top" id="infoForm">
            <el-form-item label="名字">
                <el-input v-model="userInfo.name" />
            </el-form-item>
            <el-form-item label="位置">
                <el-input v-model="userInfo.location" />
            </el-form-item>
            <el-form-item label="社交媒体">
                <el-row class="media" :gutter="20">
                    <el-col :span="6">
                        <el-input v-model="userInfo.socialMedia.github" label="github" placeholder="github" />
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.socialMedia.segmentfault" label="segmentfault" placeholder="思否" />
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.socialMedia.csdn" label="csdn" placeholder="csdn" />
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="userInfo.socialMedia.sina" label="sina" placeholder="微博" />
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>

                    <el-row id="header">
                        <el-col :span="3">
                    <span id="tit">首页轮播图</span>
                    </el-col>
                    <el-col :span="4">
                        <el-switch v-model="userInfo.lunbo.open" />
                    </el-col>
                    
                    <el-col :span="17" v-if="userInfo.lunbo.open">
                    <el-input v-model="userInfo.lunbo.folder" />
                    </el-col>
                    </el-row>
            </el-form-item>
            <el-form-item>
                 <el-row id="header">
                        <el-col :span="3">
                    <span id="tit">文章开启打赏</span>
                    </el-col>
                    <el-col :span="4">
                        <el-switch v-model="userInfo.reward.open" />
                    </el-col>
                    
                    <!-- <el-col :span="10" v-if="userInfo.lunbo.open">
                    <el-input v-model="userInfo.lunbo.folder" />
                    </el-col> -->
                    </el-row>
                <!-- <div id="header"><span id="tit">文章开启打赏</span>
                    <el-switch v-model="userInfo.reward.open" />
                </div> -->
                <el-row v-if="userInfo.reward.open">
                    <el-col :span="4" :offset="8">
                        <div class="award">
                            <span class="awardTit">支付宝</span>
                            <el-upload id="upload"  class="avatar-uploader" :show-file-list="false"
                                :on-change="uploadAliImage" action="localhost">
                                <img v-if="userInfo.reward.alipay" :src="userInfo.reward.alipay" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </div>
                    </el-col>

                    <el-col :span="4">
                        <div class="award">
                            <span class="awardTit">微信</span>
                            <el-upload id="upload"  class="avatar-uploader" :show-file-list="false"
                                :on-change="uploadWechatImage" action="localhost">
                                <img v-if="userInfo.reward.wechat" :src="userInfo.reward.wechat" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
        <el-button type="primary" v-if="!userInfo._id" @click="onSubmit">Save</el-button>
        <el-button type="primary" v-else @click="onSubmit">Update</el-button>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { uploadFile } from '../../../../../js/bucket/qiniu'
import { Plus } from '@element-plus/icons-vue'
import apiRequest from '../../../../../../http/index'
let userInfo = ref({
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
    }

})
const uploadAvatar = async (e) => {
    userInfo.value.avatar = await uploadFile(e.raw)
};
const uploadAliImage = async (e) => {
    userInfo.value.reward.alipay = await uploadFile(e.raw)
};
const uploadWechatImage = async (e) => {
    userInfo.value.reward.wechat = await uploadFile(e.raw)
};
const getSettingInfo = async ()=>{
    const resp = await apiRequest({
        url: "/api/front"
    })
    if(resp.length > 0) {
        userInfo.value = resp[0]
    } 
}
const onSubmit = async()=>{
    if(userInfo.value._id) {
        await apiRequest({
            url: `/api/front/${userInfo.value._id}`,
            params: userInfo.value,
            method: "put"
        })
    } else {
        await apiRequest({
            url: "/api/front",
            params: userInfo.value,
            method: "post"
        })
    }
}
onMounted(async()=>{
    await getSettingInfo()
})
</script>

<style lang="scss" scoped>
    #uploadcon {
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 50px;
        // background-color: #8c939d;

        .avatar-uploader .el-upload {
            width: 100px;
            height: 100px;
            border-radius: 50px;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            img.avatar {
                width: 100px;
                height: 100px;
                border-radius: 50px;
                border: 1px solid #dbdfe5;
            }

            .el-icon.avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 100px;
                height: 100px;
                border: 1px solid #8c939c;
                border-radius: 50%;
                margin: auto;

            }
        }

    }

    #infoForm {
        margin-top: 20px;
        .el-row {
            width: 100%;
        }
        .el-form-item {
            .media{
                justify-content: space-between;
            }
            .award {
                width: 200px;
                height: 200px;

                .avatar-uploader .el-upload {
                    width: 150px;
                    height: 150px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;

                    img.avatar {
                        width: 150px;
                        border: 1px solid #dbdfe5;
                        // height: 100px;
                    }

                    .el-icon.avatar-uploader-icon {
                        font-size: 28px;
                        color: #8c939d;
                        width: 150px;
                        height: 200px;
                        border: 1px dashed #8c939c;
                        margin: auto;
                    }
                }
                .awardTit{
                    display: inline-block;
                    width: 150px;
                    text-align: center;
                }
            }
        }
        
    }


    .el-button{
            background-color: $button_color;
        }
</style>

<template>
    <el-card>
        <div id="uploadcon">
            <el-upload id="upload" class="avatar-uploader" :show-file-list="false" :on-change="uploadCoverImage">
                <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatar" />
                <img v-if="!userInfo.avatar" :src="imageUrl" class="avatar" />
            </el-upload>
        </div>

        <el-form :model="userInfo" label-width="120px" label-position="top">
            <el-form-item label="名字">
                <el-input v-model="userInfo.name" />
            </el-form-item>
            <el-form-item label="位置">
                <el-input v-model="userInfo.location" />
            </el-form-item>
            <el-form-item label="社交媒体">
                <el-row :gutter="20">
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
            <el-form-item label="首页轮播图">

                <el-col :span="2">
                    <el-switch v-model="userInfo.lunbo" />
                </el-col>
                <el-col :span="22" v-if="userInfo.lunbo">
                    <el-input v-model="userInfo.location" />
                </el-col>
            </el-form-item>
            <el-form-item label="开启打赏">

                <el-col :span="2">
                    <el-switch v-model="userInfo.lunbo" />
                </el-col>
                <el-col :span="22" v-if="userInfo.lunbo">
                    <el-input v-model="userInfo.location" />
                </el-col>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
import { ref, reactive } from 'vue'
import uploadImgUrl from "../../../../../public/images/avatar.png";
import { uploadFile } from '../../../../js/bucket/qiniu'
const imageUrl = ref(uploadImgUrl)
const userInfo = reactive({
    name: "",
    location: "",
    socialMedia: {
        sina: '',
        github: "",
        segmentfault: "",
        csdn: ""
    },
    avatar: "",
    lunbo: false,
    lunboTag: "",
    
})
const uploadCoverImage = async (e) => {
    userInfo.avatar = await uploadFile(e.raw)
};
console.log(userInfo.avatar);
</script>
<style lang="scss" scoped>
.el-card {
    #uploadcon {
        width: 100px;
        height: 100px;
        margin: auto;
        border-radius: 50px;
        background-color: #8c939d;

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
            }

            .el-icon.avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 100px;
                height: 100px;
                border: 1px dashed black;
                border-radius: 50%;
                margin: auto;

            }
        }
    }


    .el-form {
        margin-top: 20px;

        .el-row {
            width: 100%;
        }
    }
}
</style>

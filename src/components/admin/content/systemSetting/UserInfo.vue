<template>
    <el-card>
        <div id="uploadcon">
<el-upload id="upload" class="avatar-uploader" :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
            </el-icon>
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
                        <el-input
                        v-model="userInfo.socialMedia.github"
                        label="github"
                        placeholder="github"
                        />
                    </el-col>
                    <el-col :span="6">
                        <el-input
                        v-model="userInfo.socialMedia.segmentfault"
                        label="segmentfault"
                        placeholder="思否"
                        />
                    </el-col>
                    <el-col :span="6">
                        <el-input
                        v-model="userInfo.socialMedia.csdn"
                        label="csdn"
                        placeholder="csdn"
                        />
                    </el-col>
                    <el-col :span="6">
                        <el-input
                        v-model="userInfo.socialMedia.sina"
                        label="sina"
                        placeholder="微博"
                        />
          </el-col>
        </el-row> 
        </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
import { ref, reactive } from 'vue'
import uploadImgUrl from "../../../../../public/images/avatar.png";
const imageUrl = ref(uploadImgUrl)
const userInfo = reactive({
    name: "",
    location: "",
    socialMedia: {
        sina: '',
        github: "",
        segmentfault: "",
        csdn: ""
    }
})
</script>
<style lang="scss" scoped>
.el-card {
#uploadcon{
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
img.avatar{
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
        .el-row{
            width: 100%;
        }
    }
}
</style>

<template>
    <el-card>
        
        <el-upload id="upload" class="avatar-uploader" :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-upload>
        <el-form :model="userInfo" label-width="120px" label-position="top">
            <el-form-item label="name">
                <el-input v-model="userInfo.name" />
            </el-form-item>
            <el-form-item label="location">
                <el-input v-model="userInfo.location" />
            </el-form-item>
            <el-form-item label="social media">
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
import { Plus } from '@element-plus/icons-vue'
const imageUrl = ref('')
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
    .avatar-uploader .el-upload {
        width: 100px;
        height: 100px;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

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

    .el-form {
        margin-top: 20px;
        .el-row{
            width: 100%;
        }
    }
}
</style>

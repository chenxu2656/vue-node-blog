<template>
    <el-card>
        <div id="avatar">
            <el-upload id="upload" class="avatar-uploader" :show-file-list="false">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>
    </el-card>
</template>
<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const imageUrl = ref('')
</script>
<style lang="scss" scoped>
.avatar-uploader .avatar {
    width: 100px;
    height: 100px;
    display: block;
}
.avatar-uploader .el-upload {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: gray;
}
.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
    border: 1px dashed black;
    border-radius: 50%;
}
</style>

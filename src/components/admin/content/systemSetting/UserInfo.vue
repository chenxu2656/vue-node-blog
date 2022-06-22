<template>
    <el-card>
        123
        <div id="avatar">
            <el-upload id="upload" class="avatar-uploader" drag 
            :show-file-list="false"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
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
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

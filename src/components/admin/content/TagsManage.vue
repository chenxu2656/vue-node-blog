<template>
  <el-card>
    <div id="but">
      <el-button type="primary" @click="createFieldVisible = true">
        <edit style="width: 1em; height: 1em; margin-right: 8px" />创建标签
      </el-button>
    </div>
    <el-table :data="tags" style="width: 100%">
      <template v-slot:empty>
        <EmptyDisplayVue />
      </template>
      <el-table-column label="标题" prop="tagName" />
      <el-table-column label="创建时间" prop="ctime" sortable :formatter="formateCtime" />
      <el-table-column align="right">
        <template #default="scope">
          <el-button size="small" @click="
  dialogFormVisible = true;
tagId = scope.row._id;
          ">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="修改标签名字">
      <label class="fodlerName">TagName</label>
      <el-input v-model="updateField.tagName" autocomplete="off" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="
  dialogFormVisible = false;
handleUpdate(tagId, updateField);
          ">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="createFieldVisible" title="创建标签" id="createFolder">
      <label class="fodlerName">TagName</label>
      <el-input v-model="createField.tagName" autocomplete="off" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="createFieldVisible = false">Cancel</el-button>
          <el-button type="primary" @click="
  createFieldVisible = false;
handleCreate(createField);
          ">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { formateCtime } from "../../../js/index.js";
import { Edit } from "@element-plus/icons-vue";
import EmptyDisplayVue from "./common/EmptyDisplay.vue";
import apiRequest from '../../../../http'

const tags = ref([]);
const dialogFormVisible = ref(false);
const createFieldVisible = ref(false);
const updateField = reactive({
  tagName: "",
});
const createField = reactive({
  tagName: "",
});
const tagId = reactive({});
const handleTagList = async () => {
  return await apiRequest({
    url: "/api/tags",
  })
}
const handleDelete = async (tagId) => {
  await apiRequest({
    url: `/api/tags/${tagId}`,
    method: "delete",
    headers: {
      token: localStorage.getItem("token")
    },
  })
  tags.value = await handleTagList();
};
const handleUpdate = async (tagId, field) => {
  await apiRequest({
    url: `/api/tags/${tagId}`,
    method: 'put',
    params: field,
    headers: {
      token: localStorage.getItem("token")
    },
  })
  updateField.tagName = ''
  tags.value = await handleTagList();
};
const handleCreate = async (field) => {
  await apiRequest({
    url: "/api/tags",
    method: 'post',
    headers: {
      token: localStorage.getItem("token")
    },
    params: field
  })
  createField.tagName = ''
  tags.value = await handleTagList();
}
onMounted(async () => {
  tags.value = await handleTagList();
});
</script>
<style lang="scss" scoped>
// http://www.vc706.cn/2019/09/11/element-ui-table%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8flex%E5%B8%83%E5%B1%80%E9%97%AE%E9%A2%98/
.el-card {
  #but {
    text-align: right;

    .el-button {
      background-color: $button_color;
    }
  }

  .el-table {
    margin-top: 10px;

    #folderMa {
      display: flex;

      .el-menu {
        width: 10%;
      }

      #selectedList {
        flex-grow: 1;
        height: 200px;
      }
    }
  }

  .el-dialog {
    .el-input {
      margin-top: 10px;
    }

    label {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>
<template>
    <div id="but">
        <el-button type="primary" @click="createFieldVisible = true">
            <edit style="width: 1em; height: 1em; margin-right: 8px" />建一个
        </el-button>
    </div>
    <el-table :data="navItemList" style="width: 100%">
        <template v-slot:empty>
            <EmptyDisplayVue />
        </template>
        <el-table-column prop="title" label="TITLE" width="180" />
        <el-table-column prop="index" label="INDEX" width="180" />
        <el-table-column prop="weight" label="WEIGHT" width="180" />
        <el-table-column prop="type" label="TYPE" />
        <el-table-column prop="dataSourceId" label="DataSourceId" />
        <el-table-column label="STATUS">
            <template #default="scope">
                <el-switch v-model="scope.row.status" class="ml-2" active-color="#13ce66" inactive-color="#ff4949"
                    @change="handleUpdateStatus(scope.row._id, scope.row.status)" />
            </template>
        </el-table-column>
        <el-table-column align="right">
            <template #default="scope">
                <!-- <el-button size="small">编辑</el-button> -->
                <el-button size="small" type="danger" v-on:click="handleDelete(scope.row._id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="createFieldVisible" title="创建新的导航">
        <el-form label-position="top">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="标题">
                        <el-input v-model="navItem.title" />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="索引">
                        <el-input v-model="navItem.index" />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="权重">
                        <el-input v-model="navItem.weight" />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="数据类型">
                        <el-select v-model="navItem.type" placeholder="please select your zone">
                            <el-option label="文章页" value="article" />
                            <el-option label="列表页-Tag" value="tag" />
                            <el-option label="列表页-Folder" value="folder" />
                            <el-option label="单页" value="sp" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="数据源" v-if="navItem.type">
                <el-select v-model="navItem.dataSourceId" placeholder="标签列表" v-if="navItem.type == 'tag'"
                    @focus="handleGetTagList();" 
                    @change="(val)=>{
                        navItem.dataSourceId = val;
                        log(navItem)
                    }"
                    >
                    <el-option v-for="item in tagList" :key="item._id" :value="item._id" :label="item.tagName"/>
                </el-select>
                <el-select v-model="navItem.dataSourceId" placeholder="文件夹列表" v-if="navItem.type == 'folder'"
                    @focus="handleGetFolderList();"
                    @change="(val)=>{
                        navItem.dataSourceId = val;
                        log(navItem)
                    }"
                    >
                    <el-option v-for="item in folderList" :key="item._id" :value="item._id" :label="item.folderName"/>
                </el-select>
                <el-select v-model="navItem.dataSourceId" placeholder="文章id"
                    v-if="navItem.type == 'article' || navItem.type == 'sp'" 
                    @focus="handleGetBlogList();"
                    @change="(val)=>{
                        navItem.dataSourceId = val;
                        log(navItem)
                    }"
                    >
                    <el-option v-for="item in blogList" :key="item._id" :value="item._id" :label="item.title" />
                </el-select>
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="
                    handleCreate(navItem),
                    createFieldVisible = false;
                ">创建导航栏目</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { Edit } from "@element-plus/icons-vue";
import apiRequest from '../../../../../../http/'
import EmptyDisplayVue from "../../common/EmptyDisplay.vue";
const navItemList = ref()
const createFieldVisible = ref(false);
const tagList = ref()
const folderList = ref()
const blogList = ref()
const navItem = reactive({
    title: "",
    index: "",
    type: "",
    dataSourceId: "",
    status: false,
    weight: ''
})
const handleCreate = (navItem) => {
    apiRequest({
        url: "/api/navItem/",
        method: "post",
        params: navItem,
    }).then((resp) => {
        // 将创建项添加到原数组， 避免重复请求
        navItemList.value.push(resp)
    }).catch((err) => {
        console.log(err);
    })
}
const handleDelete = (id) => {
    apiRequest({
        url: `/api/navItem/${id}`,
        method: "delete"
    }).then((resp) => {
        // 从原数组删除
        console.log(navItemList.value);
        navItemList.value.splice(navItemList.value.findIndex((item) => item._id === id), 1)
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    })
}
const handleUpdateStatus = (id, status) => {
    apiRequest({
        url: `/api/navItem/${id}`,
        method: "put",
        params: {
            "status": status
        }
    }).then((resp) => {
        // 从原数组删除
        console.log(navItemList.value);
        navItemList.value[navItemList.value.findIndex((item) => item._id === id)].status = status
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    })
}
const handleGet = () => {
    apiRequest({
        url: "/api/navItem/"
    }).then((resp) => {
        navItemList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
const handleGetTagList = () => {
    apiRequest({
        url: '/api/tags'
    }).then((resp) => {
        console.log(resp);
        tagList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
const handleGetFolderList = () => {
    apiRequest({
        url: '/api/folder'
    }).then((resp) => {
        console.log(resp);
        folderList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
const handleGetBlogList = () => {
    apiRequest({
        url: '/api/article'
    }).then((resp) => {
        console.log(resp);
        blogList.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
onMounted(async () => {
    handleGet()
})
const log = (a) => {
    console.log(a);
}
</script>
<style lang="scss" scoped>
#but {
    text-align: right;

    .el-button {
        background-color: $button_color;
    }
}

.el-dialog {
    .el-select {
        width: 100%;
    }
}
</style>
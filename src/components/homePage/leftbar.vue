     

<template>
    <el-card class="box-card" id="basicInfo">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div id="username">chen.xu</div>
        <div id="location">
            <el-icon :size="20">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
                    <path fill="currentColor"
                        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z">
                    </path>
                    <path fill="currentColor"
                        d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z">
                    </path>
                </svg>
            </el-icon>
            <div id="localtionName">Anhui,hefei,AHMU</div>
        </div>
    </el-card>
    <el-card class="box-card category" id="categoryList">
        <div class="categoryTitle">Category</div>
        <el-divider></el-divider>
        <div v-for="item in categoryList" class="archievskList" :key="item.id"
            @click="routerPush(router, `/blog/folder/${item._id}`)">
            <span>{{ item.folderName }}</span>
        </div>
    </el-card>
    <el-card class="box-card category" id="archive">
        <div class="categoryTitle">Tags</div>
        <el-divider></el-divider>
        <ul class="tagList">
            <li v-for="item in tagsList" :key="item._id" class="tagName"
                @click="routerPush(router, `/blog/tag/${item._id}`)">{{ item.tagName }} </li>
        </ul>
    </el-card>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue'
import { routerPush } from "../../js/index";
import { useRouter } from "vue-router";
let categoryList = ref("")
let tagsList = ref("")
const router = useRouter();
let getCategoryList = async () => {
    let category = await axios({
        url: "/api/folder",
        method: "get"
    })
    if (category.data) {
        categoryList.value = category.data
    }
}
let getTagList = async () => {
    let tagList = await axios({
        url: "/api/tags",
        method: "get"
    })
    if (tagList.data) {
        tagsList.value = tagList.data
    }
}
onMounted(() => {
    getCategoryList()
    getTagList()
})
</script>
<style lang="scss" scoped>
#basicInfo {
    text-align: center;
    .el-avatar {
        width: 100px;
        height: 100px;
    }

    #username {
        font-size: $h2_size;
        font-weight: $font_weight_middle;
    }

    #location {
        height: 30px;
        line-height: 30px;
        font-size: $h3_size;

        .el-icon {
            height: 30px;
        }

        #localtionName {
            display: inline-block;
            vertical-align: top;
        }
    }
}

.category {
    margin-top: 10px;
    text-align: left;

    .categoryTitle {
        left: 5px;
        color: $base_light_color;
        font-weight: $font_weight_bold;
    }

    .el-divider {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .archievskList {
        padding-left: 10px;
        height: 30px;

        &:hover {
            cursor: pointer;
            color: $base_light_color;
        }
    }

    .tagList {
        list-style: none;
        padding-left: 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .tagName {
            // background-color: $light_font_color;
            height: 25px;
            line-height: 25px;
            padding-left: 10px;
            padding-right: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            font-weight: $font_weight_middle;
            border-radius: 4px;

            &:hover {
                cursor: pointer;
                color: $base_light_color;
            }
        }
    }
}
</style>
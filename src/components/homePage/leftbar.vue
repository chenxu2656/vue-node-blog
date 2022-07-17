     

<template>
    <el-card class="box-card" id="basicInfo">
        <div id="github" v-if="userInfo.socialMedia.github">
            <a :href="userInfo.socialMedia.github" target="_blank">
            <img src="../../../public/images/icons/github.svg" alt="" width="27"></a>
        </div>
        <el-avatar :src="userInfo.avatar" />
        <div id="username">{{userInfo.name}}</div>
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
            <div id="localtionName">{{userInfo.location}}</div>
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
import axios from 'axios'
import { onMounted ,ref } from 'vue'
import { routerPush } from "../../js/index";
import apiRequest from '../../../http/index'
import { useRouter } from "vue-router";
let categoryList = ref("")
let tagsList = ref("")
const router = useRouter();
const userInfo = ref({
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
const getFrontDeskInfo = async ()=>{
    const resp = await apiRequest({
        url: "/api/front"
    })
    userInfo.value = resp[0]
}
onMounted(() => {
    getCategoryList()
    getTagList()
    getFrontDeskInfo()
})
</script>
<style lang="scss" scoped>
#basicInfo {
    position: relative;
    #github{
        width: 0px;
        height: 0px;
        border-top: 35px solid #eaeaea;
        border-right: 35px solid #eaeaea;
        border-left: 35px solid transparent;
        border-bottom: 35px solid transparent;
        position: absolute;
        right: 0px;
        margin-top: -20px;
        a{
            display: block;
            position: absolute;
            top: -20px;
        }
    }
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
    // #socialMedia{
    //     width: 100%;
    //     display: flex;
    //     position: relative;
    //     justify-content: center;
    //     a{
    //         width: 30px;
    //         display: inline-block;
    //     }
        
    // }
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
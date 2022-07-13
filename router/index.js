import { createRouter, createWebHistory } from "vue-router";
import { tokenCheck } from "./tokenCheck";
//单页
const SinglePage = require('../views/front/components/SinglePage.vue')
const FrontEnd = require('../views/front/FrontEnd.vue')

const GeneralPage = require('../views/front/components/GeneralPage.vue')
const ArticleList = require('../src/components/homePage/articleList.vue')  
const ArticleDetail = require('../src/components/homePage/articleDetail.vue')
const TagList = require('../src/components/homePage/tagList.vue')

const AdminMa = require('../views/admin/AdminMa.vue')
const LogIn = require('../src/components/AdminLogin.vue')
const SignIn = require('../src/components/admin/sign/SignIn.vue')
const SignUp = require('../src/components/admin/sign/SignUp.vue')
const AdminP = require('../src/components/AdminP.vue')
const AdminHomePage = require('../src/components/admin/content/HomePage.vue')
const CreateBlog = require('../src/components/admin/content/CreateBlog.vue')

const BlogList = require('../src/components/admin/content/BlogList.vue')
const DraftBlog = require('../src/components/admin/content/DraftBlog.vue')
const TagsManage = require('../src/components/admin/content/TagsManage.vue')
const TrashBlog = require('../src/components/admin/content/TrashBlog.vue')
const FolderManage = require('../src/components/admin/content/FolderManage.vue')
const FileManage = require('../src/components/admin/content/FileManage.vue')
const SysSetting = require('../src/components/admin/content/systemSetting/SysSetting.vue')

const FrontDesk = require('../src/components/admin/content/frontDesk/FrontDesk.vue')
const routes = [
    {
        path: "/",
        components: FrontEnd,
        children: [
            {
                path: "/",
                components: GeneralPage,
                children: [
                    {
                        path: "/",
                        components: ArticleList,
                    },
                    {
                        path: "/blog/tag/:id",
                        components: ArticleList
                    },
                    {
                        path: "/blog/folder/:id",
                        components: ArticleList
                    },
                    {
                        path: "/blog/:id",
                        components: ArticleDetail
                    },
                    {
                        path: "tags",
                        components: TagList
                    },
                    {
                        path: '/custom/article/:index',
                        components: ArticleDetail
                    },
                    {
                        path: '/custom/tag/:index',
                        components: ArticleList
                    },
                    {
                        path: '/custom/folder/:index',
                        components: ArticleList
                    },
                ]
            },
            {
                path: '/custom/sp/:index',
                components: SinglePage
            },
        ]
    },
    
    {
        path: "/admin",
        components: AdminMa,
        children: [
            
            {
                path: "",
                components: AdminP,
                children: [
                    {
                        path: "",
                        components: AdminHomePage
                    },
                    {
                        path: "createBlog",
                        components: CreateBlog
                    },
                    {
                        path: "createBlog/:id",
                        components: CreateBlog,
                    },
                    {
                        path: "blogList",
                        components: BlogList
                    },
                    {
                        path: "draft",
                        components: DraftBlog,
                    },
                    
                    {
                        path: "tags",
                        components: TagsManage
                    },
                    {
                        path: "trash",
                        components: TrashBlog
                    },
                    {
                        path: "folder",
                        components: FolderManage
                    },
                    {
                        path: "qiniuFile",
                        components: FileManage
                    },
                    {
                        path: 'sys',
                        components: SysSetting
                    },
                    {
                        path: "frontDesk",
                        components: FrontDesk
                    }
                ]
            },
            {
                path: "login",
                components: LogIn,
                children: [
                    {
                        path: "in",
                        components: SignIn
                    },
                    {
                        path: "up",
                        components: SignUp
                    }
                ]
            }
            
        ],
        // 判断是否已经登陆
        beforeEnter: (to, from, next)=>{
            tokenCheck(to,from,next)
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export {
    router
} 
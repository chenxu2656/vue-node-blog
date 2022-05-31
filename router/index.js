import { createRouter, createWebHistory } from "vue-router";
//单页
const SinglePage = require('../views/front/SinglePage.vue')
const TodoList =require('../src/components/homePage/todolist/TodoList.vue')
// 
const FrontEnd = require('../views/front/FrontEnd.vue')

const ArticleList = require('../src/components/homePage/articleList.vue')  
const ArticleDetail = require('../src/components/homePage/articleDetail.vue')
const TagList = require('../src/components/homePage/tagList.vue')

const AdminMa = require('../views/admin/AdminMa.vue')
const LogIn = require('../src/components/AdminLogin.vue')
const AdminP = require('../src/components/AdminP.vue')
const AdminHomePage = require('../src/components/admin/content/HomePage.vue')
const CreateBlog = require('../src/components/admin/content/CreateBlog.vue')

const BlogList = require('../src/components/admin/content/BlogList.vue')
const DraftBlog = require('../src/components/admin/content/DraftBlog.vue')
const TagsManage = require('../src/components/admin/content/TagsManage.vue')
const TrashBlog = require('../src/components/admin/content/TrashBlog.vue')
const FolderManage = require('../src/components/admin/content/FolderManage.vue')
const FileManage = require('../src/components/admin/content/FileManage.vue')
const UserInfo = require('../src/components/admin/content/UserInfo.vue')
const QiniuSetting = require('../src/components/admin/content/QiniuSetting.vue')

const FrontDesk = require('../src/components/admin/content/frontDesk/FrontDesk.vue')
const routes = [
    {
        path: "/",
        components: FrontEnd,
        children: [
            {
                path: "/",
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
            {
                path: '/custom/sp/:index',
                components: SinglePage
            }
        ]
    },
    {
        path: '/sp',
        components: SinglePage,
        children: [
            {
                path: 'todo',
                components: TodoList
            }
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
                        path: 'info',
                        components: UserInfo
                    },
                    {
                        path: 'qiniu',
                        components: QiniuSetting
                    },
                    {
                        path: "frontDesk",
                        components: FrontDesk
                    }
                ]
            },
            {
                path: "login",
                components: LogIn
            }
        ],
        // 判断是否已经登陆
        beforeEnter: (to, from, next) => {
            if (to.path.split('admin/')[1] === 'login') {
                next()
            } else {
                // 获取token
                let token = localStorage.getItem('token')
                // 验证一下token对不对
                if (!token) {
                    // 如果有token继续 没有token 登陆
                    next({
                        path: "/admin/login"
                    })
                } else {
                    next()
                }
            }
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
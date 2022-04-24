import { createRouter, createWebHistory } from "vue-router";
const HomePage = require('../src/components/HomePage.vue')
const FrontEnd = require('../views/front/FrontEnd.vue')
const ArticleDetail = require('../src/components/ArticleDetail.vue')
const AdminMa = require('../views/admin/AdminMa.vue')
const LogIn = require('../src/components/AdminLogin.vue')
const AdminP = require('../src/components/AdminP.vue')
const AdminHomePage = require('../src/components/admin/content/HomePage.vue')
const CreateBlog = require('../src/components/admin/content/CreateBlog.vue')

const BlogList = require('../src/components/admin/content/ManageBlog.vue')
const DraftBlog = require('../src/components/admin/content/DraftBlog.vue')
const TagsManage = require('../src/components/admin/content/TagsManage.vue')
const TrashBlog = require('../src/components/admin/content/TrashBlog.vue')

const routes = [
    {
        path: "/",
        components: FrontEnd,
        children: [
            {
                path: "/",
                components: HomePage
            },
            {
                path: "/blog/:id",
                components: ArticleDetail
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
                        path: "blogList",
                        components: BlogList
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
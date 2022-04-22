import { createRouter, createWebHistory } from "vue-router";
const HomePage = require('../src/components/HomePage.vue')
const FrontEnd = require('../views/front/FrontEnd.vue')
const ArticleDetail = require('../src/components/ArticleDetail.vue')
const AdminMa = require('../views/admin/AdminMa.vue')
const LogIn = require('../src/components/AdminLogin.vue')
const AdminP = require('../src/components/AdminP.vue')
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
        path: "/admin/",
        components: AdminMa,
        children: [
            {
                path: "",
                components: AdminP
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
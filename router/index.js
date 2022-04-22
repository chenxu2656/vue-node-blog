import { createRouter,createWebHistory } from "vue-router";
const HomePage = require('../src/components/HomePage.vue')
const FrontEnd = require('../views/front/FrontEnd.vue')
const ArticleDetail = require('../src/components/ArticleDetail.vue')
const AdminMa = require('../views/admin/AdminMa.vue')
const LogIn = require('../src/components/AdminLogin.vue')
// const AdminLogin = require('../views/admin/AdminLogin')
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
                path: "login",
                components: LogIn
            }
        ]
    }
]
export const router = createRouter({
    // createWebHashHistory 会使用一个 hash字符 #
    history: createWebHistory(),
    routes: routes,
})


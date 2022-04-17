import { createRouter,createWebHistory } from "vue-router";
const HomePage = require('../views/front/HomePage')
const ArticleDetail = require('../views/front/ArticleDetail')
const AdminLogin = require('../views/admin/AdminLogin')
const routes = [
    {
        path: "/",
        components: HomePage
    },
    {
        path: "/contact",
        components: ArticleDetail
    },
    {
        path: "/admin",
        components: AdminLogin
    }
]
export const router = createRouter({
    // createWebHashHistory 会使用一个 hash字符 #
    history: createWebHistory(),
    routes: routes,
})


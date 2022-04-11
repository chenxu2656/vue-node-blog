import { createRouter,createWebHistory } from "vue-router";
const HomePage = require('../views/front/HomePage')
const ArticleDetail = require('../views/front/ArticleDetail')
const routes = [
    {
        path: "/",
        components: HomePage
    },
    {
        path: "/contact",
        components: ArticleDetail
    }
]
export const router = createRouter({
    // createWebHashHistory 会使用一个 hash字符 #
    history: createWebHistory(),
    routes: routes,
})


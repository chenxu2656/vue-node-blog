import { createRouter,createWebHistory } from "vue-router";
const HomePage = require('../views/HomePage')
const ArticleDetail = require('../views/ArticleDetail')
const routes = [
    {
        path: "/",
        components: HomePage
    },
    {
        path: "/articles",
        components: ArticleDetail
    }
]
export const router = createRouter({
    // createWebHashHistory 会使用一个 hash字符 #
    history: createWebHistory(),
    routes: routes,
})


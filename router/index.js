import { createRouter,createWebHashHistory } from "vue-router";
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
    routes: routes,
    history: createWebHashHistory()
})


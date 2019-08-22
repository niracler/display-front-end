import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../layout/Layout";
import ArticleList from "../views/article/ArticleList";
import About from "../views/about/About";
import ArticleDetail from "../views/article/ArticleDetail";
import Login from "../views/account/Login";
import Register from "../views/account/Register";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            //登录
            path: '/login',
            name: 'login',
            component:Login
        },
        {
            //注册
            path: '/register',
            name: 'register',
            component:Register
        },
        {
            path: '/',
            name: 'root',
            redirect: 'list',
            component: Layout,
            children: [
                {
                    path: 'list',
                    name: 'list',
                    component: ArticleList
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                },
                {
                    //其实是一个文章列表啦
                    path: 'article',
                    name: 'article',
                    component: ArticleList,
                },
                {
                    //文章详细内容
                    path: 'article/:id',
                    name: 'detail',
                    component: ArticleDetail,
                },
            ]
        },
    ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../layout/Layout";
import ArticleList from "../views/article/ArticleList";
import About from "../views/about/About";
import ArticleDetail from "../views/article/ArticleDetail";
import Login from "../views/account/Login";
import Register from "../views/account/Register";
import Profile from "../views/account/Profile";
import SideBar from "../components/sidebar/SideBar";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            //登录
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            //注册
            path: '/register',
            name: 'register',
            component: Register
        },

        {
            path: '/',
            name: 'root',
            redirect: 'article',
            component: Layout,
            children: [
                {
                    path: 'about',
                    name: 'about',
                    components: {
                        main: About,
                        sidebar: SideBar
                    }
                },
                {
                    //个人主页
                    path: 'profile',
                    name: 'profile',
                    components: {
                        body:Profile
                    }
                },
                {
                    //其实是一个文章列表啦
                    path: 'article',
                    name: 'article',
                    components: {
                        main: ArticleList,
                        sidebar: SideBar
                    }
                },
                {
                    //文章详细内容
                    path: 'article/:id',
                    name: 'detail',
                    components: {
                        main:ArticleDetail,
                        sidebar:SideBar
                    }
                },
            ]
        },
    ]
})

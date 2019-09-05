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
import AccountSideBar from "../views/account/AccountSideBar";
import Settings from "../views/account/Settings";
import DashboardLayout from "../layout/DashboardLayout";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            //真正的后台
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardLayout
        },
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
                        main:Profile,
                        sidebar:AccountSideBar
                    }
                },
                {
                    //个人信息设置
                    path: 'settings',
                    name: 'settings',
                    components: {
                        main:Settings,
                        sidebar:AccountSideBar
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

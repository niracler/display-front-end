import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            //真正的后台
            path: '/dashboard',
            name: 'dashboard',
            redirect: '/dashboard/tag',
            component: resolve => require(["@/layout/DashboardLayout"], resolve),
            children: [
                {
                    path: 'tag',
                    name: 'tag',
                    components: {
                        main: resolve => require(["@/views/tag/Tag"], resolve),
                    }
                },
                {
                    path: 'monitor',
                    name: 'monitor',
                    components: {
                        main: resolve => require(["@/views/monitor/Monitor"], resolve),
                    }
                },
                {
                    path: 'redis',
                    name: 'redis',
                    components: {
                        main: resolve => require(["@/views/monitor/RedisMonitor"], resolve),
                    }
                },
                {
                    path: 'entity',
                    name: 'entity',
                    components: {
                        main: resolve => require(["@/views/monitor/Entity"], resolve),
                    }
                },
            ]
        },
        {
            //登录
            path: '/login',
            name: 'login',
            component: resolve => require(["@/views/account/Login"], resolve),
        },
        {
            //注册
            path: '/register',
            name: 'register',
            component: resolve => require(["@/views/account/Register"], resolve),
        },
        {
            path: '/',
            name: 'root',
            redirect: 'article',
            component: resolve => require(["@/layout/Layout"], resolve),
            children: [
                {
                    path: 'about',
                    name: 'about',
                    components: {
                        main: resolve => require(["@/views/about/About"], resolve),
                        sidebar: resolve => require(["@/views/account/AccountSideBar"], resolve),
                    }
                },
                {
                    //个人主页
                    path: 'profile',
                    name: 'profile',
                    components: {
                        main: resolve => require(["@/views/account/Profile"], resolve),
                        sidebar: resolve => require(["@/views/account/AccountSideBar"], resolve)
                    }
                },
                {
                    //个人信息设置
                    path: 'settings',
                    name: 'settings',
                    components: {
                        main: resolve => require(["@/views/account/Settings"], resolve),
                        sidebar: resolve => require(["@/components/sidebar/SideBar"], resolve)
                    }
                },
                {
                    //其实是一个文章列表啦
                    path: 'article',
                    name: 'article',
                    components: {
                        main: resolve => require(["@/views/article/ArticleList"], resolve),
                        sidebar: resolve => require(["@/components/sidebar/SideBar"], resolve),
                    }
                },
                {
                    //文章详细内容
                    path: 'article/:id',
                    name: 'detail',
                    components: {
                        main: resolve => require(["@/views/article/ArticleDetail"], resolve),
                        sidebar: resolve => require(["@/components/sidebar/SideBar"], resolve),
                    }
                },
            ]
        },
    ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/layout/Layout";
import ArticleList from "@/views/article/ArticleList";
import SideBar from "@/components/sidebar/SideBar";
import About from "@/views/about/About";
import ArticleDetail from "@/views/article/ArticleDetail";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'root',
                    components: {
                        main: ArticleList,
                        sidebar: SideBar
                    }
                },
                {
                    path: 'about',
                    name: 'about',
                    components: {
                        main: About,
                        sidebar: SideBar
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
                        main: ArticleDetail,
                        sidebar: SideBar
                    }
                },
            ]
        },
    ]
})

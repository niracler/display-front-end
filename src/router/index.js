import Vue from 'vue'
import Router from 'vue-router'

import About from "@/components/About";
import List from "@/components/List";
import Detail from "@/components/Detail";
import SideBar from "@/components/SideBar";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            components: {
                main: List,
                sidebar: SideBar
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                main: About,
                sidebar: SideBar
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            components: {
                main: Detail,
                sidebar: SideBar
            },
        },
        {
            path: '/list/:page',
            name: 'list',
            components: {
                main: List,
                sidebar: SideBar
            },
        },
    ]
})

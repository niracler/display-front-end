<template>
    <nav id="header" class="navbar navbar-expand-lg bg-primary-lighten-2 ">

        <div class="container-fluid w-75">
            <router-link class="navbar-brand" exact-active-class="active" :to="{name:'article'}">
                <h3 class="text-primary">GameNews</h3>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse float-right" id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'article'}">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="host + '/api'">API接口</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="flaskHost + '/swagger'">API接口2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="host + '/admin'">后台管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://plrom.niracler.com:5000">爬虫监控</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://jupyter.dgutdev.ml/tree/work/analysis">数据分析</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'dashboard'}">
                            标签筛选
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'about'}">
                            关于我们
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- 登录后的-->
            <HeaderRight></HeaderRight>

        </div>
    </nav>
</template>

<script>
    import {host, flaskHost} from "../../api";
    import HeaderRight from "./HeaderRight";

    export default {
        name: "Header",
        data() {
            return {
                'host': host,
                'flaskHost' : flaskHost
            }
        },
        components: {HeaderRight},
    }
</script>

<style scoped>

</style>
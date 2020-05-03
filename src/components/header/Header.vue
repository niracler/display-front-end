<template>
    <nav id="header" class="navbar navbar-expand-lg bg-primary-lighten-2 ">

        <div class="container-fluid">
            <router-link class="navbar-brand" exact-active-class="active" :to="{name:'event'}">
                <h3 class="text-primary">GameNews</h3>
            </router-link>
            <div class="collapse navbar-collapse float-right" id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'event'}">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="username">
                        <a class="nav-link" :href="host + '/admin'">后台管理</a>
                    </li>
                    <!-- <li class="nav-item" v-show="username">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'dashboard'}">
                            后台管理
                        </router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link class="nav-link" exact-active-class="active" :to="{name:'article'}">
                            新闻
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

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
</template>

<script>
    import {host, flaskHost} from "../../api";
    import HeaderRight from "./HeaderRight";
    import cookie from "../../assets/js/cookie";

    export default {
        name: "Header",
        data() {
            return {
                username: "",
                host: host,
                flaskHost : flaskHost
            }
        },
        components: {HeaderRight},
        created() {
            this.username = cookie.getCookie('name')
        }
    }
</script>

<style scoped>

</style>
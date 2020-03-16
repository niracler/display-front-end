<template>
    <div id="dashboard" :class="showmenu">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <div class="brand-logo">
                <a href="index.html">
                    <b class="logo-abbr"><img src="/images/logo.png" alt=""> </b>
                    <span class="logo-compact"><img src="/images/logo-compact.png" alt=""></span>
                    <span class="brand-title">
                        <img src="/images/logo-text.png" alt="">
                    </span>
                </a>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->

        <!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content clearfix">

                <div class="nav-control">
                    <div class="hamburger" @click="nomenu">
                        <span class="toggle-icon">
                            <i class="icon-menu"></i>
                        </span>
                    </div>
                </div>
                <div class="header-left">
                    <div class="input-group icons">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i
                                    class="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="search" class="form-control" placeholder="Search Dashboard"
                               aria-label="Search Dashboard">
                        <div class="drop-down   d-md-none">
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Search">
                            </form>
                        </div>
                    </div>
                </div>

                <HeaderRight></HeaderRight>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->
        <!--**********************************
    Sidebar start
***********************************-->
        <div class="nk-sidebar">
            <div class="nk-nav-scroll">
                <ul class="accordion metismenu" id="menu">
                    <li class="nav-label">Dashboard</li>
                    <li id="headingDatabase">
                        <a class="has-arrow" data-toggle="collapse" data-target="#collapseDatabase" aria-expanded="false"
                           aria-controls="collapseDatabase">
                            <i class="icon-speedometer menu-icon"></i>
                            <span class="nav-text">系统监控</span>
                        </a>
                        <ul id="collapseDatabase" class="collapse" aria-labelledby="headingDatabase" data-parent="#menu">
                            <li>
                                <router-link :to="{name:'userOperation'}">操作日志管理</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'entity'}">Redis缓存管理</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'redis'}">Admin监控</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'visitCount'}">访问量统计</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'entity'}">实体对象</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'redis'}">redis</router-link>
                            </li>
                        </ul>
                    </li>
                    <li id="headingSpider">
                        <a class="has-arrow" data-toggle="collapse" data-target="#collapseSpider" aria-expanded="false"
                           aria-controls="collapseSpider">
                            <i class="icon-speedometer menu-icon"></i>
                            <span class="nav-text">爬虫集群</span>
                        </a>
                        <ul id="collapseSpider" class="collapse" aria-labelledby="headingSpider" data-parent="#menu">
                            <li>
                                <router-link :to="{name:'monitor'}">mongodb</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'monitor'}">mysql</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'monitor'}">redis</router-link>
                            </li>
                        </ul>
                    </li>
                    <li id="headingTag">
                        <a class="has-arrow" data-toggle="collapse" data-target="#collapseTag" aria-expanded="false"
                           aria-controls="collapseTag">
                            <i class="icon-speedometer menu-icon"></i>
                            <span class="nav-text">标签</span>
                        </a>
                        <ul id="collapseTag" class="collapse" aria-labelledby="headingTag" data-parent="#menu">
                            <li>
                                <router-link :to="{name:'tag'}">标签筛选</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->

        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">

            <div class="row page-titles mx-0">
                <div class="col p-md-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    </ol>
                </div>
            </div>
            <!-- row -->

            <router-view name="main"></router-view>
            <!-- #/ container -->
        </div>
        <!--**********************************
            Content body end
        ***********************************-->


        <!--**********************************
            Footer start
        ***********************************-->
        <Footer></Footer>
        <!--**********************************
            Footer end
        ***********************************-->
    </div>
</template>

<script>

    import HeaderRight from "../components/header/HeaderRight";
    import Footer from "../components/footer/Footer";

    export default {
        name: "DashboardLayout",
        components: {Footer, HeaderRight},
        data() {
            return {
                showmenu: "",
            }
        },
        methods: {
            nomenu() {
                if (this.showmenu) {
                    this.showmenu = ""
                } else {
                    this.showmenu = "menu-toggle"
                }
                self.console.log(this.showmenu)
            }
        }
    };


</script>

<style scoped>

</style>
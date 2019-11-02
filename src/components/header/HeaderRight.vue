<template>
    <div class="header-right" >

        <ul class="clearfix">
            <li class="icons" v-show="!username">
                <router-link class="nav-link" exact-active-class="active" :to="{name:'login'}">
                    登录/注册
                </router-link>
            </li>

            <li class="icons dropdown" v-show="username">
                <a href="javascript:void(0)" data-toggle="dropdown">
                    <i class="mdi mdi-email-outline"></i>
                    <span class="badge gradient-1 badge-pill badge-primary">3</span>
                </a>
                <div class="drop-down animated fadeIn dropdown-menu">
                    <div class="dropdown-content-heading d-flex justify-content-between">
                        <span class="">3 New Messages</span>
                    </div>
                    <div class="dropdown-content-body">
                        <ul>
                            <li class="notification-unread">
                                <a href="javascript:void(0)">
                                    <img class="float-left mr-3 avatar-img" src="/images/avatar/1.jpg" alt="">
                                    <div class="notification-content">
                                        <div class="notification-heading">Saiful Islam</div>
                                        <div class="notification-timestamp">08 Hours ago</div>
                                        <div class="notification-text">Hi Teddy, Just wanted to let you ...
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-unread">
                                <a href="javascript:void(0)">
                                    <img class="float-left mr-3 avatar-img" src="/images/avatar/2.jpg" alt="">
                                    <div class="notification-content">
                                        <div class="notification-heading">Adam Smith</div>
                                        <div class="notification-timestamp">08 Hours ago</div>
                                        <div class="notification-text">Can you do me a favour?</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img class="float-left mr-3 avatar-img" src="/images/avatar/3.jpg" alt="">
                                    <div class="notification-content">
                                        <div class="notification-heading">Barak Obama</div>
                                        <div class="notification-timestamp">08 Hours ago</div>
                                        <div class="notification-text">Hi Teddy, Just wanted to let you ...
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img class="float-left mr-3 avatar-img" src="/images/avatar/4.jpg" alt="">
                                    <div class="notification-content">
                                        <div class="notification-heading">Hilari Clinton</div>
                                        <div class="notification-timestamp">08 Hours ago</div>
                                        <div class="notification-text">Hello</div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </li>
            <li class="icons dropdown" v-show="username"><a href="javascript:void(0)" data-toggle="dropdown">
                <i class="mdi mdi-bell-outline"></i>
                <span class="badge badge-pill gradient-2 badge-primary">3</span>
            </a>
                <div class="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                    <div class="dropdown-content-heading d-flex justify-content-between">
                        <span class="">2 New Notifications</span>
                    </div>
                    <div class="dropdown-content-body">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">
                                            <span class="mr-3 avatar-icon bg-success-lighten-2"><i
                                                    class="icon-present"></i></span>
                                    <div class="notification-content">
                                        <h6 class="notification-heading">Events near you</h6>
                                        <span class="notification-text">Within next 5 days</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                            <span class="mr-3 avatar-icon bg-danger-lighten-2"><i
                                                    class="icon-present"></i></span>
                                    <div class="notification-content">
                                        <h6 class="notification-heading">Event Started</h6>
                                        <span class="notification-text">One hour ago</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                            <span class="mr-3 avatar-icon bg-success-lighten-2"><i
                                                    class="icon-present"></i></span>
                                    <div class="notification-content">
                                        <h6 class="notification-heading">Event Ended Successfully</h6>
                                        <span class="notification-text">One hour ago</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                            <span class="mr-3 avatar-icon bg-danger-lighten-2"><i
                                                    class="icon-present"></i></span>
                                    <div class="notification-content">
                                        <h6 class="notification-heading">Events to Join</h6>
                                        <span class="notification-text">After two days</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="icons dropdown" v-show="username">
                <div class="user-img c-pointer position-relative" data-toggle="dropdown">
                    <span class="activity active"></span>
                    <img src="/images/user/1.png" height="40" width="40" alt="">
                </div>
                <div class="drop-down dropdown-profile   dropdown-menu">
                    <div class="dropdown-content-body">
                        <ul>
                            <li>
                                <router-link :to="{name:'profile'}"><i class="icon-user"></i>
                                    <span>个人主页</span></router-link>
                            </li>
                            <li>
                                <a href="email-inbox.html"><i class="icon-envelope-open"></i> <span>Inbox</span>
                                    <div class="badge gradient-3 badge-pill badge-primary">3</div>
                                </a>
                            </li>
                            <hr class="my-2">
                            <li>
                                <router-link :to="{name:'settings'}"><i class="icon-settings"></i> <span>设置</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'root'}">
                                    <i class="icon-key"></i>
                                    <span @click="logout">注销</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import cookie from "../../assets/js/cookie";
    export default {
        name: "HeaderRight",
        data() {
            return {
                username: "",
            }
        },
        methods: {
            logout() {
                //清除缓存
                cookie.delCookie('token');
                cookie.delCookie('name');
                this.username = "";
                //重新触发store
                //更新store数据
                this.$store.dispatch('setInfo');
            }
        },
        created() {
            this.username = cookie.getCookie('name')
        }
    }
</script>

<style scoped>

</style>
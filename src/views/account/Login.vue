<template>
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center  h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0 my-5">
                            <div class="card-body pt-5">

                                <router-link class="text-center" :to="{name:'root'}">
                                    <h4>Login</h4>
                                </router-link>

                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <input type="text" class="form-control" @focus="errorUnshow" v-model="userName"
                                               placeholder="Mobile">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" @focus="errorUnshow"
                                               v-model="parseWord" placeholder="Password">
                                    </div>
                                    <p class="text-danger" v-show="error">{{error}}</p>
                                    <input class="btn login-form__btn submit w-100" @click="login" value="Sign In">
                                </form>
                                <p class="mt-5 login-form__footer">Dont have account?
                                    <router-link class="text-primary" :to="{name:'register'}">
                                        Sign Up
                                    </router-link>
                                    now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../api/'
    import cookie from "../../assets/js/cookie";

    export default {
        name: "Login",
        data() {
            return {
                userName: '',
                parseWord: '',
                autoLogin: false,
                error: false,
                userNameError: '',
                parseWordError: ''
            }
        },
        methods: {
            login() {
                var that = this;
                login({
                    username: this.userName, //当前页码
                    password: this.parseWord
                }).then((response) => {
                    // self.console.log(response);
                    //本地存储用户信息
                    cookie.setCookie('name', this.userName, 7);
                    cookie.setCookie('token', response.data.token, 7);
                    //存储在store
                    // 更新store数据
                    that.$store.dispatch('setInfo');
                    //跳转到首页页面
                    this.$router.push({name: 'article'})
                }).catch(function (error) {
                    if ("non_field_errors" in error) {
                        that.error = error.non_field_errors[0];
                    }
                    if ("username" in error) {
                        that.userNameError = error.username[0];
                    }
                    if ("password" in error) {
                        that.parseWordError = error.password[0];
                    }
                    that.error = "密码或帐号错误";
                    // self.console.log(that.error);
                });
            },
            errorUnshow() {
                this.error = false;
            }
        },
        created() {
            //清除缓存
            cookie.delCookie('token');
            cookie.delCookie('name');
            //重新触发store
            //更新store数据
            this.$store.dispatch('setInfo');
        }
    }
</script>

<style scoped>

</style>
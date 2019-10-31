<template>
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">

                    <div class="form-input-content">
                        <div class="card login-form mb-0 my-5">
                            <div class="card-body pt-5">

                                <router-link class="text-center" :to="{name:'root'}">
                                    <h4>注册</h4>
                                </router-link>
                                <form class="mt-5 mb-5 login-input" autocomplete="off">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="username" v-model="username"
                                               placeholder="用户名" required>
                                    </div>
                                    <div class="form-group form">
                                        <input type="text" class="form-control" name="mobile" v-model="mobile"
                                               placeholder="电话" required>
                                        <div class="alert-danger alert" v-show="error.mobile">{{error.mobile}}</div>
                                    </div>

                                    <div class="form-group form-inline">
                                        <input type="text" class="form-control w-75" name="code" v-model="code"
                                               placeholder="验证码" required>
                                        <input type="button" class="btn mycode submit btn-xs w-25" @click="seedMessage"
                                               :value="getMessageText">
                                        <div class="alert-danger alert" v-show="error.code">{{error.code}}</div>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" name="password" v-model="password"
                                               placeholder="请输入6-20位非中文字符密码" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" name="password_c"
                                               v-model="password_c" placeholder="确认密码" required>
                                        <div class="alert-danger alert" v-show="error.password">{{error.password}}</div>
                                    </div>
                                    <input class="btn login-form__btn submit w-100" @click="isRegister" value="注册并登录">
                                </form>
                                <p class="mt-5 login-form__footer">Have account
                                    <router-link class="text-primary" :to="{name:'login'}">
                                        Sign In
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
    import cookie from "../../assets/js/cookie";
    import {code, register} from "../../api";

    export default {
        name: "logout",
        data() {
            return {
                getMessageText: "获取验证码",
                mobile: '',
                password: '',
                password_c: '',
                username: '',
                code: '',
                error: {
                    mobile: '',
                    password: '',
                    username: '',
                    code: '',
                }
            }
        },
        methods: {
            isRegister() {
                let that = this;
                register({
                    password: that.password,
                    username: that.username,
                    mobile: that.mobile,
                    code: that.code,
                }).then((response) => {
                    self.console.log(response)
                    cookie.setCookie('name', response.data.username, 7);
                    cookie.setCookie('token', response.data.token, 7);
                    //存储在store
                    // 更新store数据
                    that.$store.dispatch('setInfo');
                    //跳转到首页页面
                    this.$router.push({name: 'root'})
                }).catch(function (error) {
                    that.error.mobile = error.mobile ? error.mobile[0] : '';
                    that.error.password = error.password ? error.password[0] : '';
                    that.error.username = error.username ? error.username[0] : '';
                    that.error.code = error.code ? error.code[0] : '';
                });
            },
            seedMessage() {
                let that = this;
                //开启倒计时
                let countdown = 60;
                settime();

                function settime() {
                    if (countdown === 0) {
                        that.getMessageText = "免费获取验证码";
                        countdown = 60;
                        return;
                    } else {
                        that.getMessageText = "重新发送(" + countdown + ")";
                        countdown--;
                    }
                    setTimeout(function () {
                        settime()
                    }, 1000)
                }

                // 获取手机验证码
                code({
                    mobile: that.mobile
                }).then((response) => {
                    self.console.log(response)
                }).catch(function (error) {
                    if ("mobile" in error) {
                        that.error.mobile = error.mobile[0];
                    }
                });

            }
        }
    }
</script>

<style scoped>
    .mycode {
        background: #455F98;
        color: #fff;
        padding: 13px;
        font-size: 14px;
    }

    .mycode.submit {
        background: #7571f9;
        font-weight: 700;
    }

</style>
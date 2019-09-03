<template>
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0 my-5">
                            <div class="card-body pt-5">

                                <router-link class="text-center" :to="{name:'root'}">
                                    <h4>Register</h4>
                                </router-link>
                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="用户名" required>
                                    </div>
                                    <div class="form-group form">
                                        <input type="text" class="form-control" placeholder="电话" required>
                                    </div>
                                    <div class="form-group form-inline">
                                        <input type="text" class="form-control w-75" placeholder="验证码" required>
                                        <button class="btn mycode submit btn-xs w-25">获取验证码</button>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="密码" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="确认密码" required>
                                    </div>
                                    <button class="btn login-form__btn submit w-100">Sign Up</button>
                                </form>
                                <p class="mt-5 login-form__footer">Have account
                                    <router-link class="text-primary" :to="{name:'login'}">
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
    export default {
        name: "logout"
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
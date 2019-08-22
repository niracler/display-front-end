<template>
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center  h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="col-lg-12"></div>
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">

                                <router-link class="text-center" :to="{name:'root'}">
                                    <h4>Login</h4>
                                </router-link>

                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <button class="btn login-form__btn submit w-100">Sign In</button>
                                </form>
                                <p class="mt-5 login-form__footer">Dont have account?
                                    <router-link class="text-primary" :to="{name:'register'}">
                                        Sign Up
                                    </router-link>now
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
        name: "Login"
    }
</script>

<style scoped>

</style>
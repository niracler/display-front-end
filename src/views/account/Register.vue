<template>
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="col-lg-10"></div>
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">

                                <router-link class="text-center" :to="{name:'root'}">
                                    <h4>Register</h4>
                                </router-link>
                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Name" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control"  placeholder="Email" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password" required>
                                    </div>
                                    <button class="btn login-form__btn submit w-100">Sign in</button>
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

</style>
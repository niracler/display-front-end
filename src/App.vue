<!--让我好好地享受一下你们吧-->
<!--下面这个是展示模板-->
<template>
    <div id="app">

        <common-header></common-header>

        <div class="container">
            <div class="row">

                <div class="col-md-8">
                    <router-view name="main"></router-view>
                </div>

                <div class="col-md-4">
                    <router-view name="sidebar"></router-view>
                </div>
            </div>
        </div>

        <common-footer></common-footer>

    </div>
</template>

<script>
    import CommonHeader from "@/views/header/CommonHeader";
    import CommonFooter from "@/views/footer/CommonFooter";

    export default {
        name: 'app',
        components: {
            'common-header' : CommonHeader,
            'common-footer' : CommonFooter
        },
    }
</script>

<!--显而易见这是样式代码-->
<style>
</style>

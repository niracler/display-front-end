<!--让我好好地享受一下你们吧-->
<!--下面这个是展示模板-->
<template>
    <div id="app">

        <Header></Header>

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

        <Footer></Footer>

    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                comName: 'List',
            }
        }
    }
</script>

<!--显而易见这是样式代码-->
<style>
</style>

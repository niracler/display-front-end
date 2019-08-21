<template>
    <div id="app" class="page-wrapper bg-light-info">

        <Header></Header>

        <div class="container ">
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
    import Header from "@/components/header/Header";
    import Footer from "@/components/footer/Footer";

    export default {
        name: "Layout",
        components: {
            Header,
            Footer
        },
    }
</script>

<style scoped>

</style>
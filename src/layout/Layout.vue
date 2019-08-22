<template>
    <div id="app" class="page-wrapper bg-light-info">

<!--        <div id="preloader">-->
<!--            <div class="loader">-->
<!--                <svg class="circular" viewBox="25 25 50 50">-->
<!--                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />-->
<!--                </svg>-->
<!--            </div>-->
<!--        </div>-->

        <Header></Header>

        <div class="container ">
            <div class="row">

                <div class="col-md-8">
                    <router-view></router-view>
                </div>

                <div class="col-md-4">
                    <SideBar></SideBar>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/header/Header";
    import Footer from "../components/footer/Footer";
    import SideBar from "../components/sidebar/SideBar";

    export default {
        name: "Layout",
        components:{
            Header,
            Footer,
            SideBar,
        }
    }
</script>

<style scoped>

</style>
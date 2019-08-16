<!--让我好好地享受一下你们吧-->
<!--下面这个是展示模板-->
<template>

    <div class="row">
        <div class="col-md-8">
            <component :is="comName"></component>
        </div>
        <div class="col-md-4">
            <SideBar></SideBar>
        </div>
    </div>

</template>

<script>
    import HelloWorld from './components/HelloWorld.vue' //导入组件，组件的运行机制究竟是怎么样的？
    import SideBar from "./components/SideBar";
    import Detail from "./components/Detail";
    import List from "./components/List";

    export default {
        name: 'app',
        components: { //用于定义实例内部私有组件
            // eslint-disable-next-line vue/no-unused-components
            HelloWorld,
            SideBar,
            Detail,
            List
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

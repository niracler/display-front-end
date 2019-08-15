<!--让我好好地享受一下你们吧-->
<!--下面这个是展示模板-->
<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--  原来组件在这里是以标签的这种方法来使用的  -->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue' //导入组件，组件的运行机制究竟是怎么样的？

    export default {
        name: 'app',
        components: {
          // eslint-disable-next-line vue/no-unused-components
            HelloWorld
        },
        data() {
            return {
              msg: '我们这里是一个游戏新闻资讯平台！！'
            }
        }
    }
</script>

<!--显而易见这是样式代码-->
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

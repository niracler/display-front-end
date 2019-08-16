<!--让我好好地享受一下你们吧-->
<!--下面这个是展示模板-->
<template>
    <div class="container" id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--  原来组件在这里是以标签的这种方法来使用的  -->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <br>
        <h1>{{ msg }}</h1>

        <div class="row">
            <div class="col-8">
                <div v-for="article in articles">
                    <br>
                    <h3 class="text-primary">
                        <a>{{ article.title }}</a>
                    </h3>
                    <p>
                        {{ article.content }}
                    </p>
                    <small>Read More</small>
                </div>
            </div>

            <div class="card h-25">
                <div class="card-header">Category</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-content-center"
                        v-for="category in categories">
                        <a href="#">
                            {{ category.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <ul class="pagination">
            <li class="page-item disabled">
                <span class="page-link">Previous</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
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
                msg: '我们这里是一个游戏新闻资讯平台！！',
                articles: null,
                categories: null
            }
        },
        mounted() {
            axios
                .get('http://plrom.niracler.com:8000/api/article/')
                .then(response => (this.articles = response.data.results))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            axios
                .get('http://plrom.niracler.com:8000/api/category/')
                .then(response => (this.categories = response.data.results))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        }
    }
</script>

<!--显而易见这是样式代码-->
<style>
    /*#app {*/
    /*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*    margin-top: 60px;*/
    /*}*/
</style>

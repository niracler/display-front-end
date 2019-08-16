<template>

    <div>
        <h1 class="my-4">
            {{ msg }}
            <small></small>
        </h1>

        <!-- Blog Post -->
        <div class="card mb-4" v-for="article in articles" :key='article.id'>
            <!--                    <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">-->
            <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <p class="card-text">
                    {{ article.content | msgFormat }}
                </p>
                <a href="#" class="btn btn-primary">Read More &rarr;</a>
            </div>
            <div class="card-footer text-muted">
                Posted on {{ article.publish_time | timeFormat }} by
                <a href="#">{{ article.website_name }}</a>
            </div>
        </div>

        <!-- Pagination -->
        <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
                <a class="page-link" href="#" @click="previousPage()">&larr; Older</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#" @click="nextPage()">Newer &rarr;</a>
            </li>
        </ul>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "List",
        data() {
            return {
                msg: '我们这里是一个游戏新闻资讯平台！！',
                baseUrl: 'http://plrom.niracler.com:8000/api/article/?p=',
                currPage: 1,
                articles: null,
                next: null,
                previous: null
            }
        },
        methods: {
            getAllList(currPage = this.currPage) {
                var url = this.baseUrl + currPage;
                axios
                    .get(url)
                    .then(response => {
                        if (response.status === 200) {
                            this.articles = response.data.results;
                            this.previous = response.data.previous;
                            this.next = response.data.next;
                        } else {
                            alert('获取数据失败！！！')
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        self.console.log(error);
                    });
            },
            nextPage() {
                this.currPage += 1;
                this.getAllList();
            },
            previousPage() {
                this.currPage -= 1;
                this.getAllList();
            }
        },
        created() {
            this.getAllList();
        },
        //这里放的是局部的过滤器
        filters: {
            timeFormat: function (dateStr) {
                var dt = new Date(dateStr);

                var y = dt.getFullYear();
                var m = dt.getMonth();
                var d = dt.getDay();
                var hh = dt.getHours();
                var mm = dt.getMinutes();
                var ss = dt.getSeconds();

                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        }
    }
</script>

<style scoped>

</style>
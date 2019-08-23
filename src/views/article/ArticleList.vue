<template>

    <div id="article-list">
        <h1 class="my-4">
            {{ msg }}
            <small></small>
        </h1>

        <ArticleBaseList :articles="articles"></ArticleBaseList>
        <ArticlePagination :next="next" :pre="pre"></ArticlePagination>
    </div>

</template>

<script>
    import axios from 'axios'
    import ArticleBaseList from "@/views/article/ArticleBaseList";
    import ArticlePagination from "@/views/article/ArticlePagination";

    export default {
        name: "ArticleList",
        components: {
            ArticleBaseList,
            ArticlePagination
        },
        data() {
            return {
                msg: '我们这里是一个游戏新闻资讯平台！！',
                url: 'http://plrom.niracler.com:8000/api/article/',
                articles: null,
                pre: null,
                next: null,
            }
        },
        methods: {
            getAllList() {
                // self.console.log(this.$route);
                axios
                    .get(this.url, {
                        params: {
                            p: this.$route.query.p,
                            website_name: this.$route.query.website_name,
                            category: this.$route.query.category,
                        }
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.articles = response.data.results;

                            this.pre = response.data.previous;
                            if (this.pre) {
                                this.pre = '/article?' + this.pre.split('?')[1];
                            }

                            this.next = response.data.next;
                            if (this.next) {
                                this.next = '/article?' + this.next.split('?')[1];
                            }
                        } else {
                            alert('获取数据失败！！！')
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        self.console.log(error);
                    });
            },
        },
        created() {
            this.getAllList();
        },
        watch: {
            $route() {
                this.getAllList();
            }
        }
    }
</script>

<style scoped>
    
</style>
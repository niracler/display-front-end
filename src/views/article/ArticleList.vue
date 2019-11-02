<template>

    <div id="article-list">
        <h1 class="my-4">
            {{ msg }}
            <small></small>
        </h1>

        <ArticleBaseList :articles="articles"></ArticleBaseList>
        <Pagination v-on:go-page="goPage" :totalPage="totalPage"></Pagination>
    </div>

</template>

<script>
    import ArticleBaseList from "../../views/article/ArticleBaseList";
    import Pagination from "../../components/pagination/Pagination";
    import {articleList} from "../../api"

    export default {
        name: "ArticleList",
        components: {
            ArticleBaseList,
            Pagination
        },
        data() {
            return {
                msg: '我们这里是一个游戏新闻资讯平台！！',
                articles: null,
                totalPage: 1,
                page:1,
            }
        },
        methods: {
            getArticleList() {
                articleList({
                    params: {
                        p: this.page,
                        website_name: this.$route.query.website_name,
                        category: this.$route.query.category,
                        tags: this.$route.query.tags,
                    }
                }).then(response => {
                    if (response.status === 200) {
                        this.articles = response.data.results;

                        this.totalPage = Math.ceil(response.data.count / 10); //计算真实的总页数
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
            goPage(data) {
                this.page = data.page;
                this.getArticleList();
            },
        },
        created() {
            this.getArticleList();
        },
        watch: {
            $route() {
                this.getArticleList();
            }
        }
    }
</script>

<style scoped>

</style>
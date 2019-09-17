<template>
    <div class="container-fluid">
        <!-- End Row -->
        <div class="row">
            <div class="col-12 m-b-30">
                <h4 class="d-inline">Cards With Images</h4>
                <p class="text-muted">This is 3 column contents</p>
                <div class="row">
                    <div class="col-md-6 col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <h4>Table Basic</h4>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Tags</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="article in articles" :key="article.id">
                                            <th>{{article.id}}</th>
                                            <td>{{article.title}}</td>
                                            <td>{{ article.content | msgFormat(50) }}</td>
                                            <td>
                                                <router-link class="p-1" :to="{name:'article', query:{ tags:tag.id }}"
                                                             v-for="tag in article.tags" :key='tag.id'>
                                                    <span :class="'label '+ label_colors[tag.id%8]">{{ tag.name }}</span>
                                                </router-link>
                                            </td>
                                            <td>{{ article.publish_time | dateStr }}</td>
                                            <td class="color-primary">$21.56</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Pagination v-on:go-page="goPage" :totalPage="totalPage"></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {articleList} from "../../api";
    import Pagination from "../../components/pagination/Pagination";

    export default {
        name: "Tag",
        components: {Pagination},
        data() {
            return {
                msg: '我们这里是一个游戏新闻资讯平台！！',
                articles: null,
                totalPage: 1,
                page: 1,
                label_colors: [
                    "label-primary",
                    "label-secondary",
                    "label-success",
                    "label-danger",
                    "label-warning",
                    "label-info",
                    "label-light",
                    "label-dark",
                ],
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
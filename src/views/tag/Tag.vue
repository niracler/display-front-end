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
                                            <td>
                                                <a data-toggle="modal" :data-target="'#model-content-'+article.id">
                                                    {{article.content | msgFormat(50) }}
                                                </a>
                                            </td>
                                            <td data-toggle="modal" :data-target="'#model-tag-'+article.id">
                                                <a class="p-1" v-for="tag in article.tags" :key='tag.id'>
                                                    <span :class="'label '+ label_colors[tag.id%8]">{{ tag.name }}</span>
                                                </a>
                                            </td>
                                            <td>{{ article.publish_time | dateStr }}</td>
                                            <td class="color-primary">
                                                <span>{{ article.status }}</span>
                                            </td>
                                            <div class="modal fade" :id="'model-content-'+article.id">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">{{ article.title }}</h5>
                                                            <button type="button" class="close" data-dismiss="modal">
                                                                <span>&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p>{{ article.content }}</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="button" class="btn btn-primary">Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal fade" :id="'model-tag-'+article.id">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">{{ article.title }}</h5>
                                                            <button type="button" class="close" data-dismiss="modal">
                                                                <span>&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <TagsInput :tags.sync="article.tags"></TagsInput>
                                                        </div>
                                                        <hr>
                                                        <div class="modal-body">
                                                            <h5>候选标签</h5>
                                                            <HotTags></HotTags>
                                                        </div>

                                                        <div class="modal-footer">

                                                            <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="button" class="btn btn-primary">Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    import TagsInput from "../../components/tags/TagsInput";
    import HotTags from "../../components/tags/HotTags";
    import {label_colors} from "../../main";

    export default {
        name: "Tag",
        components: {HotTags, TagsInput, Pagination},
        data() {
            return {
                articles: null,
                totalPage: 1,
                page: 1,
                label_colors: label_colors
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
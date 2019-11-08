<template>
    <div id="article-comment">
        <div class="card">
            <h5 class="card-header">Leave a Comment:</h5>
            <div class="card-body">
                <form action="#" class="form-profile">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control" name="textarea" id="textarea" cols="30" rows="6"
                                  placeholder="Post a new message">
                        </textarea>
                    </div>
                    <div class="d-flex align-items-center">
                        <ul class="mb-0 form-profile__icons">
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-user"></i></button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-paper-plane"></i></button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-camera"></i></button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-smile"></i></button>
                            </li>
                        </ul>
                        <button class="btn btn-primary px-3 ml-4">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="media media-reply" v-for="comment in comments" :key='comment.id'>
                    <img class="mr-3 circle-rounded" src="/images/avatar/2.jpg" width="50" height="50"
                         alt="Generic placeholder image">
                    <div class="media-body">
                        <div class="d-sm-flex justify-content-between mb-2">
                            <h5 class="mb-sm-0">{{ comment.name }} <small class="text-muted ml-3">{{ comment.created
                                }}</small></h5>
                            <div class="media-reply__link">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i></button>
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i></button>
                                <button class="btn btn-transparent text-dark font-weight-bold p-0 ml-2">Reply</button>
                            </div>
                        </div>

                        <p>{{ comment.body }}</p>
                        <ul>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/2.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/3.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/4.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/1.jpg" alt=""></li>
                        </ul>

                        <!--                        <div class="media mt-3">-->
                        <!--                            <img class="mr-3 circle-rounded circle-rounded" src="/images/avatar/4.jpg" width="50"-->
                        <!--                                 height="50" alt="Generic placeholder image">-->
                        <!--                            <div class="media-body">-->
                        <!--                                <div class="d-sm-flex justify-content-between mb-2">-->
                        <!--                                    <h5 class="mb-sm-0">Milan Gbah <small class="text-muted ml-3">about 3 days-->
                        <!--                                        ago</small></h5>-->
                        <!--                                    <div class="media-reply__link">-->
                        <!--                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i>-->
                        <!--                                        </button>-->
                        <!--                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i>-->
                        <!--                                        </button>-->
                        <!--                                        <button class="btn btn-transparent p-0 ml-3 font-weight-bold">Reply</button>-->
                        <!--                                    </div>-->
                        <!--                                </div>-->
                        <!--                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante-->
                        <!--                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.-->
                        <!--                                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in-->
                        <!--                                    faucibus.</p>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                    </div>
                </div>

                <Pagination v-on:go-page="goPage" :totalPage="totalPage"></Pagination>

            </div>
        </div>
    </div>
</template>

<script>
    import {commentList} from "../../api";
    import Pagination from "../../components/pagination/Pagination";

    export default {
        name: "ArticleComment",
        components: {
            Pagination
        },
        data() {
            return {
                comments: null,
                page: 1,
                totalPage: 1,
            }
        },
        methods: {
            getComments() {
                commentList({
                    params: {
                        page: this.page,
                        article: this.$route.params.id,
                    }
                }).then(response => {
                    if (response.status === 200) {
                        this.comments = response.data.results;
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
                this.getComments();
                self.console.log(this.$route.params.id)
            },
        },
        mounted() {
            this.getComments();
        },
    }
</script>

<style scoped>

</style>
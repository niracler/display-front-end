<template>
    <!-- Post Content Column -->
    <div id="Event-detail">

        <div class="event">
            <!-- Title -->
            <h1 class="mt-4">{{ event.articles[0].title }}</h1>

            <!-- Author -->
            <p class="lead">
                by
                <router-link :to="{name:'article', query:{ website_name:event.articles[0].website_name }}">
                    {{ event.articles[0].website_name }}
                </router-link>
            </p>

            <hr>

            <!-- Date/Time -->
            <p>Posted on {{ event.articles[0].publish_time }}</p>

            <!-- <hr> -->

            <!-- Preview Image -->
            <!-- <img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">

            <hr> -->

            <!-- Post Content -->
            <div class="card">
                <div class="card-body">
                    {{ event.articles[0].content | msgFormat() }}
                </div>
            </div>



            <hr>
        </div>

        <div class="card">
        <div class="card-body">
            <div class="card-title">
                <h4>Latest News</h4>
            </div>

            <div class="container py-2">

                <div class="row" v-for="article in event.articles" :key='article.id'>
                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                        <div class="row h-50">
                            <div class="col border-right">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                        <h5 class="m-2">
                            <span class="badge badge-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div class="row h-50">
                            <div class="col border-right">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                    </div>
                    <div class="col py-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-right text-muted">{{ article.publish_time | dateStr }}</div>
                                <strong class="">{{ article.title  }}</strong>
                                <p>{{article.content | msgFormat(100)}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/row-->
            </div>
        </div>

    </div>

        <!-- Comments Form -->
        <ArticleComment :article="id"></ArticleComment>

    </div>
</template>

<script>
    import ArticleComment from "../../views/article/ArticleComment";
    import { eventDetail} from "../../api";

    export default {
        name: "EventDetail",
        components:{
            ArticleComment,
        },
        data() {
            return {
                id: '',
                user: '',
                comment: '',
                event: '不是我的错',
            }
        },
        methods: {
            getDetail() {
                if (this.$route.params.id) {
                    this.id = this.$route.params.id;
                } else {
                    this.id = 1
                }

                eventDetail(this.id, {})
                    .then(response => {
                        if (response.status === 200) {
                            this.event = response.data;
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
            this.getDetail();
        },
    }
</script>

<style scoped>
    ul.timeline {
        list-style-type: none;
        position: relative;
    }

    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }

    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }

    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
</style>
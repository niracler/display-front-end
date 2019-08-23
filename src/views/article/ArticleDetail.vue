<template>
    <!-- Post Content Column -->
    <div id="article-detail">

        <div class="article">
            <!-- Title -->
            <h1 class="mt-4">{{ article.title }}</h1>

            <!-- Author -->
            <p class="lead">
                by
                <router-link :to="{name:'article', query:{ website_name:article.website_name }}">
                    {{ article.website_name }}
                </router-link>
            </p>

            <hr>

            <!-- Date/Time -->
            <p>Posted on {{ article.publish_time }}</p>

            <hr>

            <!-- Preview Image -->
            <img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">

            <hr>

            <!-- Post Content -->
            <div class="card">
                <div class="card-body">
                    {{ article.content }}
                </div>
            </div>



            <hr>
        </div>

        <TimeLine></TimeLine>

        <!-- Comments Form -->
        <ArticleComment></ArticleComment>

    </div>
</template>

<script>
    import axios from 'axios'
    import ArticleComment from "@/views/article/ArticleComment";
    import TimeLine from "../../components/timeline/TimeLine";

    export default {
        name: "ArticleDetail",
        components:{
            ArticleComment,
            TimeLine,
        },
        data() {
            return {
                baseUrl: 'http://plrom.niracler.com:8000/api/article/?id=',
                id: '',
                user: '',
                comment: '',
                article: '不是我的错',
                list: [
                    {id: 1, user: '李一白', comment: '窗前明月光'},
                    {id: 2, user: '李二白', comment: '疑是地上霜'},
                    {id: 3, user: '李三白', comment: '举头望明月'},
                    {id: 4, user: '李四白', comment: '低头思故乡'},
                ]

            }
        },
        methods: {
            postComment() {
                var comment = {id: Date.now(), user: this.user, comment: this.comment};
                this.list.push(comment)
            },
            getDetail() {
                if (this.$route.params.id) {
                    this.id = this.$route.params.id;
                } else {
                    this.id = 1
                }

                var url = this.baseUrl + this.id;
                axios
                    .get(url)
                    .then(response => {
                        if (response.status === 200) {
                            this.article = response.data.results[0];
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

</style>
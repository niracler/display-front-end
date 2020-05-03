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
        <ArticleComment :article="id"></ArticleComment>

    </div>
</template>

<script>
    import ArticleComment from "../../views/article/ArticleComment";
    import TimeLine from "../../components/timeline/TimeLine";
    import { articleDetail} from "../../api";

    export default {
        name: "ArticleDetail",
        components:{
            ArticleComment,
            TimeLine,
        },
        data() {
            return {
                id: '',
                user: '',
                comment: '',
                article: '不是我的错',
            }
        },
        methods: {
            getDetail() {
                if (this.$route.params.id) {
                    this.id = this.$route.params.id;
                } else {
                    this.id = 1
                }

                articleDetail({params:{id:this.id}})
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
<template>
    <!-- Post Content Column -->
    <div>

        <!-- Title -->
        <h1 class="mt-4">{{ article.title }}</h1>

        <!-- Author -->
        <p class="lead">
            by
            <a href="#">{{ article.category.name }}</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on {{ article.publish_time }}</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">

        <hr>

        <!-- Post Content -->
        {{ article.content }}

        <hr>

        <!-- Comments Form -->
        <div class="card my-4">
            <h5 class="card-header">Leave a Comment:</h5>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Name: </label>
                        <label>
                            <input type="text" class="form-control" v-model="user">
                        </label>
                        <textarea class="form-control" rows="3" v-model="comment"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="postComment">Submit</button>
                </form>
            </div>
        </div>

        <!-- Single Comment -->
        <div class="media mb-4" v-for="item in list" :key="item.id">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
                <h5 class="mt-0">{{ item.user }}</h5>
                {{ item.comment }}
            </div>
        </div>

        <!-- Comment with nested comments -->
        <div class="media mb-4">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
                <h5 class="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
                odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.

                <div class="media mt-4">
                    <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                    <div class="media-body">
                        <h5 class="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </div>

                <div class="media mt-4">
                    <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                    <div class="media-body">
                        <h5 class="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Detail",
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
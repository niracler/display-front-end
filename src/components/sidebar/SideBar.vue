<template>
    <!-- Sidebar Widgets Column -->
    <div>
        <!-- Search Widget -->
        <div class="card my-4">
            <h5 class="card-header">搜索</h5>
            <div class="card-body">
                <div class="input-group">
                    <label>
                        <input type="text" class="form-control" placeholder="Search for...">
                    </label>
                    <span class="input-group-btn">
                        <button class="btn btn-secondary" type="button">Go!</button>
                    </span>
                </div>
            </div>
        </div>

        <!-- Tags Widget -->
        <div class="card">
            <h5 class="card-header">热门标签</h5>
            <div class="card-body">
                <HotTags></HotTags>
            </div>
        </div>

        <!-- Side Widget -->
        <!-- <div class="card my-4">
            <div class="card-body">
                <h4 class="card-title">最新评论</h4>
                <div id="activity">
                    <div class="media border-bottom-1 pt-3 pb-3" v-for="comment in comments" :key="comment.id">
                        <img width="35" src="/images/avatar/1.jpg" class="mr-3 rounded-circle">
                        <div class="media-body">
                            <h5>{{ comment.user.username }}</h5>
                            <p class="mb-0">{{ comment.body | msgFormat(20) }}</p>
                        </div>
                        <span class="text-muted ">{{ comment.created | dateStr }}</span>
                    </div>

                    <div class="media pt-3 pb-3">
                        <img width="35" src="/images/avatar/3.jpg" class="mr-3 rounded-circle">
                        <div class="media-body">
                            <h5>Facebook Post 30 Comments</h5>
                            <p class="mb-0">I shared this on my fb wall a few months back,</p>
                        </div>
                        <span class="text-muted ">April 24, 2018</span>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    // import {commentList} from "../../api";
    import HotTags from "../tags/HotTags";

    export default {
        name: "SideBar",
        components: {HotTags},
        data() {
            return {
                categories: null,
                comments: null,
            }
        },
        mounted() {
            // commentList()
            //     .then(response => (this.comments = response.data.results))
            //     .catch(function (error) { // 请求失败处理
            //         self.console.log(error);
            //     });
        }
    }
</script>

<style scoped>

</style>
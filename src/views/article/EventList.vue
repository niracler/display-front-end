<template>

    <div id="event-list">
        <h1 class="my-4">
            {{ msg }}
            <small></small>
        </h1>

        <EventBaseList :events="events"></EventBaseList>
        <Pagination v-on:go-page="goPage" :totalPage="totalPage"></Pagination>
    </div>

</template>

<script>
    import EventBaseList from "../../views/article/EventBaseList";
    import Pagination from "../../components/pagination/Pagination";
    import {eventList} from "../../api"

    export default {
        name: "EventList",
        components: {
            EventBaseList,
            Pagination
        },
        data() {
            return {
                msg: '我们这里是一个游戏新闻资讯平台！！',
                events: null,
                totalPage: 1,
                page:1,
            }
        },
        methods: {
            getEventList() {
                eventList({
                    params: {
                        p: this.page,
                        website_name: this.$route.query.website_name,
                        category: this.$route.query.category,
                        tags: this.$route.query.tags,
                    }
                }).then(response => {
                    if (response.status === 200) {
                        this.events = response.data.results;

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
                this.getEventList();
            },
        },
        mounted() {
            this.getEventList();
        },
        watch: {
            $route() {
                this.getEventList();
            }
        }
    }
</script>

<style scoped>

</style>

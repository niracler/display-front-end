<template>
    <div class="container-fluid">
        <!-- End Row -->
        <div class="row">
            <div class="col-12 m-b-30">
                <h4 class="d-inline">Cards With Images</h4>
                <p class="text-muted">This is 3 column contents</p>
                <div class="row">
                    <div class="col-md-6 col-lg-3" v-for="entity in entities" :key="entity._id">
                        <div class="card">
                            <img class="img-fluid" :src="proHost + entity.img_path" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{ entity.name }}</h5>
                                <p class="card-text">This is a wider card with supporting text and below as a
                                    natural lead-in to the additional content. This content is a little bit
                                    longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Pagination v-on:go-page="goPage" :totalPage="totalPage"></Pagination>
    </div>
</template>

<script>
    import {entityInfo, proHost, host} from "../../api";
    import Pagination from "../../components/pagination/Pagination";

    export default {
        name: "Entity",
        components: {
            Pagination,

        },
        data() {
            return {
                entities: null,
                host: host,
                proHost: proHost,
                totalPage: 1,
                page: 1,
            }
        },
        methods: {
            getEntity() {
                entityInfo({
                    params: {
                        page: this.page,
                    }
                }).then(response => {
                    if (response.status === 200) {
                        this.entities = response.data.results;
                        this.totalPage = Math.ceil(response.data.count / 16); //计算真实的总页数
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
            goPage(data) {
                this.page = data.page;
                this.getEntity();
            },
        },
        created() {
            this.getEntity()
        },
        watch: {
            $route() {
                this.getEntity();
            }
        }
    }
</script>

<style scoped>

</style>
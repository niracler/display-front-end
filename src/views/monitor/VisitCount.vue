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
                                    <h4>资源访问情况</h4>
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
                                        <tr v-for="vc in visitCount" :key="vc.id">
                                            <th>{{vc.id}}</th>
                                            <td>{{vc.vis_type}}</td>
                                            <td>{{vc.res_type}}</td>
                                            <td>{{vc.res_id}}</td>
                                            <td>{{vc.time_type}}</td>
                                            <td>{{vc.time_local}}</td>
                                            <td>{{vc.click}}</td>
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
    import {visitCountInfo} from "../../api";
    import Pagination from "../../components/pagination/Pagination";

    export default {
        name: "VisitCount",
        components: {Pagination},
        data() {
            return {
                visitCount: null, 
                totalPage: 1,
                page: 1,
            }
        },
        methods: {
            getVisitCountInfo() {
                visitCountInfo({
                    params: {
                        p: this.page,
                    }
                }).then(response => {
                    if (response.status === 200) {
                        this.visitCount = response.data.results;
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
                this.getVisitCountInfo();
            },
        },
        created() {
            this.getVisitCountInfo();
        },
        watch: {
            $route() {
                this.getVisitCountInfo();
            }
        }
    }
</script>

<style scoped>

</style>
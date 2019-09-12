<template>
    <div class="container-fluid">

        <!-- End Row -->
        <div class="row">
            <div class="col-12">
                <h4 class="d-inline">对于redis的监控</h4>
                <p class="text-muted">This is 3 column contents</p>
                <div class="row">
                    <div class="col-md-6 col-lg-3" v-for="redisCol in redisCols" :key="redisCol.key">
                        <div class="card">
                            <div class="chart-wrapper mb-4">
                                <div class="px-4 pt-4 d-flex justify-content-between">
                                    <div>
                                        <h4>{{ redisCol.key }}</h4>
                                        <p>Last 6 Month</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-top pt-4">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div>
                                            <h5>数据条数</h5>
                                            <h3>{{ redisCol.length }}</h3>
                                        </div>
                                        <div>
                                            <h5>数据类型</h5>
                                            <h3>{{ redisCol.type }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card">
                            <div class="chart-wrapper mb-4">
                                <div class="px-4 pt-4 d-flex justify-content-between">
                                    <div>
                                        <h4>Mongo</h4>
                                        <p>Last 6 Month</p>
                                    </div>
                                    <div>
                                        <span><i class="fa fa-caret-up text-success"></i></span>
                                        <h4 class="d-inline-block text-success">720</h4>
                                        <p class=" text-danger">+120.5(5.0%)</p>
                                    </div>
                                </div>
                                <div>
                                    <canvas id="mongo-line"></canvas>
                                </div>
                            </div>
                            <div class="card-body border-top pt-4">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul>
                                            <li>5% Negative Feedback</li>
                                            <li>95% Positive Feedback</li>
                                        </ul>
                                        <div>
                                            <h5>Customer Feedback</h5>
                                            <h3>385749</h3>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <canvas id="mongo-pie"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {redisInfo} from "../../api";

    export default {
        name: "RedisMonitor",
        data() {
            return {
                redisCols: null
            }
        },
        methods: {
            getRedis() {
                redisInfo({params: {}}).then(response => {
                    if (response.status === 200) {
                        this.redisCols = response.data.results;
                        self.console.log(this.redisCols);
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
        },
        created() {
            this.getRedis()
        }
    }
</script>

<style scoped>

</style>
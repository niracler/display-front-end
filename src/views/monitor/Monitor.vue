<template>
    <div class="container-fluid">

        <!-- End Row -->
        <div class="row">
            <div class="col-12">
                <h4 class="d-inline">对于mongodb的监控</h4>
                <p class="text-muted">This is 3 column contents</p>
                <div class="row">
                    <div class="col-md-6 col-lg-3" v-for="mongoCol in mongoCols" :key="mongoCol.name">
                        <div class="card">
                            <div class="chart-wrapper mb-4">
                                <div class="px-4 pt-4 d-flex justify-content-between">
                                    <div>
                                        <h4>{{ mongoCol.name }}</h4>
                                        <p>Last 6 Month</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-top pt-4">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div>
                                            <h5>数据条数</h5>
                                            <h3>{{ mongoCol.count }}</h3>
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
    import Chart from 'chart.js'
    import {mongoInfo} from "../../api";

    export default {
        name: "Monitor",
        data() {
            return {
                mongoCols: null
            }
        },
        mounted() {
            var ctx1 = document.getElementById("mongo-line");
            new Chart(ctx1, {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "test1",
                            backgroundColor: "rgba(225,10,10,0.3)",
                            borderColor: "rgba(225,103,110,1)",
                            borderWidth: 1,
                            pointStrokeColor: "#fff",
                            pointStyle: "crossRot",
                            data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
                            cubicInterpolationMode: "monotone",
                            spanGaps: "false",
                            fill: "false"
                        }
                    ]
                },
                options: {}
            });

            //pie chart
            var ctx2 = document.getElementById("mongo-pie");
            ctx2.height = 400;
            new Chart(ctx2, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: [
                            "rgba(117, 113, 249,0.9)",
                            "rgba(117, 113, 249,0.7)",
                            "rgba(117, 113, 249,0.5)",
                            "rgba(144,	104,	190,0.7)"
                        ],
                        hoverBackgroundColor: [
                            "rgba(117, 113, 249,0.9)",
                            "rgba(117, 113, 249,0.7)",
                            "rgba(117, 113, 249,0.5)",
                            "rgba(144,	104,	190,0.7)"
                        ]
                    }],
                    labels: [
                        "green",
                        "green",
                        "green"
                    ]
                },
                options: {
                    responsive: true
                }
            });
        },
        methods: {
            getMongo() {
                mongoInfo({params: {}}).then(response => {
                    if (response.status === 200) {
                        this.mongoCols = response.data.results;
                        self.console.log(this.mongoCols);
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
        },
        created() {
            this.getMongo()
        }
    }
</script>

<style scoped>

</style>
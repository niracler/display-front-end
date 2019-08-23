<template>
    <div>
        <div class="card my-4">
            <div class="card-body">
                <div class="media align-items-center mb-4">
                    <img class="mr-3" src="/images/avatar/11.png" width="80" height="80" alt="">
                    <div class="media-body">
                        <h3 class="mb-0">Pikamy Cha</h3>
                        <p class="text-muted mb-0">Canada</p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col">
                        <div class="card card-profile text-center">
                            <span class="mb-1 text-primary"><i class="icon-people"></i></span>
                            <h3 class="mb-0">263</h3>
                            <p class="text-muted px-4">Following</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-profile text-center">
                            <span class="mb-1 text-warning"><i class="icon-user-follow"></i></span>
                            <h3 class="mb-0">263</h3>
                            <p class="text-muted">Followers</p>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-danger px-5">Follow Now</button>
                    </div>
                </div>

                <h4>About Me</h4>
                <p class="text-muted">Hi, I'm Pikamy, has been the industry standard dummy text ever since the
                    1500s.</p>
                <ul class="card-profile__info">
                    <li class="mb-1"><strong class="text-dark mr-4">Mobile</strong> <span>01793931609</span>
                    </li>
                    <li><strong class="text-dark mr-4">Email</strong> <span>name@domain.com</span></li>
                </ul>
            </div>
        </div>

        <!-- Pie Chart -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Pie chart</h4>
                <canvas id="pieChart" width="500" height="250"></canvas>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Rader chart</h4>
                <canvas id="radarChart" width="500" height="250"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountSideBar",
        mounted() {
            //pie chart
            var ctx2 = document.getElementById("pieChart");
            ctx2.height = 400;
            var myChart2 = new Chart(ctx2, {
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

            var ctx3 = document.getElementById("radarChart");
            ctx3.height = 500;
            var myChart3 = new Chart(ctx3, {
                type: 'radar',
                data: {
                    labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            data: [65, 59, 66, 45, 56, 55, 40],
                            borderColor: "rgba(117, 113, 249, 0.6)",
                            borderWidth: "1",
                            backgroundColor: "rgba(117, 113, 249, 0.4)"
                        },
                        {
                            label: "My Second dataset",
                            data: [28, 12, 40, 19, 63, 27, 87],
                            borderColor: "rgba(117, 113, 249, 0.7",
                            borderWidth: "1",
                            backgroundColor: "rgba(117, 113, 249, 0.5)"
                        }
                    ]
                },
                options: {
                    legend: {
                        position: 'top'
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>
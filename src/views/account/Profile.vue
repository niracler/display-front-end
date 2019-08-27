<template>

    <div class="my-4">
        <div class="card">
            <div class="card-body">
                <form action="#" class="form-profile">
                    <div class="form-group">
                        <textarea class="form-control" name="textarea" id="textarea" cols="30" rows="2"
                                  placeholder="Post a new message">
                        </textarea>
                    </div>
                    <div class="d-flex align-items-center">
                        <ul class="mb-0 form-profile__icons">
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-user"></i></button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-paper-plane"></i>
                                </button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-camera"></i>
                                </button>
                            </li>
                            <li class="d-inline-block">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-smile"></i>
                                </button>
                            </li>
                        </ul>
                        <button class="btn btn-primary px-3 ml-4">Send</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Custom Tab 1</h4>
                <!-- Nav tabs -->
                <div class="custom-tab-1">
                    <ul class="nav nav-tabs mb-3">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#home1">动态</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile1">最新评论</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#contact1">
                                热门
                            </a>
                        </li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#message1">消息</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="home1" role="tabpanel">
                            <div class="p-t-15">
                                <h4>This is home title</h4>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile1">
                            <div class="p-t-15">
                                <h4>This is profile title</h4>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                    stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.</p>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                    stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.</p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact1">
                            <div class="p-t-15">
                                <h4>This is contact title</h4>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="message1">
                            <div class="p-t-15">
                                <h4>This is message title</h4>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                    stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.</p>
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                    stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Line Chart -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Line chart</h4>
                <canvas id="lineChart" width="500" height="250"></canvas>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="media media-reply">
                    <img class="mr-3 circle-rounded" src="/images/avatar/2.jpg" width="50" height="50"
                         alt="Generic placeholder image">
                    <div class="media-body">
                        <div class="d-sm-flex justify-content-between mb-2">
                            <h5 class="mb-sm-0">Milan Gbah <small class="text-muted ml-3">about 3 days
                                ago</small></h5>
                            <div class="media-reply__link">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i>
                                </button>
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i>
                                </button>
                                <button class="btn btn-transparent text-dark font-weight-bold p-0 ml-2">Reply
                                </button>
                            </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                            faucibus.</p>
                        <ul>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/2.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/3.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/4.jpg" alt=""></li>
                            <li class="d-inline-block"><img class="rounded" width="60" height="60"
                                                            src="/images/blog/1.jpg" alt=""></li>
                        </ul>

                        <div class="media mt-3">
                            <img class="mr-3 circle-rounded circle-rounded" src="/images/avatar/4.jpg" width="50"
                                 height="50" alt="Generic placeholder image">
                            <div class="media-body">
                                <div class="d-sm-flex justify-content-between mb-2">
                                    <h5 class="mb-sm-0">Milan Gbah <small class="text-muted ml-3">about 3 days
                                        ago</small></h5>
                                    <div class="media-reply__link">
                                        <button class="btn btn-transparent p-0 mr-3"><i
                                                class="fa fa-thumbs-up"></i></button>
                                        <button class="btn btn-transparent p-0 mr-3"><i
                                                class="fa fa-thumbs-down"></i></button>
                                        <button class="btn btn-transparent p-0 ml-3 font-weight-bold">Reply
                                        </button>
                                    </div>
                                </div>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                    congue felis in faucibus.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="media media-reply">
                    <img class="mr-3 circle-rounded" src="/images/avatar/2.jpg" width="50" height="50"
                         alt="Generic placeholder image">
                    <div class="media-body">
                        <div class="d-sm-flex justify-content-between mb-2">
                            <h5 class="mb-sm-0">Milan Gbah <small class="text-muted ml-3">about 3 days
                                ago</small></h5>
                            <div class="media-reply__link">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i>
                                </button>
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i>
                                </button>
                                <button class="btn btn-transparent p-0 ml-3 font-weight-bold">Reply</button>
                            </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                            faucibus.</p>
                    </div>
                </div>

                <div class="media media-reply">
                    <img class="mr-3 circle-rounded" src="/images/avatar/2.jpg" width="50" height="50"
                         alt="Generic placeholder image">
                    <div class="media-body">
                        <div class="d-sm-flex justify-content-between mb-2">
                            <h5 class="mb-sm-0">Milan Gbah <small class="text-muted ml-3">about 3 days
                                ago</small></h5>
                            <div class="media-reply__link">
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i>
                                </button>
                                <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i>
                                </button>
                                <button class="btn btn-transparent p-0 ml-3 font-weight-bold">Reply</button>
                            </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                            faucibus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: "Profile",
        methods: {

        },
        mounted() {
            var ctx1 = document.getElementById("lineChart");
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
        }


    }
</script>

<style scoped>
</style>
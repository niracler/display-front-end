<template>
    <!-- Sidebar Widgets Column -->
    <div class="col-md-4">
        <!-- Search Widget -->
        <div class="card my-4">
            <h5 class="card-header">Search</h5>
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

        <!-- Categories Widget -->
        <div class="card my-4">
            <div class="card-header">Category</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3" v-for="category in categories">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#">
                                    {{ category.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Side Widget -->
        <div class="card my-4">
            <h5 class="card-header">Side Widget</h5>
            <div class="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature
                the new Bootstrap 4 card containers!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                categories: null
            }
        },
        mounted() {
            axios
                .get('http://plrom.niracler.com:8000/api/category/')
                .then(response => (this.categories = response.data))
                .catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
        }
    }
</script>

<style scoped>

</style>
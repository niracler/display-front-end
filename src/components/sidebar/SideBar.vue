<template>
    <!-- Sidebar Widgets Column -->
    <div>
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
        <div class="card">
            <h5 class="card-header">Category</h5>
            <div class="card-body">
                <div class=" bootstrap-label">
                    <router-link class="p-1" :to="{name:'article', query:{ category:category.id }}" v-for="category in categories" :key='category.id'>
                           <span :class="'label '+ label_colors[category.id%8]">{{ category.name }}</span>
                    </router-link>
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
    import axios from 'axios'

    export default {
        name: "SideBar",
        data() {
            return {
                categories: null,
                label_colors: [
                    "label-primary",
                    "label-secondary",
                    "label-success",
                    "label-danger",
                    "label-warning",
                    "label-info",
                    "label-light",
                    "label-dark",
                ],
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
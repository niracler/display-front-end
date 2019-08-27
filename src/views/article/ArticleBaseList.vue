<template>
    <div id="article-base-list">

        <!-- Blog Post -->
        <div class="card mb-4" v-for="article in articles" :key='article.id'>
            <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <p class="card-text">
                    {{ article.content | msgFormat }}
                </p>
                <router-link :to="{ name:'detail', params:{ id:article.id, name:article.title } }"
                             class="btn btn-primary">
                    Read More &rarr;
                </router-link>
            </div>
            <div class="card-footer text-muted">
                Posted on {{ article.publish_time | timeFormat }} by
                <router-link :to="{name:'article', query:{ website_name:article.website_name }}">
                    {{ article.website_name }}
                </router-link>

                <router-link class="p-1 float-right" :to="{name:'article', query:{ tags:tag.id }}"
                             v-for="tag in article.tags" :key='tag.id'>
                    <span :class="'label '+ label_colors[tag.id%8]">{{ tag.name }}</span>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ArticleBaseList",
        props: {
            articles: Array,
        },
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
        //这里放的是局部的过滤器
        filters: {
            timeFormat: function (dateStr) {
                var dt = new Date(dateStr);

                var y = dt.getFullYear();
                var m = dt.getMonth();
                var d = dt.getDay();
                var hh = dt.getHours();
                var mm = dt.getMinutes();
                var ss = dt.getSeconds();

                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        }
    }
</script>

<style scoped>

</style>
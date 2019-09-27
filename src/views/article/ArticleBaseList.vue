<template>
    <div class="accordion" id="article-base-list">

        <!-- Blog Post -->
        <div class="card mb-4" v-for="article in articles" :key='article.id'>

            <div class="card-body">

                <h2 class="card-title collapsed" :id="'heading'+article.id"
                    data-toggle="collapse"
                    :data-target="'#collapse'+article.id"
                    aria-expanded="false"
                    :aria-controls="'collapse'+article.id">
                    {{ article.title }}
                </h2>

                <p class="card-text">
                    {{ article.content | msgFormat }}
                </p>

                <!--  隐藏的部分 -->
                <div :id="'collapse'+article.id" class="collapse" :aria-labelledby="'heading'+article.id"
                     data-parent="#article-base-list">
                    <div class="container py-2">

                        <div class="card-title">
                            <h4>Latest News</h4>
                        </div>

                        <ul>
                            <li>hello8ashdcoaschiopasch</li>
                            <li>hello8ashdcoaschiopasch</li>
                            <li>hello8ashdcoaschiopasch</li>
                            <li>hello8ashdcoaschiopasch</li>
                            <li>hello8ashdcoaschiopasch</li>
                            <li>hello8ashdcoaschiopasch</li>
                        </ul>

                    </div>
                    <a class="btn btn-primary" :href="article.url">
                        原文 &rarr;
                    </a>
                </div>
            </div>

            <div class="card-footer text-muted">
                Posted on {{ article.publish_time | dateStr }} by
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
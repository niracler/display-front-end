<template>
    <div class="accordion" id="event-base-list">

        <!-- Blog Post -->
        <div class="card mb-4" v-for="event in events" :key='event.id'>

            <div class="card-body">

                <h2 class="card-title collapsed" :id="'heading'+event.id"
                    data-toggle="collapse"
                    :data-target="'#collapse'+event.id"
                    aria-expanded="false"
                    :aria-controls="'collapse'+event.id">
                    {{ event.latest.title }}
                </h2>

                <p class="card-text">
                    {{ event.latest.content | msgFormat }}
                </p>

                <!--  隐藏的部分 -->
                <div :id="'collapse'+event.id" class="collapse" :aria-labelledby="'heading'+event.id"
                     data-parent="#event-base-list">
                    <div class="container py-2">

                        <div class="card-title">
                            <h4>Latest News</h4>
                        </div>

                        <ul>
                            <li class="nowrap" v-for="article in event.articles.slice(0, 15)" :key='article.id' >
                                <a :href="article.url">{{ article.time | dateStr }} {{ article.title }} </a>
                            </li>
                        </ul>

                    </div>
                    <a class="btn btn-primary" :href="'/event/'+event.id">
                        事件详情 &rarr;
                    </a>
                </div>
            </div>

            <div class="card-footer text-muted">
                Posted on {{ event.latest.publish_time | dateStr }} by
                <router-link :to="{name:'article', query:{ website_name:event.latest.website_name }}">
                    {{ event.latest.website_name }}
                </router-link>

                <router-link class="p-1 float-right" :to="{name:'article', query:{ tags:tag.id }}"
                             v-for="tag in event.latest.tags" :key='tag.id'>
                    <span :class="'label '+ label_colors[tag.id%8]">{{ tag.name }}</span>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "EventBaseList",
        props: {
            events: Array,
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
                let dt = new Date(dateStr);
                let y = dt.getFullYear();
                let m = dt.getMonth();
                let d = dt.getDay();
                let hh = dt.getHours();
                let mm = dt.getMinutes();
                let ss = dt.getSeconds();

                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        }
    }
</script>

<style scoped>

</style>
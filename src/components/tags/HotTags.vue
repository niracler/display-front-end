<template>
    <div class=" bootstrap-label">
        <router-link class="p-1" :to="{name:'article', query:{ tags:tag.id }}"
                     v-for="tag in tags" :key='tag.id'>
            <span :class="'label '+ label_colors[tag.id%8]">{{ tag.name }}</span>
        </router-link>
    </div>
</template>

<script>
    import {tagList} from "../../api";
    import {label_colors} from "../../main";

    export default {
        name: "HotTags",
        data() {
            return {
                tags: null,
                label_colors: label_colors
            }
        },
        mounted() {
            tagList({params: {ordering: '-num_times'}})
                .then(response => (this.tags = response.data.results))
                .catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
        },
    }
</script>

<style scoped>

</style>
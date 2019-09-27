<template>
    <div class="input tags-wrap">
        <div class="tags" transition="tags" :class="'label '+ label_colors[tag.id%8]" v-for="(tag, index) in tags" :key="index">
            <span class="content">{{tag.name}}</span><span class="del" @click="del(index, false)">&times;</span>
        </div>
        <input class="tags-input" type="text" placeholder="标签，按 enter 创建" v-model="text" @keyup.enter="add(text)"
               @keydown.delete="del(tags.length - 1, true)">
    </div>
</template>

<script>
    import {label_colors} from "../../main";

    export default {
        name: "TagsInput",
        props: {
            tags: Array,
        },
        data() {
            return {
                text: '',
                label_colors: label_colors
            }
        },
        methods: {
            add(text) {
                if (text !== '') {
                    this.tags.push({
                        name: text,
                        id: Math.ceil(Math.random() * 10) - 1
                    });
                    this.text = ''
                }
            },
            del(index, way) {
                if(way){
                    if(index >=0 && this.text === ''){
                        this.tags.splice(index, 1);
                    }
                }else {
                    this.tags.splice(index, 1);
                }
            }
        },
        created() {
            self.console.log(this.tags);
        }
    }
</script>

<style scoped>
    .tags, .tags-input{
        position: relative;
        float: left;
        color: #fff;
        line-height: 28px;
        margin: 0 4px 4px 0;
        padding: 0 22px 0 10px;
        border-radius: 6px;
    }
    .content{
        line-height: 28px;
    }
    .del{
        width: 22px;
        height: 28px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        top: -1px;
        right: 0;
    }
    .tags-input{
        font-size: 14px;
        padding: 0;
        background-color: inherit;
        border: none;
        color: inherit;
        width: 10em;
    }
</style>
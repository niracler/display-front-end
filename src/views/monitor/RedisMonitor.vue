<template>

</template>

<script>
    import {redisInfo} from "../../api";

    export default {
        name: "RedisMonitor",
        data() {
            return {
                redisCols: null
            }
        },
        methods: {
            getRedis() {
                redisInfo({params: {}}).then(response => {
                    if (response.status === 200) {
                        this.redisCols = response.data.results;
                        self.console.log(this.redisCols);
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
        },
        created() {
            this.getRedis()
        }
    }
</script>

<style scoped>

</style>
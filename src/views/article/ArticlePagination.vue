<template>
    <div id="article-pagination">
        <!-- Pagination -->
        <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
                <a class="page-link" :href="pre">
                    &larr; Older
                </a>
            </li>

            <li class="page-item">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>

            <li class="page-item">
                <a class="page-link" :href="next">
                    Newer &rarr;
                </a>
            </li>
        </ul>

        <ul class="pagination justify-content-center mb-4" v-if="totalPage > 0">
            <li class="page-item" v-show="currentPage > 1 && showPrev" @click="go(currentPage - 1)">
                <a class="page-link">上一页</a>
            </li>
            <li class="page-item" :class="{active: currentPage === 1}" @click="go(1)">
                <a class="page-link">1</a>
            </li>
            <strong v-show="pages[0] > 2">
                <a class="page-link">...</a>
            </strong>
            <li class="page-item" v-for="page in pages" :class="{active: currentPage === page}"
                @click="go(page)" :key="page">
                <a class="page-link">{{page}}</a>
            </li>

            <strong v-show="pages[pages.length-1] < totalPage - 1">
                <a class="page-link">...</a>
            </strong>

            <li class="page-item" v-if="totalPage > 1" :class="{active: currentPage === totalPage}"
                @click="go(totalPage)">
                <a class="page-link">{{totalPage}}</a>
            </li>

            <li class="page-item" v-show="currentPage < totalPage && showNext" @click="go(currentPage + 1)">
                <a class="page-link">下一页</a>
            </li>

        </ul>
        <form class="form-inline justify-content-center">
            跳至
            <div class="form-group mx-sm-3 mb-2">
                <label class="sr-only">页数</label>
                <input type="number" min="1" :max="totalPage" v-model="jumpPage" class="form-control-sm" placeholder="页数">
            </div>
            <a class="btn mb-1 btn-primary btn-xs text-white" @click="go(jumpPage)">确定</a>
        </form>


    </div>

</template>

<script>
    export default {
        name: "ArticlePagination",
        props: {
            next: String,
            pre: String,
            totalPage: { // 总页数
                type: Number,
                default: 1,
                required: true
            },
            showItems: { // 显示出来的页数，如: 1 ... 34[5]67 ... 10
                type: Number,
                default: 3
            },
            showPrev: { // 是否显示“上一页”
                type: Boolean,
                default: true
            },
            showNext: { // 是否显示“下一页”
                type: Boolean,
                default: true
            },
            showJump: { // 是否显示“跳转”
                type: Boolean,
                default: true
            },
            initPage: {
                type: Number,
                default: 1,
            }
        },
        data() {
            return {
                query: this.$route.query,
                currentPage: 0,
                jumpPage: 0,
            }
        },
        created() {// 初始化时currentPage赋值
            this.currentPage = this.initPage;
        },
        methods: {
            go(page) {
                if (page < 1) {
                    page = 1
                }
                if (page > this.totalPage) {
                    page = this.totalPage
                }
                if (page === this.currentPage) {
                    return
                }
                this.currentPage = parseInt(page, 10);
                this.$emit('go-page', {
                    page: this.currentPage
                })
            },
        },
        watch: {
            currentPage(newVal) {
                this.jumpPage = newVal;
            },
            initPage(newVal) {
                if (this.currentPage !== newVal) {
                    this.currentPage = newVal
                }
            },

        },
        computed: {
            pages() {
                self.console.log("hello3");
                // 根据起始页码和结束页码得到页码数组
                let getPages = (start, end) => {
                    if (start <= 1 || start > end || start >= this.totalPage) {
                        start = 2
                    }
                    if (end >= this.totalPage || end < start || end <= 1) {
                        end = this.totalPage - 1
                    }
                    let arr = [];
                    for (let i = start; i <= end; i++) {
                        arr.push(i)
                    }
                    return arr
                };
                let counts = this.showItems;
                if (this.totalPage < counts + 2) {
                    return getPages(2, this.totalPage)
                } else {
                    if (this.currentPage <= Math.ceil(counts / 2)) {
                        return getPages(2, counts)
                    } else if (this.currentPage >= this.totalPage - Math.floor(counts / 2)) {
                        return getPages(this.totalPage + 1 - counts, this.totalPage - 1)
                    } else {
                        let half = Math.ceil(counts / 2) - 1;
                        let end = this.currentPage + half;
                        if (counts % 2 === 0) {
                            end++
                        }
                        return getPages(this.currentPage - half, end)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
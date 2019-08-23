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
                <a class="page-link" :href="next">
                    Newer &rarr;
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ArticlePagination",
        props: {
            next: String,
            pre: String,
        },
        data() {
            return {
                query: this.$route.query
            }
        },
    }
</script>

<style scoped>

</style>
<template>
    <div id="article-search-result">
        <div class="article" v-for="article in articles" :key="'article-search-result-' + article.id">
            <ArticleSearchItem :article="article" @toArticleView="toArticleView"/>
        </div>
    </div>
</template>

<script>
    import ArticleSearchItem from "../components/ArticleSearchItem";

    export default {
        name: "ArticleSearchResult",
        components: {ArticleSearchItem},
        data() {
            return {
                keyword: '',
                articles: [
                    {
                        id: '111111111111',
                        title: '文件标题',
                        fragment: '<em>高亮块</em>',
                        viewCount: 100,
                        articleType: '前端',
                        publishTime: '2019-02-20 12:22:32'
                    }
                ]
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.handleSearch(to);
            next() // 一定要有next
        },
        methods: {
            // 执行搜索
            handleSearch(to) {
                this.keyword = to.query.keyword
            },
            // 前往文章详情页面
            toArticleView(id) {
                this.$router.push({name:'ArticleView', query: {id: id}});
            }
        }
    }
</script>

<style scoped>
    #article-search-result {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #article-search-result .article {
        display: flex;
        border-bottom: 1px solid #E4E7ED;
        padding: 10px 0;
    }

</style>
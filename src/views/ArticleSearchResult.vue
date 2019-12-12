<template>
    <div id="article-search-result">
        <div class="article" v-for="article in articles" :key="'article-search-result-' + article.id">
            <ArticleSearchItem :article="article" @toArticleView="toArticleView(article.id)"/>
        </div>
        <div v-show="articles.length === 0" class="not-found">
            <p>无任何结果</p>
        </div>
    </div>
</template>

<script>
    import ArticleSearchItem from "@/components/ArticleSearchItem";
    import apiArticle from '@/assets/api/library/api.article';

    export default {
        name: "ArticleSearchResult",
        components: {ArticleSearchItem},
        data() {
            return {
                page: 1,
                articles: []
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.articles = [];
            this.handleSearch(to);
            next() // 一定要有next
        },
        methods: {
            // 执行搜索
            handleSearch(to) {
                let q = '';
                let category = '';
                let column = '';

                if (to.query["q"]) {
                    q = to.query.q;
                }
                if (to.query["category"]) {
                    category = to.query.category;
                }
                if (to.query["column"]) {
                    column = to.query.column;
                }

                apiArticle.list(q, this.page, category, column).then(data => {
                    if (null !== data && data.length > 0) {
                        this.articles = data;
                        this.articles.forEach(item => {
                            item["visible"] = true;
                        })
                    }
                });
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

    .not-found {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }

</style>
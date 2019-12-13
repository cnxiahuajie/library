<template>
    <div id="article-search-result" v-loading="searching">
        <el-card class="article" shadow="hover" v-for="article in articles" :key="article.id">
            <ArticleSearchItem :article="article" @toArticleView="toArticleView(article.id)"/>
        </el-card>
        <div v-show="noneResult" class="not-found">
            <p>未搜索到&nbsp;[<strong>{{q}}</strong>]&nbsp;相关的内容</p>
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
                noneResult: false,
                searching: false,
                q: '',
                page: 0,
                articles: []
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.searching = true;
            this.articles = [];
            this.q = to.query.q;
            this.handleSearch();
            next() // 一定要有next
        },
        created() {
            this.q = this.$route.query.q;
            this.handleSearch();
        },
        methods: {
            // 执行搜索
            handleSearch() {
                apiArticle.list(this.q, this.page).then(data => {
                    if (null !== data && data.length > 0) {
                        this.articles = data;
                        this.articles.forEach(item => {
                            item["visible"] = true;
                        })
                    } else {
                        this.noneResult = true;
                    }
                    this.searching = false;
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
        height: 100%;
        overflow-y: auto;
    }

    #article-search-result .article {
        display: flex;
    }

    .not-found {
        width: 100%;
        height: 100%;
        color: #C0C4CC;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>

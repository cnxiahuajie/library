<template>
    <div id="article-search-result" v-loading="searching">
        <el-page-header @back="goBack" content="搜索结果"></el-page-header>
        <el-card class="article" shadow="never" v-for="article in articles" :key="article.id">
            <div class="article-hover-box-left-top"></div>
            <ArticleSearchItem :article="article" @toArticleView="toArticleView(article.id)"/>
            <div class="article-hover-box-right-bottom"></div>
        </el-card>
        <div v-show="noneResult" class="not-found">
            <p v-if="type === 'keyword'">未搜索到&nbsp;[<strong>{{q}}</strong>]&nbsp;相关的内容</p>
            <p v-else>未搜索到相关的内容</p>
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
                type: '',
                page: 0,
                articles: []
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.searching = true;
            this.articles = [];
            this.q = to.query.q;
            this.type = to.query.type;
            this.handleSearch();
            next() // 一定要有next
        },
        created() {
            this.q = this.$route.query.q;
            this.type = this.$route.query.type;
            this.handleSearch();
        },
        methods: {
            // 返回上一级
            goBack() {
                this.$router.go(-1);
            },
            // 执行搜索
            handleSearch() {
                this.noneResult = false;
                if ('category' === this.type) {
                    apiArticle.listByCategory(this.q, this.page).then(data => {
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
                } else if ('column' ===  this.type) {
                    apiArticle.listByColumn(this.q, this.page).then(data => {
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
                } else {
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
                }
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
        position: relative;
    }

    #article-search-result .article:hover .article-hover-box-left-top {
        color: #606266;
        width: 100%;
        height: 100%;
        transition: width 500ms, height 500ms, color 500ms;
        border-image: -webkit-linear-gradient( red, blue) 30 30;
        border-image: -moz-linear-gradient( red, blue) 30 30;
        border-image: linear-gradient( red, blue) 30 30;
    }

    #article-search-result .article:hover .article-hover-box-right-bottom {
        color: #606266;
        width: 100%;
        height: 100%;
        transition: width 500ms, height 500ms, color 500ms;
        border-image: -webkit-linear-gradient( red, blue) 30 30;
        border-image: -moz-linear-gradient( red, blue) 30 30;
        border-image: linear-gradient( red, blue) 30 30;
    }

    #article-search-result .article-hover-box-left-top {
        border-top: 2px solid;
        border-left: 2px solid;
        position: absolute;
        color: #FFFFFF;
        top: 0;
        left: 0;
        width: 0px;
        height: 0px;
    }

    #article-search-result .article-hover-box-right-bottom {
        border-right: 2px solid;
        border-bottom: 2px solid;
        position: absolute;
        color: #FFFFFF;
        bottom: 0;
        right: 0;
        width: 0px;
        height: 0px;
    }

    #article-search-result .article:not(:first-child) {
        margin-top: 20px;
    }

    .not-found {
        width: 100%;
        height: 100%;
        color: #606266;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>

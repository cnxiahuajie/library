<template>
    <div class="root">
        <div v-if="articles.length === 0" style="margin-top: calc(50vh - 47px); text-align: center;"><p style="font-size: 14px; color: #999;">在左上角进行文章搜索，或者点击右上角的[<span style="font-weight: bold;">捐赠</span>]按钮进行文章捐赠。</p></div>
        <div v-else class="articles" v-for="article in articles" :key="article.id" :id="article.id">
            <div class="article-item">
                <h1 v-text="article.title"></h1>
                <p v-html="article.content"></p>
                <div class="button-group">
                    <a href="#" @click="previewArticle(article.id)">预览</a>
                    <a href="#" @click="markArticle(article.id)">标记</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    export default {
        name: "ArticleListBox",
        data() {
            return {
                page: 1,
                articles: []
            }
        },
        mounted() {
            this.handleSearchArticle();
        },
        methods: {
            // 搜索文章
            handleSearchArticle(query) {
                apiArticle.listArticleByQuery(query, this.page).then(res => {
                    if (res.data.details.content) {
                        this.articles = res.data.details.content;
                    }
                });
            },
            // 预览文章
            previewArticle(id) {
                this.$emit('previewArticle', id);

            },
            // 标记文章
            markArticle(dataId) {
                var articleElementId = 'article_' + dataId;
                var element = document.getElementById(articleElementId);
                if (element.classList.contains('mark')) {
                    element.classList.remove('mark')
                } else {
                    element.classList.add('mark');
                }
            },
            // 文章节点ID生成器
            idGenerator(dataId) {
                return 'article_' + dataId;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root .articles .article-item {
        padding: 0px 10px;
    }

    .root .articles .article-item:not(:first-child) {
        margin-top: 10px;
    }

    .root .articles .article-item .button-group a {
        text-decoration: none;
        font-size: 14px;
    }

    .root .articles .article-item .button-group a:not(:first-child) {
        margin-left: 10px;
    }

    .root .articles .article-item h1 {
        font-size: 18px;
    }

    .root .articles .article-item p {
        max-height: 100px;
        overflow: hidden;
        font-size: 14px;
        text-indent: 2em;
    }

    .mark {
        background-color: #409EFF;
        color: #fff;
    }
</style>
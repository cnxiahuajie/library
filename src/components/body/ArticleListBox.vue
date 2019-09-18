<template>
    <div class="root">
        <div v-show="articles.length === 0 && !articleLoading" style="margin-top: calc(50vh - 47px); text-align: center;">
            <p style="font-size: 14px; color: #999;">在左上角进行文章搜索，或者点击右上角的[<span style="font-weight: bold;">捐赠</span>]按钮进行文章捐赠。</p>
        </div>
        <transition-group name="el-fade-in">
            <div  v-show="articles.length > 0" class="articles" v-for="article in articles" :key="article.id" :id="idGenerator(article.id)">
                <div class="article-item">
                    <h1 v-text="article.title"></h1>
                    <p v-html="article.content"></p>
                    <div class="button-group">
                        <a href="#" @click="previewArticle(article.id)">预览</a>
                        <a href="#" @click="markArticle(article.id)">标记</a>
                    </div>
                </div>
            </div>
        </transition-group>
        <div v-show="articles.length > 0">
            <el-divider>
                <i v-show="!articleLoading" :class="isLastPage ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
                <i v-show="articleLoading" class="el-icon-loading"></i>
            </el-divider>
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
                scroll: 0,
                query: '',
                isLastPage: false,
                articleLoading: false,
                articles: []
            }
        },
        methods: {
            // 清除文章列表
            handleCleanArticles () {
                this.articles = [];
                this.page = 1;
                this.isLastPage = false;
            },
            // 下一页
            nextPage() {
                if (!this.isLastPage) {
                    this.articleLoading = true;
                    this.page++;
                    this.handleSearchArticle(this.query);
                }
            },
            // 搜索文章
            handleSearchArticle(query) {
                this.articleLoading = true;
                if (!(this.query === query)) {
                    this.handleCleanArticles();
                }
                this.query = query;
                apiArticle.listArticleByQuery(query, this.page).then(res => {
                    if (res.data.details.content) {
                        this.isLastPage = res.data.details.last;
                        for (let i = 0, len = res.data.details.content.length; i < len; i++) {
                            this.articles.push(res.data.details.content[i]);
                        }
                        this.articleLoading = false;
                    }
                }, err => { this.articleLoading = false; });
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
        padding: 10px;
        border-bottom: 1px #ccc dashed;
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
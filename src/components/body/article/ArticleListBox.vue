<template>
    <div id="article-list-box">
        <transition-group name="el-fade-in">
            <div  v-show="articles.length > 0" class="articles" v-for="article in articles" :key="article.id">
                <div class="article-item" draggable="true" @dragstart="dragstart" @drag='draging' @dragend="dragend(article.id)" :id="article.id">
                    <h1 v-text="article.title"></h1>
                    <p v-html="article.content"></p>
                </div>
            </div>
        </transition-group>
        <div v-show="articles.length > 0">
            <el-divider>
                <i v-show="!articleLoading" :class="isLastPage ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
                <i v-show="articleLoading" class="el-icon-loading"></i>
            </el-divider>
        </div>

        <el-dialog
                class="article-help-dialog"
                :visible.sync="helpDialogVisible"
                :close-on-click-modal="false"
                :before-close="handleCloseHelpDialog"
                width="30%"
                center>
            <span slot="title">
                <i class="el-icon-more"></i>
            </span>
            <div>
                <em>
                    <img src="@/assets/images/trash.png"/>
                </em>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    let clickDelay = 0
    let SENSITIVITY = 20;

    export default {
        name: "ArticleListBox",
        data() {
            return {
                helpDialogVisible: false,
                page: 0,
                scroll: 0,
                query: '',
                isLastPage: false,
                articleLoading: false,
                // 搜索状态[0=未搜索/1=搜索中/2=搜索结束]
                searchStatus: '0',
                articles: []
            }
        },
        methods: {
            handleResetClickDelay() {
                clickDelay = 0;
            },
            handleCloseHelpDialog(done) {
                done();
            },
            dragend(e) {
                this.handleResetClickDelay();
            },
            draging(e) {
                if (clickDelay < SENSITIVITY) {
                    clickDelay++;
                    if (clickDelay == SENSITIVITY) {
                        this.helpDialogVisible = true;
                    }
                }
            },
            dragstart(e) {
                this.$store.commit('ARTICLE_ID', e.target.id);
            },
            // 清除文章列表
            handleCleanArticles () {
                this.articles = [];
                this.page = 0;
                this.isLastPage = false;
            },
            // 下一页
            nextPage() {
                if (!this.isLastPage) {
                    this.articleLoading = true;
                    this.page++;
                    this.searchStatus = '1';
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
                apiArticle.listArticleByQuery(query, this.page).then(data => {
                    if (data.content) {
                        this.isLastPage = data.last;
                        for (let i = 0, len = data.content.length; i < len; i++) {
                            this.articles.push(data.content[i]);
                        }
                    }
                    this.articleLoading = false;
                    this.searchStatus = '2';
                }, err => { this.articleLoading = false; this.searchStatus = '2'; });
            },
            // 预览文章
            previewArticle(id) {
                this.$emit('previewArticle', id);

            },
            // 标记文章
            markArticle(dataId) {
                let articleElementId = 'article_' + dataId;
                let element = document.getElementById(articleElementId);
                if (element.classList.contains('mark')) {
                    element.classList.remove('mark')
                } else {
                    element.classList.add('mark');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #article-list-box .articles .article-item {
        padding: 10px;
        border-bottom: 1px #ccc dashed;
    }

    #article-list-box .articles .article-item .button-group a {
        text-decoration: none;
        font-size: 12px;
    }

    #article-list-box .articles .article-item .button-group a:not(:first-child) {
        margin-left: 10px;
    }

    #article-list-box .articles .article-item h1 {
        font-size: 16px;
    }

    #article-list-box .articles .article-item p {
        max-height: 100px;
        overflow: hidden;
        font-size: 12px;
        text-indent: 2em;
    }

    #article-list-box .article-help-dialog div {
        text-align: center;
    }

    #article-list-box .article-help-dialog div img {
        border: 1px solid #999;
        padding: 10px;
        border-radius: 10%;
        transition: box-shadow 500ms;
        -webkit-transition: box-shadow 500ms; /* Safari */
    }

    #article-list-box .article-help-dialog div img:hover {
        box-shadow: 0px 0px 5px #ccc;
    }

</style>
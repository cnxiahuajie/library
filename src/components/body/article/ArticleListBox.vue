<template>
    <div id="article-list-box">
        <transition-group name="el-fade-in">
            <div v-show="articles.length > 0" class="articles" v-for="article in articles" :key="article.id">
                <div class="article-item" :id="article.id" draggable="true" @dragstart="dragstart" @drag='draging'
                     @dragend="dragend(article.id)" @dblclick="handleDoubleClickArticle(article.id)">
                    <h3 v-text="article.title"></h3>
                    <p v-html="article.content"></p>
                </div>
            </div>
            <div v-show="articleNotFound" class="tip" key="articleNotFound">
                <p>什么都没找到。</p>
            </div>
            <div v-show="doSomething" class="tip" key="doSomething">
                <p>当你迷茫的时候，不妨搜一下[<strong>帮助中心</strong>]</p>
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
                    <img src="@/assets/images/trash.png" @click="handleRemoveArticle"/>
                </em>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    export default {
        name: "ArticleListBox",
        data() {
            return {
                doSomething: true,
                articleNotFound: false,
                isStopOpenHelp: false,
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
            // 双击文章打开更多操作
            handleDoubleClickArticle(id) {
                if (this.$store.state.unlock == 1) {
                    this.$store.commit('ARTICLE_ID', id);
                    this.helpDialogVisible = true
                }
            },
            // 删除文章
            handleRemoveArticle() {
                let that = this;
                this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    apiArticle.removeArticle(that.$store.state.articleId).then(res => {
                        that.helpDialogVisible = false;
                        that.$emit('handleCleanArticle');
                        if (that.articles) {
                            that.articles.forEach((item, i) => {
                                if (item.id == that.$store.state.articleId) {
                                    that.articles.splice(i, 1);
                                }
                            })
                        }
                    });
                }).catch(() => {
                });
            },
            handleCloseHelpDialog(done) {
                done();
            },
            dragend(e) {
            },
            draging(e) {
            },
            dragstart(e) {
                this.$store.commit('ARTICLE_ID', e.target.id);
            },
            // 清除文章列表
            handleCleanArticles() {
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
                this.doSomething = false;
                this.articleLoading = true;
                if (!(this.query == query)) {
                    this.handleCleanArticles();
                }
                this.query = query;
                apiArticle.listArticleByQuery(query, this.page).then(data => {
                    if (data.content) {
                        this.isLastPage = data.last;
                        for (let i = 0, len = data.content.length; i < len; i++) {
                            this.articles.push(data.content[i]);
                        }
                        if (data.content.length > 0) {
                            this.articleNotFound = false;
                        } else {
                            this.articleNotFound = true;
                        }
                    } else {
                        this.articleNotFound = true;
                    }
                    this.articleLoading = false;
                    this.searchStatus = '2';
                }, err => {
                    this.articleLoading = false;
                    this.searchStatus = '2';
                });
            },
            // 预览文章
            previewArticle(id) {
                this.$emit('previewArticle', id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #article-list-box .articles .article-item {
        padding: 10px;
        border-bottom: 1px #ccc dashed;
        transition: box-shadow 500ms;
        -moz-transition: box-shadow 500ms; /* Firefox 4 */
        -webkit-transition: box-shadow 500ms; /* Safari 和 Chrome */
        -o-transition: box-shadow 500ms; /* Opera */
    }

    #article-list-box .articles .article-item:hover {
        box-shadow: 0 0 5px #ccc;
    }

    #article-list-box .articles .article-item .button-group a {
        text-decoration: none;
        font-size: 12px;
    }

    #article-list-box .articles .article-item .button-group a:not(:first-child) {
        margin-left: 10px;
    }

    #article-list-box .articles .article-item h3 {
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

    .tip {
        text-align: center;
        font-size: 14px;
        color: #ccc;
        p {
            margin-top: calc(50% - 14px);
        }
    }

</style>
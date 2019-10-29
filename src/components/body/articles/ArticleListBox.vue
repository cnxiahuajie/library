<template>
    <div id="article-list-box">
        <transition name="el-fade-in">
            <div class="article-container" v-show="articles.length > 0">
                <div class="article" v-for="article in articles" :key="article.id" :id="article.id" draggable="true" @dragstart="dragstart" @drag='draging'
                     @dragend="dragend(article.id)" @dblclick="handleDoubleClickArticle(article.id, article.authorVO.email, article.authorId)">
                    <div class="content">
                        <div class="main">
                            <h3 class="header" v-text="article.title"></h3>
                            <p class="article-content" v-html="article.content"></p>
                        </div>
                    </div>
                    <div class="foot" v-show="article.articleCategories">
                        <div class="author-info">
                            <span class="item"><i class="el-icon-s-custom"></i></span>
                            <span class="item" v-text="article.authorVO.name"></span>
                            <span class="item"><i class="el-icon-message"></i></span>
                            <span class="item" v-text="article.authorVO.email"></span>
                        </div>
                        <div class="tag-container">
                            <el-tooltip class="item" effect="dark" :content="category.name" placement="top" v-for="category in article.articleCategories" v-bind:key="category.id">
                                <div class="tag-point" :style="'background-color:' + category.colorCode"></div>
                            </el-tooltip>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <el-divider v-show="articles.length > 0">
                        <i v-show="!articleLoading" :class="isLastPage ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
                        <i v-show="articleLoading" class="el-icon-loading"></i>
                    </el-divider>
                </div>
            </div>
        </transition>

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
    import apiArticle from '@/assets/api/api.article';

    const NOT_SEARCH = 0;
    const SEARCHING = 1;
    const SEARCHED = 2;

    export default {
        name: "ArticleListBox",
        props: {
            query: String
        },
        watch: {
            query() {
                if (NOT_SEARCH === this.searchStatus || SEARCHED === this.searchStatus) {
                    this.searchStatus = SEARCHING;
                    this.handleSearchArticle(this.query);
                }
            }
        },
        data() {
            return {
                reminder: true,
                articleNotFound: false,
                helpDialogVisible: false,
                page: 0,
                scroll: 0,
                // 是否是最后一页
                isLastPage: false,
                // 是否正在加载文章列表
                articleLoading: false,
                // 搜索状态[0=未搜索/1=搜索中/2=搜索结束]
                searchStatus: NOT_SEARCH,
                articles: []
            }
        },
        methods: {
            // 双击文章打开更多操作
            handleDoubleClickArticle(id, email, authorId) {
                if (this.LOCAL_STORAGE_PROXY.getItem('isLogin') == 1 && this.LOCAL_STORAGE_PROXY.getItem('settings').email == email && this.LOCAL_STORAGE_PROXY.getItem('settings').id == authorId) {
                    this.$store.commit('ARTICLE_ID', id);
                    this.helpDialogVisible = true
                } else {
                    this.$message('拖拽文章到右侧区域即可查看，认证通过后可解锁更多功能。');
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
                    apiArticle.removeArticle(that.$store.state.articleId).then(data => {
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
                    this.searchStatus = SEARCHING;
                    this.handleSearchArticle(this.query);
                }
            },
            // 搜索文章
            handleSearchArticle(query) {
                this.articleLoading = true;
                this.reminder = false;
                this.handleCleanArticles();
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
                    this.handleStopSearch();
                }, err => {
                    this.handleStopSearch();
                });
            },
            // 预览文章
            previewArticle(id) {
                this.$emit('previewArticle', id);
            },
            // 停止搜索
            handleStopSearch() {
                let that = this;
                setTimeout(function () {
                    that.articleLoading = false;
                    that.searchStatus = SEARCHED;
                    that.$emit('handleSearched');
                }, 300);
            }
        }
    }
</script>

<style lang="scss" scoped>

    #article-list-box {
        display: flex;

        .article-container {
            display: flex;
            flex-direction: column;

            .article {
                padding: 10px;
                border-bottom: 1px solid #ccc;

                transition: box-shadow 500ms;
                -moz-transition: box-shadow 500ms; /* Firefox 4 */
                -webkit-transition: box-shadow 500ms; /* Safari 和 Chrome */
                -o-transition: box-shadow 500ms; /* Opera */

                .content {
                    display: flex;

                    .main {
                        .header {
                            font-size: 16px;
                        }
                        .article-content {
                            max-height: 100px;
                            overflow: hidden;
                            font-size: 12px;
                            text-indent: 2em;
                            word-break: break-all;
                        }
                    }
                }

                .foot {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;

                    .author-info {
                        .item:nth-child(odd) {
                            margin-left: 10px;
                        }
                    }

                    .author-info, .tag-container {
                        display: flex;
                    }

                    .tag-container {
                        flex-direction: row-reverse;
                    }
                }
            }
        }

        .article:hover {
            box-shadow: 0 0 5px #161616;
        }
    }
</style>
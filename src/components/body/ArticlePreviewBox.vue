<template>
    <div class="root" v-loading="articleLoading">
        <div v-show="!article.content" v-html="defaultContent"></div>
        <div class="article-status" v-show="article.content && !articleLoading">
            <div class="operation-bar">
                <ul>
                    <li style="float: left;">
                        <el-switch
                                v-model="viewMode"
                                active-text="黑暗模式"
                                inactive-text="高亮模式">
                        </el-switch>
                    </li>
                    <li style="float: right;">
                        <el-button type="text" @click="dialogEditArticleVisible = true">编辑</el-button>
                    </li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
        <transition name="el-zoom-in-top">
            <div v-show="article.content" class="article-view" v-html="article.content"></div>
        </transition>

        <el-dialog
                title="编辑文章"
                :visible.sync="dialogEditArticleVisible"
                :before-close="handleEditArticleClose">
            <Edit v-bind:id="article.id" @closeDialogArticleEdit="closeDialogArticleEdit" @articleUpdated="articleUpdated" />
        </el-dialog>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article';
    import Edit from "../../views/article/Edit";

    export default {
        name: "ArticlePreviewBox",
        components: {Edit},
        data() {
            return {
                viewMode: false,
                dialogEditArticleVisible: false,
                // 加载文章
                articleLoading: false,
                // 默认内容
                defaultContent: '<div style="margin-top: calc(50vh - 47px); text-align: center;"><p style="font-size: 14px; color: #999;">这里什么也没有，赶快预览文章吧！</p></div>',
                // 文章信息
                article: {
                    id: '',
                    content: null,
                    upCount: 0,
                    downCount: 0
                }
            }
        },
        watch: {
            viewMode(val) {
                if (val) {
                    let articleView = document.getElementsByClassName('article-view')[0];
                    articleView.classList.add('view-dark');
                }
            }
        },
        methods: {
            articleUpdated(id) {
                this.handlePreviewArticle(id);
                this.closeDialogArticleEdit();
            },
            handleEditArticleClose(done) { done(); },
            // 预览文章
            handlePreviewArticle(id) {
                if (id) {
                    this.articleLoading = true;
                    apiArticle.getArticleById(id).then(data => {
                        this.article = data;
                        this.articleLoading = false;
                    });
                }
            },
            closeDialogArticleEdit() {
                this.dialogEditArticleVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .operation-bar {
        border-bottom: 1px solid #ccc;
    }
    .operation-bar ul {
        list-style: none;
        padding: 5px 10px;
    }
</style>
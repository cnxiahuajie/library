<template>
    <div class="root" v-loading="articleLoading">
        <div v-show="!article.content" v-html="defaultContent">
            <div style="margin-top: calc(50vh - 47px); text-align: center;">
                <p style="font-size: 12px; color: #999;">这里什么也没有，赶快预览文章吧！</p>
            </div>
        </div>
        <div class="article-status" v-show="article.content && !articleLoading">
            <div class="operation-bar">
                <ul>
                    <li>
                        <el-tooltip class="item" effect="dark" content="重新载入" placement="bottom-start">
                            <i class="el-icon-refresh" @click="handleReload"></i>
                        </el-tooltip>
                    </li>
                    <li>
                        <el-tooltip class="item" effect="dark" content="编辑文章属性" placement="bottom-start">
                            <i class="el-icon-edit-outline" @click="dialogEditArticleVisible = true"></i>
                        </el-tooltip>
                    </li>
                    <li>
                        <el-tooltip class="item" effect="dark" content="删除文章" placement="bottom-start">
                            <i class="el-icon-delete" @click="handleRemove"></i>
                        </el-tooltip>
                    </li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
        <transition name="el-zoom-in-top">
            <div v-show="article.content" class="article-view" v-html="article.content"></div>
        </transition>

        <el-dialog
                title="编辑文章属性"
                :visible.sync="dialogEditArticleVisible"
                :before-close="handleEditArticleClose">
            <ArticleEdit v-bind:id="article.id" @closeDialogArticleEdit="closeDialogArticleEdit" @articleUpdated="articleUpdated" />
        </el-dialog>
    </div>
</template>

<script>
    import {Message} from 'element-ui'
    import apiArticle from '@/assets/api/api.article';
    import ArticleEdit from "./ArticleEdit";

    export default {
        name: "ArticlePreviewBox",
        components: {ArticleEdit},
        data() {
            return {
                dialogEditArticleVisible: false,
                // 加载文章
                articleLoading: false,
                // 默认内容
                defaultContent: '',
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
            // 删除文章
            handleRemove() {
                Message.info({message: '一封确认删除的邮件已发往你的邮箱，请前往邮箱确认删除。'});
            },
            // 重载
            handleReload() {
                this.handlePreviewArticle(this.article.id);
            },
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
        padding: 5px 0;
        li {
            float: left;
            margin-left: 10px;

            i {
                cursor: pointer;
            }
        }
    }
</style>
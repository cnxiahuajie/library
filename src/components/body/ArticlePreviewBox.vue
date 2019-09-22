<template>
    <div class="root" v-loading="articleLoading">
        <div v-show="!article.content" v-html="defaultContent"></div>
        <transition-group name="el-zoom-in-top">
            <div class="article-status" v-show="article.content && !articleLoading" :key="'article-status'">
                <div style="float: left;">
                    <el-button type="text" @click="dialogEditArticleVisible = true">编辑</el-button>
                </div>
                <div style="float: left;">
                    <el-rate
                            v-model="articleRate"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                </div>
                <div class="clearfix"></div>
            </div>
            <div v-show="article.content" class="article-view" :key="'article-body'" v-html="article.content"></div>
        </transition-group>

        <el-dialog
                title="编辑文章"
                :visible.sync="dialogEditArticleVisible"
                :before-close="handleEditArticleClose">
            <Edit v-bind:id="article.id" @closeDialogArticleEdit="closeDialogArticleEdit" />
        </el-dialog>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'
    import Edit from "../../views/article/Edit";

    export default {
        name: "ArticlePreviewBox",
        components: {Edit},
        data() {
            return {
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
                },
                articleRate: 0
            }
        },
        methods: {
            handleEditArticleClose(done) { done(); },
            // 预览文章
            handlePreviewArticle(id) {
                if (id) {
                    this.articleLoading = true;
                    apiArticle.getArticleById(id).then(data => {
                        this.article = data;
                        this.articleLoading = false;
                        this.calcRate();
                    });
                }
            },
            calcRate() {
                this.articleRate = 5;
            },
            closeDialogArticleEdit() {
                this.dialogEditArticleVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
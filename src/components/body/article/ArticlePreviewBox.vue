<template>
    <div class="text-shadow-support" id="article-preview-box" ref="articlePreviewBox" v-loading="articleLoading" @drop="drop" @dragover.prevent>
        <transition name="el-fade-in-linear">
            <template>
                <div v-show="article.content" class="article-view" v-html="article.content"></div>
            </template>
        </transition>
    </div>
</template>

<script>

    import apiArticle from '@/assets/api/api.article';

    export default {
        name: "ArticlePreviewBox",
        data() {
            return {
                // 加载文章
                articleLoading: false,
                // 默认内容
                defaultContent: '<div style="margin-top: calc(50vh - 47px); text-align: center;"><p style="font-size: 12px; color: #999;">这里什么也没有，赶快预览文章吧！</p></div>',
                // 文章信息
                article: {
                    content: null
                }
            }
        },
        methods: {
            drop(e) {
                if (this.$store.state.articleId) {
                    this.article.content = null;
                    this.handlePreviewArticle(this.$store.state.articleId);
                }
            },
            // 预览文章
            handlePreviewArticle(id) {
                this.articleLoading = true;
                let ele = document.getElementById("article-preview-box");
                apiArticle.getArticleById(id).then(data => {
                    this.article = data;
                    this.articleLoading = false;
                    this.ANIMATION.centerShadow(ele);
                });
            },
            // 清除文章
            handleCleanArticle() {
                this.article.content = null;
            }
        }
    }
</script>

<style lang="scss">
    #article-preview-box {
        height: calc(100% - 1px - 30px);
        .tip {
            text-align: center;
            font-size: 12px;
            p {
                color: #999;
            }
        }
    }

    #article-preview-box .article-view {
        p, h1, h2, h3, h4, h5, h6, span, a {
            z-index: 1001;
        }
    }
</style>
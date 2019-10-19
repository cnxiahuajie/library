<template>
    <div id="article-preview-box" v-loading="articleLoading" @drop="drop" @dragover.prevent>
        <div class="text-shadow-support article-preview-area" ref="articlePreviewBox" v-show="null !== article.content">
            <transition name="el-fade-in-linear">
                <div key="article-view" class="article-view" v-html="article.content"></div>
            </transition>
        </div>
        <div class="tip-container" v-show="null === article.content">
            <transition name="el-fade-in-linear">
                <div class="drag-box">
                    <span>将搜索到的文章拖拽至此进行查看</span>
                </div>
            </transition>
        </div>
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
                // 文章信息
                article: {
                    content: null
                }
            }
        },
        methods: {
            // 加载文章
            handleLoading(value) {
                this.articleLoading = value;
                this.$emit('handleLoading', value);
            },
            drop(e) {
                if (this.$store.state.articleId) {
                    this.handleLoading(true);
                    this.handlePreviewArticle(this.$store.state.articleId);
                }
            },
            // 预览文章
            handlePreviewArticle(id) {
                let ele = document.getElementById("article-preview-box");
                apiArticle.getArticleById(id).then(data => {
                    this.article = data;
                    this.handleLoading(false);
                    this.ANIMATION.centerShadow(ele);
                }, err => {
                    this.handleLoading(false);
                });
            },
            // 清除文章
            handleCleanArticle() {
                this.article.content = null;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #article-preview-box {
        width: calc(100%);

        .tip-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 1px * 1 - 30px * 2);
            max-height: calc(100vh - 1px * 1 - 30px * 2);
            width: calc(100%);

            .drag-box {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ccc;
                width: calc(50%);
                height: 200px;
            }
        }
    }
</style>
<template>
    <div class="root" v-loading="articleLoading">
        <div v-show="!article.content" v-html="defaultContent"></div>
        <transition name="el-zoom-in-top">
            <div v-show="article.content" class="article-view" v-html="article.content"></div>
        </transition>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    export default {
        name: "ArticlePreviewBox",
        data() {
            return {
                // 加载文章
                articleLoading: false,
                // 默认内容
                defaultContent: '<div style="margin-top: calc(50vh - 47px); text-align: center;"><p style="font-size: 14px; color: #999;">这里什么也没有，赶快预览文章吧！</p></div>',
                // 文章信息
                article: {
                    content: null
                }
            }
        },
        methods: {
            // 预览文章
            handlePreviewArticle(id) {
                if (id) {
                    this.articleLoading = true;
                    apiArticle.getArticleById(id).then(res => {
                        this.article = res.data.details;
                        this.articleLoading = false;
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
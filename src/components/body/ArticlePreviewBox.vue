<template>
    <div class="article-preview-container" v-html="article.content"></div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    export default {
        name: "ArticlePreviewBox",
        data() {
            return {
                article: {
                    content: '<div style="margin-top: calc(50vh - 47px); text-align: center;"><p style="font-size: 14px; color: #999;">这里什么都没有，赶快预览文章吧！</p></div>'
                }
            }
        },
        methods: {
            // 预览文章
            handlePreviewArticle(id) {
                if (id) {
                    apiArticle.getArticleById(id).then(res => {
                        this.article = res.data.details;
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
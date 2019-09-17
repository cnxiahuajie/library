<template>
    <div class="root">
        <div class="body-left">
            <ArticleListBox ref="articleListBox" @previewArticle="previewArticle"/>
        </div>
        <div class="area-line"></div>
        <div class="body-right">
            <ArticlePreviewBox ref="articlePreviewBox" v-bind:content="article.content"/>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import ArticleListBox from "./ArticleListBox";
    import ArticlePreviewBox from "./ArticlePreviewBox";

    export default {
        name: "Assembly",
        components: {ArticlePreviewBox, ArticleListBox},
        data () {
            return {
                article: {
                    content: ''
                }
            }
        },
        methods: {
            // 搜索文章
            handleSearch(query) {
                this.$refs.articleListBox.handleSearchArticle(query);
            },
            // 预览文章
            previewArticle(id) {
                this.$refs.articlePreviewBox.handlePreviewArticle(id);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .body-left, .body-right {
        height: calc(100vh - 1px - 60px);
        max-height: calc(100vh - 1px - 60px);
    }

    .root .body-left {
        float: left;
        width: calc(60vw);
        background-color: white;
        overflow-y: scroll;
    }

    .root .body-right {
        float: right;
        width: calc(38vw);
        overflow-y: scroll;
    }

    .root .area-line {
        border-left: 1px #ccc solid;
        float: left;
    }
</style>
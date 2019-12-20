<template>
    <div ref="articleContentContainer" id="article-content-container" v-html="content"></div>
</template>

<script>
    import hljs from 'highlight.js';
    import 'highlight.js/scss/github.scss';

    export default {
        name: "ArticleContent",
        props: {
            content: String
        },
        mounted() {
            this.handleHighlight();
        },
        updated() {
            this.handleHighlight();
        },
        methods: {
            // 处理高亮字段
            handleHighlight() {
                let highlight = this.$refs.articleContentContainer.querySelectorAll('pre code');
                highlight.forEach((block) => {
                    hljs.highlightBlock(block);
                });
            }
        }
    }
</script>

<style lang="scss">
    #article-content-container {
        width: 100%;
        margin-top: 10px;
        padding: 20px;
        border: 1px solid #DCDFE6;
    }

    blockquote {
        color: #6a737d;
        border-left: .25em solid #dfe2e5;
        margin: 5px;
        text-indent: 23px;
    }

</style>

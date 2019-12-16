<template>
    <div ref="articleContentContainer" id="article-content-container" v-html="content"></div>
</template>

<script>
    import hljs from 'highlight.js';
    import 'highlight.js/styles/a11y-dark.css';

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
        margin: auto;
        pre {
            font-size: 14px;
            line-height: 1.2em;
        }
    }
</style>
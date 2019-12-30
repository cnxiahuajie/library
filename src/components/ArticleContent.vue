<template>
    <div ref="articleContentContainer" id="article-content-container" v-html="content"></div>
</template>

<script>
    import hljs from 'highlight.js';
    import 'highlight.js/scss/a11y-dark.scss';
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver';

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
            // 下载
            handleDownload() {
                var node = document.getElementById('article-content-container');
                let id = this.$route.query.id;
                domtoimage.toBlob(node).then(function (blob) {
                    saveAs(blob, id + '.png');
                });
            },
            // 处理高亮字段
            handleHighlight() {
                let highlight = this.$refs.articleContentContainer.querySelectorAll('pre code');
                highlight.forEach((block) => {
                    hljs.highlightBlock(block);
                    block.style.fontSize = '1.2em';
                });
            }
        }
    }
</script>

<style lang="scss">
    #article-content-container {
        width: 100%;

        blockquote {
            color: #6a737d;
            border-left: .25em solid #dfe2e5;
            margin: 5px;
            text-indent: 23px;
        }

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: scale-down;
        }

        p {
            display: block;
            font-size: 14px!important;
            line-height: 30px;
            text-indent: 2em;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }

        .hljs-center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hljs-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .hljs-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        table {
            width: 100%;
            border-collapse: collapse;

            thead {
                tr {
                    text-align: left;
                    th {
                        border: 1px solid #DCDFE6;
                        padding: 1em;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        border: 1px solid #DCDFE6;
                        padding: .8em;
                    }
                }

                tr:nth-child(odd) {
                    background-color: #F2F6FC;
                }
            }
        }
    }

</style>

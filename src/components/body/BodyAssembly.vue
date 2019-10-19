<template>
    <div id="body-assembly">
        <BodyLeft class="left" :query="query" @handleSearched="handleSearched"/>
        <BodyRight class="right" ref="articlePreviewBox" @handleLoading="handleLoading"/>
    </div>
</template>

<script>
    import BodyLeft from "./BodyLeft";
    import BodyRight from "./BodyRight";

    export default {
        name: "BodyAssembly",
        props: {
            query: String
        },
        components: {BodyRight, BodyLeft},
        data () {
            return {
                // 是否正在执行分页
                paging: false,
                // 触发下一页的次数
                triggerCount: 0,
                // 文章信息
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
            },
            // 清除文章内容
            handleCleanArticle() {
                this.$refs.articlePreviewBox.handleCleanArticle()
            },
            // 搜索完成
            handleSearched() {
                this.$emit('handleSearched');
            },
            // 加载文章
            handleLoading(value) {
                this.$emit('handleLoading', value);
            }
        }
    }
</script>

<style lang="scss" scoped>

    #body-assembly {
        display: flex;
    }

    #body-assembly .left {
        width: calc(40%);
        height: calc(100vh - (1px * 2) - (30px * 2));
        max-height: calc(100vh - (1px * 2) - (30px * 2));
        background-color: white;
        overflow-y: scroll;
        border-right: 1px solid #ccc;
        display: flex;
    }

    #body-assembly .right {
        width: calc(60%);
        overflow-y: scroll;
    }

</style>
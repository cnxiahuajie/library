<template>
    <div id="body-left">
        <ArticleListBox ref="articleListBox" :query="query" @scroll="scrollPage($event)" @previewArticle="previewArticle" @handleCleanArticle="handleCleanArticle" @handleSearched="handleSearched"/>
    </div>
</template>

<script>
    import ArticleListBox from "./articles/ArticleListBox";

    // 触发分页的滑动次数
    const PAGE_TRIGGER_COUNT = 2;
    // 当没有触发分页时的滑动次数还原时间
    const PAGE_TRIGGER_RESET_TIME = 2000;

    export default {
        name: "BodyLeft",
        props: {
            query: String
        },
        components: {ArticleListBox},
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
            // 还原滑动次数
            resetTriggerCount() {
                this.triggerCount = 0;
            },
            // 滚动分页
            scrollPage(e) {
                var target = document.getElementsByClassName('body-left')[0];
                var scrollTop, maxScroll, minScroll = 0;
                scrollTop = target.scrollTop;
                maxScroll = target.scrollHeight - target.offsetHeight;
                if(scrollTop >= maxScroll || scrollTop <= 0){
                    this.triggerCount++;
                    var that = this;
                    if (this.triggerCount == PAGE_TRIGGER_COUNT) {
                        if (!this.paging) {
                            this.paging = true;
                            setTimeout(function (){
                                that.$refs.articleListBox.nextPage();
                                that.paging = false;
                            }, 500);
                        }
                    } else {
                        target.scrollTop = target.scrollTop - 2;
                        setTimeout(function (){
                            that.resetTriggerCount();
                        }, PAGE_TRIGGER_RESET_TIME);
                    }
                }
            },
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    #body-left {
        max-height: calc(100vh - (30px * 2 + 1px * 2));
        min-height: calc(100vh - (30px * 2 + 1px * 2));
        display: flex;
    }
</style>
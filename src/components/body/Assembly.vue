<template>
    <div class="root">
        <div class="body-left" @scroll="scrollPage($event)">
            <ArticleListBox ref="articleListBox" @previewArticle="previewArticle"/>
        </div>
        <div class="body-right">
            <ArticlePreviewBox ref="articlePreviewBox" v-bind:content="article.content"/>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import ArticleListBox from "./ArticleListBox";
    import ArticlePreviewBox from "./ArticlePreviewBox";

    // 触发分页的滑动次数
    const PAGE_TRIGGER_COUNT = 2;

    // 当没有触发分页时的滑动次数还原时间
    const PAGE_TRIGGER_RESET_TIME = 2000;

    export default {
        name: "Assembly",
        components: {ArticlePreviewBox, ArticleListBox},
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
                    if (this.triggerCount === PAGE_TRIGGER_COUNT) {
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
        width: calc(50%);
        background-color: white;
        overflow-y: scroll;
    }

    .root .body-right {
        float: right;
        width: calc(50%);
        overflow-y: scroll;
    }

</style>
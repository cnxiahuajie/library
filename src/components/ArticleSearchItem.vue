<template>
    <div :id="article.id">
        <h1 class="title mouse color-transition" @click="toArticleView">{{article.title}}</h1>
        <p class="fragment" v-html="article.fragment"></p>
        <div class="article-info">
            <p class="item">
                <strong>阅读量</strong><span>{{article.viewCount}}</span>
            </p>
            <p v-show="article.articleType === '1'" class="item">
                <label class="tag-point backend"></label>
                <span>前端</span>
            </p>
            <p class="item">
                <strong>最后更新于</strong>
                <span>{{article.lastModTime}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSearchItem",
        props: {
            article: {
                id: '',
                title: '文件标题',
                fragment: '<em>高亮块</em>',
                viewCount: 100,
                articleType: '前端',
                lastModTime: '2019-02-20 12:22:32'
            }
        },
        methods: {
            // 前往文章详情页面
            toArticleView() {
                this.$emit('toArticleView', this.id);
            }
        }
    }
</script>

<style scoped>
    .title {
        color: rgba(48, 49, 51, 0.6);
        font-size: 18px;
    }

    .title:hover {
        color: rgba(48, 49, 51, 1);
    }

    .fragment {
        color: #909399;
        font-size: 12px;
    }

    .fragment em {
        color: red;
    }

    .article-info {
        display: flex;
    }

    .article-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-info .item {
        display: flex;
        align-items: center;
    }
</style>
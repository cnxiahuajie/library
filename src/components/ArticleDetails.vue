<template>
    <div :id="'article-details-' + article.id" class="article-details-container">
        <h1>{{article.title}}</h1>
        <p class="author-info">
            <span class="item">最后更新于</span>
            <span class="item">{{article.lastModTime}}</span>
            <span class="item">阅读 <span>{{article.viewCount}}</span></span>
        </p>
        <p v-html="article.content"></p>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails",
        props: {
            id: String
        },
        data() {
            return {
                article: {
                    id: '11111111',
                    title: '文件标题',
                    fragment: '<em>高亮块</em>',
                    viewCount: 100,
                    articleType: '前端',
                    lastModTime: '2019-02-20 12:22:32',
                    content: '内容'
                }
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .article-details-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .author-info {
        display: flex;
        align-items: center;
    }

    .author-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .author-info .author-name {
        font-weight: bold;
    }

    .subscribe {
        color: #409EFF;
    }
</style>
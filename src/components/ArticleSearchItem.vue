<template>
    <div :id="article.id">
        <h1 class="title mouse color-transition" @click="toArticleView">{{article.title}}</h1>
        <p class="fragment" v-html="article.fragment"></p>
        <div class="article-info">
            <div class="item">
                <div class="tag-point" :style="{backgroundColor: article.category.color}"></div>
                <div>{{article.category.name}}</div>
            </div>
            <div class="item">
                <div>{{article.column.name}}</div>
            </div>
            <div class="item">
                <label>最后更新于</label>
                <strong>{{article.lastModTime}}</strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSearchItem",
        props: ["article"],
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
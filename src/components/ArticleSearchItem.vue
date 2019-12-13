<template>
    <div :id="article.id">
        <el-link class="title" :underline="false" @click="toArticleView">{{article.title}}</el-link>
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

    .article-info {
        display: flex;
        font-size: 14px;
        align-items: center;
    }

    .article-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-info .item {
        display: flex;
        align-items: center;
    }
</style>

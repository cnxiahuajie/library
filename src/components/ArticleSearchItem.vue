<template>
    <div class="article-item" :id="article.id" @click="toArticleView">
        <el-link class="title" :underline="false" @click="toArticleView">{{article.title}}</el-link>
        <div class="content">
            <p v-html="article.content"></p>
        </div>
        <div class="article-info">
            <div class="article-info-item">
                <p class="tag-point" :style="{backgroundColor: article.category.color}"></p>
                <p>{{article.category.name}}</p>
            </div>
            <div class="article-info-item">
                <p>{{article.column.name}}</p>
            </div>
            <div class="article-info-item">
                <p>最后更新于</p>
                <p>{{article.lastModTime}}</p>
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

    .article-item {
        width: 100%;
        cursor: pointer;
    }

    .title {
        color: rgba(48, 49, 51, 0.6);
        font-size: 18px;
    }

    .content p {
        font-size: .8em;
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 2em;
        margin: 0;
    }

    .article-info {
        display: flex;
        font-size: 14px;
        align-items: center;
    }

    .article-info .article-info-item:not(:first-child) {
        margin-left: 10px;
    }

    .article-info .article-info-item {
        display: flex;
        align-items: center;
    }
</style>

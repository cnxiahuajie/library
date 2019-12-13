<template>
    <div :id="'article-details-' + article.id" class="article-details-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: 'ArticleSearchResult', query: {q: article.category.id}}">{{article.category.name}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: 'ArticleSearchResult', query: {q: article.column.id}}">{{article.column.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <h1>{{article.title}}</h1>
        <div class="item-container article-header-info">
            <div class="item">
                <div class="tag-point" :style="{backgroundColor: article.category.color}"></div>
            </div>
            <div class="item">
                <span class="child-item">最后更新于</span>
                <span class="child-item">{{article.lastModTime}}</span>
            </div>
            <div class="item">
                <div>共<span>{{article.modifierCount}}</span>人参与了修正</div>
            </div>
            <div class="item">
                <span class="child-item">文章内容有误？</span>
                <el-button type="text" @click="toArticleEdit">编辑</el-button>
            </div>
        </div>
        <div class="item-container dividing-line"></div>
        <div class="item-container">
            <div class="article-content-container" v-html="article.content"></div>
        </div>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/library/api.article';
    import Link from "./buttons/Link";

    export default {
        name: "ArticleDetails",
        components: {Link},
        props: {
            id: String
        },
        data() {
            return {
                article: {
                    category: {},
                    column: {}
                }
            }
        },
        created() {
            this.loadArticle();
        },
        methods: {
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name:'ArticleEdit', query: {id: this.id}});
            },
            // 前往文章历史页面
            toHistory() {
                this.$router.push({name:'ArticleHistory', query: {id: this.id}});
            },
            // 加载文章
            loadArticle() {
                apiArticle.details(this.id).then(data => {
                    this.article = data;
                });
            }
        }
    }
</script>

<style scoped>
    .article-details-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .article-details-container .item-container {
        display: flex;
        align-items: center;
    }

    .article-details-container .item-container .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-header-info {
        font-size: 14px;
        color: #909399;
    }

    .article-details-container .item-container .item {
        display: flex;
        align-items: center;
    }

    .dividing-line {
        width: 100%;
        border-bottom: 1px solid #DCDFE6;
    }

</style>

<template>
    <div :id="'article-details-' + article.id" class="article-details-container">
        <h1>{{article.title}}</h1>
        <div class="item-container article-header-info">
            <div class="item">
                <div class="tag-point child-item" :style="{backgroundColor: article.category.color}"></div>
                <div class="child-item">{{article.category.name}}</div>
            </div>
            <div class="item">
                <div class="child-item">{{article.column.name}}</div>
            </div>
            <div class="item">
                <span class="child-item">最后更新于</span>
                <strong class="child-item">{{article.lastModTime}}</strong>
            </div>
            <div class="item">
                <div>共<strong>{{article.modifierCount}}</strong>人参与了修正</div>
            </div>
        </div>
        <div class="item-container article-header-info">
            <div class="item">
                <strong class="child-item">文章内容有误？</strong>
                <Link :text="'参与编辑'" @click.native="toArticleEdit"/>
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

    .article-details-container .item-container {
        padding: 5px 0;
    }

    .article-details-container .item-container .item {
        display: flex;
        align-items: center;
    }

    .article-content-container {
        font-size: 13px;
        letter-spacing: 0.05em;
        background-color: #FFFFFF;
        color: #303133;
        border-radius: 0px;
        padding: 10px;
    }

    .dividing-line {
        width: 100%;
        border-bottom: 1px solid #DCDFE6;
    }

</style>
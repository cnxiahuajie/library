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
                <p class="child-item">最后更新于</p>
                <strong class="child-item" v-text="article.lastModTime"></strong>
            </div>
            <div class="item">
                <p>共<strong v-text="article.modifierCount"></strong>人参与了修正</p>
            </div>
            <div class="item">
                <p class="child-item">文章内容有误？</p>
                <el-button type="text" @click="toArticleEdit">编辑</el-button>
            </div>
        </div>
        <div class="item-container dividing-line"></div>
        <div class="item-container">
            <ArticleContent :content="article.content"/>
        </div>
        <div class="top-button" @click="handleGoTop" v-show="showTopButton">
            <svg t="1576488427447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2860" width="32" height="32"><path d="M516.009212 1024h-8.490096A508.46246 508.46246 0 0 1 0 516.009212v-8.490096A508.46246 508.46246 0 0 1 507.519116 0h8.490096a508.46246 508.46246 0 0 1 507.990788 507.519116v8.490096a508.46246 508.46246 0 0 1-507.990788 507.990788z m-8.490096-958.437586a442.428374 442.428374 0 0 0-441.956702 441.956702v8.490096a442.428374 442.428374 0 0 0 441.956702 441.956702h8.490096a442.428374 442.428374 0 0 0 441.956702-441.956702v-8.490096a442.428374 442.428374 0 0 0-441.956702-441.956702z" fill="#bfbfbf" p-id="2861"></path><path d="M289.134961 619.305389a33.017043 33.017043 0 0 1-23.11193-56.128973l225.930907-225.930907a33.017043 33.017043 0 0 1 47.167204 0l220.270843 220.270843a33.017043 33.017043 0 0 1-47.167204 47.167204l-197.158913-197.630585-202.818977 202.818977a33.017043 33.017043 0 0 1-23.11193 9.433441z" fill="#bfbfbf" p-id="2862"></path></svg>
        </div>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/library/api.article';
    import ArticleContent from "./ArticleContent";

    export default {
        name: "ArticleDetails",
        components: {ArticleContent},
        props: {
            id: String
        },
        computed: {
            topButton() {
                return this.$store.state.showTopButton;
            }
        },
        watch:{
            topButton:function(old, newd) {
                this.showTopButton = old;
            }
        },
        data() {
            return {
                showTopButton: this.$store.state.showTopButton,
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
            // 置顶
            handleGoTop() {
                let right = document.getElementById('main-right');
                let that = this;
                if (right.scrollTop > 0) {
                    setTimeout(function(){
                        document.getElementById('main-right').scrollTop = right.scrollTop - 16;
                        // 递归滚动
                        that.handleGoTop();
                    }, 1);
                }
            },
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

    .top-button {
        position: absolute;
        right: 30px;
        bottom: 10px;
        opacity: 1;
        cursor: pointer;
    }

</style>

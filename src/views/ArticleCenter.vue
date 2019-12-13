<template>
    <div id="article-center-container">
        <div class="action-container">
            <Input class="default-input-border item border-color-transition" ref="articleTitle" :placeholder="'标题过滤'" v-model="titleFilter"/>
            <Select class="article-type item" ref="articleCategory" :placeholder="'文章类型'" v-model="categoryId" :data="categories" :label="'name'" :origin="'id'" :clear="true"/>
            <Button class="button mouse item" :text="'新建文章'" @click.native="toArticleEdit"/>
        </div>
        <div class="article-list-container">
            <div class="article-item" v-for="article in articles" :key="'article-center' + article.id" v-show="article.visible">
                <div class="title">{{article.title}}</div>
                <div class="article-info">
                    <div class="article-info-item category-info">
                        <div class="tag-point" :style="{backgroundColor: article.category.color}"></div>
                        <div>{{article.category.name}}</div>
                    </div>
                    <div class="article-info-item secondary-info">
                        <div class="secondary-info-item">共<strong>{{article.modifierCount}}</strong>人参与了修正</div>
                        <div class="secondary-info-item">创建于<strong>{{article.createTime}}</strong></div>
                        <div class="secondary-info-item">最后更新于<strong>{{article.lastModTime}}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../components/buttons/Button";
    import Input from "../components/form/Input";
    import Select from "../components/form/Select";
    import apiArticle from '@/assets/api/library/api.article';
    import apiCategory from '@/assets/api/library/api.category';

    export default {
        name: "ArticleCenter",
        components: {Button, Input, Select},
        data() {
            return {
                q: '',
                page: 1,
                articles: [],
                categories: [],
                categoryId: '',
                titleFilter: '',
                category: '',
                column: ''
            }
        },
        watch: {
            titleFilter(newVal) {
                this.$refs.articleCategory.handleClean();
                if (newVal === '') {
                    this.articles.forEach(item => {
                        if (item.visible === false) {
                            item.visible = true;
                        }
                    })
                    return;
                }
                this.articles.forEach(item => {
                    if (item.title.indexOf(newVal) < 0) {
                        item.visible = false;
                    } else {
                        item.visible = true;
                    }
                })
            },
            categoryId(newVal) {
                if ('' === newVal) {
                    this.articles.forEach(item => {
                        if (item.visible === false) {
                            item.visible = true;
                        }
                    });
                    return;
                }
                this.articles.forEach(item => {
                    if (item.category.id === newVal) {
                        item.visible = true;
                    } else {
                        item.visible = false;
                    }
                });
            }
        },
        created() {
            this.loadCategories();
            this.loadArticles();
        },
        methods: {
            // 加载文章目录
            loadCategories() {
                apiCategory.categories().then(data => {
                    this.categories = data;
                });
            },
            // 加载文章列表
            loadArticles() {
                apiArticle.list(this.q, this.page).then(data => {
                    if (null !== data && data.length > 0) {
                        this.articles = data;
                        this.articles.forEach(item => {
                            item["visible"] = true;
                        })
                    }
                });
            },
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name: 'ArticleEdit'});
            }
        }
    }
</script>

<style scoped>
    #article-center-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .action-container {
        padding: 10px;
        background-color: #FFFFFF;
        display: flex;
    }

    .action-container .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-list-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .article-list-container .article-item {
        display: flex;
        width: 100%;
        flex-direction: column;
        border-bottom: 1px solid #E4E7ED;
        padding: 10px 0;
    }

    .article-item .title {
        font-size: 18px;
    }

    .article-info {
        display: flex;
        width: 100%;
        margin-top: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .article-info .category-info {
        display: flex;
        align-items: center;
    }

    .article-info .article-info-item:not(:first-child) {
        margin-left: 10px;
    }

    .secondary-info {
        display: flex;
        align-items: center;
    }

    .secondary-info .secondary-info-item {
        margin-right: 10px;
    }

    .article-type {
        flex-shrink: 0;
        width: 220px;
    }

</style>
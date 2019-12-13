<template>
    <div id="article-edit-container">
        <div class="button-container">
            <Button class="button mouse" :text="'返回'" @click.native="handleBack"/>
            <Button class="button mouse" :text="'发布'" @click.native="handleSubmitArticle"/>
        </div>
        <Input v-show="false === update" class="item default-input-border border-color-transition"
               :placeholder="'请输入您的邮箱'"
               v-model="article.creatorId"/>
        <Input v-show="true === update" class="item default-input-border border-color-transition"
               :placeholder="'请输入您的邮箱'"
               v-model="article.modifierId"/>
        <Input v-show="false === update" class="item default-input-border border-color-transition"
               :placeholder="'请输入标题'"
               v-model="article.title"/>
        <div v-show="false === update" class="item article-type-column">
            <Select class="article-type-column-item" :placeholder="'请选择文章类型'" v-model="article.category.id"
                    :data="categories" :label="'name'" :origin="'id'"/>
            <Select class="article-type-column-item" :placeholder="'可选文章专栏'" v-model="article.column.id" :data="columns"
                    :label="'name'" :origin="'id'"/>
            <Input class="article-type-column-item default-input-border border-color-transition"
                   :placeholder="'输入自定义专栏'" v-model="article.column.name"/>
        </div>
        <div v-show="false === update" class="item article-type-column">
            <Input class="default-input-border border-color-transition" :placeholder="'引用链接'" v-model="article.link"/>
        </div>
        <TinymceEditor class="item" ref="editor" v-model="article.content" :disabled="disabled"/>
    </div>
</template>

<script>
    import TinymceEditor from "../components/TinymceEditor";
    import Select from "../components/form/Select";
    import Input from "../components/form/Input";
    import Button from "../components/buttons/Button";
    import apiCategory from '@/assets/api/library/api.category';
    import apiArticle from '@/assets/api/library/api.article';

    export default {
        name: "ArticleEdit",
        components: {Button, Select, TinymceEditor, Input},
        data() {
            return {
                update: false,
                disabled: false,
                article: {
                    creatorId: '',
                    modifierId: '',
                    content: '',
                    category: {
                        id: ''
                    },
                    column: {
                        id: '',
                        name: ''
                    },
                    link: ''
                },
                categories: [],
                columns: []
            }
        },
        watch: {
            // 文章目录类型
            'article.category.id': {
                handler: function () {
                    this.columns = [];
                    this.article.column.id = '';
                    for (let i = 0, len = this.categories.length; i < len; i++) {
                        if (this.article.category.id === this.categories[i].id) {
                            if (this.categories[i].columns) {
                                this.columns = this.categories[i].columns;
                            }
                            break;
                        }
                    }
                }
            },
            'article.column.id': {
                handler: function () {
                    for (let i = 0, len = this.columns.length; i < len; i++) {
                        if (this.article.column.id === this.columns[i].id) {
                            this.article.column.name = this.columns[i].name;
                            break;
                        }
                    }
                }
            }
        },
        created() {
            // 加载文章目录
            this.loadCategories();
            if (this.$route.query.id) {
                this.update = true;
                // 加载文章
                this.loadArticle();
            }
        },
        methods: {
            // 返回上一级
            handleBack() {
                this.$router.go(-1);
            },
            // 加载文章
            loadArticle() {
                apiArticle.details(this.$route.query.id).then(data => {
                    this.article = data;
                });
            },
            // 提交文章
            handleSubmitArticle() {
                if (false === this.update) {
                    apiArticle.add(this.article).then(data => {
                        alert('保存成功！');
                    });
                } else {
                    apiArticle.update(this.article).then(data => {
                        alert('保存成功！');
                    });
                }
            },
            // 加载文章目录
            loadCategories() {
                apiCategory.categories().then(data => {
                    this.categories = data;
                });
            }
        }
    }
</script>

<style scoped>
    #article-edit-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #article-edit-container .item:not(:first-child) {
        margin-top: 10px;
    }

    #article-edit-container .article-type-column {
        display: flex;
    }

    #article-edit-container .article-type-column-item:not(:first-child) {
        margin-left: 10px;
    }

    .button-container {
        padding: 10px;
        background-color: #FFFFFF;
        display: flex;
    }

    .button-container .button:not(:first-child) {
        margin-left: 10px;
    }
</style>
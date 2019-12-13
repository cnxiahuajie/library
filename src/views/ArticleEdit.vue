<template>
    <div id="article-edit-container">
        <div class="button-container">
            <el-button @click="handleBack">返回</el-button>
            <el-button type="primary" @click="handleSubmitArticle">提交</el-button>
        </div>
        <el-input v-if="update" class="item" v-model="article.modifierId" placeholder="请输入邮箱"></el-input>
        <el-input v-else class="item" v-model="article.creatorId" placeholder="请输入邮箱"></el-input>
        <el-input class="item" v-model="article.title" placeholder="请输入标题"></el-input>
        <div class="item article-type-column">
            <el-select class="article-type-column-item" v-model="article.category.id" placeholder="请选择文章类型">
                <el-option
                        v-for="item in categories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-select class="article-type-column-item" v-model="article.column.id" placeholder="可选文章专栏">
                <el-option
                        v-for="item in columns"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-input class="article-type-column-item default-input-border border-color-transition" v-model="article.column.name" placeholder="输入自定义专栏"></el-input>
        </div>
        <div class="item article-type-column">
            <el-input class="default-input-border border-color-transition" v-model="article.link" placeholder="引用链接"></el-input>
        </div>
        <TinymceEditor class="item" ref="editor" v-model="article.content" :disabled="disabled"/>
    </div>
</template>

<script>
    import TinymceEditor from "../components/TinymceEditor";
    import apiCategory from '@/assets/api/library/api.category';
    import apiArticle from '@/assets/api/library/api.article';

    export default {
        name: "ArticleEdit",
        components: {TinymceEditor},
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
        margin-top: 20px;
    }

    #article-edit-container .article-type-column {
        display: flex;
    }

    #article-edit-container .article-type-column-item:not(:first-child) {
        margin-left: 10px;
    }

    #article-edit-container .button-container {
        display: flex;
        width: 100%;
    }

</style>

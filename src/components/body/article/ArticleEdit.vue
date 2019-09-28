<template>
    <div class="root">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="适宜人群">
                <el-checkbox-group v-model="articleCategorySelected">
                    <el-checkbox :label="category.id" v-for="category in articleCategoryList" v-bind:key="category.id">{{category.name}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="saving">保存</el-button>
                <el-button @click="closeDialogArticleEdit">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'
    import apiArticleCategory from '@/assets/api/api.articleCategory'

    const ENABLE = "E";
    const DISABLE = "D";

    export default {
        name: "ArticleEdit",
        props: {
            id: String
        },
        data () {
            return {
                articleCategorySelected: [],
                saving: false,
                articleCategoryList: [],
                enable: ENABLE,
                disable: DISABLE,
                formData: {
                    id: '',
                    title: '',
                    articleCategories: [],
                    status: ''
                }
            }
        },
        mounted() {
            this.initArticleCategorys();
            this.loadArticle(this.id);
        },
        methods: {
            // 初始化文章类别
            initArticleCategorys() {
                apiArticleCategory.listArticleCategory().then(data => {
                    if (data) {
                        data.forEach(item => {
                            this.articleCategoryList.push(item);
                        })
                    }
                });
            },
            // 加载文章
            loadArticle(id) {
                if (id) {
                    apiArticle.getArticleById(id).then(data => {
                        this.formData = data;
                        if (this.formData.articleCategories) {
                            this.formData.articleCategories.forEach(item => {
                                this.articleCategorySelected.push(item.id);
                            })
                        } else {
                            this.articleCategorySelected = [];
                        }
                    })
                }
            },
            onSubmit() {
                this.saving = true;
                if (this.articleCategorySelected) {
                    this.formData.articleCategories = [];
                    this.articleCategorySelected.forEach(item => {
                        this.formData.articleCategories.push({
                            id: item
                        });
                    })
                }
                apiArticle.updateArticle(this.formData).then(data => {
                    this.$emit('articleUpdated', data.id);
                    this.saving = false;
                })
            },
            closeDialogArticleEdit() {
                this.$emit('closeDialogArticleEdit');
            }
        }
    }
</script>

<style scoped>

</style>
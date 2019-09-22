<template>
    <div class="root">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-card shadow="never">
                    <div class="article-show-box" v-html="formData.content"></div>
                </el-card>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="formData.status">
                    <el-radio :label="enable">启用</el-radio>
                    <el-radio :label="disable">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="closeDialogArticleEdit">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import apiArticle from '@/assets/api/api.article'

    const ENABLE = "E";
    const DISABLE = "D";

    export default {
        name: "Edit",
        props: {
            id: String
        },
        data () {
            return {
                enable: ENABLE,
                disable: DISABLE,
                formData: {
                    title: '',
                    content: '',
                    status: ''
                }
            }
        },
        mounted() {
            this.loadArticle(this.id);
        },
        methods: {
            loadArticle(id) {
                apiArticle.getArticleById(id).then(data => {
                    this.formData = data;
                    console.log(data);
                })
            },
            onSubmit() {

            },
            closeDialogArticleEdit() {
                this.$emit('closeDialogArticleEdit');
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div id="settings">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="你的ID">
                <span><strong>{{formData.email}}</strong></span>
            </el-form-item>
            <el-form-item label="你的昵称">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="你的兴趣">
                <el-checkbox-group v-model="interestSelected">
                    <el-checkbox :label="category.id" v-for="category in articleCategoryList" v-bind:key="category.id">
                        {{category.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import apiArticleCategory from '@/assets/api/api.articleCategory'

    const SETTINGS = "_authorinfo";

    export default {
        name: "Settings",
        data() {
            return {
                interestSelected: [],
                articleCategoryList: [],
                formData: {
                    email: this.LOCAL_STORAGE_PROXY.getItem('settings').email,
                    name: '',
                    interests: []
                }
            }
        },
        mounted() {
            // 初始化文章分类
            this.initArticleCategorys();
        },
        computed: {
            name() {
                return this.formData.name;
            }
        },
        watch: {
            name(val) {
                this.handleSaveUser();
            },
            interestSelected: {
                handler(newValue, oldValue) {
                    this.formData.interests = [];
                    for (let i = 0; i < newValue.length; i++) {
                        this.formData.interests.push({
                            id: newValue[i]
                        })
                    }
                    this.handleSaveUser();
                },
                deep: true
            }
        },
        methods: {
            // 加载作者信息
            loadAuthorInfo() {
                let settings = this.LOCAL_STORAGE_PROXY.getItem('settings');
                if (settings) {
                    this.formData = settings;
                    if (this.formData.interests) {
                        this.formData.interests.forEach(item => {
                            this.interestSelected.push(item.id);
                        })
                    } else {
                        this.interestSelected = [];
                    }
                }
            },
            // 初始化文章类别
            initArticleCategorys() {
                apiArticleCategory.listArticleCategory().then(data => {
                    if (data) {
                        data.forEach(item => {
                            this.articleCategoryList.push(item);
                        });
                        // 加载作者信息
                        this.loadAuthorInfo();
                    }
                });
            },
            // 保存匿名用户信息
            handleSaveUser() {
                this.LOCAL_STORAGE_PROXY.setItem('settings', this.formData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #settings {
        width: calc(80%);
        margin: auto;
    }
</style>

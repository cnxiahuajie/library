<template>
    <div class="root">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="你的名称">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="你的兴趣">
                <el-checkbox-group v-model="interestSelected">
                    <el-checkbox :label="category.id" v-for="category in articleCategoryList" v-bind:key="category.id">
                        {{category.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import apiArticleCategory from '@/assets/api/api.articleCategory'

    const SETTINGS = "settings";

    export default {
        name: "Settings",
        data() {
            return {
                interestSelected: [],
                articleCategoryList: [],
                formData: {
                    name: '路人',
                    interests: [],
                    email: ''
                }
            }
        },
        mounted() {
            this.initArticleCategorys();
            let settings = this.$cookies.get(SETTINGS);
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
        computed: {
            name() {
                return this.formData.name;
            },
            email() {
                return this.formData.email;
            }
        },
        watch: {
            name(val) {
                this.handleSaveAnonUser();
            },
            interestSelected: {
                handler(newValue, oldValue) {
                    this.formData.interests = [];
                    for (let i = 0; i < newValue.length; i++) {
                        this.formData.interests.push({
                            id: newValue[i]
                        })
                    }
                    this.handleSaveAnonUser();
                },
                deep: true
            },
            email(val) {
                this.handleSaveAnonUser();
            }
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
            // 保存匿名用户信息
            handleSaveAnonUser() {
                this.$cookies.set(SETTINGS, this.formData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        width: calc(80%);
        margin: auto;
    }
</style>

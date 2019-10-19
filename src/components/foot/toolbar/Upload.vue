<template>
    <div id="upload">
        <div class="upload-container">
            <div>
                <transition name="el-zoom-in-center">
                    <Success v-show="uploadSuccess" :tip="'上传成功'"/>
                </transition>
            </div>
            <div>
                <p v-show="step == 1" class="article-category">
                    <el-checkbox-group v-model="interestSelected">
                        <el-checkbox :label="category.id" v-for="category in articleCategoryList" v-bind:key="category.id">
                            {{category.name}}
                        </el-checkbox>
                    </el-checkbox-group>
                </p>
            </div>
            <div>
                <el-upload
                        class="upload-component"
                        ref="upload"
                        drag
                        v-show="step == 2 && !uploadSuccess"
                        v-loading="uploading"
                        :action="`${uploadUrl}?access_token=${$store.state.token}`"
                        :accept="'.html'"
                        :data="{'categories': interestSelected}"
                        :show-file-list="false"
                        :before-upload="handleBeforeUpload"
                        :on-success="handleSuccess">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将.html文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </div>
        </div>

        <div class="step-button-container" v-show="step != 3">
            <i v-show="step <= 1" class="el-icon-right step-button" @click="handleChangeStep(1)"></i>
            <i v-show="step >= 2" class="el-icon-back step-button" @click="handleChangeStep(-1)"></i>
        </div>
    </div>
</template>

<script>
    import apiArticleCategory from '@/assets/api/api.articleCategory';
    import Success from "../../Success";

    export default {
        name: "Upload",
        components: {Success},
        props: {
            dialogTitle: String,
            uploadUrl: String
        },
        data() {
            return {
                tip: '请选择文章所属分类',
                interestSelected: [],
                articleCategoryList: [],
                step: 1,
                formData: {
                    categories: []
                },
                uploading: false,
                uploadSuccess: false
            };
        },
        watch: {
            interestSelected: {
                handler(newValue, oldValue) {
                    this.formData.categories = [];
                    for (let i = 0; i < newValue.length; i++) {
                        this.formData.categories.push({
                            id: newValue[i]
                        })
                    }
                },
                deep: true
            }
        },
        mounted() {
            this.initArticleCategorys();
        },
        methods: {
            handleChangeStep(val) {
                this.step += val;
                let title = '';
                if (this.step == 1) {
                    title = '请选择文章所属分类';
                } else if (this.step == 2) {
                    title = '请选择文件';
                }
                this.$emit('handleChangeUploadArticleDialogTitle', title);
            },
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
            // 上传时
            handleBeforeUpload(event, file, fileList) {
                this.uploading = true;
                this.step = 3;
            },
            // 上传成功
            handleSuccess(response, file, fileList) {
                this.uploading = false;
                this.uploadSuccess = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #upload {
        text-align: center;
        display: flex;
        height: 300px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #upload .upload-success-tip {
        margin-top: 0px;
        color: #409EFF;
    }

    .upload-container {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .step-button-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .step-button {
        padding: 10px;
        border-radius: 50%;
        border: 1px solid #ccc;
        transition: box-shadow 500ms, border-color 500ms;
        -moz-transition: box-shadow 500ms, border-color 500ms; /* Firefox 4 */
        -webkit-transition: box-shadow 500ms, border-color 500ms; /* Safari 和 Chrome */
        -o-transition: box-shadow 500ms, border-color 500ms; /* Opera */
    }

    .step-button:hover {
        border-color: #161616;
        box-shadow: 0px 0px 5px #161616;
    }
</style>
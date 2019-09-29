<template>
    <div id="upload">
        <transition name="el-zoom-in-center">
            <div v-show="uploadSuccess">
                <img src="@/assets/images/upload_success.png"/>
                <p class="upload-success-tip">
                    上传成功
                </p>
            </div>
        </transition>
        <el-upload
                class="upload-component"
                ref="upload"
                drag
                v-show="!uploadSuccess"
                v-loading="uploading"
                :action="uploadUrl"
                :accept="'.html'"
                :show-file-list="false"
                :before-upload="handleBeforeUpload"
                :on-success="handleSuccess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将.html文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: "Upload",
        props: {
            dialogTitle: String,
            uploadUrl: String
        },
        data() {
            return {
                uploading: false,
                uploadSuccess: false
            };
        },
        methods: {
            // 上传时
            handleBeforeUpload(event, file, fileList) {
                this.uploading = true;
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
    }

    #upload .upload-success-tip {
        margin-top: 0px;
        color: #409EFF;
    }
</style>
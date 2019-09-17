<template>
    <div class="root">
        <el-upload
                class="upload-component"
                ref="upload"
                drag
                :action="action"
                :accept="'.html'">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: "Upload",
        props: {
            dialogTitle: String
        },
        data() {
            return {
                action: '/api/v1/article/upload'
            };
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .upload-component {
        margin: auto;
    }
</style>
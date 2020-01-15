<template>
    <div id="markdown-editor-container">
        <mavon-editor ref="editor" v-model="content" @change="change" :codeStyle="'tomorrow-night'" :ishljs="true" :boxShadow="false" :previewBackground="'#FFFFFF'" @imgAdd="$imgAdd"></mavon-editor>
    </div>
</template>

<style src="mavon-editor/dist/css/index.css"></style>
<script>
    import {mavonEditor} from "mavon-editor";

    export default {
        name: "MarkdownEditorAndViewer",
        components: {mavonEditor},
        data() {
            return {
                content: ''
            }
        },
        watch: {
            content(newValue) {
                this.$emit('handleChange', newValue)
            }
        },
        methods: {
            // 绑定@imgAdd event
            $imgAdd(pos, $file){
                let xhr, formData
                xhr = new XMLHttpRequest()
                xhr.withCredentials = false
                xhr.open(
                    'POST',
                    process.env.VUE_APP_FILE_UPLOAD_URL
                )

                formData = new FormData()
                formData.append('file', $file)

                let that = this;
                xhr.onload = function(e) {
                    let resp = JSON.parse(this.responseText);
                    that.$refs.editor.$img2Url(pos, resp.data.url);
                }
                xhr.send(formData)
            },
            // 加载内容
            loadContent(content) {
                this.content = content;
            },
            change(value, render) {
                this.content = value
            }
        }
    }
</script>

<style scoped>

</style>
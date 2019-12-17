<template>
    <div class="tinymce-editor">
        <editor v-model="myValue" :init="init" :disabled="disabled"></editor>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    // 编辑器插件plugins
    // 更多插件参考：https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/preview'// 预览插件
    import 'tinymce/plugins/print'// 打印插件
    import 'tinymce/plugins/codesample'// 代码模版插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/wordcount'// 字数统计插件
    import 'tinymce/plugins/codesample'// 代码示例
    import 'tinymce/plugins/code'// 代码示例
    import 'tinymce/plugins/image'// 图片

    export default {
        name: "TinymceEditor",
        components: {
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
            // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
            baseUrl: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: 'lists table wordcount preview print codesample code image'
            },
            toolbar: {
                type: [String, Array],
                default: 'undo redo | print code preview |  formatselect | codesample | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists table image | removeformat'
            },
            codesample_languages: [
                {text: 'HTML/XML', value: 'markup'},
                {text: 'JavaScript', value: 'javascript'},
                {text: 'CSS', value: 'css'},
                {text: 'Java', value: 'java'}
            ]
        },
        data () {
            return {
                init: {
                    language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
                    language: 'zh_CN',
                    skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
                    content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
                    height: '500',
                    plugins: this.plugins,
                    codesample_languages: [
                        {text: 'HTML/XML', value: 'markup'},
                        {text: 'JavaScript', value: 'javascript'},
                        {text: 'CSS', value: 'css'},
                        {text: 'Java', value: 'java'}
                    ],
                    toolbar: this.toolbar,
                    branding: false,
                    menubar: false,
                    image_uploadtab: false,
                    content_style: "p {lineHeight: 24px;}",
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                },
                myValue: this.value
            }
        },
        mounted () {
            tinymce.init({})
        },
        methods: {
        },
        watch: {
            value (newValue) {
                this.myValue = newValue
            },
            myValue (newValue) {
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>
</style>
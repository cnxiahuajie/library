<template>
    <div id="markdown-viewer">
        <mavon-editor ref="editor" v-model="content" :codeStyle="'tomorrow-night'" :defaultOpen="'preview'" :subfield="false" :toolbarsFlag="false" :ishljs="true" :boxShadow="false" :previewBackground="'#FFFFFF'"></mavon-editor>
    </div>
</template>

<style src="mavon-editor/dist/css/index.css"></style>
<script>
    import {mavonEditor} from "mavon-editor";

    export default {
        name: "MarkdownViewer",
        components: {mavonEditor},
        props: {
            value: String
        },
        data() {
            return {
                content: this.value
            }
        },
        methods: {
            // 加载内容
            loadContent(content) {
                this.content = content;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #markdown-viewer {
        width: 100%;
    }
</style>

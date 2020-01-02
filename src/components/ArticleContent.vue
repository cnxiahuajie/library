<template>
    <div id="article-content-container">
        <mavon-editor ref="editor" v-model="content" :codeStyle="'tomorrow-night'" :defaultOpen="'preview'" :subfield="false" :toolbarsFlag="false" :ishljs="true" :boxShadow="false" :previewBackground="'#FFFFFF'"></mavon-editor>
    </div>
</template>

<script>
    import {mavonEditor} from "mavon-editor";

    export default {
        name: "ArticleContent",
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
    #article-content-container {

    }
</style>

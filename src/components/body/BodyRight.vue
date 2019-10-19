<template>
    <div id="body-right">
        <ArticlePreviewBox @handleLoading="handleLoading"/>
    </div>
</template>

<script>
    import ArticlePreviewBox from "./preview/ArticlePreviewBox";
    export default {
        name: "BodyRight",
        components: {ArticlePreviewBox},
        methods: {
            // 加载文章
            handleLoading(value) {
                if (false === value) {
                    this.ANIMATION.backTop(document.getElementById('body-right'))
                }
                this.$emit('handleLoading', value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
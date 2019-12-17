<template>
    <div id="article-view-container">
        <ArticleDetails :id="this.$route.query.id"/>
    </div>
</template>

<script>
    import ArticleDetails from "../components/ArticleDetails";
    export default {
        name: "ArticleView",
        components: {ArticleDetails},
        methods: {
            // 返回上一级
            goBack() {
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped>
    #article-view-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
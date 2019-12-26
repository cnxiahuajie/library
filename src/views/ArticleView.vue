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
        width: 100%;
        margin-bottom: 50px;
    }
</style>
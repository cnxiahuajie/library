<template>
    <div id="article-view-container">
        <ArticleDetails :id="id"/>
    </div>
</template>

<script>
    import ArticleDetails from "../components/ArticleDetails";
    export default {
        name: "ArticleView",
        components: {ArticleDetails},
        props: {
            id: String
        },
        methods: {}
    }
</script>

<style scoped>
    #article-view-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
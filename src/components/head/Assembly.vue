<template>
    <div class="root">
        <div class="search-box-container">
            <div class="head-left">
                <SearchBox/>
            </div>
            <div class="head-right">
                <UploadArticle/>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import SearchBox from "./SearchBox";
    import UploadArticle from "./UploadArticle";
    export default {
        name: "Assembly",
        components: {UploadArticle, SearchBox}
    }
</script>

<style lang="scss" scoped>
    .root {
        height: calc(60px);
    }

    .root .search-box-container {
        line-height: 60px;
    }

    .root .search-box-container .head-left {
        float: left;
        width: calc(60vw);
    }

    .root .search-box-container .head-right {
        float: right;
        width: calc(38vw);
    }
</style>
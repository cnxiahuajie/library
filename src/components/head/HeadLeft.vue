<template>
    <div id="header-left">
        <SearchBox ref="searchBox" @handleProxySearch="handleProxySearch" />
    </div>
</template>

<script>

    import SearchBox from "./search/SearchBox";

    export default {
        name: "HeadLeft",
        components: {SearchBox},
        data() {
            return {
            }
        },
        methods: {
            // 代理搜索
            handleProxySearch(query) {
                this.$emit('handleProxySearch', query);
            },
            // 搜索完成
            handleSearched() {
                this.$refs.searchBox.handleSearched();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header-left {
        display: flex;
        height: 30px;
    }
</style>

<template>
    <div id="head-assembly">
        <div class="head-left">
            <HeadLeft ref="headLeft" @handleProxySearch="handleProxySearch"/>
        </div>
    </div>
</template>

<script>
    import HeadLeft from "./HeadLeft";
    export default {
        name: "HeadAssembly",
        components: {HeadLeft},
        methods: {
            // 更新搜搜关键字
            handleProxySearch(query) {
                this.$emit('handleProxySearch', query)
            },
            // 搜索完成
            handleSearched() {
                this.$refs.headLeft.handleSearched();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #head-assembly {
        height: 30px;
        display: flex;
    }

    #head-assembly .head-left {
        width: calc(40%);
        border-right: 1px solid #ccc;
    }

    #head-assembly .head-right {
        width: calc(60%);
    }
</style>
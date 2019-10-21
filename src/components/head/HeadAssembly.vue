<template>
    <div id="head-assembly">
        <HeadLeft class="left" ref="headLeft" @handleProxySearch="handleProxySearch"/>
        <HeadRight/>
    </div>
</template>

<script>
    import HeadLeft from "./HeadLeft";
    import HeadRight from "./HeadRight";
    export default {
        name: "HeadAssembly",
        components: {HeadRight, HeadLeft},
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

    #head-assembly .left {
        width: calc(40%);
        border-right: 1px solid #ccc;
    }

    #head-assembly .right {
        width: calc(60%);
    }
</style>
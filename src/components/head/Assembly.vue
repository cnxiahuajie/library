<template>
    <div id="head-assembly">
        <div class="search-box-container">
            <div class="head-left">
                <Left ref="left" @handleSearch="handleSearch"/>
                <div class="clearfix"></div>
            </div>
            <div class="head-right">
                <Right/>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import Left from "./Left";
    import Right from "./Right";
    export default {
        name: "Assembly",
        components: {Right, Left},
        methods: {
            // 更新搜搜关键字
            handleSearch(query) {
                this.$emit('handleSearch', query)
            },
            // 停止搜索
            handleStopSearch() {
                this.$refs.left.handleStopSearch();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #head-assembly {
        height: 30px;
        border-top: 1px solid #ccc;
    }

    #head-assembly .search-box-container .head-left {
        float: left;
        width: calc(50%);
    }

    #head-assembly .search-box-container .head-right {
        float: right;
        width: calc(50%);
    }
</style>
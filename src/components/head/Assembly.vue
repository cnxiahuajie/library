<template>
    <div id="head-assembly">
        <div class="search-box-container">
            <div class="head-left">
                <Left @handleSearch="handleSearch"/>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    #head-assembly {
        height: calc(100%);
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
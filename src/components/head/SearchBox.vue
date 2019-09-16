<template>
    <div class="root">
        <input type="text" class="search-input" placeholder="搜索"/>
    </div>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>

<style lang="scss" scoped>
    .search-input {
        width: calc(100% - 10px);
        outline: none;
        height: 52px;
        padding-left: 10px;
        border: 0;
        background-color: rgba(0,0,0,0);
    }
</style>
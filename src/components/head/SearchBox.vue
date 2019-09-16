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
        width: 300px;
        padding: 10px;
        margin-left: 10px;
    }
</style>
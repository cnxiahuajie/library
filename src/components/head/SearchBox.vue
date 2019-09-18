<template>
    <div class="root">
        <input type="text" class="search-input" placeholder="搜索" v-model="query" @keyup.enter="handleSearch" />
    </div>
</template>

<script>

    export default {
        name: "SearchBox",
        data() {
            return {
                query: ''
            }
        },
        methods: {
            // 执行搜索
            handleSearch() {
                this.$emit('handleSearch', this.query);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-input {
        font-size: 14px;
        width: calc(100% - 10px);
        outline: none;
        height: 52px;
        padding-left: 10px;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
    }
</style>
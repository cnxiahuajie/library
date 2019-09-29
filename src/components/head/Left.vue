<template>
    <div id="left">
        <input type="text" class="search-input" placeholder="搜点什么" v-model="query" @keyup.enter="handleSearch" />
    </div>
</template>

<script>

    export default {
        name: "Left",
        data() {
            return {
                query: '',
                oldQuery: ''
            }
        },
        methods: {
            // 执行搜索
            handleSearch() {
                if (this.query) {
                    if (this.oldQuery !== this.query) {
                        this.$emit('handleSearch', this.query);
                        this.oldQuery = this.query;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #left .search-input {
        font-size: 12px;
        width: calc(100%);
        outline: none;
        height: calc(100%);
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        text-indent: 10px;
    }
</style>

<template>
    <div id="search-box">
        <span class="search-prefix-icon" v-show="normalSearch"><i
                :class="startSearch ? 'el-icon-loading' : 'el-icon-search'"></i></span>
        <input v-show="normalSearch" id="normalSearch" ref="normalSearch" type="text" class="search-input" placeholder="搜点什么"
               v-model="query" @input="handleSearch" @keyup.enter="handleSearch"/>
    </div>
</template>

<script>
    export default {
        name: "SearchBox",
        data() {
            return {
                // 是否正在搜索中
                startSearch: false,
                // 普通搜索
                normalSearch: true,
                // 搜索的文字
                query: ''
            }
        },
        methods: {
            // 开始搜索
            handleStartSearch() {
                this.startSearch = true;
            },
            // 结束搜索
            handleSearched() {
                this.startSearch = false;
            },
            // 执行搜索
            handleSearch() {
                if (this.query) {
                    this.handleStartSearch();
                    this.$emit('handleProxySearch', this.query.trim());
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    #search-box {
        height: 30px;
        width: 100%;
        display: flex;
        align-items: center;

        .search-prefix-icon {
            color: #999;
            padding-left: 5px;
        }
        .search-input {
            font-size: 12px;
            width: calc(100%);
            outline: none;
            border: 0;
            background-color: rgba(0, 0, 0, 0);
            text-indent: 5px;
        }
    }

</style>
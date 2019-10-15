<template>
    <div id="left">
        <span class="search-prefix-icon" v-show="normalSearch"><i :class="startSearch ? 'el-icon-loading' : 'el-icon-search'"></i></span>
        <input v-show="normalSearch" id="normalSearch" type="text" class="search-input" placeholder="搜点什么" v-model="query" @keyup.enter="handleSearch"/>
    </div>
</template>

<script>

    export default {
        name: "Left",
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
            handleStopSearch() {
                this.startSearch = false;
            },
            // 执行搜索
            handleSearch() {
                if (this.query) {
                    this.handleStartSearch();
                    this.$emit('handleSearch', this.query.trim());
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #left {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
    }

    #left .search-input {
        font-size: 12px;
        width: calc(100%);
        outline: none;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        text-indent: 10px;
    }

    #left .search-prefix-icon {
       color: #999;
        padding-left: 10px;
    }
</style>

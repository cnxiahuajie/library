<template>
    <div id="left">
        <span v-show="normalSearch"><i class="el-icon-search"></i></span>
        <input v-show="normalSearch" id="normalSearch" type="text" class="search-input" placeholder="搜点什么" v-model="query" @keyup.enter="handleSearch"/>
        <span v-show="commandline"><i class="el-icon-arrow-right commandline-icon"></i></span>
        <input v-show="commandline" id="commandline" type="text" class="search-input" placeholder="_" v-model="command" @keyup.enter="handleCommand"/>
    </div>
</template>

<script>

    const IS_SCRIPT = "/script";
    const IS_HELP = "/help";

    export default {
        name: "Left",
        data() {
            return {
                // 命令行
                commandline: false,
                // 普通搜索
                normalSearch: true,
                // 命令
                command: '',
                // 搜索的文字
                query: '',
                // 旧的搜索文字
                oldQuery: ''
            }
        },
        methods: {
            // 执行命令
            handleCommand() {
                if ("exit" == this.command) {
                    this.commandline = false;
                    this.normalSearch = true;
                    this.command = '';
                }
            },
            // 执行搜索
            handleSearch() {
                if (this.query) {
                    if (IS_SCRIPT == this.query) {
                        this.commandline = true;
                        this.normalSearch = false;
                        this.query = '';
                    } else if(IS_HELP == this.query) {
                        alert(this.query)
                    } else {
                        if (this.oldQuery !== this.query) {
                            this.$emit('handleSearch', this.query);
                            this.oldQuery = this.query;
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #left {
        display: flex;
        justify-content: center;
        height: 30px;
        padding-left: 5px;
    }

    #left .search-input {
        font-size: 12px;
        width: calc(100%);
        outline: none;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        text-indent: 10px;
    }
</style>

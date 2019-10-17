<template>
    <div id="left">
        <span class="search-prefix-icon" v-show="normalSearch"><i
                :class="startSearch ? 'el-icon-loading' : 'el-icon-search'"></i></span>
        <input v-show="normalSearch" id="normalSearch" ref="normalSearch" type="text" class="search-input" placeholder="搜点什么"
               v-model="query" @keyup.enter="handleSearch"/>
        <span class="search-prefix-icon" v-show="barrage"><i
                :class="startSearch ? 'el-icon-loading' : 'el-icon-chat-line-square'"></i></span>
        <input v-show="barrage" id="barrage" type="text" class="search-input" placeholder="说些什么"
               v-model="barrageData.content" @keyup.enter="handleShootBarrage"/>
        <el-color-picker v-show="barrage" v-model="barrageData.color" size="mini"></el-color-picker>
    </div>
</template>

<script>
    import apiBarrage from '@/assets/api/api.barrage'

    export default {
        name: "Left",
        data() {
            return {
                barrageData: {
                    color: '#000000',
                    content: ''
                },
                barrage: false,
                // 是否正在搜索中
                startSearch: false,
                // 普通搜索
                normalSearch: true,
                // 搜索的文字
                query: ''
            }
        },
        methods: {
            // 清除弹幕框
            handleCleanBarrageContent() {
                this.barrageData.content = '';
            },
            // 清除搜索框
            handleCleanQuery() {
                this.query = '';
            },
            // 发送弹幕
            handleShootBarrage() {
                if (this.barrageData.content == 'exit' || this.barrageData.content == 'quit') {
                    this.normalSearch = true;
                    this.barrage = false;
                    // 清除弹幕框
                    this.handleCleanBarrageContent();
                } else {
                    apiBarrage.shootBarrage(this.barrageData);
                }
            },
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
                    if (this.query.indexOf('/') === 0) {
                        let command = this.query.substring(this.query.indexOf('/') + 1);
                        if (command == 'help') {
                            // TODO 帮助提示
                        } else if (command == 'b') {
                            this.normalSearch = false;
                            this.barrage = true;
                        }

                        // 清除搜索框
                        this.handleCleanQuery();
                    } else {
                        this.handleStartSearch();
                        this.$emit('handleSearch', this.query.trim());
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

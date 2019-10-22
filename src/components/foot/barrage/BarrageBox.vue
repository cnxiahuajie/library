<template>
    <div id="barrage-box">
        <span class="item search-prefix-icon">
            <i class="el-icon-chat-line-square"></i>
        </span>
        <input type="text" class="item search-input" placeholder="说些什么，按回车键发送"
               v-model="formData.content" @keyup.enter="handleShootBarrage"/>
        <el-color-picker v-model="formData.color" size="mini"></el-color-picker>
    </div>
</template>

<script>
    import apiBarrage from '@/assets/api/api.barrage';

    export default {
        name: "BarrageBox",
        data() {
            return {
                formData: {
                    color: '#000000',
                    content: ''
                }
            }
        },
        methods: {
            // 发送弹幕
            handleShootBarrage() {
                apiBarrage.shootBarrage(this.formData).then(data => {
                    this.formData.content = '';
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #barrage-box {
        display: flex;
        align-items: center;
        width: calc(100%);

        .item {
            margin-left: 5px;
        }

        .search-prefix-icon {
            color: #999;
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
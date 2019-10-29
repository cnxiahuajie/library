<template>
    <div id="head-right">
        <!--<el-tooltip class="item" content="下载PDF文档" placement="top">-->
            <!--<span class="item pdf">P</span>-->
        <!--</el-tooltip>-->
        <!--<el-tooltip class="item" content="下载Word文档" placement="top">-->
            <!--<span class="item word">W</span>-->
        <!--</el-tooltip>-->
    </div>
</template>

<script>
    export default {
        name: "HeadRight",
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    #head-right {
        display: flex;
        align-items: center;

        .word, .pdf {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            font-size: 12px;
            color: #ccc;
            border: 1px solid #ccc;

            transition: background-color 500ms, color 500ms;
            -moz-transition: background-color 500ms, color 500ms;
            -o-transition: background-color 500ms, color 500ms;
            -webkit-transition: background-color 500ms, color 500ms; /* Safari */
        }

        .word:hover {
            background-color: blue;
            color: #ffffff;
        }

        .pdf:hover {
            background-color: red;
            color: #ffffff;
        }

        .item {
            margin-left: 10px;
            cursor: pointer;
        }
    }
</style>
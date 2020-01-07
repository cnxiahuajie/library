<template>
    <div id="attachment-container" class="article-attachments-container">
        <div class="article-attachments-item" v-for="item in attachments" :key="item.id">
            <el-tooltip class="item" effect="dark" :content="'下载' + item.name" placement="bottom-start">
                <el-link :underline="false" :href="item.url">{{item.name}}</el-link>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Attachment",
        data() {
            return {
                attachments: []
            }
        },
        methods: {
            // 加载附件列表
            loadAttachments(attachments) {
                this.attachments = attachments;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #attachment-container {
        width: 100%;
        display: flex;
        border: 1px solid #F2F6FC;
        padding: 10px;
        border-radius: 4px;

        .article-attachments-item {
            padding: 10px;
            border: 1px solid #F2F6FC;
            border-radius: 4px;
            transition: border .3s;
            -webkit-transition: border .3s;
            -ms-transition: border .3s;
            -moz-transition: border .3s;
        }

        .article-attachments-item:hover {
            border: 1px solid #DCDFE6;
        }

        .article-attachments-item:not(:first-child) {
            margin-left: 10px;
        }

    }
</style>
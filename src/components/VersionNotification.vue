<template>
    <div id="notification-container">
        <el-dialog
                custom-class="notification-dialog"
                title="更新日志"
                center
                :visible.sync="dialogVisibleNotification"
                :before-close="handleCloseNotification">
            <mavon-editor ref="editor" v-model="content" :codeStyle="'tomorrow-night'" :defaultOpen="'preview'" :subfield="false" :toolbarsFlag="false" :ishljs="true" :boxShadow="false" :previewBackground="'#FFFFFF'"></mavon-editor>
        </el-dialog>
    </div>
</template>

<script>
    import {mavonEditor} from "mavon-editor";

    export default {
        name: "VersionNotification",
        components: {mavonEditor},
        data () {
            return {
                content: '',
                dialogVisibleNotification: process.env.VUE_APP_VERSION !== localStorage.getItem('library-version'),
            }
        },
        created() {
            // 获取版本更新信息
            this.handleGetVersionNotification();
        },
        updated() {
            // 获取版本更新信息
            this.handleGetVersionNotification();
        },
        methods: {
            // 关闭版本更新通知
            handleCloseNotification(done) {
                localStorage.setItem('library-version', process.env.VUE_APP_VERSION);
                done();
            },
            // 获取版本更新信息
            handleGetVersionNotification() {
                var rawFile = new XMLHttpRequest();
                if (rawFile.overrideMimeType) {
                    rawFile.overrideMimeType("text/plain");
                }
                rawFile.open("GET", '/version/latest.md', true);
                let that = this;
                rawFile.onreadystatechange = function () {
                    if (rawFile.status == "200") {
                        if (rawFile.responseText) {
                            that.content = rawFile.responseText;
                        }
                    }
                }
                rawFile.send(null);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #notification-container {
        .content {
            max-height: 60%;
        }
    }
</style>
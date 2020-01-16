<template>
    <div id="notification-container">
        <el-dialog
                custom-class="notification-dialog"
                title="更新日志"
                center
                :visible.sync="dialogVisibleNotification"
                :before-close="handleCloseNotification">
            <MarkdownViewer ref="markdownViewer" :value="content"/>
        </el-dialog>
    </div>
</template>

<script>
    import MarkdownViewer from "./MarkdownViewer";

    export default {
        name: "VersionNotification",
        components: {MarkdownViewer},
        data () {
            return {
                content: '',
                dialogVisibleNotification: process.env.VUE_APP_VERSION !== localStorage.getItem('library-version'),
            }
        },
        created() {
            if (this.dialogVisibleNotification === true) {
                // 获取版本更新信息
                this.handleGetVersionNotification();
            }
        },
        updated() {
            if (this.dialogVisibleNotification === true) {
                // 获取版本更新信息
                this.handleGetVersionNotification();
            }
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
                            that.$refs.markdownViewer.loadContent(rawFile.responseText);
                        }
                    }
                }
                rawFile.send(null);
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
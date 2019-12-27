<template>
    <div id="notification-container">
        <el-dialog
                title="更新通知"
                :visible.sync="dialogVisibleNotification"
                :before-close="handleCloseNotification">
            <p v-html="content"></p>
        </el-dialog>
    </div>
</template>

<script>
    import marked from 'marked';

    export default {
        name: "VersionNotification",
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
                rawFile.open("GET", '/version/' + process.env.VUE_APP_VERSION + '.md', true);
                let that = this;
                rawFile.onreadystatechange = function () {
                    if (rawFile.status == "200") {
                        if (rawFile.responseText) {
                            that.content = marked(rawFile.responseText);
                        }
                    }
                }
                rawFile.send(null);
            }
        }
    }
</script>

<style scoped>

</style>
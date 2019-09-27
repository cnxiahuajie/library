<template>
    <div class="root">
        <ul>
            <li>
                <el-tooltip class="item" effect="dark" content="系统设置" placement="bottom-end">
                    <i class="el-icon-setting" style="cursor: pointer;" @click="dialogSettingsVisible = true"></i>
                </el-tooltip>
                <el-dialog class="donation-article-dialog" :title="'系统设置'" :visible.sync="dialogSettingsVisible"
                           :before-close="handleCloseSettings"
                           :destroy-on-close="true"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false">
                    <Settings @handleSettingsSaved="handleSettingsSaved"/>
                </el-dialog>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="上传文章" placement="bottom-end">
                    <i class="el-icon-document-add" @click="dialogUploadVisible = true" style="cursor: pointer;"></i>
                </el-tooltip>
                <el-dialog class="donation-article-dialog" :title="'上传文章'" :visible.sync="dialogUploadVisible"
                           :before-close="handleCloseUploadArticle"
                           :destroy-on-close="true"
                            :close-on-click-modal="false"
                            :close-on-press-escape="false">
                    <ArticleUpload v-show="!downloadTyporaVisible" ref="articleUpload" v-bind:dialogTitle="'上传文章'" v-bind:uploadUrl="uploadUrl"
                                   v-bind:dialogUploadVisible="dialogUploadVisible"/>
                    <el-dialog
                            class="remind-dialog"
                            title="友情提示"
                            :visible.sync="downloadTyporaVisible"
                            :before-close="handleCloseRemind"
                            :destroy-on-close="true"
                            :close-on-click-modal="false"
                            :close-on-press-escape="false">
                        <div class="container">
                            <p>
                                <el-tag type="danger">重点</el-tag>&nbsp;捐赠的文章只能是以<em class="point">.html</em>为后缀的富文本内容文件。
                            </p>
                            <p class="line">
                                还没有找到世界上最好用的编辑器？没有关系！<el-link type="primary" href="https://www.typora.io/" target="_blank">Typora</el-link>了解一下。
                            </p>
                            <p class="line">
                                <el-switch
                                        v-model="keepRemind"
                                        active-text="继续骚扰我"
                                        inactive-text="我知道了">
                                </el-switch>
                            </p>
                        </div>
                    </el-dialog>
                </el-dialog>
            </li>

            <div class="clearfix"></div>
        </ul>
    </div>
</template>

<script>
    import ArticleUpload from './Upload'
    import apiArticle from '@/assets/api/api.article'
    import Settings from "./Settings";

    const KEEP_REMIND_COOKIE_KEY = "library_download_typora_keep_remind";
    // 继续提醒
    const KEEP_REMIND_COOKIE_VALUE_1 = "1";
    // 不再提醒
    const KEEP_REMIND_COOKIE_VALUE_0 = "0";

    export default {
        name: "UploadArticle",
        components: {Settings, ArticleUpload},
        data() {
            return {
                // 是否打开系统设置提示框
                dialogSettingsVisible: false,
                // 上传地址
                uploadUrl: apiArticle.UPLOAD_URL,
                // 是否打开下载typora提示框
                downloadTyporaVisible: false,
                // 继续提醒
                keepRemind: true,
                // 上传文章窗口是否打开
                dialogUploadVisible: false
            }
        },
        watch: {
            // 继续提醒
            keepRemind(val) {
                if (val) {
                    this.$cookies.set(KEEP_REMIND_COOKIE_KEY, KEEP_REMIND_COOKIE_VALUE_1);
                } else {
                    this.$cookies.set(KEEP_REMIND_COOKIE_KEY, KEEP_REMIND_COOKIE_VALUE_0);
                }
            }
        },
        mounted() {
            // 打开提醒
            this.openRemind();
        },
        methods: {
            // 保存设置
            handleSettingsSaved() {
                this.dialogSettingsVisible = false;
            },
            // 关闭系统设置
            handleCloseSettings(done) {
                done();
            },
            // 打开提醒
            openRemind() {
                var keepRemind = this.$cookies.get(KEEP_REMIND_COOKIE_KEY);
                if (keepRemind === KEEP_REMIND_COOKIE_VALUE_1) {
                    this.downloadTyporaVisible = true;
                } else if (keepRemind === KEEP_REMIND_COOKIE_VALUE_0) {
                    this.downloadTyporaVisible = false;
                } else {
                    this.downloadTyporaVisible = true;
                    this.$cookies.set(KEEP_REMIND_COOKIE_KEY, KEEP_REMIND_COOKIE_VALUE_1);
                }
            },
            // 关闭弹出框
            handleCloseRemind(done) {
                done();
            },
            // 关闭对话框
            handleCloseUploadArticle (done) {
                // 关闭
                done();
            }
        }
    }
</script>

<style scoped>
    .root ul {
        margin: 0;
    }

    .root ul li a {
        text-decoration: none;
    }

    .root ul li {
        margin-right: 10px;
    }

    .root ul li {
        float: right;
        list-style-type: none;
    }

    .point {
        border: 1px solid red; border-radius: 50%; font-weight: bold; padding: 2px;
    }

    .donation-article-dialog, .remind-dialog {
        line-height: 20px!important;
    }

    .donation-article-dialog .container, .remind-dialog .container {
        margin: auto;
    }

    .donation-article-dialog .container p:not(:first-child), .remind-dialog .container p:not(:first-child) {
        margin-top: 36px;
    }

</style>

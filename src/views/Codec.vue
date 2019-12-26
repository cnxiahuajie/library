<template>
    <div id="aes-container">
        <el-page-header @back="goBack" content="数据加解密"></el-page-header>
        <div class="aes-container-item">
            <div class="item">
                <el-switch
                        v-model="isCollapse"
                        active-text="展开"
                        inactive-text="收起">
                </el-switch>
            </div>
            <div class="item">
                <el-switch
                        v-model="mode"
                        active-text="加密模式"
                        inactive-text="解密模式"
                        :active-value="MODE_PLUS"
                        :inactive-value="MODE_MINUS"
                        active-color="#409EFF"
                        inactive-color="#67C23A">
                </el-switch>
            </div>
            <div class="item">
                <el-radio v-model="viewMode" label="Text">Text</el-radio>
                <el-radio v-model="viewMode" label="Json" :disabled="mode === MODE_PLUS">Json</el-radio>
            </div>
        </div>
        <div class="aes-container-item">
            <div class="item input-box" :style="{width: isCollapse ? '50%' : 0}">
                <el-input
                        type="textarea"
                        :rows="20"
                        placeholder="请输入原报文"
                        v-model="srcContent"
                        resize="none">
                </el-input>
            </div>
            <div class="item output-box">
                <json-viewer v-show="viewMode === 'Json'" :value="destContentData" style="height: 100%; overflow-y: auto;"></json-viewer>
                <el-input
                        v-show="viewMode === 'Text'"
                        type="textarea"
                        :rows="20"
                        placeholder="展示处理后的报文"
                        v-model="destContent"
                        resize="none"
                        :readonly="true">
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    import {Encrypt, Decrypt} from '@/assets/js/crypto';
    const KEY = 'library_aesutils_key';
    const IV = 'library_aesutils_iv';
    const MODE = 'library_aesutils_mode';
    const VIEW_MODE = 'library_aesutils_view_mode';
    const PLUS = '+';
    const MINUS = '-';

    export default {
        name: "Codec",
        data() {
            return {
                isCollapse: true,
                viewMode: localStorage.getItem(VIEW_MODE) || '1',
                srcContent: '',
                destContentData: {},
                destContent: '',
                key: process.env.VUE_APP_AES_KEY,
                iv: process.env.VUE_APP_AES_IV,
                mode: localStorage.getItem(MODE),
                MODE_PLUS: PLUS,
                MODE_MINUS: MINUS
            }
        },
        watch: {
            viewMode(newVal) {
                localStorage.setItem(VIEW_MODE, newVal);
            },
            mode(newVal) {
                localStorage.setItem(MODE, newVal);
                this.viewMode = 'Text';
                this.doCodec();
            },
            srcContent(newVal) {
                this.doCodec();
            },
            destContent(newVal) {
                this.doCodec();
            }
        },
        methods: {
            // 返回上一级
            goBack() {
                this.$router.go(-1);
            },
            // 判断是否是json对象
            isJSON(src) {
                try {
                    var obj = JSON.parse(src);
                    if(typeof obj == 'object' && obj ){
                        return true;
                    }else{
                        return false;
                    }
                } catch(e) {
                    return false;
                }
            },
            // aes
            doCodec() {
                if (this.srcContent.length > 0 && this.key.length > 0 && this.iv.length > 0) {
                    if (this.mode === this.MODE_PLUS) {
                        this.destContent = Encrypt(this.srcContent, this.key, this.iv);
                    } else if (this.mode === this.MODE_MINUS) {
                        this.destContent = Decrypt(this.srcContent, this.key, this.iv);
                        if (this.isJSON(this.destContent)) {
                            this.destContentData = JSON.parse(this.destContent)
                        } else {
                            this.destContentData = {};
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #aes-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 50px;

        .aes-container-item {
            display: flex;
            height: 100%;
            width: 100%;
            margin-top: 20px;

            .item {
                margin-left: 20px;
                display: flex;
                align-items: center;
            }

            .item:first-child {
                margin-left: 0;
            }

            .input-box {
                width: 50%;
                flex-shrink: 0;
                overflow: hidden;
                transition: width 300ms;
            }

            .output-box {
                width: 100%;
                transition: width 300ms;
            }

        }

        .aes-container-item:first-child {
            margin-top: 0px;
        }

    }
</style>
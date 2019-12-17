<template>
    <div id="aes-container">
        <el-page-header @back="goBack" content="Aes 工具"></el-page-header>
        <div class="aes-container-item">
            <div class="item">
                <el-input v-model="key" placeholder="请输入密钥"></el-input>
            </div>
            <div class="item">
                <el-input v-model="iv" placeholder="请输入偏移量"></el-input>
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
            <el-switch
                    v-model="isCollapse"
                    active-text="展开"
                    inactive-text="收起">
            </el-switch>
        </div>
        <div class="aes-container-item">
            <div class="item input-box" :style="{width: isCollapse ? '50%' : 0}">
                <el-input
                        type="textarea"
                        :rows="20"
                        placeholder="请输入原报文"
                        v-model="srcContent"
                        resize="none"
                        :disabled="!(key && iv)">
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
                        :disabled="!(key && iv)"
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
        name: "Aes",
        data() {
            return {
                isCollapse: true,
                viewMode: localStorage.getItem(VIEW_MODE) || '1',
                srcContent: '',
                destContentData: {},
                destContent: '',
                key: localStorage.getItem(KEY) || 'bWFsbHB3ZA==WNST',
                iv: localStorage.getItem(IV) || '1234567890123456',
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
                this.doAes();
            },
            srcContent(newVal) {
                this.doAes();
            },
            destContent(newVal) {
                this.doAes();
            },
            key(newVal) {
                localStorage.setItem(KEY, newVal);
                this.doAes();
            },
            iv(newVal) {
                localStorage.setItem(IV, newVal);
                this.doAes();
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
            doAes() {
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
            }

            .output-box {
                width: 100%;
            }

        }

        .aes-container-item:first-child {
            margin-top: 0px;
        }

    }
</style>
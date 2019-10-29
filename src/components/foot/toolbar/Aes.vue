<template>
    <div id="aes-container">
        <div class="settings">
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
                        active-value="+"
                        inactive-value="-">
                </el-switch>
            </div>
        </div>
        <div class="encodearea">
            <div class="item">
                <el-input
                        type="textarea"
                        :rows="10"
                        placeholder="请输入原报文"
                        v-model="srcContent"
                        resize="none"
                        :disabled="!(key && iv)">
                </el-input>
            </div>
            <div class="item">
                <el-input
                        type="textarea"
                        :rows="10"
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
    import aesUtils from '@/assets/api/api.aes';
    const KEY = 'library_aesutils_key';
    const IV = 'library_aesutils_iv';
    const MODE = 'library_aesutils_mode';

    export default {
        name: "Aes",
        data() {
            return {
                srcContent: '',
                destContent: '',
                key: this.$cookies.get(KEY),
                iv: this.$cookies.get(IV),
                mode: this.$cookies.get(MODE)
            }
        },
        watch: {
            mode(newVal) {
                this.$cookies.set(MODE, newVal);
                this.doAes();
            },
            srcContent(newVal) {
                this.doAes();
            },
            destContent(newVal) {
                this.doAes();
            },
            key(newVal) {
                this.$cookies.set(KEY, newVal);
                this.doAes();
            },
            iv(newVal) {
                this.$cookies.set(IV, newVal);
                this.doAes();
            }
        },
        methods: {
            // aes
            doAes() {
                if (this.srcContent.length > 0 && this.key.length > 0 && this.iv.length > 0) {
                    let formData = {
                        'content': this.srcContent,
                        'key': this.key,
                        'iv': this.iv,
                        'mode': this.mode
                    }
                    aesUtils.aes(formData).then(data => {
                        this.destContent = data.result;
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #aes-container {
        display: flex;
        flex-direction: column;

        .settings {
            display: flex;

            .item {
                padding: 10px;
            }
        }

        .encodearea {
            display: flex;

            .item {
                width: 50%;
                padding: 10px;
            }
        }
    }
</style>
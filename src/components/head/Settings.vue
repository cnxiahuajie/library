<template>
    <div class="root">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="你的名称">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="你的身份">
                <el-checkbox-group v-model="formData.identity">
                    <el-checkbox label="web">前端</el-checkbox>
                    <el-checkbox label="service">后端</el-checkbox>
                    <el-checkbox label="ssh">运维</el-checkbox>
                    <el-checkbox label="test">测试</el-checkbox>
                    <el-checkbox label="db">数据库</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="阅读风格">
                <el-radio-group v-model="formData.viewStyle">
                    <el-radio label="light">高亮</el-radio>
                    <el-radio label="dark">黑暗</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="座右铭">
                <el-input type="textarea" v-model="formData.signature"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="onClose">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data () {
            return {
                formData: {
                    name: '路人',
                    identity: [],
                    viewStyle: 'light',
                    signature: '好好学习，天天向上。'
                }
            }
        },
        methods: {
            onSubmit() {
                this.onClose();
            },
            onClose() {
                this.$emit('handleSettingsSaved');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        width: calc(80%);
        margin: auto;
    }
</style>

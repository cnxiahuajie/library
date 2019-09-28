<template>
    <div class="root">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="你的名称">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="你的兴趣">
                <el-checkbox-group v-model="formData.interest">
                    <el-checkbox label="web">前端</el-checkbox>
                    <el-checkbox label="service">后端</el-checkbox>
                    <el-checkbox label="ssh">运维</el-checkbox>
                    <el-checkbox label="test">测试</el-checkbox>
                    <el-checkbox label="db">数据库</el-checkbox>
                    <el-checkbox label="fish">咸鱼</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    const SETTINGS = "settings";

    export default {
        name: "Settings",
        data () {
            return {
                formData: {
                    name: '路人',
                    interest: [],
                    email: ''
                }
            }
        },
        mounted () {
            let settings = this.$cookies.get(SETTINGS);
            if (settings) {
                this.formData = settings;
            }
        },
        computed: {
            name() {
                return this.formData.name;
            },
            interest() {
                return this.formData.interest;
            },
            email() {
                return this.formData.email;
            }
        },
        watch: {
            name(val) {
                this.handleSaveAnonUser();
            },
            interest(val) {
                this.handleSaveAnonUser();
            },
            email(val) {
                this.handleSaveAnonUser();
            }
        },
        methods: {
            // 保存匿名用户信息
            handleSaveAnonUser() {
                this.$cookies.set(SETTINGS, this.formData);
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

<template>
    <div id="feedback">
        <el-form :model="formData" ref="ruleForm">
            <el-form-item>
                <el-input type="textarea" v-model="formData.description"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import apiFeedback from '@/assets/api/api.feedback'

    export default {
        name: "Feedback",
        data() {
            return {
                formData: {
                    description: ''
                }
            }
        },
        methods: {
            // 提交反馈
            handleSubmitFeedback() {
                if (this.formData.description && this.formData.description.length > 0) {
                    apiFeedback.submitFeedback(this.formData).then(data => {
                        this.$message('感谢您的反馈。');
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
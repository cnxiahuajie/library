<template>
    <div id="copyright-container">
        <p><span>&copy; 2019</span> {{copyrightSubject}}&nbsp;版权所有</p>
    </div>
</template>

<script>
    export default {
        name: "Copyright",
        data() {
            return {
                copyrightSubject: process.env.VUE_APP_COPYRIGHT_SUBJECT
            }
        }
    }
</script>

<style scoped>
    #copyright-container {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #909399;
        border-top: 1px solid #DCDFE6;
        padding: 1em;
    }
</style>
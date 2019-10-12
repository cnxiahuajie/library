<template>
    <div>
        <img src="@/assets/images/upload_success.png"/>
        <p class="upload-success-tip">
            {{tip}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Success",
        props: {
            tip: String
        }
    }
</script>

<style lang="scss" scoped>
    div {
        text-align: center;
        margin: auto;
        p {
            margin-top: 0px;
            color: #409EFF;
        }
    }
</style>
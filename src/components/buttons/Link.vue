<template>
    <div class="button" v-text="text" :style="style"></div>
</template>

<script>
    export default {
        name: "Link",
        props: {
            style: Object,
            width: String,
            height: String,
            text: String,
            type: String,
            click: Function
        }
    }
</script>

<style scoped>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(96, 169, 166, 1);
    }

    .button:hover {
        color: #F2F6F5;
    }
</style>

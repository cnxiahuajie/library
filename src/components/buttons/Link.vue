<template>
    <div class="button mouse background-color-transition color-transition" v-text="text"></div>
</template>

<script>
    export default {
        name: "Link",
        props: {
            text: String
        }
    }
</script>

<style scoped>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0366d6;
        padding: 0 2px;
        border-radius: 2px;
    }

    .button:hover {
        background-color: #0366d6;
        color: #FFFFFF;
    }
</style>

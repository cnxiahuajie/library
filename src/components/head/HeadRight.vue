<template>
    <div id="head-right">
        <span class="item pdf">pdf</span>
        <span class="item word">word</span>
    </div>
</template>

<script>
    export default {
        name: "HeadRight"
    }
</script>

<style lang="scss" scoped>
    #head-right {
        display: flex;
        align-items: center;

        .item {
            margin-left: 10px;
            border: 1px solid #ccc;
            padding: 0 5px;
        }
    }
</style>
<template>
    <div id="progress-bar-container">
        <div class="progress-bar" :style="{width: value + '%'}"></div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: {
            value: Number
        }
    }
</script>

<style lang="scss" scoped>
    #progress-bar-container {
        width: 100%;
        height: 3px;
        display: flex;
        background-color: #FFFFFF;
        position: fixed;
        top: 0;
        z-index: 9999;

        .progress-bar {
            width: 0%;
            height: 100%;
            background-color: red;

            transition: width .1s;
            -moz-transition: width .1s;
            -webkit-transition: width .1s;
        }
    }
</style>
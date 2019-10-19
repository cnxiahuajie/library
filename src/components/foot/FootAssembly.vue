<template>
    <div id="foot-container">
        <FootLeft class="left"/>
        <FootRight class="right"/>
    </div>
</template>

<script>
    import FootLeft from "./FootLeft";
    import FootRight from "./FootRight";

    export default {
        name: "FootAssembly",
        components: {FootRight, FootLeft}
    }
</script>

<style lang="scss" scoped>
    #foot-container {
        display: flex;
        max-height: 30px;
        min-height: 30px;

        .left {
            width: calc(40%);
            border-right: 1px solid #ccc;
        }

        .right {
            width: calc(60%);
        }
    }
</style>
<template>
    <div id="foot-right">
        <BarrageBox/>
    </div>
</template>

<script>
    import BarrageBox from "./barrage/BarrageBox";
    export default {
        name: "FootRight",
        components: {BarrageBox}
    }
</script>

<style lang="scss" scoped>
    #foot-right {
        max-height: 30px;
        min-height: 30px;
        display: flex;
    }
</style>
<template>
    <div id="about-container">
        <p class="title"><strong>Vtarm library</strong>是一款集收集与发布为一体的知识管理中心。</p>
        <p class="subtitle">你可以在这里尝试寻找你不知道的，你也可以在这里分享你所知道的。</p>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    #about-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 28px;
    }

    .subtitle {
        font-size: 18px;
    }

</style>
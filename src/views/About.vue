<template>
    <div id="about-container">
        <p class="title"><strong>Vtarm library</strong>是一款收集与发布为一体的知识管理中心。</p>
        <p class="subtitle">在这里分享你所知道的，也可以尝试寻找你不知道的。</p>
        <p><span>研发单位：</span>天逸集团&nbsp;平台项目部</p>
        <p class="copyright"><span>&copy; 2019</span> 天逸财金科技服务（武汉）有限公司&nbsp;版权所有</p>
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
        height: 100%;
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
        font-weight: bold;
    }

    .copyright {
        color: #909399;
    }

</style>

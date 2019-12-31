<template>
    <div id="top-button-container">
        <div class="top-button" @click="handleGoTop" v-show="showTopButton">
            <svg t="1576488427447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2860" width="32" height="32">
                <path d="M516.009212 1024h-8.490096A508.46246 508.46246 0 0 1 0 516.009212v-8.490096A508.46246 508.46246 0 0 1 507.519116 0h8.490096a508.46246 508.46246 0 0 1 507.990788 507.519116v8.490096a508.46246 508.46246 0 0 1-507.990788 507.990788z m-8.490096-958.437586a442.428374 442.428374 0 0 0-441.956702 441.956702v8.490096a442.428374 442.428374 0 0 0 441.956702 441.956702h8.490096a442.428374 442.428374 0 0 0 441.956702-441.956702v-8.490096a442.428374 442.428374 0 0 0-441.956702-441.956702z"
                      fill="#bfbfbf" p-id="2861"></path>
                <path d="M289.134961 619.305389a33.017043 33.017043 0 0 1-23.11193-56.128973l225.930907-225.930907a33.017043 33.017043 0 0 1 47.167204 0l220.270843 220.270843a33.017043 33.017043 0 0 1-47.167204 47.167204l-197.158913-197.630585-202.818977 202.818977a33.017043 33.017043 0 0 1-23.11193 9.433441z"
                      fill="#bfbfbf" p-id="2862"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopButton",
        data() {
            return {
                showTopButton: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
        },
        created() {
            window.addEventListener('scroll', this.handleScroll, true);
        },
        methods: {
            // 置顶
            handleGoTop() {
                let that = this;
                if (document.documentElement.scrollTop > 0) {
                    setTimeout(function () {
                        document.documentElement.scrollTop = document.documentElement.scrollTop - 16;
                        // 递归滚动
                        that.handleGoTop();
                    }, 1);
                }
            },
            // 处理滚动条事件
            handleScroll() {
                let nowScroll = document.documentElement.scrollTop;
                this.showTopButton = nowScroll > 50;

                let total = document.documentElement.offsetHeight - document.documentElement.clientHeight;
                this.progress = nowScroll / total * 100;

            },
        }
    }
</script>

<style scoped>

</style>
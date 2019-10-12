<template>
    <div class="root">
        <BodyAssembly ref="bodyAssembly"/>
        <div class="area-line"></div>
        <HeadAssembly @handleSearch="handleSearch" />
    </div>
</template>

<script>
    import HeadAssembly from "@/components/head/Assembly";
    import BodyAssembly from '@/components/body/Assembly';

    export default {
        name: "Index",
        components: {HeadAssembly, BodyAssembly},
        data () {
            return {
            }
        },
        mounted() {
            // 是否认证
            let unlock = this.$cookies.get('_unlock');
            if (unlock == undefined || unlock == null) {
                this.$store.commit("UNLOCK", 0);
            } else if(unlock == 1) {
                this.$store.commit("UNLOCK", 1);
            } else if (unlock == 0) {
                this.$store.commit("UNLOCK", 0);
            }

            // 邮箱登记标记
            let emailFlag = this.$cookies.get('_email_flag');
            if (emailFlag == undefined || emailFlag == null) {
                this.$store.commit("EMAIL_FLAG", 0);
            } else if (emailFlag == 1) {
                this.$store.commit("EMAIL_FLAG", 1);
            } else if (emailFlag == 0) {
                this.$store.commit("EMAIL_FLAG", 0);
            }

            // token
            let token = this.$cookies.get('_token');
            if (token == undefined || token == null) {
                this.$store.commit("UNLOCK", 0);
            } else {
                this.$store.commit("TOKEN", token);
            }
        },
        methods: {
            // 更新搜索关键字
            handleSearch(query) {
                this.$refs.bodyAssembly.handleSearch(query);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .root {
        height: 30px;
        line-height: 30px;
    }
    .area-line {
        height: 1px;
        /*border-bottom: 1px #ccc solid;*/
        background: -webkit-linear-gradient(left, black , white); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, black , white); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, black , white); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, black , white); /* 标准的语法（必须放在最后）*/
    }
</style>
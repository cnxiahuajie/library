<template>
    <div id="cc-by-nc-sa-3-container" class="lisence">
        <div class="licenses-item">
            <el-link rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/cn/88x31.png" /></el-link>
        </div>
        <div class="licenses-item">
            本作品采用<el-link rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/">知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议</el-link>进行许可。
        </div>
    </div>
</template>

<script>
    export default {
        name: "CCBYNCSA3"
    }
</script>

<style scoped>
    #cc-by-nc-sa-3-container {
        width: 100%;
    }

    #cc-by-nc-sa-3-container {
        display: flex;
        justify-content: center;
        border: 1px dotted #DCDFE6;
        padding: 20px 0;
    }

    #cc-by-nc-sa-3-container .licenses-item {
        display: flex;
        align-items: center;
    }
</style>
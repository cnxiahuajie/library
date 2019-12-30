<template>
    <div id="menu-container">
        <el-menu style="border-right: 0;" :collapse="isCollapse" :collapse-transition="false" :unique-opened="true">
            <el-submenu :index="category.id"  v-for="category in categories" :key="category.id">
                <template slot="title">
                    <i class="category-icon" v-html="category.svg"></i>
                    <span class="category-name" slot="title" @click="toSearchResult(category.id, 'category')">{{category.name}}</span>
                </template>
                <el-menu-item-group v-if="category.columns">
                    <el-menu-item @click="toSearchResult(column.id, 'column')" :index="column.id" v-for="column in category.columns" :key="column.id">{{column.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import apiCategory from '@/assets/api/library/api.category';

    export default {
        name: "Menu",
        props: {
            isCollapse: Boolean
        },
        created() {
            // 查询文章目录列表
            apiCategory.categories().then(data => {
                this.categories = data;
            });
        },
        data() {
            return {
                categories: []
            }
        },
        methods: {
            // 前往搜索页面
            toSearchResult(q, type) {
                this.$router.push({name: 'ArticleSearchResult', query: {q: q, type: type}});
            },
        }
    }
</script>

<style scoped>
    #menu-container {
        width: 100%;
    }

    #menu-container .category-name {
        margin-left: 20px;
    }
</style>

<template>
    <div id="article-edit-container">
        <el-page-header @back="goBack" content="编解文章"></el-page-header>
        <el-input class="item" v-model="article.title" placeholder="请输入标题" :maxlength="30"></el-input>
        <div class="item article-type-column">
            <el-select class="article-type-column-item" v-model="article.category.id" placeholder="请选择文章类型">
                <el-option
                        v-for="item in categories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-select class="article-type-column-item" v-model="article.column.id" placeholder="可选文章专栏">
                <el-option
                        v-for="item in columns"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-input class="article-type-column-item"
                      v-model="article.column.name" placeholder="输入自定义专栏" :maxlength="30"></el-input>
        </div>
        <MarkdownEditor ref="markdownEditor" class="item" @handleChange="handleContentChange"/>
        <div class="item attachments-container">
            <el-upload
                    :action="fileUploadUrl"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="handleOnSuccess"
                    multiple
                    :data="attachment"
                    :file-list="article.attachments">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">最大只能上传100M，如果文件较大请先压缩文件。</div>
            </el-upload>
        </div>

        <el-input v-show="update" class="item" v-model="article.history.reason" placeholder="修改原因"
                  :maxlength="200"></el-input>
        <div class="item button-container">
            <el-input v-model="article.authorizeCode" placeholder="授权码" style="width: 20%;" :maxlength="6">
                <template slot="append">
                    <el-button @click="handleGetAuthorizeCode">获取授权码</el-button>
                </template>
            </el-input>
            <el-button class="button-container-item" type="success" :loading="submiting" @click="handleSubmitArticle">
                提交
            </el-button>
        </div>

        <CCBYNCSA3 class="item"/>

        <el-dialog class="authorize-code-dialog" title="获取授权码" :visible.sync="openAuthorizeCode" width="30%">
            <el-alert class="authorize-code-dialog-item"
                      title="请使用天逸企业内部邮箱。例如（xxx@vteamsystem.com）"
                      type="info">
            </el-alert>
            <el-input class="authorize-code-dialog-item" ref="emailInput" v-model="email" autocomplete="off"
                      placeholder="请输入邮箱"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleGetEmailCode" :loading="authorizeCodeGeting">获 取</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import apiCategory from '@/assets/api/library/api.category';
    import apiArticle from '@/assets/api/library/api.article';
    import apiCommon from '@/assets/api/library/api.common';
    import MarkdownEditor from "@/components/MarkdownEditor";
    import marked from 'marked';
    import CCBYNCSA3 from "../components/CCBYNCSA3";
    import apiFiles from '@/assets/api/library/api.files';

    export default {
        name: "ArticleEdit",
        components: {CCBYNCSA3, MarkdownEditor},
        data() {
            return {
                fileUploadUrl: process.env.VUE_APP_FILE_UPLOAD_URL,
                authorizeCodeGeting: false,
                openAuthorizeCode: false,
                email: localStorage.getItem('email') || '',
                submiting: false,
                update: false,
                disabled: false,
                attachment: {},
                article: {
                    attachments: [],
                    authorizeCode: '',
                    codeKey: '',
                    creatorId: '',
                    modifierId: '',
                    sourceContent: '',
                    content: '',
                    category: {
                        id: ''
                    },
                    column: {
                        id: '',
                        name: ''
                    },
                    history: {
                        id: '',
                        reason: ''
                    },
                    link: ''
                },
                categories: [],
                columns: []
            }
        },
        watch: {
            // 文章目录类型
            'article.category.id': {
                handler: function () {
                    this.columns = [];
                    this.article.column.id = '';
                    for (let i = 0, len = this.categories.length; i < len; i++) {
                        if (this.article.category.id === this.categories[i].id) {
                            if (this.categories[i].columns) {
                                this.columns = this.categories[i].columns;
                            }
                            break;
                        }
                    }
                }
            },
            'article.column.id': {
                handler: function () {
                    for (let i = 0, len = this.columns.length; i < len; i++) {
                        if (this.article.column.id === this.columns[i].id) {
                            this.article.column.name = this.columns[i].name;
                            break;
                        }
                    }
                }
            }
        },
        created() {
            // 加载文章目录
            this.loadCategories();
            if (this.$route.query.id) {
                this.update = true;
                // 加载文章
                this.loadArticle();
            } else {
                this.article = {
                    authorizeCode: '',
                    codeKey: '',
                    creatorId: '',
                    modifierId: '',
                    sourceContent: '',
                    content: '',
                    category: {
                        id: ''
                    },
                    column: {
                        id: '',
                        name: ''
                    },
                    history: {
                        id: '',
                        reason: ''
                    },
                    link: ''
                }
            }
        },
        methods: {
            // 文件上传成功时
            handleOnSuccess(response, file, fileList) {
                if (!this.article.attachments) {
                    this.article.attachments = new Array();
                }
                this.article.attachments.push(response.data);
            },
            // 处理移除文件
            handleRemove(file, fileList) {
                apiFiles.remove(file.id).then(() => {
                    this.article.attachments.forEach((item, i) => {
                        if (item.id === file.id) {
                            console.log(this.article.attachments);
                            this.article.attachments.splice(i, 1);
                            console.log(this.article.attachments);
                        }
                    });
                });
            },
            // 移除前钩子
            beforeRemove(file, fileList) {
                return this.$confirm(`此操作不可撤销，确定删除 ${file.name}？`);
            },
            // 文章内容改变
            handleContentChange(content) {
                this.article.sourceContent = content;
                this.article.content = marked(content);
            },
            // 打开获取授权码对话框
            handleGetAuthorizeCode() {
                this.openAuthorizeCode = true
            },
            // 获取邮箱验证码
            handleGetEmailCode() {
                if (this.email.length > 0) {
                    this.authorizeCodeGeting = true;
                    localStorage.setItem('email', this.email);
                    apiCommon.getEmailCode(this.email).then(data => {
                        this.article.codeKey = data;
                        this.openAuthorizeCode = false;
                        this.authorizeCodeGeting = false;
                        this.$message('授权码已发往你的邮箱。');
                    }, err => {
                        this.authorizeCodeGeting = false;
                    });
                } else {
                    this.$refs.emailInput.focus();
                    this.$message({
                        type: 'error',
                        message: '邮箱不能为空。'
                    });
                }
            },
            // 返回上一级
            goBack() {
                this.$router.go(-1);
            },
            // 加载文章
            loadArticle() {
                apiArticle.details(this.$route.query.id).then(data => {
                    this.article = data;
                    this.$refs.markdownEditor.loadContent(this.article.sourceContent);
                });
            },
            // 提交文章
            handleSubmitArticle() {
                if (null === this.article.authorizeCode) {
                    this.$message({
                        type: 'error',
                        message: '请输入授权码。'
                    });
                    throw '请输入授权码';
                }

                if (null === this.article.history.reason) {
                    this.$message({
                        type: 'error',
                        message: '请输入修改原因。'
                    });
                    throw '请输入修改原因';
                }

                this.submiting = true;
                if (false === this.update) {
                    apiArticle.add(this.article).then(data => {
                        this.submiting = false;
                        this.toArticleView(data.id);
                    }, err => {
                        this.submiting = false;
                    });
                } else {
                    apiArticle.update(this.article).then(data => {
                        this.submiting = false;
                        this.toArticleView(data.id);
                    }, err => {
                        this.submiting = false;
                    });
                }
            },
            // 前往文章详情页面
            toArticleView(id) {
                this.$router.push({name: 'ArticleView', query: {id: id}});
            },
            // 加载文章目录
            loadCategories() {
                apiCategory.categories().then(data => {
                    this.categories = data;
                });
            }
        }
    }
</script>

<style scoped>
    #article-edit-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #article-edit-container .item:not(:first-child) {
        margin-top: 20px;
    }

    #article-edit-container .article-type-column {
        display: flex;
    }

    #article-edit-container .article-type-column-item:not(:first-child) {
        margin-left: 10px;
    }

    #article-edit-container .button-container {
        display: flex;
        width: 100%;
    }

    #article-edit-container .button-container-item {
        margin-left: 10px;
    }

    #article-edit-container .authorize-code-dialog .authorize-code-dialog-item:not(:first-child) {
        margin-top: 20px;
    }

    #article-edit-container .attachments-container {
        border: 1px solid #DCDFE6;
        padding: 10px;
    }

</style>

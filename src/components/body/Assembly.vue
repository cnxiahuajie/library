<template>
    <div class="root">
        <div class="body-left">
            <ArticleListBox @previewArticle="previewArticle"/>
        </div>
        <div class="area-line"></div>
        <div class="body-right">
            <ArticlePreviewBox v-bind:content="article.content"/>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import ArticleListBox from "./ArticleListBox";
    import ArticlePreviewBox from "./ArticlePreviewBox";

    export default {
        name: "Assembly",
        components: {ArticlePreviewBox, ArticleListBox},
        data () {
            return {
                article: {
                    content: ''
                }
            }
        },
        methods: {
            // 预览文章
            previewArticle(dataId) {
                if (dataId === 1) {
                    this.article.content = `<div  id='write'  class = 'is-node'><h1><a name="redis帮助文档" class="md-header-anchor"></a><span>redis帮助文档</span></h1><h2><a name="部署篇" class="md-header-anchor"></a><span>部署篇</span></h2><ul><li><p><span>离线部署</span></p></li><li><p><span>docker部署</span></p><pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="shell"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="shell"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 拉取redis镜像</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">docker pull redis:4.0</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 启动redis服务容器</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">docker run <span class="cm-attribute">-d</span> <span class="cm-attribute">--privileged</span><span class="cm-operator">=</span><span class="cm-atom">true</span> <span class="cm-attribute">-p</span> <span class="cm-number">6379</span>:6379 <span class="cm-attribute">-v</span> /docker/redis/conf/redis.conf:/etc/redis/redis.conf <span class="cm-attribute">-v</span> /docker/redis/data:/data <span class="cm-attribute">--name</span> redistest2 redis:4.0 redis-server /etc/redis/redis.conf <span class="cm-attribute">--appendonly</span> <span class="cm-builtin">yes</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 161px;"></div><div class="CodeMirror-gutters" style="display: none; height: 161px;"></div></div></div></pre><p><span>--privileged=true：容器内的root拥有真正root权限，否则容器内root只是外部普通用户权限</span></p><p><span>-v /docker/redis/conf/redis.conf:/etc/redis/redis.conf：映射配置文件</span></p><p><span>-v /docker/redis/data:/data：映射数据目录</span></p><p><span>redis-server /etc/redis/redis.conf：指定配置文件启动redis-server进程</span></p><p><span>--appendonly yes：开启数据持久化</span></p></li></ul><h2><a name="应用篇" class="md-header-anchor"></a><span>应用篇</span></h2></div>`;
                } else if (dataId === 2) {
                    this.article.content = `<div  id='write'  class = 'is-node'><h1><a name="redis帮助文档" class="md-header-anchor"></a><span>redis帮助文档</span></h1><h2><a name="部署篇" class="md-header-anchor"></a><span>部署篇</span></h2><ul><li><p><span>离线部署</span></p></li><li><p><span>docker部署</span></p><pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="shell"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="shell"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 拉取redis镜像</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">docker pull redis:4.0</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 启动redis服务容器</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">docker run <span class="cm-attribute">-d</span> <span class="cm-attribute">--privileged</span><span class="cm-operator">=</span><span class="cm-atom">true</span> <span class="cm-attribute">-p</span> <span class="cm-number">6379</span>:6379 <span class="cm-attribute">-v</span> /docker/redis/conf/redis.conf:/etc/redis/redis.conf <span class="cm-attribute">-v</span> /docker/redis/data:/data <span class="cm-attribute">--name</span> redistest2 redis:4.0 redis-server /etc/redis/redis.conf <span class="cm-attribute">--appendonly</span> <span class="cm-builtin">yes</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 161px;"></div><div class="CodeMirror-gutters" style="display: none; height: 161px;"></div></div></div></pre><p><span>--privileged=true：容器内的root拥有真正root权限，否则容器内root只是外部普通用户权限</span></p><p><span>-v /docker/redis/conf/redis.conf:/etc/redis/redis.conf：映射配置文件</span></p><p><span>-v /docker/redis/data:/data：映射数据目录</span></p><p><span>redis-server /etc/redis/redis.conf：指定配置文件启动redis-server进程</span></p><p><span>--appendonly yes：开启数据持久化</span></p></li></ul><h2><a name="应用篇" class="md-header-anchor"></a><span>应用篇</span></h2></div>`;
                } else {
                    this.article.content = ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .root, .body-left, .body-right, .area-line {
        height: calc(100vh - 1px - 60px);
    }

    .root .body-left {
        float: left;
        width: calc(60vw);
        background-color: white;
        max-height: calc(100vh - 1px - 60px);
        overflow-y: scroll;
    }

    .root .body-right {
        float: right;
        width: calc(38vw);
        overflow-y: scroll;
    }

    .root .area-line {
        border-left: 1px #ccc solid;
        float: left;
    }
</style>
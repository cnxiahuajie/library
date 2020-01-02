<template>
    <div id="home-container">
        <!-- 文章类型占比 -->
        <div class="item">
            <label class="title" for="statistics">文章统计</label>
            <div id="statistics"></div>
        </div>

        <!-- 近一周文章发布数量 -->
        <div class="item">
            <label class="title" for="dataOfReleases">近一周文章发布量</label>
            <div id="dataOfReleases"></div>
        </div>

        <!-- 文章流量榜 -->
        <div class="item">
            <label class="title" for="articleReadRank">文章流量榜TOP10</label>
            <div id="articleReadRank">
                <el-table
                          :data="articleBrowseRank"
                          stripe>
                    <el-table-column
                            prop="title"
                            label="文章标题">
                    </el-table-column>
                    <el-table-column
                            prop="count"
                            label="阅读数"
                            align="right"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="characteristics"
                            label="文章特性" width="300">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <Copyright/>
    </div>
</template>

<script>

    import G2 from '@antv/g2';
    import apiArticle from '@/assets/api/library/api.article';
    import Copyright from "../components/Copyright";

    export default {
        name: "Home",
        components: {Copyright},
        data() {
            return {
                // 文章占比
                dataOfRate: [],
                // 文章流量榜
                articleBrowseRank: [],
                // 近一周发布数量
                dataOfReleases: []
            }
        },
        mounted() {
            // 获取近一周文章发布数量
            this.initDataOfRelease();
            // 获取文章比例
            this.initArticleStatistics();
            // 获取文章流量榜TOP10集合
            this.loadArticleBrowseRank();
        },
        methods: {
            // 获取文章流量榜TOP10集合
            loadArticleBrowseRank() {
                apiArticle.getArticleBrowseRank().then(data => {
                    this.articleBrowseRank = data;
                });
            },
            // 获取文章比例
            initArticleStatistics() {
                apiArticle.getArticleStatistics().then(data => {
                    let selectedIndex = 1;
                    let max = 0;
                    data.rate.forEach((item, i) => {
                        if (item.count > max) {
                            max = item.count;
                            selectedIndex = i;
                        }
                    });
                    const chart = new G2.Chart({
                        container: document.getElementById('statistics'),
                        forceFit: true,
                        height: 500
                    });
                    chart.source(data.rate, {
                        percent: {
                            formatter: val => {
                                val = (val * 100) + '%';
                                return val;
                            }
                        }
                    });
                    chart.coord('theta', {
                        radius: 0.75,
                        innerRadius: 0.6
                    });
                    chart.tooltip({
                        showTitle: false,
                        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    });
                    // 辅助文本
                    chart.guide().html({
                        position: [ '50%', '50%' ],
                        html: '<div style="color:#161616;font-size: 14px;text-align: center;width: 10em;">文章<br><span style="color:#161616;font-size:20px">' + data.total + '</span>篇</div>',
                        alignX: 'middle',
                        alignY: 'middle'
                    });
                    const interval = chart.intervalStack()
                        .position('percent')
                        .color('item')
                        .label('percent', {
                            formatter: (val, item) => {
                                return item.point.item + ': ' + val;
                            }
                        })
                        .tooltip('item*percent', (item, percent) => {
                            percent = percent * 100 + '%';
                            return {
                                name: item,
                                value: percent
                            };
                        })
                        .style({
                            lineWidth: 1,
                            stroke: '#fff'
                        });
                    chart.render();
                    interval.setSelected(data.rate[selectedIndex]);
                });
            },
            // 获取近一周文章发布数量
            initDataOfRelease() {
                apiArticle.getLatelyRelease().then(data => {
                    let ticksArray = [];

                    data.forEach(item => {
                        ticksArray.push(item.date + "");
                    });

                    const TICKS = ticksArray;
                    const chart = new G2.Chart({
                        container: document.getElementById('dataOfReleases'),
                        forceFit: true,
                        height: 500,
                        padding: [ 50, 50, 50, 50 ]
                    });
                    chart.source(data, {
                        date: {
                            ticks: TICKS
                        }
                    });
                    chart.legend(false);
                    chart.axis('count', false);
                    chart.axis('date', {
                        label: {
                            textStyle: {
                                fill: '#aaaaaa'
                            }
                        }
                    });
                    chart.line().position('date*count');
                    chart.point().position('date*count')
                        .size('date', val => {
                            if (TICKS.indexOf(val) >= 0) {
                                return 3;
                            }
                            return 0;
                        })
                        .label('date*count', (date, count) => {
                            if (TICKS.indexOf(date) >= 0) {
                                return count + '篇';
                            }
                            return '';
                        }, {
                            textStyle: {
                                fill: '#7a7a7a',
                                fontSize: 12,
                                stroke: 'white',
                                lineWidth: 2,
                                fontWeight: 300
                            }
                        })
                        .style({ lineWidth: 2 });
                    chart.render();
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #home-container {
        width: 100%;

        .item {
            margin-top: 20px;

            .title {
                font-size: 24px;
                font-weight: bold;
            }
        }
    }

</style>

<template>
    <div id="relationship-chart" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
    const chartDom = document.getElementById('relationship-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '开放的 ECharts 关系图示例',
            left: 'center',
        },
        tooltip: {},
        series: [
            {
                type: 'graph',
                layout: 'force',
                symbolSize: 50,
                roam: true,
                draggable: true,
                label: {
                    show: true,
                    color: '#fff', // 节点标签颜色
                },
                edgeLabel: {
                    show: true,
                    formatter: '{c}', // 显示边的 value 作为标签
                    fontSize: 12,
                    color: '#000', // 边标签颜色
                },
                data: [
                    { name: 'Node1', itemStyle: { color: '#ff7f50' } }, // 自定义节点颜色
                    { name: 'Node2', itemStyle: { color: '#87cefa' } },
                    { name: 'Node3', itemStyle: { color: '#da70d6' } },
                    { name: 'Node4', itemStyle: { color: '#32cd32' } },
                    { name: 'Node5', itemStyle: { color: '#6495ed' } },
                ],
                links: [
                    {
                        source: 'Node1',
                        target: 'Node2',
                        value: 'Edge1',
                        lineStyle: { color: '#ff7f50' },
                        // 添加箭头
                        symbol: ['none', 'arrow'],
                        symbolSize: [0, 10],
                    },
                    {
                        source: 'Node2',
                        target: 'Node3',
                        value: 'Edge2',
                        lineStyle: { color: '#87cefa' },
                        // 添加箭头
                        symbol: ['none', 'arrow'],
                        symbolSize: [0, 10],
                    },
                    {
                        source: 'Node3',
                        target: 'Node4',
                        value: 'Edge3',
                        lineStyle: { color: '#da70d6' },
                        // 添加箭头
                        symbol: ['none', 'arrow'],
                        symbolSize: [0, 10],
                    },
                    {
                        source: 'Node4',
                        target: 'Node5',
                        value: 'Edge4',
                        lineStyle: { color: '#32cd32' },
                        // 添加箭头
                        symbol: ['none', 'arrow'],
                        symbolSize: [0, 10],
                    },
                ],
                force: {
                    repulsion: 300,
                    edgeLength: [50, 200],
                    gravity: 0.1,
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
            },
        ],
    };

    myChart.setOption(option);
});
</script>

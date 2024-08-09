<template>
    <div ref="chart" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineComponent, onBeforeMount, watch } from 'vue';
import * as echarts from 'echarts';
import chartConfig from '@/components/message/Chart/config.ts';

// 接收props
interface Props {
    options: echarts.EChartOption;
}

const props = defineProps<Props>();
const chart = ref<HTMLElement | null>(null);

let chartInstance: echarts.ECharts | null = null;

const initChart = () => {
    if (chart.value) {
        chartInstance = echarts.init(chart.value);
        chartInstance.setOption(
            chartConfig[props?.options?.type](props.options),
        );
    }
};

onMounted(() => {
    initChart();
});

// 确保组件挂载前就已经准备好图表实例
onBeforeMount(() => {
    if (chart.value) {
        chartInstance = echarts.init(chart.value);
    }
});

// 监控props变化，更新图表
watch(
    () => props.options,
    (newOptions) => {
        if (chartInstance) {
            chartInstance.setOption(newOptions);
        }
    },
    { deep: true },
);
</script>

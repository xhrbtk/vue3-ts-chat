<template>
    <div>
        <div class="container" ref="container"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LogicFlow from '@logicflow/core';
import { Menu, DndPanel, SelectionSelect } from '@logicflow/extension';
import '@logicflow/core/lib/style/index.css';
import sqlIcon from '@/assets/sql-icon.svg';
import {
    CustomIconTextNode,
    CustomIconTextNodeModel,
} from '@/pages/flowManage/customNode.ts';

const container = ref<HTMLElement | null>(null);
let lf: LogicFlow;

const data = {
    // 节点
    nodes: [
        {
            id: 50,
            type: 'custom-icon-node',
            x: 100,
            y: 100,
            properties: {
                iconName: 'icon-biaoge', // 使用 iconfont 的类名，而不是直接使用 Emoji
                title: '工具节点', // 自定义节点名称
                description: '你好', // 自定义描述文字
            },
        },
        {
            id: 21,
            type: 'circle',
            x: 300,
            y: 150,
        },
    ],
    // 边
    edges: [
        {
            type: 'polyline',
            sourceNodeId: 50,
            targetNodeId: 21,
        },
    ],
};

onMounted(() => {
    console.log('sqlIcon', sqlIcon);
    if (container.value) {
        lf = new LogicFlow({
            container: container.value,
            stopScrollGraph: true,
            stopZoomGraph: true,
            width: 1000,
            height: 500,
            grid: {
                type: 'dot',
                size: 20,
            },
            plugins: [Menu],
        });
        // 注册自定义节点
        lf.register({
            type: 'custom-icon-node',
            view: CustomIconTextNode,
            model: CustomIconTextNodeModel,
        });

        lf.extension.menu.addMenuConfig({
            nodeMenu: [
                {
                    text: '分享',
                    callback() {
                        alert('分享成功！');
                    },
                },
                {
                    text: '属性',
                    callback(node: any) {
                        alert(`
          节点id：${node.id}
          节点类型：${node.type}
          节点坐标：(x: ${node.x}, y: ${node.y})`);
                    },
                },
            ],
            edgeMenu: [
                {
                    text: '属性',
                    callback(edge: any) {
                        alert(`
          边id：${edge.id}
          边类型：${edge.type}
          边坐标：(x: ${edge.x}, y: ${edge.y})
          源节点id：${edge.sourceNodeId}
          目标节点id：${edge.targetNodeId}`);
                    },
                },
            ],
            graphMenu: [
                {
                    text: '分享',
                    callback() {
                        alert('分享成功！');
                    },
                },
            ],
        });
        lf.render(data);
    }
});
</script>

<style lang="scss" scoped>
.container {
    width: 1000px;
    height: 500px;
    border: 1px solid #ddd;
}

.dnd-panel {
    width: 300px;
    height: 500px;
    float: left;
    border-right: 1px solid #ddd;
    margin-right: 20px;
}
</style>

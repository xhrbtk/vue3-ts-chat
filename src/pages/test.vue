<template>
    <div class="flow-container p-[10px] pl-[20px]">
        <el-button type="primary" class="mb-[10px]" @click="addNode"
            >添加节点</el-button
        >
        <div class="container" ref="container"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LogicFlow from '@logicflow/core';
import { Menu, DndPanel, SelectionSelect } from '@logicflow/extension';
import '@logicflow/core/lib/style/index.css';
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
                icon: 'table', // 使用 iconfont 的类名，而不是直接使用 Emoji
                title: '工具节点', // 自定义节点名称
                description: '你好', // 自定义描述文字
            },
        },
        {
            id: 51,
            type: 'custom-icon-node',
            x: 150,
            y: 150,
            properties: {
                icon: 'file', // 使用 iconfont 的类名，而不是直接使用 Emoji
                title: '工具节点', // 自定义节点名称
                description: '你好', // 自定义描述文字
            },
        },
    ],
    // 边
    // edges: [
    //     {
    //         type: 'polyline',
    //         sourceNodeId: 50,
    //         targetNodeId: 51, // 一个有效的目标节点 ID
    //     },
    //     {
    //         type: 'polyline',
    //         sourceNodeId: 51,
    //         targetNodeId: 52, // 另一条边连接到另一个节点
    //     },
    // ],
};

const addNode = () => {
    let id = data.nodes[data.nodes.length - 1].id + 1;
    let newNode = {
        id,
        type: 'custom-icon-node',
        x: 250,
        y: 200,
        properties: {
            icon: 'tool', // 使用 iconfont 的类名，而不是直接使用 Emoji
            title: `工具节点${id}`, // 自定义节点名称
            description: '你好', // 自定义描述文字
        },
    };
    lf.addNode(newNode);
    data.nodes.push(newNode);
};

onMounted(() => {
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
        lf.extension.menu.setMenuConfig({
            nodeMenu: [
                {
                    text: '删除',
                    callback(node) {
                        lf.deleteNode(node.id);
                    },
                },
                {
                    text: 'transform',
                    callback(node) {
                        lf.deleteNode(node.id);
                    },
                },
                {
                    text: 'Join',
                    callback(node) {
                        lf.deleteNode(node.id);
                    },
                },
                {
                    text: 'Union',
                    callback(node) {
                        lf.deleteNode(node.id);
                    },
                },
            ], // 覆盖默认的节点右键菜单
            edgeMenu: false, // 删除默认的边右键菜单
            graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
        });

        lf.on('node:add', (data) => {
            console.log('node:add', data);
        });
        lf.on('node:delete', (data) => {
            console.log('node:delete', data);
        });
        lf.on('node:click', (data) => {
            console.log('node:click', data);
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

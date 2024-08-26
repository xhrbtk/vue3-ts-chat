<template>
    <div
        :ref="vizRef"
        :id="containerId"
        style="width: 100%; height: 100%"
    ></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NeoVis from 'neovis.js/dist/neovis.js';

// Props
const props = defineProps({
    neo4jUri: {
        type: String,
        required: true,
    },
    neo4jUser: {
        type: String,
        required: true,
    },
    neo4jPassword: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
    containerId: {
        type: String,
        required: true,
    },
});

// Refs
const vizRef = ref(null);
const config = ref({
    containerId: props.containerId,
    neo4j: {
        serverUrl: props.neo4jUri,
        serverUser: props.neo4jUser,
        serverPassword: props.neo4jPassword,
    },
    labels: {
        Team: {
            label: 'name',
            caption: 'name',
            size: 'matchs',
        },
        Match: {
            label: 'stage',
            caption: 'stage',
        },
    },
    relationships: {
        PLAYED_IN: {
            caption: false,
            thickness: 'score',
        },
    },
    initialCypher: props.query,
    visConfig: {
        nodes: {
            // shape: 'circle',
        },
        edges: {
            arrows: {
                to: { enabled: true },
            },
        },
    },
});

onMounted(() => {
    const viz = new NeoVis(config.value);
    console.log('viz', viz);
    console.log('Neovis Config:', config.value);
    viz.render();

    // 获取所有节点和边的数据
    viz.registerOnEvent('completed', () => {
        const nodes = viz.network.body.data.nodes.get();
        const edges = viz.network.body.data.edges.get();

        console.log('Nodes:', nodes);
        console.log('Edges:', edges);
    });

    // 获取单个节点或边被点击时的数据
    viz.registerOnEvent('clickNode', (event) => {
        const nodeId = event.nodes[0];
        const nodeData = viz.network.body.data.nodes.get(nodeId);

        console.log('Clicked Node Data:', nodeData);
    });

    viz.registerOnEvent('clickEdge', (event) => {
        const edgeId = event.edges[0];
        const edgeData = viz.network.body.data.edges.get(edgeId);

        console.log('Clicked Edge Data:', edgeData);
    });
});
</script>

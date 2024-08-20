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
            size: 'matchs',
        },
        Match: {
            label: 'stage',
        },
    },
    relationships: {
        PLAYED_IN: {
            caption: false,
            thickness: 'score',
        },
    },
    initialCypher: props.query,
});

onMounted(() => {
    const viz = new NeoVis(config.value);
    console.log('viz', viz);

    viz.render();
});
</script>

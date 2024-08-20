<template>
    <div class="w-[800px] h-[800px]">
        <NeovisGraph
            neo4j-uri="bolt://44.223.97.198:7687"
            neo4j-user="neo4j"
            neo4j-password="catalogs-laundry-goggles"
            :query="query"
        />
        <el-input v-model="inputValue"></el-input>
        <el-button @click="search">搜索</el-button>
    </div>
</template>

<script lang="ts" setup>
import neovisGraph from '@/components/neovisGraph.vue';

import { defineComponent, ref } from 'vue';
defineComponent({
    neovisGraph,
});
const query = ref<string>('MATCH p=()-[r:PLAYED_IN]->() RETURN p LIMIT 200');
const inputValue = ref<string>('');
const search = () => {
    query.value = inputValue.value;
    console.log(query.value);
};
</script>

<template>
    <codeSearch v-model="parentCode"></codeSearch>
    <div>今天是个好日子 {{ parentCode }}</div>
</template>

<script lang="ts" setup>
import codeSearch from '@/components/codeSearch.vue';
import { ref } from 'vue';

const parentCode = ref('');
</script>

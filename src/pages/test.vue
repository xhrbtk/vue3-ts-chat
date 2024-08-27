<template>
    <el-button type="primary" @click="showFlowCrontab = true">test</el-button>
    <flow-crontab v-model="showFlowCrontab" />
</template>

<script lang="ts" setup>
import flowCrontab from '@/pages/flowManage/flowCrontab.vue';
import { ref, defineComponent } from 'vue';
defineComponent({
    flowCrontab,
});
const showFlowCrontab = ref(false);
</script>

<template>
    <div class="table-detail p-[20px] flex flex-col h-[100%]">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const name: Ref<string | undefined> = ref(
    route.query.name as string | undefined,
);
</script>

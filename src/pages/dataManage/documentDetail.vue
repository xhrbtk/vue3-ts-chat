<template>
    <div
        class="table-detail p-[20px] flex flex-col h-[100%] w-[100%] overflow-hidden"
    >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>文档</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div
            class="flex w-full justify-between mt-[20px] overflow-y-auto w-[100%] overflow-y-hidden"
        >
            <div class="left flex-1 w-[60%] mr-[20px] overflow-y-auto">
                <el-card class="overflow-y-auto w-[100%]">
                    <template #header>
                        <div class="card-header">
                            <span>数据浏览</span>
                        </div>
                    </template>
                    <div class="mt-[10px]">
                        <pdfViewer></pdfViewer>
                    </div>
                </el-card>

                <el-card class="mt-[20px] overflow-y-auto">
                    <template #header>
                        <div class="card-header">
                            <span>数据查询</span>
                        </div>
                    </template>
                    <searchInput
                        placeholder="请输入文字对文件内容进行分析"
                    ></searchInput>
                    <div class="mt-[10px]"></div>
                </el-card>
            </div>
            <div class="right w-[300px] h-[100%]">
                <el-card>
                    <template #header>
                        <div class="card-header">
                            <span>数据概况</span>
                        </div>
                        <tableInfo :tableInfoList="tableInfoList"></tableInfo>
                    </template>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import tableInfo from '@/components/tableInfo.vue';
import searchInput from '@/components/searchInput.vue';
import pdfViewer from '@/components/pdfViewer.vue';
import { ref, Ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

defineComponent({ tableInfo, searchInput, pdfViewer });
const route = useRoute();
const name: Ref<string | undefined> = ref(
    route.query.name as string | undefined,
);

interface TableInfoType {
    label: string;
    value: string;
}
const tableInfoList = ref<TableInfoType[]>([
    {
        label: '名称',
        value: '表格1',
    },
    {
        label: '类型',
        value: 'xxx',
    },
    {
        label: '描述',
        value: '表格1',
    },
    {
        label: '创建时间',
        value: '表格1',
    },
    {
        label: '属主',
        value: '表格1',
    },
    {
        label: '文件类型',
        value: '表格1',
    },
    {
        label: '文件长度',
        value: '表格1',
    },
]);
</script>

<style lang="scss">
/* el-table 宽度自适应 */
</style>

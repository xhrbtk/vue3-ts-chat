<template>
    <div class="data-manage p-[20px] flex flex-col h-[100%]">
        <!-- 表 -->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <div class="flex justify-between mb-[10px]">
                    <span>表</span>
                    <el-button type="primary" @click="jumpto('table')"
                        >导入数据</el-button
                    >
                </div>
                <searchInput></searchInput>
            </div>
            <cardContent
                :type="'table'"
                :list="tableData"
                :showClose="true"
                @delete="handleDelete"
                @click="handleClick"
            ></cardContent>
        </el-card>
        <!-- 图谱 -->
        <el-card class="mt-[10px]">
            <div class="card-header flex justify-between">
                <span>图谱</span>
                <el-button type="primary" @click="jumpto('graph')"
                    >导入数据</el-button
                >
            </div>
            <cardContent
                :type="'graph'"
                :list="graphData"
                :showClose="true"
                @delete="handleDelete"
                @click="handleClick"
            ></cardContent>
        </el-card>
        <!-- 文档 -->
        <el-card class="mt-[20px]">
            <div class="card-header flex justify-between">
                <span>文档</span>
                <el-button type="primary" @click="jumpto('document')"
                    >导入数据</el-button
                >
            </div>
            <cardContent
                :type="'document'"
                :list="documentData"
                :showClose="true"
                @click="handleClick"
                @delete="handleDelete"
            ></cardContent>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import searchInput from '@/components/searchInput.vue';
import cardContent from '@/components/cardContent.vue';
import { ref, defineComponent, Ref } from 'vue';
import { TableType, GraphType, DocumentType } from '@/types/data-manage.d.ts';

import { useRouter } from 'vue-router';
const router = useRouter();
const goingTo = (path: string, query?: any) => router.push({ path, query });

const jumpto = (type: string) => {
    switch (type) {
        case 'table':
            goingTo('/dataManage/importData', { type: 'table' });
            break;
        case 'graph':
            goingTo('/dataManage/importData', { type: 'graph' });
            break;
        case 'document':
            goingTo('/dataManage/importData', { type: 'document' });
            break;
        default:
            break;
    }
};

defineComponent({
    searchInput,
    cardContent,
});

const tableData = ref<TableType[]>([
    {
        name: '航班信息表1',
        content: '各飞行航班信息',
    },
    {
        name: '航班信息表2',
        content: '各飞行航班信息',
    },
    {
        name: '航班信息表3',
        content: '各飞行航班信息',
    },
    {
        name: '航班信息表4',
        content: '各飞行航班信息',
    },
]);
const graphData = ref<GraphType[]>([
    {
        name: '人物关系图谱',
        content: '各飞行航班信息',
    },
    {
        name: '组织关系图谱',
        content: '各飞行航班信息',
    },
    {
        name: '组织关系图谱',
        content: '各飞行航班信息',
    },
    {
        name: '组织关系图谱',
        content: '各飞行航班信息',
    },
]);

const documentData = ref<DocumentType[]>([
    {
        name: '张三建立公司',
        content: 'word 文件',
    },
    {
        name: '张三建立公司',
        content: 'word 文件',
    },
    {
        name: '张三建立公司',
        content: 'word 文件',
    },
    {
        name: '张三建立公司',
        content: 'word 文件',
    },
    {
        name: '张三建立公司',
        content: 'word 文件',
    },
]);

const handleDelete = (index: number, list: any[], type: string) => {
    console.log('here---', type);
    switch (type) {
        case 'table':
            tableData.value.splice(index, 1);
            break;
        case 'graph':
            graphData.value.splice(index, 1);
            break;
        case 'document':
            documentData.value.splice(index, 1);
            break;
        default:
            break;
    }
};
const handleClick = (item: any, type: string) => {
    console.log('here---', item.name);
    switch (type) {
        case 'table':
            goingTo(`/dataManage/tableDetail`, { name: item.name });
            break;
        case 'graph':
            goingTo(`/dataManage/graphDetail`, { name: item.name });
            break;
        case 'document':
            goingTo(`/dataManage/documentDetail`, { name: item.name });
            break;
        default:
            break;
    }
};
</script>

<style lang="scss" scoped>
.data-manage {
    overflow: auto;
}
</style>
<style lang="scss">
.data-manage {
    .el-card {
        overflow: visible !important;
    }
    .el-upload {
        --el-upload-dragger-padding-horizontal: 0 !important;
        --el-upload-dragger-padding-vertical: 0 !important;
    }
    .el-upload-dragger .el-icon--upload {
        font-size: 40px;
    }
}
</style>

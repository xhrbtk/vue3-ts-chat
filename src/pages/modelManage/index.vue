<template>
    <div
        class="model-manage p-[10px] pl-[20px] flex flex-col h-[100%] overflow-auto"
    >
        <el-card
            v-for="(item, index) of pageData"
            :key="index"
            class="mt-[10px]"
        >
            <div class="card-header">
                <div class="flex justify-between mb-[10px]">
                    <span>{{ item.title }}</span>
                    <el-button type="primary" @click="openModel(item.type)"
                        >导入数据</el-button
                    >
                </div>
                <searchInput
                    placeholder="输入关键词进行模型检索"
                    :type="item.type"
                    @handleSearch="handleSearch"
                ></searchInput>
            </div>
            <cardContent
                :type="item.type"
                :list="item.list"
                :showClose="true"
                @delete="handleDelete"
                @click="handleClick"
            ></cardContent>
        </el-card>
    </div>
    <addAnalysisDialog v-model="showAddAnalysisDialog"></addAnalysisDialog>
    <addLocalDialog v-model="showAddLocalDialog"></addLocalDialog>
    <addOpenDialog v-model="showAddOpenDialog"></addOpenDialog>
</template>

<script lang="ts" setup>
import searchInput from '@/components/searchInput.vue';
import cardContent from '@/components/cardContent.vue';
import addAnalysisDialog from '@/components/importData/modelManage/addAnalysisDialog.vue';
import addLocalDialog from '@/components/importData/modelManage/addLocalModelDialog.vue';
import addOpenDialog from '@/components/importData/modelManage/addOpenModelDialog.vue';
import { ref, defineComponent, Ref } from 'vue';
import {
    analysisOperatorType,
    localLargeModelType,
    openLargeModelType,
    pageDataType,
} from '@/types/model-manage.d.ts';

import { useRouter } from 'vue-router';
const router = useRouter();
const goingTo = (path: string, query?: any) => router.push({ path, query });

defineComponent({
    searchInput,
    cardContent,
    addAnalysisDialog,
    addLocalDialog,
    addOpenDialog,
});

const analysisOperatorData = ref<analysisOperatorType[]>([
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
const localLargeModelData = ref<localLargeModelType[]>([
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
const openLargeModelData = ref<openLargeModelType[]>([
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

const pageData = ref<pageDataType[]>([
    {
        type: 'anysis',
        title: '分析算子',
        inputValue: ref(''),
        list: analysisOperatorData,
    },
    {
        type: 'local',
        title: '本地大模型',
        inputValue: ref(''),
        list: localLargeModelData,
    },
    {
        type: 'open',
        title: '开放大模型',
        inputValue: ref(''),
        list: openLargeModelData,
    },
]);
const handleDelete = (index: number, list: any[], type: string) => {
    console.log('here---', type);
    list.splice(index, 1);
};
const handleSearch = (value: string, type: string) => {
    console.log('here---', value, type);
};
const handleClick = (item: any, type: string) => {
    console.log('here---', item.name);
    switch (type) {
        case 'anysis':
            goingTo(`/dataManage/tableDetail`, { name: item.name });
            break;
        case 'local':
            goingTo(`/dataManage/graphDetail`, { name: item.name });
            break;
        case 'open':
            goingTo(`/dataManage/documentDetail`, { name: item.name });
            break;
        default:
            break;
    }
};

// 打开弹框
const showAddAnalysisDialog = ref<boolean>(false);
const showAddLocalDialog = ref<boolean>(false);
const showAddOpenDialog = ref<boolean>(false);
const openModel = (type: string) => {
    switch (type) {
        case 'anysis':
            showAddAnalysisDialog.value = true;
            break;
        case 'local':
            showAddLocalDialog.value = true;
            break;
        case 'open':
            showAddOpenDialog.value = true;
            break;
    }
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.model-manage {
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

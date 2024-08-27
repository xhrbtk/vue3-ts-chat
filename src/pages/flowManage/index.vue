<template>
    <div
        class="flow-manage p-[10px] pl-[20px] flex flex-col h-[100%] overflow-auto"
    >
        <!-- 表 -->
        <el-card>
            <div class="card-header">
                <div class="flex justify-between mb-[10px]">
                    <span>流程列表</span>
                    <el-button type="primary" @click="jumpto">添加</el-button>
                </div>
                <searchInput
                    placeholder="请输入关键词进行流程检索"
                ></searchInput>
            </div>
            <cardContent
                :type="'table'"
                :list="flowManageList"
                :showClose="true"
                @delete="handleDelete"
                @click="handleClick"
            ></cardContent>
        </el-card>
        <el-card class="mt-[20px]">
            <div class="car-header">
                <span>执行记录</span>
            </div>
            <div class="h-[50%] overflow-auto">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" />
                    <el-table-column prop="name" label="Name" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
                <div class="flex justify-end mt-[10px]">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                    />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import searchInput from '@/components/searchInput.vue';
import cardContent from '@/components/cardContent.vue';
import { ref, defineComponent, Ref } from 'vue';
import { FlowManageListType, FlowManageType } from '@/types/flow-manage.d.ts';

import { useRouter } from 'vue-router';
const router = useRouter();
const goingTo = (path: string, query?: any) => router.push({ path, query });

const jumpto = (type?: string) => {
    goingTo('/flow/flowConstruction');
};

defineComponent({
    searchInput,
    cardContent,
});

const flowManageList = ref<FlowManageListType[]>([
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

const tableData = ref<FlowTableType[]>([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom12e',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]);
const handleDelete = (index: number, list: any[], type: string) => {
    console.log('here---', type);
    flowManageList.value.splice(index, 1);
};
const handleClick = (item: any, type: string) => {
    goingTo(`/flow/flowConstruction`, { type });
};
</script>

<style lang="scss" scoped>
.flow-manage {
    overflow: auto;
}
</style>
<style lang="scss">
.flow-manage {
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

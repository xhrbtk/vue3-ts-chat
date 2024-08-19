<template>
    <div
        class="table-detail p-[20px] flex flex-col h-[100%] w-[100%] overflow-hidden"
    >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div
            class="flex flex-col w-full justify-between mt-[20px] w-[100%] h-[100%]"
        >
            <div class="h-[50%] w-full flex">
                <el-card class="w-[40%] h-[100%]">
                    <el-tabs
                        v-model="activeName"
                        @tab-click="handleClick"
                        class="overflow-auto"
                    >
                        <el-tab-pane
                            label="数据概况"
                            name="1"
                            class="h-[240px] overflow-auto"
                        >
                            <tableInfo
                                :tableInfoList="tableInfoList"
                            ></tableInfo>
                        </el-tab-pane>
                        <el-tab-pane
                            label="数据结构"
                            name="2"
                            class="h-[240px] overflow-auto"
                        >
                            <tableInfo
                                :tableInfoList="dataStructure"
                            ></tableInfo>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
                <el-card class="h-[100%] w-[100%]">
                    <template #header>
                        <div class="card-header">
                            <span>数据浏览</span>
                        </div>
                    </template>
                    <div class="overflow-auto h-[240px]">
                        <el-table :data="tableData" border>
                            <el-table-column
                                fixed
                                prop="date"
                                label="Date"
                                width="150"
                            />
                            <el-table-column
                                prop="name"
                                label="Name"
                                width="120"
                            />
                            <el-table-column
                                prop="state"
                                label="State"
                                width="120"
                            />
                            <el-table-column
                                prop="city"
                                label="City"
                                width="320"
                            />
                            <el-table-column
                                prop="address"
                                label="Address"
                                width="600"
                            />
                            <el-table-column prop="zip" label="Zip" />
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
            <div class="h-[50%] w-full flex overflow-y-auto">
                <el-card class="overflow-y-auto">
                    <template #header>
                        <div class="card-header">
                            <span>数据查询</span>
                        </div>
                    </template>

                    <div class="h-[50%] w-full flex overflow-y-auto">
                        <div
                            class="flex mt-[10px] items-center w-[50%] h-[200px] overflow-auto"
                        >
                            <codeSearch
                                placeholder="请输入sql语句进行查询"
                                class="flex-1 mr-[10px]"
                            ></codeSearch>
                            <el-button style="margin-left: auto" type="primary"
                                >查询</el-button
                            >
                        </div>
                        <div class="mt-[10px] w-[50%] h-[200px] overflow-auto">
                            <el-table :data="tableData" border>
                                <el-table-column
                                    fixed
                                    prop="date"
                                    label="Date"
                                    width="150"
                                />
                                <el-table-column
                                    prop="name"
                                    label="Name"
                                    width="120"
                                />
                                <el-table-column
                                    prop="state"
                                    label="State"
                                    width="120"
                                />
                                <el-table-column
                                    prop="city"
                                    label="City"
                                    width="320"
                                />
                                <el-table-column
                                    prop="address"
                                    label="Address"
                                    width="600"
                                />
                                <el-table-column prop="zip" label="Zip" />
                            </el-table>
                            <div class="flex justify-end mt-[10px]">
                                <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="1000"
                                />
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import codeSearch from '@/components/codeSearch.vue';
import tableInfo from '@/components/tableInfo.vue';
import searchInput from '@/components/searchInput.vue';
import type { TabsPaneContext } from 'element-plus';
import { ref, Ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
defineComponent({ tableInfo, searchInput, codeSearch });
const route = useRoute();
const name: Ref<string | undefined> = ref(
    route.query.name as string | undefined,
);
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
];
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
        label: '字段数',
        value: '表格1',
    },
    {
        label: '行数',
        value: '表格1',
    },
]);

interface dataStructureType {
    value: string;
    label: string;
    type: string;
}
const dataStructure = ref<dataStructureType[]>([
    {
        label: 'id',
        value: '事件标识',
        type: 'number',
    },
]);

const activeName = ref<string>('1');
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
};
</script>

<style lang="scss">
/* el-table 宽度自适应 */
.table-detail {
    // .el-table-pane {
    //     height: 200px !important;
    //     overflow: auto !important;
    //     border: 1px solid red !important;
    // }
}
</style>

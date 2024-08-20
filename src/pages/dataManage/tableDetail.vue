<template>
    <div
        class="table-detail p-[10px] pl-[20px] flex flex-col h-[100%] w-[100%] overflow-hidden"
    >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div
            class="flex flex-col w-full justify-between mt-[10px] w-[100%] h-[100%]"
        >
            <p class="text-[14px]">数据概览</p>
            <div class="h-[45%] w-full flex relative">
                <el-tabs
                    type="border-card"
                    v-model="activeName"
                    @tab-click="handleClick"
                    class="w-[40%] h-[100%] overflow-auto"
                >
                    <el-tab-pane label="数据概况" name="1">
                        <tableInfo :tableInfoList="tableInfoList"></tableInfo>
                    </el-tab-pane>
                    <el-tab-pane label="数据结构" name="2">
                        <tableInfo :tableInfoList="dataStructure"></tableInfo>
                    </el-tab-pane>
                </el-tabs>
                <div class="overflow-auto w-[100%] h-[100%] ml-[10px]">
                    <el-table :data="tableData" border size="small">
                        <el-table-column prop="date" label="Date" />
                        <el-table-column prop="name" label="Name" />
                        <el-table-column prop="state" label="State" />
                        <el-table-column prop="city" label="City" />
                        <el-table-column prop="address" label="Address" />
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
            <el-divider border-style="dashed" />
            <div class="h-[45%] w-full relative">
                <p class="text-[14px]">数据查询</p>
                <div class="h-[96%] w-full flex">
                    <div class="flex flex-col w-[40%] mr-[10px]">
                        <el-button
                            class="w-[20%] ml-auto mb-[10px]"
                            size="small"
                            type="primary"
                            >查询</el-button
                        >
                        <codeSearch
                            placeholder="请输入sql语句进行查询"
                            class="flex-1"
                        ></codeSearch>
                    </div>
                    <div class="w-full h-[90%] overflow-auto">
                        <el-table :data="tableData" border size="small">
                            <el-table-column prop="date" label="Date" />
                            <el-table-column prop="name" label="Name" />
                            <el-table-column prop="state" label="State" />
                            <el-table-column prop="city" label="City" />
                            <el-table-column prop="address" label="Address" />
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

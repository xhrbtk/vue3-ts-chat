<template>
    <div class="table-detail p-[10px] pl-[20px] flex flex-col h-full w-full">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>文档</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="w-full h-full mt-[10px] overflow-auto">
            <p class="text-[14px]">数据浏览</p>
            <div class="h-[80%] w-full flex relative">
                <el-tabs
                    v-model="activeName"
                    type="border-card"
                    class="w-[40%] h-[100%] overflow-auto mr-[10px]"
                >
                    <el-tab-pane label="数据概况" name="1">
                        <tableInfo :tableInfoList="tableInfoList"></tableInfo>
                    </el-tab-pane>
                </el-tabs>
                <div class="w-full h-full overflow-auto">
                    <pdfViewer></pdfViewer>
                </div>
            </div>
            <el-divider border-style="dashed" />
            <div class="h-[80%] w-full relative flex flex-col">
                <p class="text-[14px]">数据查询</p>
                <div>
                    <searchInput
                        placeholder="请输入文字对文件内容进行分析"
                    ></searchInput>
                </div>
                <div class="w-full h-full mt-[10px] overflow-auto">
                    <pdfViewer></pdfViewer>
                </div>
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

const activeName = ref<string>('1');
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

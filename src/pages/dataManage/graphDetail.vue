<template>
    <div class="graph-detail p-[10px] pl-[20px] flex flex-col h-full">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>图</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="w-full h-full mt-[10px] overflow-auto">
            <p class="text-[14px]">数据浏览</p>
            <div class="h-[80%] w-full flex relative">
                <div class="w-full h-full flex">
                    <el-tabs
                        v-model="activeName"
                        type="border-card"
                        class="w-[40%] h-[100%] overflow-auto"
                    >
                        <el-tab-pane label="数据概况" name="1">
                            <tableInfo
                                :tableInfoList="tableInfoList"
                            ></tableInfo>
                        </el-tab-pane>
                        <el-tab-pane label="节点类型" name="2">
                            <tableInfo
                                :tableInfoList="tableInfoList"
                            ></tableInfo>
                        </el-tab-pane>
                        <el-tab-pane label="关系类型" name="3">
                            <tableInfo
                                :tableInfoList="tableInfoList"
                            ></tableInfo>
                        </el-tab-pane>
                    </el-tabs>
                    <NeovisGraph
                        class="border-dashed border-[1px] border-[#e4e4e4]"
                        containerId="viz1"
                        ref="vizRef"
                        neo4j-uri="bolt://54.159.153.212:7687"
                        neo4j-user="neo4j"
                        neo4j-password="customers-margins-partitions"
                        :query="query"
                    />
                </div>
            </div>
            <el-divider border-style="dashed" />
            <div class="h-[80%] w-full relative flex flex-col">
                <div class="flex">
                    <codemirror
                        placeholder="请输入cypher语句查询数据"
                        v-model="code"
                        :extensions="extensions"
                        :autofocus="true"
                        :indent-with-tab="true"
                        :tab-size="4"
                        style="width: 90%; max-height: 150px"
                    />
                    <el-button style="margin-left: auto" type="primary"
                        >查询</el-button
                    >
                </div>

                <div
                    class="w-full h-full mt-[10px] border-dashed border-[1px] border-[#e4e4e4]"
                >
                    <NeovisGraph
                        neo4j-uri="bolt://54.159.153.212:7687"
                        neo4j-user="neo4j"
                        neo4j-password="customers-margins-partitions"
                        :query="query"
                        containerId="viz2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import neovisGraph from '@/components/neovisGraph.vue';

import tableInfo from '@/components/tableInfo.vue';
import { ref, defineComponent, Ref } from 'vue';
import { useRoute } from 'vue-router';
// import { oneDark } from '@codemirror/theme-one-dark';
import { Codemirror } from 'vue-codemirror';
import { sql } from '@codemirror/lang-sql';
import { solarizedLight } from '@ddietr/codemirror-themes/solarized-light';
const route = useRoute();

defineComponent({
    Codemirror,
    tableInfo,
    neovisGraph,
});
const query = ref<string>(`
   MATCH p=()-[r:PLAYED_IN]->() RETURN p LIMIT 200
`);
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
        label: '节点类型',
        value: '表格1',
    },
    {
        label: '关系类型',
        value: '表格1',
    },
    {
        label: '节点数',
        value: '表格1',
    },
    {
        label: '关系数',
        value: '表格1',
    },
]);
const activeName = ref<string>('1');
const extensions = [sql(), solarizedLight];
const code = ref<string>('');
</script>

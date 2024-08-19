<template>
    <div class="graph-detail p-[20px] flex flex-col h-[100%]">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>图</el-breadcrumb-item>
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
                        <codemirror
                            placeholder="请输入cypher语句查询数据"
                            v-model="code"
                            :extensions="extensions"
                            :autofocus="true"
                            :indent-with-tab="true"
                            :tab-size="4"
                            style="max-height: 200px"
                        />
                        <p>
                            {{ code }}
                        </p>
                    </div>
                </el-card>
                <el-card class="mt-[20px] overflow-y-auto">
                    <template #header>
                        <div class="card-header">
                            <span>节点类型</span>
                        </div>
                    </template>
                </el-card>
                <el-card class="mt-[20px] overflow-y-auto">
                    <template #header>
                        <div class="card-header">
                            <span>关系类型</span>
                        </div>
                    </template>
                </el-card>

                <el-card class="mt-[20px] overflow-y-auto">
                    <template #header>
                        <div class="card-header">
                            <span>数据查询</span>
                        </div>
                    </template>
                    <div class="mt-[10px] flex">
                        <codemirror
                            placeholder="请输入cypher语句查询数据"
                            v-model="code"
                            :extensions="extensions"
                            :autofocus="true"
                            :indent-with-tab="true"
                            :tab-size="4"
                            class="max-h[200px] flex-1"
                            style="width: 90%"
                        />
                        <el-button style="margin-left: auto" type="primary"
                            >查询</el-button
                        >
                    </div>
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
import { ref, defineComponent, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { oneDark } from '@codemirror/theme-one-dark';
import { Codemirror } from 'vue-codemirror';
import { sql } from '@codemirror/lang-sql';

const route = useRoute();

defineComponent({
    Codemirror,
    tableInfo,
});
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

const extensions = [sql(), oneDark];
const code = ref<string>('');
</script>

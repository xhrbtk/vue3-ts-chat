<template>
    <div class="import-data p-[20px] flex flex-col h-[100%]">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>导入数据</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 数据库-->
        <el-card class="mt-[10px]" v-if="type == 'table' || type == 'graph'">
            <div class="card-header">
                <div class="flex justify-between mb-[10px]">
                    <span>数据库</span>
                </div>
            </div>
            <div class="flex justify-end">
                <el-button type="primary" @click="showDataBaseDialog = true"
                    >导入</el-button
                >
            </div>

            <dataBaseDialog
                v-model="showDataBaseDialog"
                @submitDataBaseForm="submitDataBaseForm"
                @update:showDataBaseDialog="showDataBaseDialog = $event"
            ></dataBaseDialog>
        </el-card>
        <!-- 数据件-->
        <el-card class="mt-[10px]" v-if="type == 'table' || type == 'graph'">
            <div class="card-header">
                <div class="flex justify-between mb-[10px]">
                    <span>数据件</span>
                </div>
            </div>
            <div class="flex justify-end">
                <el-button type="primary" @click="showDataFilesDialog = true"
                    >导入</el-button
                >
            </div>
            <dataFilesDialog v-model="showDataFilesDialog"></dataFilesDialog>
        </el-card>
        <!-- 本地文件-->
        <el-card class="mt-[10px]" v-if="type == 'document' || type == 'table'">
            <div class="card-header">
                <span>本地文件导入</span>
            </div>
            <el-upload
                class="upload-demo mt-[10px] mx-auto"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件或<em>点击上传</em></div>
                <template #tip>
                    <div class="el-upload__tip">xls/csv/txt/word/PDF</div>
                </template>
            </el-upload>
        </el-card>

        <!-- we b-->
        <el-card class="mt-[10px]" v-if="type == 'document'">
            <div class="card-header">
                <span>web数据导入</span>
            </div>
            <div class="flex justify-end">
                <el-button type="primary" @click="showWebDialog = true"
                    >导入</el-button
                >
            </div>
            <webDialog v-model="showWebDialog"></webDialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import dataBaseDialog from '@/components/importData/dataBaseDialog.vue';
import dataFilesDialog from '@/components/importData/dataFilesDialog.vue';
import webDialog from '@/components/importData/webDialog.vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { ref, Ref, watchEffect, reactive, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

defineComponent({ dataBaseDialog, dataFilesDialog, webDialog });

const type: Ref<string | undefined> = ref(
    route.query.type as string | undefined,
);

// 数据库导入模块
const showDataBaseDialog = ref(false);
const submitDataBaseForm = (dataBaseForm: any) => {
    console.log('dataBaseForm', dataBaseForm);
    console.log('showDataBaseDialog', showDataBaseDialog);
    // showDataBaseDialog.value = false;
};

// 数据件导入模块
const showDataFilesDialog = ref<boolean>(false);

// web导入模块
const showWebDialog = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.import-data {
    overflow-y: scroll;
}
</style>
<style lang="scss">
.import-data {
    .el-card {
        overflow: visible !important;
    }
}
</style>

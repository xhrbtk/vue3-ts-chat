<template>
    <div class="data-manage p-[20px] flex flex-col h-[100%]">
        <el-button @click="goingTo('/dataManage/importData')"
            >导入数据</el-button
        >
        <!-- 表 -->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>表</span>
                <searchInput></searchInput>
            </div>
            <cardContent
                :list="tableData"
                :showClose="true"
                @close="handleClose"
            ></cardContent>
            <el-upload
                class="upload-demo mt-[10px] mx-auto"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件或<em>点击上传</em></div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-card>
        <!-- 图谱 -->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>图谱</span>
            </div>
            <cardContent
                :list="graphData"
                :showClose="true"
                @close="handleClose"
            ></cardContent>
            <el-upload
                class="upload-demo mt-[10px] mx-auto"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件或<em>点击上传</em></div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-card>
        <!-- 文档 -->
        <el-card class="mt-[20px]">
            <div class="card-header">
                <span>文档</span>
            </div>
            <cardContent
                :list="documentData"
                :showClose="true"
                @close="handleClose"
            ></cardContent>
            <el-upload
                class="upload-demo mt-[10px] mx-auto"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件或<em>点击上传</em></div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import searchInput from '@/components/searchInput.vue';
import cardContent from '@/components/cardContent.vue';
import { ref, defineComponent } from 'vue';
import { TableType, GraphType, DocumentType } from '@/types/TableType';
import { UploadFilled } from '@element-plus/icons-vue';

import { useRouter } from 'vue-router';
const router = useRouter();
const goingTo = (path: string) => router.push({ path });

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

const handleClose = (index: number, list: []) => {
    console.log('here---');
    list.splice(index, 1);
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

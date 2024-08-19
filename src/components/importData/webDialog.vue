<template>
    <el-dialog
        v-model:visible="webDialog"
        title="WEB数据接入"
        @close="handleClose"
        width="80%"
    >
        <div>
            <searchInput
                class="!m-0"
                v-model="inputValue"
                placeholder="请输入网页地址获取解析网页"
                @handleSearch="handleSearch"
            ></searchInput>
            <div class="el-upload__tip">
                支持html/txt/word/pdf/xls/csv等文档的解析
            </div>
        </div>

        <div class="mt-[20px]">
            <!-- <pdfViewer></pdfViewer> -->
            <!-- <wordViewer></wordViewer> -->
            <xlsxViewer></xlsxViewer>
        </div>
        <div class="flex justify-end">
            <el-button type="primary" class="mt-[20px]">导入数据</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import searchInput from '@/components/searchInput.vue';
import pdfViewer from '@/components/pdfViewer.vue';
import wordViewer from '@/components/wordViewer.vue';
import xlsxViewer from '@/components/xlsxViewer.vue';
import { ref, defineProps, defineEmits, defineComponent } from 'vue';

defineComponent({
    searchInput,
    pdfViewer,
    wordViewer,
    xlsxViewer,
});
// 弹框
const props = defineProps({
    showWebDialog: {
        type: Boolean,
    },
});
const emits = defineEmits(['update:showWebDialog']);
const webDialog = ref(props.showWebDialog);
const handleClose = () => {
    emits('update:showWebDialog', false);
};

// 输入框相关
const inputValue = ref<string>('');
const handleSearch = () => {
    // 请求api 获取接口数据 并展示
    console.log('inputValue', inputValue.value);
};
</script>

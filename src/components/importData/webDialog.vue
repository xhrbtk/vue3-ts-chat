<template>
    <el-dialog
        v-model:visible="webDialog"
        title="WEB数据接入"
        @close="handleClose"
        width="80%"
    >
        <div class="">
            <searchInput
                v-model="inputValue"
                placeholder="请输入网页地址获取解析网页"
                @handleSearch="handleSearch"
            ></searchInput>
            <p>{{ inputValue }}</p>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { DataFilesFormTyp } from '@/types/data-manage.d.ts';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import searchInput from '@/components/searchInput.vue';

import { ref, defineProps, defineEmits, defineComponent } from 'vue';

defineComponent({
    searchInput,
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

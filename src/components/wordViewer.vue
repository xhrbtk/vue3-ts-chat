<template>
    <div class="h-[500px] overflow-hidden w-[100%]">
        <button @click="getFile">获取远程</button>
        <vue-office-docx :src="src" class="overflow-auto h-[100%] w-[100%]" />
    </div>
</template>

<script setup lang="ts">
///引入 VueOffice 组件
import VueOfficeDocx from '@vue-office/docx';
// 引入相关样式
import '@vue-office/docx/lib/index.css';
import { ref } from 'vue';

// 设置文档网络地址，可以是本地文件
const src = ref();

// 请求预览
const getFile = () => {
    src.value =
        'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/solution/demo.docx';
};
</script>

<style lang="scss" scoped></style>

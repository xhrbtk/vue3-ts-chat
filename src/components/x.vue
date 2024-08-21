<template>
    <ul>
        <li v-for="(item, index) of arr" :key="index">
            <el-form-item
                :label="item.label"
                :prop="`arr[${index}].value`"
                :rules="[
                    { required: true, message: 'age is required' },
                    { type: 'number', message: 'age must be a number' },
                ]"
            >
                <el-input v-model="item.value"> </el-input>
            </el-form-item>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
defineProps({
    arr: {
        type: Array,
        default: () => [],
    },
});
</script>

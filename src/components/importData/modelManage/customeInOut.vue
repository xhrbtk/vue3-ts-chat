<template>
    <ul class="w-full border-dashed border-[1px] border-[#e5e5e5]">
        <li
            class="flex w-full p-[10px]"
            v-for="(item, index) in localArr"
            :key="index"
        >
            <el-form-item
                class="w-[50%]"
                label-width="80px"
                label="参数名称"
                :prop="`localArr[${index}].name`"
                :rules="{
                    required: true,
                    message: '请输入参数名称',
                    trigger: 'blur',
                }"
            >
                <el-input
                    v-model="item.name"
                    class="mr-[10px]"
                    placeholder="请输入参数名称"
                />
            </el-form-item>
            <el-form-item
                class="w-[50%]"
                label="参数类型"
                :prop="`localArr[${index}].type`"
                :rules="{
                    required: true,
                    message: '请选择参数类型',
                    trigger: 'change',
                }"
            >
                <el-select placeholder="请选择参数类型" v-model="item.type">
                    <el-option
                        v-for="(item, index) in typeSelect"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>

            <span
                @click="deleteItem(obj.type, item, index)"
                class="icon-shanchu cursor-pointer text-[14px] iconfont ml-[10px]"
            >
            </span>
        </li>
        <li
            class="flex justify-center items-center w-full mt-[10px]"
            @click="addItem(obj.type, item)"
        >
            <span
                class="icon-tianjia cursor-pointer text-[14px] iconfont"
            ></span>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, Ref, watch } from 'vue';
import {
    AnalysisFormType,
    InputAndOutputObjType,
    InputArrType,
    OutputArrType,
    Keys,
} from '@/types/model-manage.d.ts';
interface SelectTypeOptionsType {
    label: string;
    value: string;
}
const typeSelect = ref<SelectTypeOptionsType[]>([
    { label: '字符串', value: '1' },
    { label: '数字', value: '2' },
    { label: '布尔值', value: '3' },
    { label: '日期', value: '4' },
    { label: '数组', value: '5' },
    { label: '对象', value: '6' },
]);

const props = defineProps({
    type: {
        type: String,
    },
    arr: {
        type: Array,
    },
});
const emits = defineEmits(['addItem', 'deleteItem']);

const localArr = ref([...props.arr]);

watch(
    () => props.arr,
    (newArr) => {
        localArr.value = [...newArr];
    },
);

// 添加配置参数
const addItem = () => {
    localArr.value.push({ name: '', type: '' });
    emits('updateArr', localArr.value);
};

// 删除配置参数
const deleteItem = (index: number) => {
    localArr.value.splice(index, 1);
    emits('updateArr', localArr.value);
};
</script>

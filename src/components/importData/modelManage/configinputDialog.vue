<template>
    <el-dialog v-model:visible="show" title="参数配置">
        <el-form>
            <ul class="w-full border-dashed border-[1px] border-[#e5e5e5]">
                <li
                    class="flex w-full p-[10px]"
                    v-for="(item, index) of arr"
                    :key="index"
                >
                    <el-form-item
                        class="w-[50%]"
                        label-width="80px"
                        label="参数名称"
                        :prop="`arr[${index}].name`"
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
                        :prop="`arr[${index}].type`"
                        :rules="{
                            required: true,
                            message: '请选择参数类型',
                            trigger: 'change',
                        }"
                    >
                        <el-select
                            placeholder="请选择参数类型"
                            v-model="item.type"
                        >
                            <el-option
                                v-for="(item, index) in typeSelect"
                                :key="index"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>

                    <span
                        @click="deleteItem(index)"
                        class="icon-shanchu cursor-pointer text-[14px] iconfont ml-[10px]"
                    >
                    </span>
                </li>
                <li
                    class="flex justify-center items-center w-full mt-[10px]"
                    @click="addItem"
                >
                    <span
                        class="icon-tianjia cursor-pointer text-[14px] iconfont"
                    ></span>
                </li>
            </ul>
            <div class="flex justify-end mt-[10px]">
                <el-button size="small" type="primary">确定</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps } from 'vue';
import {
    AnalysisFormType,
    InputAndOutputObjType,
    InputArrType,
    OutputArrType,
    Keys,
} from '@/types/model-manage.d.ts';
const props = defineProps({
    showConfigInputDialog: {
        type: Boolean,
    },
});
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
const emits = defineEmits(['update:showConfigInputDialog']);
const show = ref(props.showConfigInputDialog);
const arr = ref<InputArrType[]>([{ name: '', type: '' }]);
const addItem = () => {
    arr.value.push({ name: '', type: '' });
};
const deleteItem = (index) => {
    arr.value.splice(index, 1);
};
</script>

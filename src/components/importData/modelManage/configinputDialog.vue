<template>
    <el-dialog v-model:visible="show" title="参数配置">
        <el-form size="small">
            <ul class="w-full border-dashed border-[1px] border-[#e5e5e5]">
                <li
                    class="flex w-full p-[10px]"
                    v-for="(item, index) of arr"
                    :key="index"
                >
                    <el-form-item
                        class="w-[35%]"
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
                        class="w-[45%]"
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
                    <el-form-item
                        class="w-[35%]"
                        label-width="70px"
                        label="参数值"
                        :prop="`arr[${index}].name`"
                        :rules="{
                            required: true,
                            message: '请输入参数值',
                            trigger: 'blur',
                        }"
                    >
                        <el-input v-model="item.value"> </el-input>
                    </el-form-item>

                    <span
                        @click="deleteItem(index)"
                        class="icon-shanchu cursor-pointer text-[14px] iconfont ml-[10px]"
                    >
                    </span>
                </li>
                <li class="flex justify-center items-center w-full mt-[10px]">
                    <span
                        @click="addItem"
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
import { typeSelect } from '@/components/importData/modelManage/config/common.ts';
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

const emits = defineEmits(['update:showConfigInputDialog']);
const show = ref(props.showConfigInputDialog);
const arr = ref<InputArrType[]>([{ name: '', type: '' }]);
const addItem = () => {
    arr.value.push({ name: '', type: '', value: '' });
};
const deleteItem = (index) => {
    arr.value.splice(index, 1);
};
</script>

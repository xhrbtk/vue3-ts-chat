<template>
    <el-dialog
        width="60%"
        v-model:visible="showDialog"
        :title="`模型验证:${modelName}`"
    >
        <div>
            <el-form size="small" label-width="auto">
                <el-form-item label="参数">
                    <ul
                        class="w-full border-dashed border-[1px] border-[#e5e5e5]"
                    >
                        <li
                            class="flex w-full p-[10px]"
                            v-for="(item, index) in inputArr"
                            :key="index"
                        >
                            <el-form-item class="w-full" :label="item.name">
                                <el-input
                                    v-model="item.value"
                                    class="mr-[10px]"
                                />
                            </el-form-item>
                        </li>
                    </ul>
                </el-form-item>
                <el-form-item
                    label="添加额外参数"
                    v-if="modelType == 'anysis' || modelType == 'open'"
                >
                    <ul
                        class="w-full border-dashed border-[1px] border-[#e5e5e5]"
                    >
                        <li
                            class="flex w-full justify-between mt-[18px]"
                            v-for="(item, index) of inputArrMore"
                            :key="index"
                        >
                            <el-form-item
                                class="w-[38%]"
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
                                class="w-[37%]"
                                label-width="70px"
                                label="参数值"
                                :prop="`arr[${index}].name`"
                                :rules="{
                                    required: true,
                                    message: '请输入参数值',
                                    trigger: 'blur',
                                }"
                            >
                                <el-input
                                    v-model="item.value"
                                    placeholder="请输入参数值"
                                >
                                </el-input>
                            </el-form-item>

                            <span
                                @click="deletMoreInput(index)"
                                class="icon-shanchu cursor-pointer text-[14px] iconfont ml-[10px]"
                            >
                            </span>
                        </li>
                        <li
                            class="flex justify-center items-center w-full mt-[10px]"
                        >
                            <span
                                @click="addMoreInput"
                                class="icon-tianjia cursor-pointer text-[14px] iconfont"
                            ></span>
                        </li>
                    </ul>
                </el-form-item>
            </el-form>
            <div class="flex justify-end">
                <el-button size="small" type="primary">验证</el-button>
            </div>
            <div class="p-[10px]">
                <p class="text-[12px]">模型输出:</p>
                <div class="border-dashed border-[1px] border-[#e5e5e5]">
                    <pre>{{ jsonString }}</pre>
                </div>
            </div>
            <configinputDialog
                v-model="showConfigInputDialog"
            ></configinputDialog>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import configinputDialog from './configinputDialog.vue';
import { typeSelect } from '@/components/importData/modelManage/config/common.ts';
import {
    AnalysisFormType,
    InputAndOutputObjType,
    InputArrType,
    OutputArrType,
    Keys,
} from '@/types/model-manage.d.ts';
import { ref, defineProps, defineEmits, defineComponent } from 'vue';

const props = defineProps({
    showValidateModel: {
        type: Boolean,
        default: false,
    },
    inputArr: {
        type: Array as () => InputArrType[],
        default: () => [],
    },
    modelName: {
        type: String,
        default: '',
    },
    modelType: {
        type: String,
        default: '',
    },
});

const emits = defineEmits(['update:showValidateModel']);
const showDialog = ref(props.showValidateModel);

const showConfigInputDialog = ref<boolean>(false);

const inputArrMore = ref<InputArrType[]>([]);
const addMoreInput = () => {
    inputArrMore.value.push({
        name: '',
        type: '',
        value: '',
    });
};
const deletMoreInput = (index: number) => {
    inputArrMore.value.splice(index, 1);
};

const jsonData = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
};

// 将 JSON 对象转换为字符串并格式化
const jsonString = JSON.stringify(jsonData, null, 2);
</script>

<template>
    <el-dialog
        v-model:visible="dataBaseDialog"
        title="添加分析算子"
        @close="handleClose(dataBaseFormRef)"
        width="60%"
    >
        <el-form
            ref="dataBaseFormRef"
            :model="dataBaseForm"
            :rules="rules"
            label-width="auto"
            status-icon
            size="small"
        >
            <el-form-item label="名称" prop="modelName">
                <el-input v-model="dataBaseForm.modelName" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="dataBaseForm.description" placeholder="" />
            </el-form-item>
            <el-form-item
                v-if="modelType == 'customFunction'"
                label="函数定义"
                prop="functionDefine"
            >
                <codeSearch
                    v-model="dataBaseForm.functionDefine"
                    placeholder="请输入python函数"
                    class="flex-1"
                ></codeSearch>
            </el-form-item>
            <el-form-item v-else label="服务地址" prop="address">
                <el-input v-model="dataBaseForm.address" />
            </el-form-item>

            <el-form-item
                label="服务密钥"
                prop="secretKey"
                v-if="modelType == 'open'"
            >
                <el-input v-model="dataBaseForm.secretKey" />
            </el-form-item>

            <template v-if="modelType == 'anysis' || modelType == 'open'">
                <el-form-item
                    v-for="(obj, index) in inputAndOutputObj"
                    :key="index"
                    :label="obj.label"
                    :prop="obj.type"
                >
                    <ul
                        class="w-full border-dashed border-[1px] border-[#e5e5e5]"
                    >
                        <li
                            class="flex w-full p-[10px]"
                            v-for="(item, index) in obj.arr"
                            :key="index"
                        >
                            <el-form-item
                                class="w-[50%]"
                                label-width="80px"
                                label="参数名称"
                                :prop="`[${obj.type}][${index}].name`"
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
                                :prop="`[${obj.type}][${index}].type`"
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
                </el-form-item>
            </template>
            <div class="flex justify-end">
                <el-button type="primary" @click="showValidateModel = true">
                    模型验证
                </el-button>
                <el-button type="primary" @click="submitForm(dataBaseFormRef)">
                    添加
                </el-button>
                <el-button @click="resetForm(dataBaseFormRef)">重置</el-button>
            </div>
        </el-form>
        <!-- 参数配置弹框 -->

        <!-- 模型验证弹框 -->
        <verifyDialog
            v-model="showValidateModel"
            :inputArr="inputArr"
            :modelName="dataBaseForm.modelName"
            :modelType="modelType"
        ></verifyDialog>
    </el-dialog>
</template>

<script lang="ts" setup>
import verifyDialog from './verifyDialog.vue';
import { typeSelect } from '@/components/importData/modelManage/config/common.ts';
import codeSearch from '@/components/codeSearch.vue';
import {
    AnalysisFormType,
    InputAndOutputObjType,
    InputArrType,
    OutputArrType,
    Keys,
} from '@/types/model-manage.d.ts';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { emit } from 'process';
import {
    ref,
    Ref,
    watchEffect,
    reactive,
    defineProps,
    defineEmits,
    defineComponent,
} from 'vue';

defineComponent({
    verifyDialog,
    codeSearch,
});

// 弹框
const props = defineProps({
    showAddAnalysisDialog: {
        type: Boolean,
    },
    modelType: {
        type: String,
    },
});
const emits = defineEmits([
    'update:showAddAnalysisDialog',
    'submitDataBaseForm',
]);

const dataBaseDialog = ref(props.showAddAnalysisDialog);
const handleClose = (formEl) => {
    resetForm(formEl);
    emits('update:showAddAnalysisDialog', false);
};

// form表单

const dataBaseFormRef = ref<FormInstance>;

const inputArr = ref<InputArrType[]>([{ name: 'text', type: 'text' }]);
const outputArr = ref<OutputArrType[]>([{ name: 'text', type: 'text' }]);
const dataBaseForm = reactive<AnalysisFormType>({
    description: '',
    address: '',
    modelName: '',
    inputArr: inputArr,
    outputArr: outputArr,
    secretKey: '',
    functionDefine: '',
});

const inputAndOutputObj = ref<InputAndOutputObjType[]>([
    {
        label: '配置输入参数',
        arr: inputArr, // Ref<InputArrType[]>
        type: 'inputArr',
    },
    {
        label: '配置输出参数',
        arr: outputArr, // Ref<outputArrType[]>
        type: 'outputArr',
    },
]);

const rules = reactive<FormRules>({
    address: [{ required: true, message: '请输入数据库地址', trigger: 'blur' }],
    description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
    modelName: [{ required: true, message: '请输入模型名称', trigger: 'blur' }],
    secretKey: [{ required: true, message: '请输入模型密钥', trigger: 'blur' }],
    functionDefine: [
        { required: true, message: '请输入函数定义', trigger: 'blur' },
    ],
});

// 添加配置参数

const addItem = (type: Keys, item: any) => {
    console.log(dataBaseForm[type]);
    dataBaseForm[type].push({ name: '', type: '' });
};

// 删除配置参数
const deleteItem = (type: Keys, item: any, index: number) => {
    dataBaseForm[type].splice(index, 1);
};

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!', dataBaseForm);
            emits('submitDataBaseForm', dataBaseForm);
            resetForm(formEl);
            emits('update:showAddAnalysisDialog', false);
        } else {
            console.log('error submit!', fields);
        }
    });
};
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
    inputArr.value = [{ name: 'text', type: 'text' }];
    outputArr.value = [{ name: 'text', type: 'text' }];
};
watchEffect(() => {
    dataBaseDialog.value = props.showAddAnalysisDialog;
});

// 模型验证
const showValidateModel = ref<boolean>(false);
</script>

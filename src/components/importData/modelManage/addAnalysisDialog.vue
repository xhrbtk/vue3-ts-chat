<template>
    <el-dialog
        v-model:visible="dataBaseDialog"
        title="添加分析算子"
        @close="handleClose(dataBaseFormRef)"
    >
        <el-form
            ref="dataBaseFormRef"
            :model="dataBaseForm"
            :rules="rules"
            label-width="auto"
            status-icon
            size="small"
        >
            <el-form-item label="名称" prop="userName">
                <el-input v-model="dataBaseForm.userName" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="dataBaseForm.description" placeholder="" />
            </el-form-item>
            <el-form-item label="服务地址" prop="address">
                <el-input v-model="dataBaseForm.address" />
            </el-form-item>

            <el-form-item
                v-for="(obj, index) in inputAndOutputObj"
                :key="index"
                :label="obj.label"
                :prop="obj.type"
            >
                <ul class="w-full border-dashed border-[1px] border-[#e5e5e5]">
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
        ></verifyDialog>
    </el-dialog>
</template>

<script lang="ts" setup>
import verifyDialog from './verifyDialog.vue';
import customeInOut from './customeInOut.vue';
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
    customeInOut,
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
// 弹框
const props = defineProps({
    showAddAnalysisDialog: {
        type: Boolean,
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

const inputArr = ref<InputArrType[]>([{ name: '', type: '' }]);
const outputArr = ref<OutputArrType[]>([{ name: '', type: '' }]);
const dataBaseForm = reactive<AnalysisFormType>({
    description: '',
    address: '',
    userName: '',
    inputArr: inputArr,
    outputArr: outputArr,
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
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
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
};
watchEffect(() => {
    dataBaseDialog.value = props.showAddAnalysisDialog;
});

// 模型验证
const showValidateModel = ref<boolean>(false);
</script>

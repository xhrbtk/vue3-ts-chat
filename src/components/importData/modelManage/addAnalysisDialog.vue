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
            class="demo-ruleForm max-w-[600px] mx-auto"
            status-icon
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
            <el-form-item label="输入参数" prop="address">
                <el-input v-model="dataBaseForm.address" />
            </el-form-item>
            <el-form-item label="输出参数" prop="address">
                <el-input v-model="dataBaseForm.address" />
            </el-form-item>

            <div class="flex justify-end">
                <el-button type="primary" @click="submitForm(dataBaseFormRef)">
                    提交
                </el-button>
                <el-button @click="resetForm(dataBaseFormRef)">重置</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { AnalysisFormType } from '@/types/model-manage.d.ts';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { emit } from 'process';
import { ref, Ref, watchEffect, reactive, defineProps, defineEmits } from 'vue';

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

const dataBaseForm = reactive<AnalysisFormType>({
    description: '',
    address: '',
    userName: '',
});
const rules = reactive<FormRules>({
    address: [{ required: true, message: '请输入数据库地址', trigger: 'blur' }],
    description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
});
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
</script>

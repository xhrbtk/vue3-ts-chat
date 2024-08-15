<template>
    <el-dialog
        v-model:visible="dataBaseDialog"
        title="数据库导入"
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
            <el-form-item label="数据库类型" prop="selectDataBase">
                <el-select
                    v-model="dataBaseForm.selectDataBase"
                    placeholder="请选择数据库类型"
                >
                    <el-option
                        v-for="item in databaseList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="主机地址" prop="address">
                <el-input
                    v-model="dataBaseForm.address"
                    placeholder="ip地址/主机域名"
                />
            </el-form-item>
            <el-form-item label="端口" prop="port">
                <el-input-number v-model="dataBaseForm.port" />
                <div class="el-upload__tip">默认端口3303/3306/27017/9200</div>
            </el-form-item>

            <el-form-item label="用户名" prop="userName">
                <el-input v-model="dataBaseForm.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input v-model="dataBaseForm.passWord" />
            </el-form-item>
            <el-form-item label="连接数据库" prop="dataBaseName">
                <el-input v-model="dataBaseForm.dataBaseName" />
            </el-form-item>
            <el-form-item label="选择表" prop="dataBaseName">
                <el-input v-model="dataBaseForm.dataBaseName" />
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
import { DatabaseType, DataBaseFormType } from '@/types/data-manage.d.ts';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { emit } from 'process';
import {
    ref,
    Ref,
    watchEffect,
    reactive,
    defineProps,
    defineEmits,
    handleError,
} from 'vue';

// 弹框
const props = defineProps({
    showDataBaseDialog: {
        type: Boolean,
    },
});
const emits = defineEmits(['update:showDataBaseDialog', 'submitDataBaseForm']);
const dataBaseDialog = ref(props.showDataBaseDialog);
const handleClose = (formEl) => {
    resetForm(formEl);
    emits('update:showDataBaseDialog', false);
};

// form表单
const databaseList = ref<DatabaseType[]>([
    {
        label: 'MySQL',
        value: 'MySQL',
    },
    {
        label: 'MongoDB',
        value: 'MongoDB',
    },
    {
        label: 'ClickHouse',
        value: 'ClickHouse',
    },
    {
        label: 'ElasticSearch',
        value: 'ElasticSearch',
    },
]);
const dataBaseFormRef = ref<FormInstance>;

const dataBaseForm = reactive<DataBaseFormType>({
    selectDataBase: '',
    address: '',
    port: 3303, // 3306/27017/9200
    userName: '',
    passWord: '',
    dataBaseName: '',
});
const rules = reactive<FormRules>({
    selectDataBase: [
        { required: true, message: '请选择数据库', trigger: 'change' },
    ],
    address: [{ required: true, message: '请输入数据库地址', trigger: 'blur' }],
    port: [{ required: true, message: '请输入端口', trigger: 'blur' }],
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    dataBaseName: [
        { required: true, message: '请输入目标数据库', trigger: 'blur' },
    ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!', dataBaseForm);
            emits('submitDataBaseForm', dataBaseForm);
            resetForm(formEl);
            emits('update:showDataBaseDialog', false);
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
    dataBaseDialog.value = props.showDataBaseDialog;
});
</script>

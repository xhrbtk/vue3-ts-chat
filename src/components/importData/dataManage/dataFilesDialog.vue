<template>
    <el-dialog
        v-model:visible="dataFilesDialog"
        :title="title"
        @close="handleClose(dataFilesFormRef)"
        width="80%"
    >
        <el-form
            size="small"
            v-show="!hideForm"
            ref="dataFilesFormRef"
            :model="dataFilesForm"
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm max-w-[600px] mx-auto"
            status-icon
        >
            <el-form-item label="服务地址" prop="address">
                <el-input
                    v-model="dataFilesForm.address"
                    placeholder="ip地址/主机域名"
                />
            </el-form-item>
            <el-form-item label="端口" prop="port">
                <el-input-number v-model="dataFilesForm.port" />
                <div class="el-upload__tip">默认端口3303/3306/27017/9200</div>
            </el-form-item>

            <el-form-item label="用户名" prop="userName">
                <el-input v-model="dataFilesForm.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input v-model="dataFilesForm.passWord" />
            </el-form-item>

            <div class="flex justify-end">
                <el-button type="primary" @click="submitForm(dataFilesFormRef)">
                    下一步
                </el-button>
                <el-button @click="resetForm(dataFilesFormRef)">重置</el-button>
            </div>
        </el-form>
        <!-- 数据件列表 -->
        <div v-show="hideForm">
            <div class="flex w-[100%] justify-between items-center mb-4">
                <searchInput class="!m-[0] w-[80%]"></searchInput>
                <el-button type="primary">开始导入</el-button>
            </div>
            <el-table :data="tableData" border>
                <el-table-column type="selection" width="55" />
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="320" />
                <el-table-column prop="address" label="Address" width="600" />
                <el-table-column prop="zip" label="Zip" />
            </el-table>
            <div class="flex justify-end">
                <el-pagination
                    size="small"
                    background
                    layout="prev, pager, next"
                    :total="50"
                    class="mt-4"
                />
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { DataFilesFormTyp } from '@/types/data-manage.d.ts';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import searchInput from '@/components/searchInput.vue';

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
    searchInput,
});
// 弹框
const title = ref<string>('配置数据件平台信息');
const hideForm = ref<boolean>(false);
const props = defineProps({
    showDataFilesDialog: {
        type: Boolean,
    },
});
const emits = defineEmits(['update:showDataFilesDialog']);
const dataFilseDialog = ref(props.showDataFilesDialog);
const handleClose = (formEl) => {
    resetForm(formEl);
    hideForm.value = false;
    emits('update:showDataFilesDialog', false);
};

// form表单
const dataFilesFormRef = ref<FormInstance>;

const dataFilesForm = reactive<DataFilesFormTyp>({
    address: '',
    port: 3303, // 3306/27017/9200
    userName: '',
    passWord: '',
});
const rules = reactive<FormRules>({
    address: [{ required: true, message: '请输入数据库地址', trigger: 'blur' }],
    port: [{ required: true, message: '请输入端口', trigger: 'blur' }],
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!', dataFilesForm);
            title.value = '选择数据件';
            hideForm.value = true;
            // 发送api请求 链接数据件平台
            // emits('submitDataBaseForm', dataBaseForm);
            // resetForm(formEl);
            // emits('update:showDataBaseDialog', false);
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
    dataFilseDialog.value = props.showDataFilesDialog;
});

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
];
// 数据件列表
</script>

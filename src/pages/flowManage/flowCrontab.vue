<template>
    <el-dialog title="创建流程调度" v-model:visible="show">
        <el-form
            ref="ruleFormRef"
            style="max-width: 600px"
            :model="ruleForm"
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
            size="small"
            status-icon
        >
            <el-form-item label="所选流程" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>

            <el-form-item label="开始时间" prop="date1">
                <el-time-picker
                    type="datetime"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                />
            </el-form-item>
            <el-form-item label="结束时间" prop="date2">
                <el-time-picker
                    type="datetime"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                />
            </el-form-item>

            <el-form-item label="调度间隔" prop="count">
                <el-col :span="11">
                    <el-input type="number" v-model="ruleForm.count" />
                </el-col>
                <el-col :span="2"> </el-col>
                <el-col :span="11">
                    <el-select-v2
                        v-model="ruleForm.unit"
                        placeholder="请选择"
                        :options="options"
                    />
                </el-col>
            </el-form-item>
            <div class="flex justify-end">
                <el-button type="primary">立即执行</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    添加
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';

const props = defineProps({
    showFlowCrontab: {
        type: Boolean,
        default: false,
    },
});

const emits = defineEmits(['update:showFlowCrontab']);

const show = ref<boolean>(props.showFlowCrontab);

interface RuleForm {
    name: string;
    count: number;
    date1: string;
    date2: string;
    unit: string;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
    name: 'Hello',
    date1: '',
    date2: '',
    count: 1,
    unit: 'hour',
});

const rules = reactive<FormRules<RuleForm>>({
    name: [
        {
            required: true,
            message: '请输入流程名称',
            trigger: 'blur',
        },
    ],

    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    unit: [
        {
            required: true,
            message: '请选择调度间隔单位',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: '请选择开始时间',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: '请选择结束时间',
            trigger: 'change',
        },
    ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!');
        } else {
            console.log('error submit!', fields);
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

const options = [
    {
        label: '月',
        value: 'month',
    },
    {
        label: '天',
        value: 'day',
    },
    {
        label: '周',
        value: 'week',
    },

    {
        label: '小时',
        value: 'hour',
    },
    {
        label: '分钟',
        value: 'minute',
    },
];
</script>

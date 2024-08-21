<template>
    <el-form
        ref="formRef"
        style="max-width: 600px"
        :model="numberValidateForm"
        label-width="auto"
        class="demo-ruleForm"
    >
        <el-form-item
            label="age"
            prop="age"
            :rules="[
                { required: true, message: 'age is required' },
                { type: 'number', message: 'age must be a number' },
            ]"
        >
            <el-input
                v-model.number="numberValidateForm.age"
                type="text"
                autocomplete="off"
            />
        </el-form-item>

        <x :arr="arr"></x>

        <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)"
                >Submit</el-button
            >
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import x from '@/components/x.vue';
import { reactive, ref, defineComponent } from 'vue';
import type { FormInstance } from 'element-plus';

defineComponent({
    x,
});
const formRef = ref<FormInstance>();

const numberValidateForm = reactive({
    age: '',
});
const arr = reactive([
    {
        label: '1',
        value: '',
    },
    {
        label: '2',
        value: '',
    },
]);

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!');
        } else {
            console.log('error submit!');
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

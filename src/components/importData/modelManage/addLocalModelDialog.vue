<template>
    <el-dialog
        v-model:visible="dialogVisible"
        title="Tips"
        width="500"
        :before-close="handleClose"
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
        </el-form>
    </el-dialog>
    //
</template>

<script lang="ts" setup>
import { ref, defineComponent, defineProps, defineEmits } from 'vue';
import { ElMessageBox } from 'element-plus';
import verifyDialog from './verifyDialog.vue';

defineComponent({
    verifyDialog,
});
const props = defineProps({
    showAddLocalDialog: {
        type: Boolean,
        default: false,
    },
});
const dialogVisible = ref<boolean>(props.showAddLocalDialog);
</script>

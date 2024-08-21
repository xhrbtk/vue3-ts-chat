<template>
    <el-dialog v-model:visible="showDialog" title="模型验证:xxx模型">
        <div>
            <el-form size="small" label-width="auto">
                <el-form-item label="输入参数">
                    <ul
                        class="w-full border-dashed border-[1px] border-[#e5e5e5]"
                    >
                        <li
                            class="flex w-full p-[10px]"
                            v-for="(item, index) in inputArr"
                            :key="index"
                        >
                            <el-form-item class="w-[50%]" :label="item.name">
                                <el-input
                                    v-model="item.value"
                                    class="mr-[10px]"
                                />
                            </el-form-item>
                        </li>
                        <li
                            class="flex justify-center items-center w-full mt-[10px]"
                            @click="showConfigInputDialog = true"
                        >
                            <span
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
import {
    AnalysisFormType,
    InputAndOutputObjType,
    InputArrType,
    OutputArrType,
    Keys,
} from '@/types/model-manage.d.ts';
import { ref, defineProps, defineEmits, defineComponent } from 'vue';

defineComponent({
    // configinputDialog,
});

const props = defineProps({
    showValidateModel: {
        type: Boolean,
        default: false,
    },
    inputArr: {
        type: Array as () => InputArrType[],
        default: () => [],
    },
});

const emits = defineEmits(['update:showValidateModel']);
const showDialog = ref(props.showValidateModel);

const showConfigInputDialog = ref<boolean>(false);

const jsonData = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
};

// 将 JSON 对象转换为字符串并格式化
const jsonString = JSON.stringify(jsonData, null, 2);
</script>

// 模型管理 参数类型下拉框
import {ref} from 'vue'


interface SelectTypeOptionsType {
    label: string;
    value: string;
}

export const typeSelect = ref<SelectTypeOptionsType[]>([
    { label: '字符串', value: '1' },
    { label: '数字', value: '2' },
    { label: '布尔值', value: '3' },
    { label: '日期', value: '4' },
    { label: '数组', value: '5' },
    { label: '对象', value: '6' },
]);
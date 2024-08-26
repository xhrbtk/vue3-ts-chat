<template>
    <div class="code-search h-full">
        <codemirror
            :placeholder="placeholder"
            v-model="internalCode"
            :extensions="extensions"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="6"
            class="h-full"
            style="height: 200px"
            @input="handleInput"
        />
    </div>
</template>

<script lang="ts" setup>
// import { oneDark } from '@codemirror/theme-one-dark';
// import { githubLight } from '@ddietr/codemirror-themes/github-light';
import { Codemirror } from 'vue-codemirror';
import { sql } from '@codemirror/lang-sql';
import { solarizedLight } from '@ddietr/codemirror-themes/solarized-light';
import { ref, defineComponent, defineProps, defineEmits, watch } from 'vue';
import { python } from '@codemirror/lang-python';

defineComponent({
    Codemirror,
});

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '请输入cypher语句查询数据',
    },
    language: {
        type: String,
        default: 'sql',
    },
});

const emits = defineEmits(['update:modelValue']);

const extensions = [
    props.language === 'python' ? python() : sql(),
    solarizedLight,
];

const internalCode = ref(props.modelValue);

// 监听内部的 `internalCode` 变化并发出事件
watch(internalCode, (newVal) => {
    emits('update:modelValue', newVal);
});

const handleInput = (newValue: string) => {
    internalCode.value = newValue;
};
</script>

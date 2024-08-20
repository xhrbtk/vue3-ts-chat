<template>
    <div class="code-search h-full">
        <codemirror
            :placeholder="placeholder"
            v-model="code"
            :extensions="extensions"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="4"
            class="h-full"
            style="height: 80%"
        />
    </div>
</template>
<script lang="ts" setup>
import { oneDark } from '@codemirror/theme-one-dark';
import { Codemirror } from 'vue-codemirror';
import { sql } from '@codemirror/lang-sql';
import { ref, defineComponent, defineProps } from 'vue';
defineComponent({
    Codemirror,
});

const props = defineProps({
    placeholder: {
        type: String,
        default: '请输入cypher语句查询数据',
    },
});
const extensions = [sql(), oneDark];
const code = ref<string>('');
</script>

<template>
    <div class="code-search">
        <codemirror
            :placeholder="placeholder"
            v-model="code"
            :extensions="extensions"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="4"
            style="height: 200px"
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

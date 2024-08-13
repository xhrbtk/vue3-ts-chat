<template>
    <div class="chat-msg">
        <p>{{ msg }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { typeEffect } from '@/utils/utils';

const text = `再看看框架这边，htmx 在星趋势里，排行第二位，2023增长的星星数为 15.6K，与第一位的 React 颇技的工具。然后在 jQuery + Ajax 得到广泛应用之后，才真正有前后端分离的项目。著作权归作者所有。。`;
const msg = ref<string>(text);
onMounted(() => {
    // typeEffect(0, text, msg);
});
</script>
<style lang="scss" scoped>
.chat-list {
    flex: 1;
    border: 1px solid red;
}
</style>

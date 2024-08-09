<template>
    <div class="chat-list">
        <pre v-highlight>
            <code class="language-js">  
            {{ code }} 
            </code>
        </pre>
    </div>
</template>

<script lang="ts" setup>
import { typeEffect } from '@/utils/utils';
import { ref, onMounted } from 'vue';

const code = ref<string>('');
const textcode = `.chat-list {
    flex: 1;
    border: 1px solid red;
} `;
onMounted(() => {
    typeEffect(0, textcode, code);
});
</script>
<style lang="scss" scoped>
.chat-list {
    flex: 1;
    border: 1px solid red;
}
</style>

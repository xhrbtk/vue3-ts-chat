<template>
    <div class="input-container">
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="message"
        ></el-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const message = ref<string>('');
</script>

<style lang="scss" scoped>
.input-container {
    padding: 30px;
}
</style>

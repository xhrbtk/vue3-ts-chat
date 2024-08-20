<template>
    <div class="search-box">
        <div class="input-textarea-box">
            <el-input
                class="input-textarea"
                type="text"
                :placeholder="placeholder"
                v-model="inputValue"
            ></el-input>
        </div>
        <div class="send-box" @click="handleSearch">
            <span
                class="icon-jijianfasong-xianxing cursor-pointer text-[24px] iconfont"
            ></span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
const props = defineProps({
    type: {
        type: String,
    },
    placeholder: {
        type: String,
        default: '请输入关键词进行表格检索',
    },
    modelValue: {
        type: String,
    },
});
const emits = defineEmits(['update:modelValue', 'handleSearch']);
const inputValue = ref(props.modelValue);
watch(inputValue, (newVal) => {
    emits('update:modelValue', newVal);
});
const handleSearch = () => {
    emits(
        'handleSearch',
        ...(props.type ? [props.type, inputValue.value] : [inputValue.value]),
    );
};
</script>

<style lang="scss" scoped>
.search-box {
    border-radius: 20px;
    box-shadow: 0 6px 10px 0 rgba(42, 60, 79, 0.1);
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    position: relative;
    padding: 5px 15px;
    display: flex;
    margin: 0 auto;
    .input-textarea-box {
        width: clamp(200px, 90%, 800px);
        display: flex;
        flex: 1;

        .input-textarea {
            display: flex;
            justify-content: center;
        }
    }

    .send-box {
        display: flex;
        align-items: center;
        height: 100%;
    }
}
</style>
<style lang="scss">
.search-box {
    .el-input__wrapper {
        box-shadow: none !important;
        font-size: 14px;
        resize: none !important;
        border: none;
    }
}
</style>

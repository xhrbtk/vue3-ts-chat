<template>
    <ul class="info">
        <li
            class="flex justify-between items-center border-b-[0.5px] border-[#E0E0E0] py-2.5 px-4 text-[13px]"
            v-for="(item, index) of tableInfoList"
            :key="index"
        >
            <p class="text-[#323233] w-[80px]">
                {{ item.label }}
            </p>
            <p class="flex-1 text-[#969799] flex justify-end">
                {{ item.value }}
            </p>
            <p v-if="item.type" class="flex-1 text-[#969799] flex justify-end">
                {{ item.type }}
            </p>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    tableInfoList: {
        type: Array,
    },
});
</script>

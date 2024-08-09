<template>
    <div class="chat-list" ref="chatContainer">
        <div class="content">
            <chat-code />
            <chat-text />
            <chat-chart :options="chartOptions"></chat-chart>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineComponent, reactive } from 'vue';
import ChatText from '@/components/message/ChartText.vue';
import ChatCode from '@/components/message/ChatCode.vue';
import ChatChart from '@/components/message/Chart/index.vue';

defineComponent({
    components: {
        ChatText,
        ChatCode,
        ChatChart,
    },
});

const chartOptions = reactive({
    type: 'bar',
    source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1],
    ],
});

const chatContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

onMounted(() => {
    scrollToBottom();
});
</script>
<style lang="scss" scoped>
.chat-list {
    flex: 1;
    border: 1px solid red;
    overflow: hidden;
    .content {
        height: 100%;
        overflow-y: scroll;
        padding: 10px;
        margin-right: -10px;
        margin-left: -10px;
    }
}
</style>

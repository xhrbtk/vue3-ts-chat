<template>
    <div class="chat-page">
        <card-wrap v-if="createChat"></card-wrap>
        <!-- <template v-else>
            <chat-list></chat-list>
        </template> -->
        <chat-input></chat-input>
    </div>
</template>

<script lang="ts" setup>
import ChatList from '../components/chatList.vue';
import ChatInput from '../components/chatInput.vue';
import CardWrap from '../components/cardWrap.vue';
import { defineComponent, ref } from 'vue';
defineComponent({
    name: 'chatPage',
    components: {
        ChatList,
        ChatInput,
        CardWrap,
    },
});
const createChat = ref<boolean>(true);
</script>

<style lang="scss" scoped>
.chat-page {
    position: relative;
    display: flex;
    flex: 1;
    // border: 1px solid blue;
    flex-direction: column;
}
</style>

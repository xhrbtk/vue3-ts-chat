<template>
    <div>
        <chat-list></chat-list>
        <chat-input></chat-input>
    </div>
</template>

<script lang="ts">
import ChatList from '../components/chatList.vue';
import ChatInput from '../components/chatInput.vue';
import { defineComponent } from 'vue';
defineComponent({
    name: 'chatPage',
    components: {
        ChatList,
        ChatInput,
    },
});
</script>

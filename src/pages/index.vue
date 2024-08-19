<template>
    <div class="chat-main">
        <leftAside class="left"></leftAside>
        <main class="content">
            <RouterView />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { defineComponent } from 'vue';
import leftAside from '../components/leftAside.vue';

defineComponent({
    name: 'IndexView',
    components: {
        leftAside,
    },
});
</script>

<style lang="scss" scoped>
.chat-main {
    position: relative;
    display: flex;
    height: 100vh;
    .left {
        flex-shrink: 0;
    }
    .content {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        width: calc(100% - 250px);
        border: 1px solid red;
    }
    .right {
        flex-shrink: 0;
        width: 200px;
        height: 100%;
    }
}
</style>

<template>
    <div class="card-wrap">
        <div class="main-content">
            <div class="title-wrap font-semibold text-[18px] leading-9">
                <span>你好，xhr</span>
                <br class="text-18[px] block m-[1em]" />
                <span>让我们度过美好的一天！</span>
            </div>
            <cardContent :list="menuList" @click="goingTo"></cardContent>
        </div>
    </div>
</template>
<script lang="ts" setup>
import cardContent from './cardContent.vue';
import { ref, defineComponent } from 'vue';
import { Menu } from '@/types/common';
import { menuArr } from '@/config/common';

import { useRouter } from 'vue-router';
const router = useRouter();
const goingTo = (item: Menu) => router.push({ path: item.path });

defineComponent({
    cardContent,
});
const menuList = ref<Menu[]>(menuArr);
</script>

<style lang="scss" scoped>
.card-wrap {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 10px;
    overflow: hidden;
    .main-content {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 10px;
        overflow: scroll;
        height: clamp(200px, 50vh, 800px);
    }
}
</style>

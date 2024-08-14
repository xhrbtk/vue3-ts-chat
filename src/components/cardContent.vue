<template>
    <div class="card-content">
        <div
            class="card-box group"
            v-for="item in list"
            :key="item.name"
            @click="handleClick(item, type)"
        >
            <span
                class="left iconfont icon-shuju text-[18px]"
                :class="item.icon"
                v-if="item.icon"
            ></span>
            <div class="right">
                <p class="text-[15px] line1">
                    {{ item.name }}
                </p>
                <p class="text-[14px] line2">
                    {{ item.content }}
                </p>
            </div>
            <span
                v-if="showClose"
                @click.stop="handleClose(index, list, type)"
                class="icon-guanbi cursor-pointer text-[18px] iconfont absolute right-[5px] top-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
    type: {
        type: String, // 类型
    },
    list: {
        type: Array, // 菜单列表
        default: () => [],
    },
    showClose: {
        type: Boolean, // 是否显示关闭按钮
        default: false,
    },
});
const emits = defineEmits(['click', 'delete']);
const handleClick = (item: any, type?: string) => {
    emits('click', item, type);
};
const handleClose = (index: number, list: [], type?: string) => {
    console.log('type', type);
    emits('delete', index, list, type);
};
</script>

<style lang="scss" scoped>
.card-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card-box {
        max-width: 400px;
        min-width: 260px;
        cursor: pointer;
        display: flex;
        transition: box-shadow 0.15s ease;
        padding-bottom: 12px;
        padding-top: 12px;
        padding-left: 16px;
        padding-right: 16px;
        border: 0.5px solid rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        margin-top: 10px;
        position: relative;
        &:hover {
            box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.08),
                0px 0px 1px 0px rgba(0, 0, 0, 0.15);
        }
        .left {
            color: rgb(0 128 255);
        }
        .right {
            padding-left: 10px;
            .line2 {
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
}
</style>

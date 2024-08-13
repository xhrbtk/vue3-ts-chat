<template>
    <div class="uploade-file-box">
        <ul
            class="el-upload-list relative h-fit w-fit grid gap-x-[8px] gap-y-[8px]"
        >
            <li
                v-for="(item, index) in fileList"
                :key="index"
                class="file-box pr-[8px] pl-[8px] rounded-[10px] flex text-[12px] items-center cursor-pointer"
                @mouseenter="handleCloseIcon(index)"
                @mouseleave="handleCloseIcon(-1)"
            >
                <img :src="item.url" alt="" class="w-[40px] h-[40px]" />
                <div class="text-[11px] text-wrap">
                    <p class="line1">{{ item.name }}</p>
                    <p class="line2">Image 926kb</p>
                </div>
                <span
                    v-show="showCloseIconIndex == index"
                    class="icon-guanbi cursor-pointer text-[12px] iconfont close-icon"
                    @click="deleteFile(item, index)"
                ></span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineProps } from 'vue';
defineProps({
    fileList: {
        type: Array,
        default: () => [],
    },
});
const emits = defineEmits(['deleteFile']);
const showCloseIconIndex = ref(-1);
const handleCloseIcon = (index: number): void => {
    showCloseIconIndex.value = index;
};
const deleteFile = (item: any, index: number): void => {
    // 点击删除按钮时触发
    emits('deleteFile', item, index);
    showCloseIconIndex.value = index;
};
</script>
<style lang="scss" scoped>
// 上传文件 展示框
.uploade-file-box {
    flex-shrink: 0;
    max-height: 107px;
    overflow-y: auto;
    display: flex;
    .el-upload-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .file-box {
            background-color: rgba(0, 0, 0, 0.04);
            position: relative;
            img {
            }
            .text-wrap {
                margin-left: 10px;
                .line1 {
                    color: rgba(0, 0, 0, 0.8);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 80px;
                }
                .line2 {
                    color: rgba(0, 0, 0, 0.3);
                    font-size: 10px;
                }
            }
            .close-icon {
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
}
</style>

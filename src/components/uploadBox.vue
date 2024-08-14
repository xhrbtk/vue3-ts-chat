<template>
    <div class="uploade-file-box">
        <ul
            class="el-upload-list relative h-fit w-fit grid gap-x-[8px] gap-y-[8px]"
        >
            <li
                v-for="(item, index) in fileList"
                :key="index"
                class="file-box pr-[8px] pl-[8px] pt-[4px] pb-[4px] rounded-[10px] flex text-[14px] items-center cursor-pointer group"
            >
                <img :src="item.url" alt="" class="w-[40px] h-[40px]" />
                <div class="text-[14px] text-wrap">
                    <p class="line1">{{ item.name }}</p>
                    <p class="line2 text-[12px]">Image 926kb</p>
                </div>
                <span
                    class="icon-guanbi cursor-pointer text-[18px] iconfont absolute right-[0px] top-[0px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

const deleteFile = (item: any, index: number): void => {
    // 点击删除按钮时触发
    emits('deleteFile', item, index);
};
</script>
<style lang="scss" scoped>
// 上传文件 展示框
.uploade-file-box {
    flex-shrink: 0;
    max-height: 127px;
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

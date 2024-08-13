<template>
    <div class="card-wrap">
        <div class="main-content">
            <div class="title-wrap font-semibold text-[18px] leading-9">
                <span>你好，xhr</span>
                <br class="text-12[px] block m-[1em]" />
                <span>让我们度过美好的一天！</span>
            </div>
            <div class="card-content">
                <div
                    class="card-box"
                    v-for="item in menuList"
                    :key="item.name"
                    @click="useJumpTo(item.path)"
                >
                    <span
                        class="left iconfont icon-shuju text-[15px]"
                        :class="item.icon"
                    ></span>
                    <div class="right">
                        <p class="text-[13px] line1">
                            {{ item.name }}
                        </p>
                        <p class="text-[11px] line2">
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import useJumpTo from '@/hooks/useRouter';

import { Menu } from '@/types/common';
import { menuArr } from '@/config/common';
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
    }
}
</style>

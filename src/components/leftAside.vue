<template>
    <aside :class="{ collapsed: !show }" class="left-aside">
        <div class="icon-collapse" @click="toggleCollapse">
            <span class="iconfont icon-zhedie"></span>
        </div>

        <!-- 其他功能 + 对话列表 -->
        <div class="chat-scroll-view">
            <div class="scroll-content">
                <!-- avatar nickname -->
                <div class="flex items-center mt-[12px] ml-[16px] mr-[10px]">
                    <span
                        class="avatar iconfont icon-bianzu2 text-[24px] block"
                    ></span>
                    <span
                        class="ml-[8px] font-semibold text-[12px] leading-[24px]"
                        >GOIN3.0</span
                    >
                </div>
                <!-- 新建对话 -->
                <div
                    class="flex items-center thread-create box-border rounded-[12px] ml-[16px] mt-[12px] mb-[6px] h-[40px] mr-[10px]"
                >
                    <span
                        class="iconfont icon-jiahao_o font-semibold text-[16px]"
                    ></span>
                    <div class="text-[12px] font-semibold ml-[6px]">新对话</div>
                </div>
                <div class="w-full mb-[8px] flex flex-col gap-[2px]">
                    <div class="section ml-[16px] mr-[10px]">
                        <span class="text-[16px] iconfont icon-AIsousuo"></span>
                        <div class="text-[12px] ml-[6px]">AI搜索</div>
                    </div>
                    <div class="section ml-[16px] mr-[10px]">
                        <span class="text-[16px] iconfont icon-AIxiezuo"></span>
                        <div class="text-[12px] ml-[6px]">帮我写作</div>
                    </div>

                    <div
                        class="h-[0.5px] bg-color-line px-4 mb-[8px] ml-[16px] mr-[10px]"
                    ></div>
                    <!-- 对话列表 -->
                    <div class="chat-wrap">
                        <div
                            class="section ml-[16px] mr-[10px] flex chat-title"
                        >
                            <div class="flex items-center">
                                <span
                                    class="text-[16px] iconfont icon-duihua"
                                ></span>
                                <div class="text-[12px] ml-[6px]">最近对话</div>
                            </div>
                            <span
                                @click="toggleThreadList"
                                :class="{ 'icon-arrow-right': !showThradList }"
                                class="icon-arrow cursor-pointer text-[14px] iconfont icon-xiangxiajiantou ml-[10px]"
                            ></span>
                        </div>
                        <div class="thread-list-wrap">
                            <ul
                                class="thread-list"
                                :class="{ 'thread-list-hide': !showThradList }"
                            >
                                <li
                                    :class="{
                                        'active-thread-item':
                                            index === activeIndex,
                                    }"
                                    class="thread-item ml-[18px] mr-[10px] text-[14px]"
                                    v-for="(item, index) in threadList"
                                    :key="item.id"
                                    @click="activeThread(index)"
                                >
                                    <div
                                        class="text-[12px] block overflow-hidden whitespace-nowrap"
                                        href=""
                                    >
                                        <div>
                                            {{ item.name }}
                                        </div>
                                    </div>
                                    <span
                                        class="text-[12px] ml-[6px] iconfont icon-ellipsis"
                                    ></span>
                                </li>
                            </ul>
                            <div
                                class="h-[0.5px] bg-color-line px-4 mb-[8px] ml-[16px] mr-[10px] mt-[20px]"
                            ></div>
                        </div>
                    </div>
                    <!-- 收藏 -->
                    <div class="section ml-[16px] mr-[10px]">
                        <span
                            class="text-[16px] iconfont icon-shoucangjia"
                        ></span>
                        <div class="text-[12px] ml-[6px]">收藏</div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref<boolean>(true);

const toggleCollapse = (): void => {
    show.value = !show.value;
};
const showThradList = ref<boolean>(true);
const toggleThreadList = (): void => {
    showThradList.value = !showThradList.value;
};

const activeIndex = ref<number>(-1);
const activeThread = (index: number): void => {
    activeIndex.value = index;
};
interface Thread {
    name: string;
    id: number;
}
const threadList = ref<Thread[]>([
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
    {
        name: '今天北京天气几天1',
        id: 1,
    },
    {
        name: '今天北京天气几天2',
        id: 2,
    },
    {
        name: '今天北京天气几天3',
        id: 3,
    },
]);
</script>

<style lang="scss" scoped>
.left-aside {
    width: clamp(160px, 25vw, 230px);
    height: 100%;
    background-color: #f3f4f6;
    position: relative;
    transition: width 0.8s;
    border-right: 0.5px solid rgba(0, 0, 0, 0.8);
    .icon-collapse {
        position: absolute;
        top: 50%;
        bottom: 50%;
        margin: auto;
        transform: rotate(0deg);
        right: -22px;
        width: 22px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 2;
        color: rgba(0, 96, 216);
        transition: transform 0.2s;
    }
    .avatar {
        color: #1e80ff;
    }
    .thread-create {
        color: #0057ff;
        background: rgba(0, 87, 255, 0.06);
        cursor: pointer;
        padding: 4px 6px;
        &:hover {
            background: rgba(0, 87, 255, 0.08);
        }
    }
    .chat-scroll-view {
        min-height: 40px;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        flex-shrink: 1;
        .section {
            display: flex;
            align-items: center;
            border-radius: 12px;
            color: rgba(0, 0, 0, 0.85);
            padding: 8px;
            cursor: pointer;
            &:hover {
                background: rgba(0, 87, 255, 0.08);
                color: #0057ff;
            }
        }
        .bg-color-line {
            background-color: rgba(0, 0, 0, 0.12);
        }
        .chat-wrap {
            .chat-title {
                justify-content: space-between;
                .icon-arrow {
                    transition: transform 0.3s;
                }
                .icon-arrow-right {
                    transform: rotate(-90deg);
                }
            }
            .thread-list-wrap {
                overflow: hidden;
                // margin-bottom: 10px;
                padding-top: 10px;
            }
            .thread-list {
                transition: height 0.8s;
                height: 300px;
                overflow: auto;
                padding-left: 10px;

                .thread-item {
                    display: flex;
                    justify-content: space-between;
                    border-radius: 12px;
                    padding-left: 16px;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    padding-right: 10px;
                    cursor: pointer;

                    &:hover {
                        background-color: white;
                    }
                }
                .active-thread-item {
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                    background-color: white;
                }
            }
            .thread-list-hide {
                height: 0;
            }
        }
    }
}

.collapsed {
    width: 0;
    .icon-collapse {
        transform: translate(0, -22px) rotate(180deg);
    }
}
</style>

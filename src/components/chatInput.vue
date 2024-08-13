<template>
    <div class="input-container">
        <div class="input-main">
            <!-- 上传文件box -->
            <div class="uploade-file-box"></div>
            <div class="input-wrap">
                <div class="upload-box">
                    <el-upload
                        show-file-list="false"
                        class="upload-demo"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        multiple
                    >
                        <el-tooltip placement="top">
                            <template #content>
                                <ul class="text-[10px] w-[160px]">
                                    <li>文件数量：最多50个</li>
                                    <li>
                                        文件类型：csv、txt、pdf、doc、docx、xls、xlsx、ppt、pptx
                                    </li>
                                </ul>
                            </template>
                            <span
                                class="icon-shangchuan1 cursor-pointer text-[24px] iconfont"
                            ></span>
                        </el-tooltip>
                    </el-upload>
                </div>

                <div class="input-textarea-box">
                    <el-input
                        class="input-textarea"
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="message"
                        :autosize="{ minRows: 1, maxRows: 6 }"
                    ></el-input>
                </div>
                <div class="send-box">
                    <span
                        class="icon-jijianfasong-xianxing cursor-pointer text-[24px] iconfont"
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const message = ref<string>('');
</script>

<style lang="scss" scoped>
.input-container {
    display: flex;
    justify-content: center;

    .input-main {
        width: 90%;
        border-radius: 20px;
        box-shadow: 0 6px 10px 0 rgba(42, 60, 79, 0.1);
        border: 0.5px solid rgba(0, 0, 0, 0.12);
        position: relative;
        padding: 5px 15px;

        .input-wrap {
            display: flex;
            font-size: 11px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            .upload-box {
                display: flex;
                height: 100%;
                .upload-demo {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                }
                .upload-icon {
                    display: flex;
                }
            }
            .input-textarea-box {
                width: clamp(200px, 90%, 800px);
                display: flex;

                .input-textarea {
                    padding-top: 5px;
                    display: flex;
                    justify-content: center;
                }
            }

            .send-box {
                flex-direction: column;
                justify-content: flex-end;
                display: flex;
                align-content: center;
                height: 100%;
            }
        }
    }
}
</style>
<style lang="scss">
.input-container {
    .el-textarea__inner {
        box-shadow: none !important;
        font-size: 12px;
        resize: none !important;
    }
    .el-upload-list {
        display: none;
    }
}
</style>

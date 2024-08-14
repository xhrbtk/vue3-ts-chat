<template>
    <div class="import-data p-[20px] flex flex-col h-[100%]">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dataManage' }"
                >数据管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>导入数据</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 数据库-->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>数据库</span>
            </div>
        </el-card>
        <!-- 数据件-->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>数据件</span>
            </div>
        </el-card>
        <!-- 本地文件-->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>本地文件</span>
            </div>
            <el-upload
                class="upload-demo mt-[10px] mx-auto"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件或<em>点击上传</em></div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-card>

        <!-- we b-->
        <el-card class="mt-[10px]">
            <div class="card-header">
                <span>web</span>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped></style>

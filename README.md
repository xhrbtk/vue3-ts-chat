# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

-   node 版本： 20

## 创建项目过程使用了 eslint

```
// 集成 eslint
npm i eslint eslint-plugin-vue --save-dev

//由于 ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 @typescript-eslint/parser 替代掉默认的解析器
npm i @typescript-eslint/parser --save-dev

// 安装对应的插件 @typescript-eslint/eslint-plugin 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则
npm install @typescript-eslint/eslint-plugin --save-dev

```

<!-- 安装 启动项目 -->

```
npm install // 安装依赖
npm run dev // 启动开发环境
npm run build // 打包
```

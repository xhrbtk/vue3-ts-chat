
import {  Ref } from 'vue';

// 模型管理页面 分析算子
export interface analysisOperatorType{
    name: string
    content: string
}

// 模型管理页面 本地大模型
export interface localLargeModelType{
    name: string
    content: string
}


// 模型管理页面 开放大模型 
export interface openLargeModelType{
    name: string
    content: string
}

// 模型管理页面 页面数据
export interface pageDataType {
    type: string;
    title: string;
    inputValue: Ref<string>;
    list: Ref<Array<analysisOperatorType | localLargeModelType | openLargeModelType>>
}


// // 导入数据页面 数据库类型
// export interface DatabaseType{
//     label: string
//     value: string
// }

export interface AnalysisFormType{
    address: string
    userName: string
    description: string
}

// export interface DataFilesFormType{
//     address: string
//     port: number
//     userName: string
//     passWord: string
// }
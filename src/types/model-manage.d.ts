
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

export interface customFunctionDataType {
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


// 模型管理页面 分析算子表单数据
export interface InputArrType {
    name: string;
    type: string;
    value?: string;
}
export interface OutputArrType {
    name: string;
    type: string;
    value?: string;
}
export interface AnalysisFormType{
    address?: string
    modelName?: string
    description?: string
    inputArr?: Ref<Array<InputArrType>>
    outputArr?: Ref<Array<OutputArrType>>
    secretKey?: string
    functionDefine?: string
}

export type Keys = 'inputArr' | 'outputArr';
export interface InputAndOutputObjType {
    label: string;
    arr: any;
    type: Keys;
}

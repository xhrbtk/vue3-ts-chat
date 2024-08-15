


// 数据管理页面 表格类型
export interface TableType{
    name: string
    content: string
}

// 数据管理页面 图谱类型
export interface GraphType{
    name: string
    content: string
}


// 数据管理页面 文档类型
export interface DocumentType{
    name: string
    content: string
}


// 导入数据页面 数据库类型
export interface DatabaseType{
    label: string
    value: string
}

export interface DataBaseFormType{
    selectDataBase: string
    address: string
    port: number
    userName: string
    passWord: string
    dataBaseName: string
}

export interface DataFilesFormType{
    address: string
    port: number
    userName: string
    passWord: string
}
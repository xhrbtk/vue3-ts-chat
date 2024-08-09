import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: '张三'
        }
    },
    actions: {
        updateName(name) {
            this.name = name
        }
    }
})


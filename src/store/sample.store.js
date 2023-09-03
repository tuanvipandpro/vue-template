import { defineStore } from 'pinia'
import api from '../api/api'

export const useSampleStore = defineStore('sampleStore', {
    state: () => ({
        text: ''
    }),
    actions: {
        async apiGetSample() {
            const res = await api.get('/get')
            console.log(res.data)
            this.text = 'Hello, I am Pinia'
        }
    }
})
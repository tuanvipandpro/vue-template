import { defineStore } from 'pinia'
import api from '../api/api'

export const useSampleStore = defineStore('sample', {
    state: () => ({
        text: ''
    }),
    actions: {
        async apiGetSample() {
            const res = await api.get('/get')
            this.text = res.data
        }
    }
})
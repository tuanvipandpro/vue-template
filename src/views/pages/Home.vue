<template>
  Home
  <hr />
  <el-button @click="() => router.push('/admin')">Admin</el-button>
  <el-button @click="logout">Sign-out</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSampleStore } from '../../store/sample.store';

const router = useRouter()
const sampleStore = useSampleStore()

// const res = await sampleStore.apiGetSample()
// console.log(res)

const logout = () => {
  localStorage.clear()
  router.push('/login')
}
</script>
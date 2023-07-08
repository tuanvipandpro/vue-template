<template>
  Home
  <hr />
  <el-button @click="() => router.push('/admin')">Admin</el-button>
  <el-button @click="logout">Sign-out</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()


const logout = () => {
  localStorage.clear()
  router.push('/login')
}
</script>
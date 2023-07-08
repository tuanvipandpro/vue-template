<template>
  <el-button @click="login">Login</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const login = () => {
  localStorage.setItem("isAuthenticated", true);
  localStorage.setItem("userPermissions", ["admin"]);

  router.push("/")
};
</script>
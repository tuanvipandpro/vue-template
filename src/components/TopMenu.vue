<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0" @click="transitTo('/')">LOGO</el-menu-item>
        <div class="flex-grow" />
        <!-- <el-menu-item index="1">Processing Center</el-menu-item> -->
        <el-sub-menu index="2">
            <template #title>
                <el-avatar :icon="UserFilled" />
            </template>
            <el-menu-item index="2-1">Information</el-menu-item>
            <el-menu-item index="2-2" @click="logout">Log out</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script setup>
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue';
import { useRouter, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const transitTo = (path, params) => {
  router.push(path, params);
};

const logout = () => {
  localStorage.clear()
  router.push('/login')
}

</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>
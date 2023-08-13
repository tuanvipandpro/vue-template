<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        @open="handleOpen"
        @close="handleClose"
        style="height: calc(100vh - 76px)"
      >
        <el-menu-item index="1" @click="transitTo('/')">
          <el-icon><icon-menu /></el-icon>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="2" @click="transitTo('/admin')">
          <el-icon><setting /></el-icon>
          <span>Admin</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
  
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute()
const router = useRouter();

const defaultActive = ref('0')

const menus = [
  {path: '/', index: '1'},
  {path: '/admin', index: '2'}
]

defaultActive.value = menus.find(e => route.path === e.path).index

const transitTo = (path, params) => {
  router.push(path, params);
};
</script>
  
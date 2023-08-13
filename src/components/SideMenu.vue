<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
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
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import { useTransit } from "../router";
import { MENU_TYPE } from '../utils/constants'

const { transitTo, getIndexMenuItem } = useTransit()
const defaultActive = ref(getIndexMenuItem(MENU_TYPE.SIDE).index)

</script>
  
<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
        <el-menu-item index="0" @click="transitTo('/')">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="2">
            <template #title>
                <el-avatar :icon="Avatar" />
            </template>
            <el-menu-item index="2-1"><el-icon><List/></el-icon> Information</el-menu-item>
            <el-menu-item index="2-2" @click="logout"><el-icon><Position/></el-icon> Logout</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script setup>
import { ref } from 'vue'
import { Avatar, List, Position } from '@element-plus/icons-vue';
import { useTransit } from "../router";
import { MENU_TYPE } from '../utils/constants';

const activeIndex = ref('0')

const { transitTo, logout, getIndexMenuItem } = useTransit()
// activeIndex.value = getIndexMenuItem(MENU_TYPE.TOP).index

</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>
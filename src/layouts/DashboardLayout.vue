<template>
  <div class="dashboard-layout">
    <el-container>
      <el-header style="height: 60px;">
        <TopMenu/>
      </el-header>
      <el-container>
        <el-aside width="18%" style="height: calc(100vh - 76px);">
          <SideMenu/>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import TopMenu from '../components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue'
</script>
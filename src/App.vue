<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <el-container class="wt-main-container">
    <el-header>header</el-header>
    <el-main>
      <RouterView class="wt-page" />
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.common-layout,
.el-container {
  height: 100%;
  width: 100%;
}

.el-main {
  padding: 0;
}

.wt-page {
  width: 100%;
  height: 100%;
}
</style>

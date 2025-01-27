<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <el-container class="wt-main-container">
    <el-header>
      <h1>可视化展板</h1>
    </el-header>
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

.el-header {
  background-image: url(./assets/head_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 65%;
  height: auto;
  padding: 0.5rem;

  text-align: center;

  h1 {
    margin: 0;
    color: white;
  }
}
</style>

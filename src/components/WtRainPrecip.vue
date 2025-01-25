<script setup>
import VChart from "vue-echarts";
import { reactive, ref } from "vue";

const chart = ref(null);

const option = reactive({});
</script>

<template>
  <VChart ref="chart" class="chart" :option="option" />
</template>

<style lang="scss" scoped>
.chart {
  height: 100%;
}
</style>

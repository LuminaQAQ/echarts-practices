<script setup>
import VChart from "vue-echarts";
import { reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();
watch(industryDistribution, () => {
  if (industryDistribution.data) {
    console.log(industryDistribution.data);
  }
});

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

<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const option = reactive({
  title: {
    text: "地区分布",
    left: "center",
    textStyle: {
      color: "white",
    },
  },
  series: [
    {
      type: "pie",
      roseType: true,
      data: [],
      label: {
        color: "white",
      },
      top: "15%",
    },
  ],
  tooltip: {},
});

const initChart = () => {
  if (industryDistribution.data) {
    const { regionDistributionData } = industryDistribution.data;

    option.series[0].data = regionDistributionData.map((item) => {
      return { name: item.region, value: item.count };
    });
  }
};

watch(industryDistribution, () => {
  initChart();
});

onMounted(() => {
  window.addEventListener("resize", () => {
    chart.value.resize();
  });

  initChart();
});
</script>

<template>
  <v-chart ref="chart" class="chart" :option="option" />
</template>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>

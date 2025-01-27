<script setup>
import * as echarts from "echarts";
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import chinaMap from "@/assets/mapData.json";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);
echarts.registerMap("china", chinaMap);

const option = reactive({
  backgroundColor: "transparent",
  geo: {
    map: "china",
  },
  tooltip: {
    formatter: "{b} &emsp; {c}",
  },
  visualMap: {
    min: 0,
    max: 10,
    inRange: {
      color: ["lightskyblue", "yellow", "orangered"],
    },
  },
  series: [
    {
      type: "map",
      map: "china",
      label: {
        show: true,
        fontSize: 8,
      },
      data: [],
    },
  ],
});

watch(industryDistribution, () => {
  if (industryDistribution.data) {
    const { cities } = industryDistribution.data.mapData;
    option.series[0].data = [...new Set(cities)].map((item) => {
      return {
        name: item.name,
        value: item.connections,
      };
    });
  }
});

onMounted(() => {
  window.addEventListener("resize", () => {
    chart.value.resize();
  });
});
</script>

<template>
  <VChart ref="chart" class="chart" :option="option" />
</template>

<style lang="scss" scoped>
.chart {
  margin: 0.75rem;
  margin-left: 0;
  margin-right: 0;

  height: calc(100% - 1.5rem);
  width: 100%;
}
</style>

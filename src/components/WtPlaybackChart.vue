<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const option = reactive({
  title: {
    text: "播放量",
    left: "center",
    textStyle: {
      color: "white",
    },
  },
  legend: {
    data: ["播放量", "转发量"],
    bottom: "bottom",
    textStyle: {
      color: "white",
    },
  },
  xAxis: {
    data: [],
    axisLabel: {
      color: "white",
    },
  },
  yAxis: {
    axisLabel: {
      color: "white",
    },
  },
  series: [
    {
      name: "播放量",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.2,
      },
      data: [],
    },
    {
      name: "转发量",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.2,
      },
      data: [],
    },
  ],
});

const initChart = () => {
  if (industryDistribution.data) {
    const { views, shares } = industryDistribution.data.playbackData;

    option.xAxis.data = views.map((item, index) => index + 1);
    option.series[0].data = views;
    option.series[1].data = shares;
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

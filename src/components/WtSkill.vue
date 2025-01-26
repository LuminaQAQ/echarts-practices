<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const option = reactive({
  title: {
    text: "技能掌握",
    left: "center",
    textStyle: {
      color: "white",
    },
  },
  xAxis: {
    show: false,
  },
  yAxis: [
    {
      data: [],
      axisLabel: {
        color: "white",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    {
      data: [],
      axisLabel: {
        color: "white",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      label: { show: true, position: "inside", formatter: "{c}%" },
      type: "bar",
      data: [],
    },
  ],
  tooltip: {},
  grid: {
    left: "15%",
  },
});

const colorBoard = ["#4258f0", "#ff736f", "#29c0ec", "#ffbc4d", "#ad28ff"];

const initChart = () => {
  if (industryDistribution.data) {
    const { skillData } = industryDistribution.data;

    const data = Object.entries(skillData);

    option.yAxis[0].data = data.map((item) => item[0].toUpperCase());
    option.yAxis[1].data = data.map((item) => item[1]);
    option.series[0].data = data.map((item, index) => {
      return {
        value: item[1],
        itemStyle: {
          color: colorBoard[index],
          borderRadius: 999,
          borderWidth: 2,
          borderColor: "#0098d5",
        },
      };
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
  height: 120%;
  width: 100%;
}
</style>

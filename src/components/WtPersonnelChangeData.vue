<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const option = reactive({
  theme: "dark",
  title: {
    text: "人员变化",
    subtext: "单位：人",
    left: "center",
    textStyle: {
      color: "white",
    },
    subtextStyle: {
      color: "#ccc",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    axisLabel: {
      color: "white",
    },
  },
  yAxis: {
    axisLabel: {
      color: "white",
    },
  },
  tooltip: {},
  legend: {
    data: ["新增人员", "减少人员"],
    bottom: "bottom",
    textStyle: {
      color: "white",
    },
  },
  series: [
    {
      name: "新增人员",
      type: "line",
      data: [],
    },
    {
      name: "减少人员",
      type: "line",
      data: [],
    },
  ],
});

watch(industryDistribution, () => {
  if (industryDistribution.data) {
    const { newHires, resignations } = industryDistribution.data.personnelChangeData;
    option.series[0].data = newHires;
    option.series[1].data = resignations;
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
  height: 100%;
}
</style>

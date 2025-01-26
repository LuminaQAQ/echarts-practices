<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const initChart = () => {
  if (industryDistribution.data) {
    const { ageDistributionData } = industryDistribution.data;

    option.series[0].data = Object.entries(ageDistributionData).map((item) => {
      return { name: translate[item[0]], value: item[1] };
    });
  }
};
const option = reactive({
  title: {
    text: "年龄分布",
    textStyle: {
      color: "white",
    },
    left: "center",
  },
  tooltip: {},
  series: [
    {
      type: "pie",
      data: [],
      label: {
        color: "white",
      },
      radius: ["40%", "70"],
      top: "20%",
    },
  ],
});

const translate = {
  under20: "低于20岁",
  "20to30": "20~30岁",
  "31to40": "31~40岁",
  "41to50": "41~50岁",
  over50: "高于50岁",
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
  <VChart ref="chart" class="chart" :option="option" />
</template>

<style lang="scss" scoped>
.chart {
  height: 100%;
}
</style>

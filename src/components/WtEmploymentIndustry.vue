<script setup>
import VChart from "vue-echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const chart = ref(null);

const option = reactive({
  title: {
    text: "就业行业",
    subtext: "单位：万人",
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
  tooltip: {},
  series: [
    {
      type: "bar",
      data: [],
    },
  ],
});

const translate = {
  tourism: "旅游行业",
  education: "教育行业",
  gaming: "游戏行业",
  healthcare: "医疗保健行业",
  ecommerce: "电子商务行业",
  social: "社交行业",
  finance: "金融行业",
};

watch(industryDistribution, () => {
  if (industryDistribution.data) {
    const { industryData } = industryDistribution.data;
    option.xAxis.data = Object.keys(industryData).map((item) => translate[item]);
    option.series[0].data = Object.values(industryData);
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
  height: 120%;
}
</style>

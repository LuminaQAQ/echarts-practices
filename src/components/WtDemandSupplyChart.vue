<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";

const industryDistribution = useIndustryDistribution();

const data = {
  demand: ref(0),
  supply: ref(0),
};

watch(industryDistribution, () => {
  if (industryDistribution.data) {
    const { demand, supply } = industryDistribution.data.demandSupplyData;
    data.demand.value = demand;
    data.supply.value = supply;
  }
});
</script>

<template>
  <el-row class="demand-supply-container">
    <el-statistic class="demand-wrap" title="前端需求人数" :value="data.demand.value" />
    <el-statistic class="demand-wrap" title="市场供应人数" :value="data.supply.value" />
  </el-row>
</template>

<style lang="scss" scoped>
.chart {
  height: 100%;
}

.demand-supply-container {
  justify-content: space-evenly;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 0.75rem;

  border-radius: 0.5rem;
  padding: 0.75rem;
}

.el-statistic {
  text-align: center;

  --el-statistic-title-color: white;
  --el-statistic-content-color: #fff47b;
  --el-statistic-content-font-weight: 800;

  --el-statistic-title-font-size: 1rem;
  --el-statistic-content-font-size: 2rem;

  ::v-deep(.el-statistic__head) {
    margin-bottom: 1.5rem;
  }
}
</style>

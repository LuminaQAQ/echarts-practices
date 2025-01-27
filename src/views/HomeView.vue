<script setup>
import { fetchIndustryDistribution } from "@/api/industryDistribution";
import WtAgeDistribution from "@/components/WtAgeDistribution.vue";
import WtDemandSupplyChart from "@/components/WtDemandSupplyChart.vue";
import WtEmploymentIndustry from "@/components/WtEmploymentIndustry.vue";
import WtMapChart from "@/components/WtMapChart.vue";
import WtPersonnelChangeData from "@/components/WtPersonnelChangeData.vue";
import WtPlaybackChart from "@/components/WtPlaybackChart.vue";
import WtRegionDistributionChart from "@/components/WtRegionDistributionChart.vue";
import WtSkill from "@/components/WtSkill.vue";
import { useIndustryDistribution } from "@/stores/industryDistribution";
import { onMounted } from "vue";

const industryDistribution = useIndustryDistribution();
onMounted(() => {
  fetchIndustryDistribution().then((res) => {
    industryDistribution.data = res.data;
  });
  setInterval(() => {
    fetchIndustryDistribution().then((res) => {
      industryDistribution.data = res.data;
    });
  }, 3000);
});
// industryDistribution.setData();
</script>

<template>
  <section ref="bgContainer" class="wt-main-container">
    <el-row class="wt-board" :gutter="24">
      <el-col :span="6" class="col">
        <el-row class="col-item-wrap">
          <WtEmploymentIndustry />
        </el-row>
        <el-row class="col-item-wrap">
          <WtPersonnelChangeData />
        </el-row>
        <el-row class="col-item-wrap">
          <WtAgeDistribution />
        </el-row>
      </el-col>
      <el-col :span="12" class="col">
        <WtDemandSupplyChart />
        <WtMapChart />
      </el-col>
      <el-col :span="6" class="col">
        <el-row class="col-item-wrap">
          <WtSkill />
        </el-row>
        <el-row class="col-item-wrap">
          <WtPlaybackChart />
        </el-row>
        <el-row class="col-item-wrap">
          <WtRegionDistributionChart />
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
.wt-main-container {
  background-color: #90bdde;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-position: 50% 100%;
  background-repeat: no-repeat;
}

.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.wt-board {
  height: 100%;

  .col {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .col-item-wrap {
      box-sizing: border-box;
      backdrop-filter: blur(4px);
      background-color: rgba(255, 255, 255, 0.1);
      margin-top: 0.75rem;

      border-radius: 0.5rem;
      padding: 0.75rem;

      width: 100%;
      height: calc(33.3333% - 0.75rem);
      flex: 1 0 calc(33.3333% - 0.75rem);

      &:last-child {
        margin-bottom: 0.75rem;
        height: calc(33.3333% - 1.5rem);
        flex: 1 0 calc(33.3333% - 1.5rem);
      }
    }
  }
}
</style>

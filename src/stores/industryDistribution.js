import { fetchIndustryDistribution } from "@/api/industryDistribution";
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useIndustryDistribution = defineStore("industryDistribution", () => {
  let data = reactive(null);

  const setData = async () => {
    try {
      const res = await fetchIndustryDistribution()
      data = res.data;

    } catch (error) {
      console.error(error);
    }
  }

  return { data, setData }
})

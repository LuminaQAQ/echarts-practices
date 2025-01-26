import { fetchIndustryDistribution } from "@/api/industryDistribution";
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useIndustryDistribution = defineStore("industryDistribution", () => {
  let data = ref(null);

  const setData = async () => {
    try {
      const res = await fetchIndustryDistribution()
      data.value = res.data;

    } catch (error) {
      console.error(error);
    }
  }

  return { data: data.value, setData }
})

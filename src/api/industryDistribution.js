import request from "@/utils/request"
import { apiList } from "./index"

/**
 * 获取行业数据
 * @returns {Promise} axios
 */
export const fetchIndustryDistribution = () => {
  return request({
    method: "get",
    url: apiList.industryDistribution,
  })
}

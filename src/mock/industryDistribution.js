import Mock, { mock } from "mockjs"
import { apiList } from "@/api"

const baseURL = "https://localhost";

const url = (api) => baseURL + api;

const option = {
  "industryData": {
    "tourism": '@integer(100, 300)',
    "education": '@integer(100, 300)',
    "gaming": '@integer(100, 300)',
    "healthcare": '@integer(100, 300)',
    "ecommerce": '@integer(100, 300)',
    "social": '@integer(100, 300)',
    "finance": '@integer(100, 300)'
  },
  "personnelChangeData": {
    "newHires|12": ['@integer(300, 600)'],
    "resignations|12": ['@integer(0, 250)']
  },
  "ageDistributionData": {
    "under20": '@float(5, 20, 0, 2)',
    "20to30": '@float(20, 40, 0, 2)',
    "31to40": '@float(20, 40, 0, 2)',
    "41to50": '@float(10, 20, 0, 2)',
    "over50": '@float(5, 10, 0, 2)'
  },
  "skillData": {
    "html5": '@integer(50, 100)',
    "css3": '@integer(50, 100)',
    "js": '@integer(50, 100)',
    "vue": '@integer(50, 100)',
    "node": '@integer(50, 100)'
  },
  "playbackData": {
    "views|30": ['@integer(0, 100)'],
    "shares|30": ['@integer(0, 100)']
  },
  "regionDistributionData|7": [{
    'region': '@province(true)',
    'count': '@integer(1, 200)'
  }],
  "demandSupplyData": {
    "demand": '@integer(100000, 150000)',
    "supply": '@integer(100000, 150000)'
  },
  "mapData": {
    // "cities": [{
    //   "name": "Beijing",
    //   "connections": '@integer(1, 10)'
    // }, {
    //   "name": "Shanghai",
    //   "connections": '@integer(1, 10)'
    // }, {
    //   "name": "Guangzhou",
    //   "connections": '@integer(1, 10)'
    // }, {
    //   "name": "Shenzhen",
    //   "connections": '@integer(1, 10)'
    // }, {
    //   "name": "Chengdu",
    //   "connections": '@integer(1, 10)'
    //   }]
    "cities|34": [{
      'name': '@province(true)',
      "connections": '@integer(1, 10)'
    }]
  }
}


mock(url(apiList.industryDistribution), 'get', option)

// mock(url(apiList.industryDistribution), 'get', {
//   'employmentIndustry|7': {
//     'industryData|1-1200': [1]
//   },
//   'demandSupply': {
//     'frontEndDemand|1-200000': 1,
//     'marketSupply|1-200000': 1
//   },
//   'skillsMastery|5': {
//     'skillData|1-1000': [1]
//   },
//   'staffChange': {
//     'newHires|12': [Mock.Random.integer(0, 1000)],
//     'resignations|12': [Mock.Random.integer(0, 1000)]
//   },
//   'playbackVolume': {
//     'previews|30': [Mock.Random.integer(0, 100)],
//     'reposts|30': [Mock.Random.integer(0, 100)]
//   },
//   'ageDistribution|5': {
//     'ageData|1-100': [1]
//   },
//   'regionalDistribution|6': [{
//     'region': '@city(true)',
//     'count|1-200': 1
//   }],
//   'regionalPieDistribution|6': {
//     'regionData|1-100': [1]
//   }
// })

# ea-weather

## To-do

1. [ ] `实时天气展示`：卡片布局

- 数据来源：`/geo/v1/district`（获取城市信息）和`/weather/now`（获取实时天气）
- ECharts 图表：无需图表，直接展示数据

2. [ ] `未来天气预报`：卡片布局

- 数据来源：`/weather/7d`（获取未来 7 天天气预报）
- ECharts 图表：
  - [x] `折线图（Line Chart）`：展示未来几天的最高温和最低温变化趋势。
  - [x] `柱状图（Bar Chart）`：展示未来几天的降水概率。

3. [ ] `逐小时预报`：表格或卡片布局

- 数据来源：`/weather/24h`（获取未来 24 小时逐小时预报）
- ECharts 图表：
  - [ ] `折线图（Line Chart）`：展示未来 24 小时的温度变化。
  - [ ] `柱状图（Bar Chart）`：展示未来 24 小时的降水概率。

4. [ ] 空气质量展示：卡片布局

- 数据来源：`/air/now`（获取实时空气质量）
- ECharts 图表：
  - [ ] `柱状图（Bar Chart）`：展示当前 AQI 及各污染物浓度。

5. [ ] 生活指数展示：卡片布局

- 数据来源：`/indices/1d`（获取生活指数）
- ECharts 图表：无需图表，直接展示数据

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

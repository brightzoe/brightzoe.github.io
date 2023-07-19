# 可视化图表中的环形渐变实现

以 echarts 饼状图为例，实现环形渐变填充。

饼图是一种将数据大小映射到扇形角度的可视化图表。该模块以开始角度、结束角度作为输入，将数据中给出的值按比例映射到开始角度到结束角度这个区间内。

echarts 默认支持线性渐变与径向渐变，不支持环形渐变，如果要实现环形渐变，只能用线性渐变模拟实现类似环形渐变的效果。

![环形渐变](https://i.loli.net/2021/09/23/9RlInTuGh5JeocW.png)

:::note

线性渐变(linear-gradient)就是沿着一根轴线（水平、垂直或某个角度）改变颜色，从起点到终点颜色进行顺序渐变。

径向渐变指从一个中心开始向远处渐变的效果，可以指定渐变的中心、形状（圆形或椭圆形）、大小。

CSS 的`background`也是支持这两种渐变方式。

:::

上面环形渐变的效果该如何实现呢？

### 初步数据处理

```js
const data = [
  { name: 'data1', value: 100 },
  { name: 'data2', value: 40 },
  { name: 'data3', value: 60 },
];

// 计算每部分比例，以及开始角度，结束角度
const dataTotal = data.reduce((prev, curr) => prev + curr.value, 0);
data.forEach((item, idx) => {
  item.percent = item.value / dataTotal;
  item.angle = item.percent * Math.PI * 2; // 弧度制的角度
  if (idx == 0) {
    item.startAngle = 0;
    item.endAngle = item.angle;
  } else {
    item.startAngle = data[idx - 1].startAngle + data[idx - 1].angle;
    item.endAngle = item.startAngle + item.angle;
  }
});

// 颜色列表
const color = [
  {
    r: 1,
    g: 193,
    b: 178,
  },
  {
    r: 49,
    g: 205,
    b: 83,
  },
  {
    r: 255,
    g: 214,
    b: 0,
  },
];
```

### 具体渐变方向计算

```js
/**
 * 线性渐变起止方向的计算方法
 * @param {*} startArc 开始角度
 * @param {*} endArc 结束角度
 * @returns 四个坐标 x,y,x2,y2
 */
function getCoordinates(startArc, endArc) {
  // 这里计算扇形最外层的x,y坐标
  const position = [
    Math.sin(startArc),
    -Math.cos(startArc),
    Math.sin(endArc),
    -Math.cos(endArc),
  ];
  // 这里求得了最外层两个顶点坐标的差值。
  const dx = position[2] - position[0];
  const dy = position[3] - position[1];

  // 这里在根据两点坐标的差值计算x,y,x2,y2
  return getLocation(dx, dy);
}

function getLocation(dx, dy) {
  const tanV = dx / dy;
  // 这里是在计算按照横向渐变还是按照纵向渐变。
  const directSign = Math.abs(tanV) < 1;
  const t = directSign ? tanV : 1 / tanV;

  const sign1 = t > 0 ? 1 : -1;
  const sign2 = dx > 0 ? 1 : -1;
  const sign = directSign ? sign1 * sign2 : sign2;

  // 把整个圆形的坐标映射到了[0-1]之间0.5，0.5即为圆心坐标。
  const group1 = [0.5 - (sign * t) / 2, 0.5 + (sign * t) / 2];
  // 这里给纵向渐变还是横向渐变赋值、即group中的第三项和第四项的值
  const group2 = sign > 0 ? [0, 1] : [1, 0];
  const group = [...group1, ...group2];
  const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2'];

  const res = {};
  keys.forEach((k, idx) => {
    res[k] = group[idx];
  });
  return res;
}

/**
 * 给数据写入 样式(线性渐变)
 *
 * @param {*} data 数据
 * @param {*} colorlist 颜色列表
 * @param {*} startOpacity 开始颜色的透明度
 * @param {*} endOpacity 结束颜色透的明度
 * @returns 带样式的数据
 */
function setGradientColorInItemStyle(
  data,
  colorlist,
  startOpacity = 1,
  endOpacity = 0,
) {
  for (let i = 0; i < data.length; i++) {
    const color = colorlist[i];
    const startAngle = data[i].startAngle;
    const endAngle = data[i].endAngle;
    // 这里计算了 线性渐变的起止方向
    // @ts-ignore
    const coordinates = getCoordinates(startAngle, endAngle);
    data[i].itemStyle = {
      color: {
        ...coordinates,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: `rgba(${color.r}, ${color.g}, ${color.b}, ${startOpacity})`,
          },
          {
            offset: 0.91,
            color: `rgba(${color.r}, ${color.g}, ${color.b}, ${endOpacity})`,
          },
        ],
      },
    };
  }
  return data;
}
```

### 在 echarts 里使用

```js
const option = {
  series: [
    {
      name: '',
      type: 'pie',
      data: setGradientColorInItemStyle(data, color),
    },
  ],
};
```

:::caution 根据以上的方法，在 echarts 中我实现了在图上的环形渐变，但是图例的渐变方向也跟着跑偏了。图例如何分别自定义样式呢？ ![渐变方向跟着跑走的图例](https://i.loli.net/2021/09/23/6EhBrMzVTYq5ixZ.png)

echarts 图例也可以单独的自定义：

```js
  legend: {
    data: [
      {
        name: 'Search Engine',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#01C1B2'
            },
            {
              offset: 1,
              color: 'rgba(1, 193, 178, 0)'
            }
          ])
        }
      },
      {
        name: 'Direct'
      },
      {
        name: 'Email'
      }
    ]
  },
```

:::

:::info

D3.js，D3(Data-Driven Documents),基于数据生成 SVG 路径以及通过数据和方法在 DOM 中创建数据可视化元素（如轴）。相对于 ECharts 等开箱即用的可视化框架，D3 更接近于底层，直接控制原生 SVG，不直接提供任何一种现成的可视化图表，可视化定制能力强。

D3 没有引入新的图形元素，它遵循了 web 标准（HTML, CSS, SVG 以及 Canvas ）来展示数据 ，所以它可以不需要依赖其他框架独立运行在现代浏览器中。

:::

## Reference

1. [玩转 echarts 之实现环形渐变](https://juejin.cn/post/6868068790077227016)
2. [D3 饼图](https://sz-p.com/d3layoutdoc/%E9%A5%BC%E5%9B%BE.html#%E8%BE%93%E5%85%A5)
3. [渐变：线性渐变，径向渐变](https://blog.csdn.net/MYTLJP/article/details/78271745)

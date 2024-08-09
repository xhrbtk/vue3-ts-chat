/* 
  options： 可自行配置传参
*/
const barConfig = (options: any) => {

  return  {
    legend: {},
    tooltip: {},
    dataset: {
      // 提供一份数据。
      source: options?.source
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: { type: 'category' },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }

  // const defaultConfig = {
  //   title: {
  //     text: options?.title,
  //     right: options?.right && '0px',
  //     top: '0px',
  //     textStyle: {
  //       color: '#fff',
  //       fontWeight: '400',
  //       fontSize: 14
  //     }
  //   },
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'shadow'
  //     },
  //     formatter: function (params) {
  //       // console.log('params', params)
  //       var tar = params[0]
  //       return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
  //     }
  //   },
  //   grid: {
  //     top: '20%',
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: options?.xAxis,
  //   yAxis: options?.yAxis,
  //   series: options?.series
  // }
  // return Object.assign({}, defaultConfig)
}

export default barConfig

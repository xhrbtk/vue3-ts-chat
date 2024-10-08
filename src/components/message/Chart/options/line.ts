/* 
  options： 可自行配置传参
*/
const lineConfig = (options) => {
   
    const defaultConfig = {
      title: {
        text: options?.title,
        right: options?.right && '0px',
        textStyle: {
          color: '#fff',
          fontWeight: '500',
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        textStyle: {
          fontStyle: 500,
          fontSize: 14,
          color: '#fff'
        },
        data: options?.legend?.data
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: options?.xAxis?.data
      },
      yAxis: {
        type: 'value'
      },
      series: options?.series
    }
    return Object.assign({}, defaultConfig)
  }
  
  export default lineConfig
  
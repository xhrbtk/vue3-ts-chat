/* 
  options： 可自行配置传参
*/
const radarConfig = (options: any) => {
    console.log('options---', options.legend)
    return   {
      title: {
        text: options?.title,
        right: options?.right && '0px',
      },
      radar: options?.radar,
      legend: {
        data: options?.legend?.data
      },
      series: options?.series
    }
  }
  
  export default radarConfig
  
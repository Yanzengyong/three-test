import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/pie.scss'

export default function DataAssets () {
	var color=['#00ffd0', '#D8833D', '#1D87C4', '#fff700', '#6480DA']
	const option = {
		title: {
			text: '政府数据资源',
			textStyle: {
				color: '#ffffff'
			}
		},
		color,
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			y: 'center',
			data:['信产中心', '贵阳市', '成都市', '重庆市', '其他'],
			textStyle :{
				color:'#fff'
			}
		},
		series: [
			{
				name:'数据来源',
				type:'pie',
				selectedMode: 'single',
				radius: [0, '26%'],
				data:[
					{ value:335, name:'政府数据开放平台', selected:true },
					{ value:679, name:'共享交换平台' },
					{ value:1000, name:'信产中心' },
					{ value:548, name:'其他' }
				],
				itemStyle: {
					opacity: 0.6
				}
			},
			{
				name:'数据来源',
				type:'pie',
				radius: ['40%', '55%'],
				data:[
					{ value:335, name:'政府数据开放平台' },
					{ value:310, name:'贵阳市' },
					{ value:234, name:'成都市' },
					{ value:135, name:'重庆市' },
					{ value:1000, name:'信产中心' },
					{ value:548, name:'其他' }
				],
				itemStyle: {
					opacity: 0.6
				}
			}
		]
	}
	var option2Color = ['#6480DA', '#1d87c4']
	const option2 = {
		title: {
			text: '行业数据资源',
			textStyle: {
				color: '#ffffff'
			}
		},
		color: option2Color,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
			}
		},
		grid: { containLabel: true },
		legend: {
			data: ['数量', '评分']
		},
		yAxis: [
			{
				type: 'value',
				name: '万条',
				interval: 20000,
				position: 'right',
				axisLine: {
					lineStyle: {
						color: option2Color[0]
					}
				},
				axisLabel: {
					formatter: '{value} '
				}
			},
			{
				type: 'value',
				name: '分数',
				position: 'left',
				min: 0,
				max: 100,
				interval: 100,
				axisLine: {
					lineStyle: {
						color: option2Color[1]
					}
				},
				axisLabel: {
					formatter: '{value} '
				}
			}
		],
		xAxis: {
			type: 'category',
			data: ['农业', '餐饮业', '航空', '酒店民宿', '房地产', '招聘'],
			axisLabel:{ color:'#fff' }
		},
		series: [
			{
				type: 'bar',
				data: [58212, 78254, 41032, 12755, 20145, 79146],
				itemStyle: {
					color: '#6480DA',
					opacity: 0.6
				}
			},
			{
				type: 'line',
				yAxisIndex: 1,
				data: [89.3, 57.1, 74.4, 50.1, 89.7, 68.1],
				itemStyle: {
					color: '#1d87c4',
					opacity: 0.6
				}
			}
		]
	}

	var colors = ['#00ffd0', '#D8833D']
	const option3 = {
		title: {
			text: '政策公文数据资源',
			textStyle: {
				color: '#ffffff'
			}
		},
		color: colors,
		grid: { containLabel: true },
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		legend: {
			data:['蒸发量', '平均温度']
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				data: ['成都市', '四川省', '中央', '北京市', '重庆市', '上海市', '贵州省', '贵阳市', '全国各级-科技口'],
				axisLabel:{
					color:'#fff'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '数据量（万条）',
				min: 0,
				max: 80,
				position: 'right',
				axisLine: {
					lineStyle: {
						color: colors[0]
					}
				},
				axisLabel: {
					formatter: '{value} '
				}
			},
			{},
			{
				type: 'value',
				name: '委办局(个)',
				min: 0,
				max: 25,
				position: 'left',
				axisLine: {
					lineStyle: {
						color: colors[1]
					}
				},
				axisLabel: {
					formatter: '{value} '
				}
			}
		],
		series: [
			{
				name:'数据量',
				type:'bar',
				data:[12.0, 14.9, 17.0, 23.2, 25.6, 36.7, 45.6, 62.2, 32.6],
				itemStyle: {
					opacity: 0.6
				}
			},
			{
				name:'委办局',
				type:'line',
				yAxisIndex: 2,
				data:[12.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0],
				itemStyle: {
					opacity: 0.6
				}
			}
		]
	}
	return (
		<div className="dataAssets" >
			<div className="maintitle">平台数据资产概况</div>
			<div className='divider'/>
			{/* <div className="subTitle">政府数据资源</div> */}
			<ReactEcharts option={option}/>
			{/* <div className="subTitle">行业数据资源</div> */}
			<ReactEcharts option={option2} className='chart'/>
			{/* <div className="firsttitle">政策公文数据资源</div> */}
			<ReactEcharts option={option3}/>
		</div>
	)
}

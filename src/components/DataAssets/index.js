import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/pie.scss'

export default function DataAssets () {
	var color=['#007eff', '#00ff66', '#c0ff00', '#fff700', '#00ffd0']
	const option = {
		color,
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			x: 'left',
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
				radius: [0, '30%'],

				label: {
					normal: {
						position: 'inner'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{ value:335, name:'政府数据开放平台', selected:true },
					{ value:679, name:'共享交换平台' },
					{ value:1000, name:'信产中心' },
					{ value:548, name:'其他' }
				]
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
				]
			}
		]
	}
	const option2 = {
		dataset: {
			source: [
				['score', 'amount', 'product'],
				[89.3, 58212, '农业'],
				[57.1, 78254, '餐饮业'],
				[74.4, 41032, '航空'],
				[50.1, 12755, '酒店民宿'],
				[89.7, 20145, '房地产'],
				[68.1, 79146, '招聘']
			]
		},
		grid: { containLabel: true },
		xAxis: {
			name: '万条',
			nameTextStyle :{
				color:'#fff'
			},
			axisLabel:{
				color:'#fff'
			}
		},
		yAxis: {
			type: 'category',
			axisLabel:{
				color:'#fff'
			}
		},
		visualMap: {
			orient: 'horizontal',
			left: 'center',
			min: 10,
			max: 100,
			text: ['高', '低'],
			// Map the score column to color
			dimension: 0,
			inRange: {
				color: ['#007eff', '#00ff66']
			},
			textStyle :{
				color:'#fff'
			}
		},
		series: [
			{
				type: 'bar',
				encode: {
					// Map the "amount" column to X axis.
					x: 'amount',
					// Map the "product" column to Y axis
					y: 'product'
				}
			}
		]
	}

	var colors = ['#00ffd0', '#c0ff00']
	const option3 = {
		color: colors,

		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		grid: {
			right: '20%'
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
				data:[12.0, 14.9, 17.0, 23.2, 25.6, 36.7, 45.6, 62.2, 32.6]
			},
			{
				name:'委办局',
				type:'line',
				yAxisIndex: 2,
				data:[12.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0]
			}
		]
	}
	return (
		<div className="dataAssets" >
			<div className="maintitle">平台数据资产概况</div>
			<div className="firsttitle">政府数据资源</div>
			<ReactEcharts option={option}/>
			<div className="firsttitle">行业数据资源</div>
			<ReactEcharts option={option2}/>
			<div className="firsttitle">政策公文数据资源</div>
			<ReactEcharts option={option3}/>
		</div>
	)
}

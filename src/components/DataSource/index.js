import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'

export default function DataAssets () {
	const option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data:['信产中心', '贵阳市', '成都市', '重庆市', '信产中心', '其他']
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
				label: {
					normal: {
						formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
						backgroundColor: '#eee',
						borderColor: '#aaa',
						borderWidth: 1,
						borderRadius: 4,
						rich: {
							a: {
								color: '#999',
								lineHeight: 22,
								align: 'center'
							},
							hr: {
								borderColor: '#aaa',
								width: '100%',
								borderWidth: 0.5,
								height: 0
							},
							b: {
								fontSize: 16,
								lineHeight: 33
							},
							per: {
								color: '#eee',
								backgroundColor: '#334455',
								padding: [2, 4],
								borderRadius: 2
							}
						}
					}
				},
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
		xAxis: { name: 'amount' },
		yAxis: { type: 'category' },
		visualMap: {
			orient: 'horizontal',
			left: 'center',
			min: 10,
			max: 100,
			text: ['High Score', 'Low Score'],
			// Map the score column to color
			dimension: 0,
			inRange: {
				color: ['#D7DA8B', '#E15457']
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

	var colors = ['#5793f3', '#d14a61', '#675bba']
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
				data: ['成都市', '四川省', '中央', '北京市', '重庆市', '上海市', '贵州省', '贵阳市', '全国各级-科技口']
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
		<div className="datasource">
			<div className="title">政府数据</div>
			<ReactEcharts className="firstPie" option={option}/>
			<div className="title">行业数据</div>
			<ReactEcharts className="secondChart" option={option2}/>
			<div className="title">政策公文数据</div>
			<ReactEcharts className="ThirdChart" option={option3}/>
		</div>
	)
}

import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/LineChart.scss'

export default function LineChart () {
	const data={
		statisticaldate:['2018-7', '2018-8', '2018-9', '2018-10', '2018-11', '2018-12', '2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6'],
		resourcedata:[83.9, 85.9, 111.1, 118.7, 148.3, 169.2, 231.6, 246.6, 255.4, 318.4, 330.3, 335.7],
	}
	var colors = ['#58b0ef', '#00d5ff', '#00ffd5']

	const	option = {
		color: colors,

		tooltip: {
			trigger: 'none',
			axisPointer: {
				type: 'cross'
			}
		},
		legend: {
			// top:20,
			// bottom:0,
			textStyle: {
				color: '#808080'
			},
			data:['数据资产总数']
		},
		grid: {
			// top: 70,
			// bottom: 50
			width:'83%',
			height:'50%'
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: colors[1]
					}
				},
				axisPointer: {
					label: {
						formatter: function (params) {
							return '数量：  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
						}
					}
				},
				data: data.statisticaldate
			},
			{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: colors[0]
					}
				},
				axisPointer: {
					label: {
						formatter: function (params) {
							return '数量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
						}
					}
				},
				data: data.statisticaldate
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel:{
					color:'#fff'
				}
			}
		],
		series: [
			{
				name:'数据资产总数',
				type:'line',
				xAxisIndex: 1,
				smooth: true,
				data: data.resourcedata
			}
		]
	}
	return(
		<div className="LineChart">
			<ReactEcharts option={option}></ReactEcharts>
		</div>
	)
}

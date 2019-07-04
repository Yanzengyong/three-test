import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/LineChart.scss'

export default function LineChart () {
	const data={
		statisticaldate:['2018-6', '2018-7', '2018-8', '2018-9', '2018-10', '2018-11', '2018-12', '2019-1', '2019-2', '2019-3', '2019-4', '2019-5'],
		resourcedata:[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
		sourcedata:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
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
			data:['数据资源总数', '数据源总数']
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
				name:'数据资源总数',
				type:'line',
				xAxisIndex: 1,
				smooth: true,
				data: data.resourcedata
			},
			{
				name:'数据源总数',
				type:'line',
				smooth: true,
				data: data.sourcedata
			}
		]
	}
	return(
		<div className="LineChart">
			{/* <div className="linechart_title">{title}</div> */}
			<ReactEcharts option={option}></ReactEcharts>
		</div>
	)
}

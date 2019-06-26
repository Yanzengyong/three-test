import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/dataelement.scss'

export default function DataAssets () {
	var color=['#00ffd0', '#D8833D', '#fff700', '#6480DA']
	const option = {
		title: {
			text: '数据元审核情况',
			textStyle: {
				color: '#ffffff'
			}
		},
		legend: {
			x: 'center',
			y: 'bottom',
			textStyle :{
				color:'#fff'
			}
		},
		color,
		tooltip: {
			trigger: 'axis',
			showContent: true
		},
		dataset: {
			source: [
				['product', '3月', '四月', '5月', '6月', '7月', '8月'],
				['未审核', 41, 30, 65, 53, 83, 98],
				['待审核', 86, 92, 85, 83, 73, 55],
				['审核驳回', 24, 67, 79, 86, 65, 82],
				['审核通过', 55, 67, 69, 72, 53, 39]
			]
		},
		xAxis: { 
			type: 'category',
			axisLabel:{ color:'#fff' }
		},
		yAxis: { 
			gridIndex: 0,
			axisLabel:{ color:'#fff' }
		},
		grid: { 
			top: '45%', 
		},
		series: [
			{ type: 'line', seriesLayoutBy: 'row', smooth: true },
			{ type: 'line', seriesLayoutBy: 'row', smooth: true },
			{ type: 'line', seriesLayoutBy: 'row', smooth: true },
			{ type: 'line', seriesLayoutBy: 'row', smooth: true },
			{
				type: 'pie',
				id: 'pie',
				radius: '30%',
				center: ['50%', '25%'],
				label: {
					formatter: '{b}: {@3月} ({d}%)'
				},
				encode: {
					itemName: 'product',
					value: '3月',
					tooltip: '3月'
				}
			}
		]

	}

	// myChart.on('updateAxisPointer', function (event) {
	// 	var xAxisInfo = event.axesInfo[0]
	// 	if (xAxisInfo) {
	// 		var dimension = xAxisInfo.value + 1
	// 		myChart.setOption({
	// 			series: {
	// 				id: 'pie',
	// 				label: {
	// 					formatter: '{b}: {@[' + dimension + ']} ({d}%)'
	// 				},
	// 				encode: {
	// 					value: dimension,
	// 					tooltip: dimension
	// 				}
	// 			}
	// 		})
	// 	}
	// })

	// myChart.setOption(option)
	return (
		<div className='DataElement'>
			<div className="maintitle">平台数据元</div>
			<div className='divider'/>
			<ReactEcharts
				option={option}
				onEvents={onclick}
			/>
		</div>
	)
}

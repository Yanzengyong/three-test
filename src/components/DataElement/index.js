import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function DataAssets () {
	const option = {
		legend: {},
		tooltip: {
			trigger: 'axis',
			showContent: false
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
		xAxis: { type: 'category' },
		yAxis: { gridIndex: 0 },
		grid: { top: '55%' },
		series: [
			{ type: 'line', smooth: true, seriesLayoutBy: 'row' },
			{ type: 'line', smooth: true, seriesLayoutBy: 'row' },
			{ type: 'line', smooth: true, seriesLayoutBy: 'row' },
			{ type: 'line', smooth: true, seriesLayoutBy: 'row' },
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

		<div >
			<div className="maintitle">平台数据元审核情况</div>
			<ReactEcharts
				option={option}
				onEvents={onclick}
			/>
		</div>
	)
}

import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
import { maincolors } from '../../utils/colors'

export default function DataAssets () {
	const option = {
		color:['#ffff34', '#007265'],
		tooltip: {},
		legend: {
			data: ['2018下半年采集量', '2019上半年数据采集量'],
			textStyle:{
				color:'#fff'
			},
			orient: 'vertical',
			x: 'left',
			padding:[10, 0, 0, 0]
		},
		radar: {
			// shape: 'circle',
			name: {
				textStyle: {
					color: '#000',
					backgroundColor: '#fff',
					borderRadius: 3,
					padding: [3, 5]
				}
			},
			indicator: [
				{ name: '政府数据', max: 6500 },
				{ name: '行业数据', max: 16000 },
				{ name: '政策公文', max: 30000 },
				{ name: '招聘数据', max: 38000 },
				{ name: '项目支撑', max: 52000 },
				{ name: '研发数据', max: 25000 }
			],
			splitArea:{
				areaStyle:{
					color:['#62fdfdf6', '#5bf1dfc2']
				}

			}
		},
		series: [{
			name: '2018下半年采集量 vs 2019上半年数据采集量',
			type: 'radar',
			// areaStyle: {normal: {}},
			data : [
				{
					value : [4300, 10000, 28000, 35000, 50000, 19000],
					name : '2018下半年采集量'
				},
				{
					value : [5000, 14000, 28000, 31000, 42000, 21000],
					name : '2019上半年数据采集量'
				}
			]
		}]
	}


	return (
		<div className="dataSourceType">
			<div className="title">平台数据概况</div>
			<ReactEcharts className="dataSourceMain" option={option}/>
		</div>
	)
}

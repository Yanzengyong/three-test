import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/pie.scss'
import { Table } from 'antd'
import 'antd/dist/antd.css'

export default function DataAssets () {
	var color=['#00ffd0', '#D8833D', '#1D87C4', '#fff700', '#6480DA']
	const option = {
		title: {
			text: '政府数据应用流向',
			textStyle: {
				color: '#4AFFFE'
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
	var option2Color = ['#4AFFFE', '#6480DA']
	const option2 = {
		title: {
			text: '行业数据资源',
			textStyle: {
				color: '#4AFFFE'
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
					color: '#4AFFFE',
					opacity: 0.6
				}
			}
		]
	}

	var colors = ['#00ffd0', '#D8833D']
	const option3 = {
		title: {
			text: '政策公文数据资产',
			textStyle: {
				color: '#4AFFFE'
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
			textStyle :{
				color:'#fff'
			}
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
				max: 40,
				position: 'left',
				interval: 10,
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


	const columns = [
		{
			title: '区域',
			dataIndex: 'area',
			width:90
		},
		{
			title: '委办局',
			dataIndex: 'government',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.government - b.government,
		},
		{
			title: 'API调用次数',
			dataIndex: 'num',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.num - b.num,
		},
	]

	const data = [
		{
			key: '1',
			area: '成都市',
			government: 53,
			num: 2064,
		},
		{
			key: '2',
			area: '四川省',
			government: 54,
			num: 2850,
		},
		{
			key: '3',
			area: '中央',
			government: 54,
			num: 10237,
		},
		{
			key: '4',
			area: '北京市',
			government: 34,
			num: 5560,
		},
		{
			key: '5',
			area: '重庆市',
			government: 32,
			num: 1860,
		}
	]

	return (
		<div className="dataApplication" >
			<div className="maintitle">数据应用概况</div>
			<div className='divider'/>
			<div className='dataApplicationStatistics'>
				<div className='dataOpen'>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>17325</span>
							<span className='unit'>条</span>
						</div>
						<div className='info'>已开放数据</div>
					</div>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>10328</span>
							<span className='unit'>条</span>
						</div>
						<div className='info'>数据集</div>
					</div>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>587</span>
							<span className='unit'>个</span>
						</div>
						<div className='info'>API接口</div>
					</div>
					<div className='dataInfo2'>
						<div className='data'>
							<span className='num'>51</span>
							<span className='description'>个市级部门</span>
						</div>
						<div className='data'>
							<span className='num'>13</span>
							<span className='description'>个区县</span>
						</div>
						<div className='data'>
							<span className='num'>6</span>
							<span className='description'>个行业</span>
						</div>
					</div>
				</div>
				
				<div className='dataApply'>
					<div className='industry-info'>
						<ReactEcharts option={option2}/>
					</div>
					<div className='API-info'>
						<Table 
							size="small" 
							columns={columns} 
							dataSource={data}
						/>
					</div>
				</div>

				<div className='dataAssets'>
					<div className='chart'>
						<ReactEcharts option={option}/>
					</div>
					<div className='chart'>
						<ReactEcharts option={option3}/>
					</div>
				</div>
			</div>
		</div>
	)
}

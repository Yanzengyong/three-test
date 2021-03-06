import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/pie.scss'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import 'echarts-liquidfill'

export default function DataAssets () {
	var colors = ['#00ffd0', '#D8833D']
	const option3 = {
		title: {
			// text: '政策公文数据资产',
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
				data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				axisLabel:{
					color:'#fff'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '接口总数（个）',
				min: 0,
				max: 600,
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
				name: '接口已使用个数',
				min: 0,
				max: 600,
				position: 'left',
				// interval: 10,
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
				name:'接口总数（个）',
				type:'bar',
				data:[30, 50, 80, 100, 150, 180, 220, 260, 385, 430, 550, 587],
				itemStyle: {
					opacity: 0.6
				}
			},
			{
				name:'接口已使用个数',
				type:'line',
				// yAxisIndex: 2,
				data:[30, 35, 68, 80, 122, 150, 201, 220, 300, 388, 430, 500],
				itemStyle: {
					opacity: 0.6
				}
			}
		]
	}


	const columns = [
		{
			title: '应用名称',
			dataIndex: 'area',
			width:200,
			align:'center'
		},
		{
			title: 'API调用次数',
			dataIndex: 'government',
			align:'center'
		},
		{
			title: '数据使用量',
			dataIndex: 'num',
			align:'center'
		},
	]

	const data = [
		{
			key: '1',
			area: '一网通办',
			government: 53,
			num: '32GB',
		},
		{
			key: '2',
			area: '政务通',
			government: 32,
			num: '27GB',
		},
		{
			key: '3',
			area: '旅游一路通',
			government: 42,
			num: '30GB',
		},
		{
			key: '4',
			area: '安监小精灵',
			government: 18,
			num: '19GB',
		},
		{
			key: '5',
			area: '平安出入境',
			government: 25,
			num: '23GB',
		},
		{
			key: '6',
			area: '看天气',
			government: 22,
			num: '15GB',
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
							<span className='num'>36</span>
							<span className='unit'>GB</span>
						</div>
						<div className='info'>已开放数据</div>
					</div>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>58</span>
							<span className='unit'>GB</span>
						</div>
						<div className='info'>可共享数据</div>
					</div>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>587</span>
							<span className='unit'>个</span>
						</div>
						<div className='info'>活跃API</div>
					</div>
					{/* <div className='dataInfo2'>
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
					</div> */}
				</div>

				<div className='dataApply'>
					{/* <div className='industry-info'>
						<ReactEcharts option={option2}/>
					</div> */}
					<div className='API-info'>
						<Table
							size="small"
							columns={columns}
							dataSource={data}
							pagination={false}
						/>
					</div>
				</div>

				<div className='dataAssets'>
					<div className='dataInfo'>
						<div className='data'>
							<span className='num'>3</span>
							<span className='unit'>次</span>
						</div>
						<div className='info'>API调用失败次数</div>
					</div>
					<div className='chart'>
						<ReactEcharts option={option3}/>
					</div>
				</div>
			</div>
		</div>
	)
}

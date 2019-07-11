import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'

const IndCommerceData = {
	dataConnectRate: 0.62,
	sourceData: [
		{ value:400, name:'企业信息管理系统' },
		{ value:310, name:'经营许可证管理系统' },
		{ value:274, name:'人事系统' },
		{ value:235, name:'财务系统' },
		{ value:240, name:'OA办公系统' }
	],
	dataQuality: [53, 42, 31, 20],
	dataHistory: [
		['2017-02-01', 85],
		['2017-03-01', 94],
		['2017-04-01', 71],
		['2017-05-01', 106],
		['2017-06-01', 84],
		['2017-07-01', 93],
		['2017-08-01', 85],
		['2017-09-01', 73],
		['2017-10-01', 83],
		['2017-11-01', 125],
		['2017-12-01', 107],
		['2018-01-01', 116],
		['2018-02-01', 129],
		['2018-03-01', 135],
		['2018-04-01', 86],
		['2018-05-01', 73],
		['2018-06-01', 85],
		['2018-07-01', 73],
		['2018-08-01', 68],
		['2018-09-01', 92],
		['2018-10-01', 130],
		['2018-11-01', 245],
		['2018-12-01', 139],
		['2019-01-01', 115],
		['2019-02-01', 111],
		['2019-03-01', 309],
		['2019-04-01', 206],
		['2019-05-01', 137],
		['2019-06-01', 178]
	]
}

const revolutionDept = {
	dataConnectRate: 0.62,
	sourceData: [
		{ value:450, name:'物价管理系统' },
		{ value:310, name:'重大项目库管理系统' }
	],
	dataQuality: [53, 42, 31, 20],
	dataHistory: [
		['2017-02-01', 85],
		['2017-03-01', 94],
		['2017-04-01', 71],
		['2017-05-01', 106],
		['2017-06-01', 84],
		['2017-07-01', 93],
		['2017-08-01', 85],
		['2017-09-01', 73],
		['2017-10-01', 83],
		['2017-11-01', 125],
		['2017-12-01', 107],
		['2018-01-01', 116],
		['2018-02-01', 129],
		['2018-03-01', 135],
		['2018-04-01', 86],
		['2018-05-01', 73],
		['2018-06-01', 85],
		['2018-07-01', 73],
		['2018-08-01', 68],
		['2018-09-01', 92],
		['2018-10-01', 130],
		['2018-11-01', 245],
		['2018-12-01', 139],
		['2019-01-01', 115],
		['2019-02-01', 111],
		['2019-03-01', 309],
		['2019-04-01', 206],
		['2019-05-01', 137],
		['2019-06-01', 178]
	]
}

const securityDept = {
	dataConnectRate: 0.62,
	sourceData: [
		{ value:360, name:'重点安全生产企业（煤矿）管理系统' },
		{ value:270, name:'安全许可经营管理系统' },
		{ value:510, name:'威胁品生产企业管理系统' }
	],
	dataQuality: [53, 42, 31, 20],
	dataHistory: [
		['2017-02-01', 85],
		['2017-03-01', 94],
		['2017-04-01', 71],
		['2017-05-01', 106],
		['2017-06-01', 84],
		['2017-07-01', 93],
		['2017-08-01', 85],
		['2017-09-01', 73],
		['2017-10-01', 83],
		['2017-11-01', 125],
		['2017-12-01', 107],
		['2018-01-01', 116],
		['2018-02-01', 129],
		['2018-03-01', 135],
		['2018-04-01', 86],
		['2018-05-01', 73],
		['2018-06-01', 85],
		['2018-07-01', 73],
		['2018-08-01', 68],
		['2018-09-01', 92],
		['2018-10-01', 130],
		['2018-11-01', 245],
		['2018-12-01', 139],
		['2019-01-01', 115],
		['2019-02-01', 111],
		['2019-03-01', 309],
		['2019-04-01', 206],
		['2019-05-01', 137],
		['2019-06-01', 178]
	]
}

export default class DataAssets extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			title: '工商局',
			dataSet: {},
			dataXAxis: ['农业', '餐饮业', '航空', '酒店民宿', '房地产', '招聘'],
			dataYAxis: [12.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0]
		}
	}

	componentDidMount () {
		switch (this.state.title) {
		case '工商局': this.setState({ dataSet: IndCommerceData }); this.getAxisList(IndCommerceData.dataHistory); break
		default: break
		}
	}

	getAxisList = (data) => {
		if (data !== undefined) {
			let dateList = [] 
			let valueList = []
			data.forEach(item => {
				dateList.push(item[0])
				valueList.push(item[1])
			})
			this.setState({
				dataXAxis: dateList,
				dataYAxis: valueList
			})
		}
	}

	getAverageScore = (scores) => {
		if (scores !== undefined) {
			let sum = 0
			scores.forEach(item => {
				sum = sum + item
			})
			return sum/scores.length
		}
	}
	
	render () {
		const option_dataConnect = {
			title: {
				text: '数据来源系统分布',
				left: 'center',
				bottom: 50,
				textStyle: {
					color: '#4AFFFE'
				}
			},

			tooltip : {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {d}%'
			},

			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1]
				}
			},
			series : [
				{
					name:'数据来源',
					type:'pie',
					radius : '55%',
					center: ['50%', '40%'],
					data:this.state.dataSet.sourceData,
					roseType: 'radius',
					label: {
						normal: {
							textStyle: {
								color: '#ffffff'
							}
						}
					},
					labelLine: {
						normal: {
							lineStyle: {
								color: '#ffffff'
							},
							smooth: 0.2,
							length: 10,
							length2: 20
						}
					},
					itemStyle: {
						normal: {
							color: '#00A7A6',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		const option_dataHistory = {
			title: {
				text: '数据规模历史变化',
				left: 'center',
				top: 50,
				textStyle: {
					color: '#4AFFFE'
				}
			},

			tooltip : {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
				}
			},
			visualMap: [{
				show: false,
				type: 'continuous',
				seriesIndex: 0,
				min: 0,
				max: 400
			}],
			xAxis: {
				type: 'category',
				data: this.state.dataXAxis,
				axisLabel:{ color:'#fff' }
			},
			yAxis: {
				type: 'value',
				splitLine: { show: false },
				axisLabel:{ color:'#fff' },
			},
			series: [{
				data: this.state.dataYAxis,
				type: 'line',
				lineStyle: {
					color: '#70AFCE'
				},
				areaStyle: {
					color: '#3B7B9A',
					opacity: 0.6
				},
				itemStyle: {
					color: '#4AFFFE',
					opacity: 0.6
				},
			}]
		}
		const option_dataQuality = {
			title: {
				text: '数据质量评估',
				textStyle: {
					color: '#4AFFFE'
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01],
				axisLabel:{ color:'#fff' },
				name: '分数',
				max: 100,
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
			},
			yAxis: {
				type: 'category',
				data: ['质检', '清洗', '融合', '特征提取'],
				axisLabel:{ color:'#fff' }
			},
			series: [
				{
					name: '数据质量',
					type: 'bar',
					data: this.state.dataSet.dataQuality,
					itemStyle: {
						color: '#A5DEF1',
						opacity: 0.6
					}
				}
			]
		}

		return (
			<div className="datasource">
				<div className="maintitle">数据来源概况 - {this.state.title}</div>
				<div className='divider'/>
				<div className='statisticsChartGroup'>
					<div className='statistics'>
						<div className='connectRate'>
							<div className='connectRateChart'>
								<span className='connectRateChartNum'>{this.state.dataSet.dataConnectRate * 100}</span>
								<span className='connectRateChartUnit'>%</span>
							</div>
							<div className='connectRateTitle'>数据资源接入率</div>
						</div>
					</div>
					<div className='statistics'>
						<ReactEcharts option={option_dataConnect}/>
					</div>
				</div>
				<ReactEcharts option={option_dataHistory} className='statisticsChart'/>
				<div className='statisticsChart'>
					<div className='qualityChart'>
						<ReactEcharts option={option_dataQuality}/>
					</div>
					<div className='qualityScore'>
						<div className='name'>数据质量指数</div>
						<div className='score'>
							<span className='num'>{this.getAverageScore(this.state.dataSet.dataQuality)}</span>
							<span className='unit'>分</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

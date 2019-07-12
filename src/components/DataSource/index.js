import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'

export default class DataAssets extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			title: '发改委',
			dataSet: {},
			dataXAxis: ['农业', '餐饮业', '航空', '酒店民宿', '房地产', '招聘'],
			dataYAxis: [12.0, 12.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0]
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
					data:this.props.dataSet.sourceData,
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
				axisLabel:{ color:'#fff' }
			},
			yAxis: {
				type: 'value',
				splitLine: { show: false },
				axisLabel:{ color:'#fff' },
			},
			series: [{
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
				data: this.props.dataSet.dataHistory
			}]
		}

		return (
			<div className="datasource">
				<div className="maintitle">数据来源概况 - {this.props.dataSet.title}</div>
				<div className='divider'/>
				<div className='statisticsChartGroup'>
					<div className='statistics'>
						<div className='connectRate'>
							<div className='connectRateChart'>
								<span className='connectRateChartNum'>{(this.props.dataSet.dataConnectRate * 100).toFixed(0)}</span>
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
					<div className='qualityScore'>
						<div className='name'>数据安全指数</div>
						<div className='score'>
							<span className='num'>{this.props.dataSet.dataSecurity}</span>
							<span className='unit'>分</span>
						</div>
					</div>
					<div className='qualityScore'>
						<div className='name'>数据质量指数</div>
						<div className='score'>
							<span className='num'>{this.props.dataSet.dataQuality}</span>
							<span className='unit'>分</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

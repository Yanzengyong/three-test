import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
import { Carousel } from 'antd'

const assestHistory = [
	['2017-02-01', 34],
	['2017-03-01', 184],
	['2017-04-01', 173],
	['2017-05-01', 106],
	['2017-06-01', 84],
	['2017-07-01', 196],
	['2017-08-01', 223],
	['2017-09-01', 176],
	['2017-10-01', 189],
	['2017-11-01', 286],
	['2017-12-01', 254],
	['2018-01-01', 297],
	['2018-02-01', 320],
	['2018-03-01', 307],
	['2018-04-01', 358],
	['2018-05-01', 315],
	['2018-06-01', 298],
	['2018-07-01', 394],
	['2018-08-01', 378],
	['2018-09-01', 402],
	['2018-10-01', 478],
	['2018-11-01', 425],
	['2018-12-01', 418],
	['2019-01-01', 432],
	['2019-02-01', 401],
	['2019-03-01', 401],
	['2019-04-01', 428],
	['2019-05-01', 467],
	['2019-06-01', 457]
]
export default class DataGovernance extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			step: 3
		}
	}
	
	render () {
		const option_standardMetaData = {
			title: {
				text: '标准数据元占比',
				left: 'center',
				bottom: 50,
				textStyle: {
					color: '#4AFFFE'
				}
			},

			tooltip : {
				trigger: 'item',
				formatter: '{b} : {d}%'
			},
			series: [
				{
					type:'pie',
					radius : '50%',
					center: ['50%', '30%'],
					data:[
						{ value:435, name:'标准数据元' },
						{ value:310, name:'非标准数据元' },
					],
					itemStyle: {
						normal: {
							color: '#70AFCE',
							shadowBlur: 500,
							shadowColor: 'rgba(0, 0, 1, 0.9)'
						}
					}
				}
			]
		}

		const option_metaDataSource = {
			title: {
				text: '数据来源分布',
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
			yAxis: {
				type: 'value',
				boundaryGap: [0, 0.01],
				axisLabel:{ color:'#fff' },
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
			},
			xAxis: {
				name: '数据来源',
				type: 'category',
				axisLabel:{ color:'#fff' },
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				data: ['工商局', '发改委', '安监局', '气象局', '旅发委', '住建局', '食药监局', '民政局'],
			},
			series: [
				{
					name: '数据量（万条）',
					type: 'bar',
					data: [500, 214, 350, 432, 512, 160, 472, 600],
					itemStyle: {
						color: '#4AFFFE'
					}
				}
			]
		}

		const option_metaDataSourceMethod = {
			title: {
				text: '数据来源方式分布',
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
					name: '数据来源',
					type:'pie',
					radius : '55%',
					center: ['50%', '40%'],
					data:[
						{ value:500, name:'手动添加' },
						{ value:310, name:'自动抽取' },
						{ value:260, name:'智能生成' },
					],
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
							color: '#3B7B9A',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		const option_standardDataModel = {
			title: {
				text: '标准数据模型占比',
				left: 'center',
				bottom: 60,
				textStyle: {
					color: '#4AFFFE'
				}
			},

			tooltip : {
				trigger: 'item',
				formatter: '{b} : {d}%'
			},
			series: [
				{
					type:'pie',
					radius : '50%',
					center: ['50%', '30%'],
					data:[
						{ value:32, name:'标准数据模型' },
						{ value:74, name:'非标准数据模型' },
					],
					itemStyle: {
						normal: {
							color: '#70AFCE',
							shadowBlur: 500,
							shadowColor: 'rgba(0, 0, 1, 0.9)'
						}
					}
				}
			]
		}

		const option_standardDataModelMethod = {
			title: {
				text: '数据模型生成方式',
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
				name: '数据模型（个）',
				type: 'value',
				boundaryGap: [0, 0.01],
				axisLabel:{ color:'#fff' },
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
			},
			yAxis: {
				name: '数据模型生成方式',
				type: 'category',
				axisLabel:{ color:'#fff' },
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				data: ['自动抽取', '智能生成', '手动添加'],
			},
			series: [
				{
					name: '数据模型（个）',
					type: 'bar',
					data: [32, 18, 56],
					itemStyle: {
						color: '#A5DEF1'
					}
				}
			]
		}

		const option_assetTheme = {
			title: {
				text: '数据资产主题库分布',
				left: 'center',
				bottom: 40,
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
					name: '主题库',
					type:'pie',
					radius : '55%',
					center: ['50%', '40%'],
					data:[
						{ value:200, name:'综合政务' },
						{ value:264, name:'经济管理' },
						{ value:342, name:'国土资源' },
						{ value:412, name:'信息产业' },
						{ value:387, name:'环境保护' },
						{ value:297, name:'农业水利' },
						{ value:186, name:'商业贸易' },
						{ value:560, name:'其他' },
					],
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
							color: '#3B7B9A',
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		const option_assestChange = {
			title: {
				text: '数据资产规模历史变化',
				left: 'center',
				top: 10,
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
				itemStyle: {
					color: '#4AFFFE',
					opacity: 0.6
				},
				data: assestHistory
			}]
		}

		const stepOne = (
			<div className='stepContainer'>
				<div className='chartsContainer'>
					<div className='metaDataTotalCount'>
						<div className='num'>457</div>
						<div className='name'>数据元总数</div>
					</div>
					<div className='chart'>
						<ReactEcharts option={option_standardMetaData}/>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='chart'>
						<ReactEcharts option={option_metaDataSource}/>
					</div>
					<div className='chart'>
						<ReactEcharts option={option_metaDataSourceMethod}/>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='dataQualityQuestion'>
						<div className='title'>数据质量主要问题</div>
						<Carousel dotPosition="left" autoplay autoplayInterval={500} dots={false} style={{ height: '100%' }}>
							<div className="BOX">
							1. 非标准数据类型较多
							</div>
							<div className="BOX">
							2. 数据不全面
							</div>
							<div className="BOX">
							3. 数据不准确，存在错误数据
							</div>
							<div className="BOX">
							4. 网报人员培训不足，网报数据过程出错，需多次更正
							</div>
						</Carousel>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据安全指数</div>
						<div className='score'>
							<span className='num'>54</span>
							<span className='unit'>分</span>
						</div>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据质量指数</div>
						<div className='score'>
							<span className='num'>58</span>
							<span className='unit'>分</span>
						</div>
					</div>
				</div>
			</div>
		)

		const stepTwo = (
			<div className='stepContainer'>
				<div className='chartsContainer'>
					<div className='metaDataTotalCount'>
						<div className='num'>106</div>
						<div className='name'>数据模型总数</div>
					</div>
					<div className='chart'>
						<ReactEcharts option={option_standardDataModel}/>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='chartModel'>
						<ReactEcharts option={option_standardDataModelMethod}/>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='dataQualityQuestion'>
						<div className='title'>数据质量主要问题</div>
						<Carousel dotPosition="left" autoplay autoplayInterval={500} dots={false} style={{ height: '100%' }}>
							<div className="BOX">
							1. 非标准数据类型较多
							</div>
							<div className="BOX">
							2. 数据不全面
							</div>
							<div className="BOX">
							3. 数据不准确，存在错误数据
							</div>
							<div className="BOX">
							4. 网报人员培训不足，网报数据过程出错，需多次更正
							</div>
						</Carousel>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据安全指数</div>
						<div className='score'>
							<span className='num'>72</span>
							<span className='unit'>分</span>
						</div>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据质量指数</div>
						<div className='score'>
							<span className='num'>69</span>
							<span className='unit'>分</span>
						</div>
					</div>
				</div>
			</div>
		)
		const stepThree = (
			<div className='stepContainer'>
				<div className='chartsContainer'>
					<div className='metaDataTotalCount'>
						<div className='num'>
							<span>457</span>
							<span className='unit'>GB</span>
						</div>
						<div className='name'>数据资产总数</div>
					</div>
					<div className='metaDataTotalCount'>
						<div className='num'>
							<span>22</span>
							<span className='unit'>元/月</span>
						</div>
						<div className='name'>数据资产管理成本</div>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='chart'>
						<ReactEcharts option={option_assetTheme}/>
					</div>
					<div className='chart'>
						<ReactEcharts option={option_assestChange}/>
					</div>
				</div>
				<div className='chartsContainer'>
					<div className='dataQualityQuestion'>
						<div className='title'>数据质量主要问题</div>
						<Carousel dotPosition="left" autoplay autoplayInterval={500} dots={false} style={{ height: '100%' }}>
							<div className="BOX">
							1. 非标准数据类型较多
							</div>
							<div className="BOX">
							2. 数据不全面
							</div>
							<div className="BOX">
							3. 数据不准确，存在错误数据
							</div>
							<div className="BOX">
							4. 网报人员培训不足，网报数据过程出错，需多次更正
							</div>
						</Carousel>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据安全指数</div>
						<div className='score'>
							<span className='num'>84</span>
							<span className='unit'>分</span>
						</div>
					</div>
					<div className='dataIndex'>
						<div className='name'>数据质量指数</div>
						<div className='score'>
							<span className='num'>86</span>
							<span className='unit'>分</span>
						</div>
					</div>
				</div>
			</div>
		)
		return (
			<div className="dataGovernance">
				<div className="maintitle">
					{this.state.step === 1 ? (<span>数据治理概况 - 数据元</span>) : null} 
					{this.state.step === 2 ? (<span>数据治理概况 - 数据模型</span>) : null} 
					{this.state.step === 3 ? (<span>数据治理概况 - 数据资产</span>) : null} 
				</div>
				<div className='divider'/>
				{this.state.step === 1 ? stepOne : null}
				{this.state.step === 2 ? stepTwo : null}
				{this.state.step === 3 ? stepThree : null}
			</div>
		)
	}

}

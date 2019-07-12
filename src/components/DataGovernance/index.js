import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
import { Carousel } from 'antd'
export default class DataGovernance extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			step: 1,
			stepName: '数据元'
		}
	}

	componentDidMount () {

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
					<div className='dataQuality'>

					</div>
					<div className='dataQualityQuestion'>
						<div className='title'>数据质量问题</div>
						<Carousel dotPosition="left" autoplay autoplayInterval={500} dots={false} style={{ height: '100%' }}>
  					<div className="BOX">
						1. 收到XX委办局XX相关数据XX条。
  					</div>
  					<div className="BOX">
						2. 1-3月平台数据源新增XX条。
  					</div>
  					<div className="BOX">
					  3. 1-3月平台数据资源新增XX条。
  					</div>
  					<div className="BOX">
					  4. 1-3平台数据资源总量同比前期涨幅为3.5%
  					</div>
  					<div className="BOX">
            5. 2018年平台数据共支撑38个项目，其中包含全国一体化项目等...
  					</div>
  					<div className="BOX">
					  6. 2018年平台共建有效数据模型189个。其中用于平台支撑的有80个，科研支撑有20个。
  					</div>
  					<div className="BOX">
						7. 2018年平台使用人数达1.5w。
  					</div>
  					<div className="BOX">
					  8. 2019上半年平台新增数据量高达3.5G。
  					</div>
  					<div className="BOX">
					  9. 2019上半年平台安全质量通过国家标准检测。
  					</div>
  			</Carousel>
					</div>
					<div className='dataSecurity'>

					</div>
				</div>
			</div>
		)
		const stepTwo = (
			<div className='stepContainer'>two</div>
		)
		const stepThree = (
			<div className='stepContainer'>three</div>
		)
  	return (
  		<div className="dataGovernance">
  			<div className="maintitle">
					数据治理概况 - {this.state.stepName}
					{/* <button onClick={()=>{ this.setState({ step: 1, stepName: '数据元' }) }}>数据元</button>
				<button onClick={()=>{ this.setState({ step: 2, stepName: '数据模型' }) }}>数据模型</button>
				<button onClick={()=>{ this.setState({ step: 3, stepName: '数据资产' }) }}>数据资产</button> */}
				</div>
  			<div className='divider'/>
				{this.state.step === 1 ? stepOne : null}
				{this.state.step === 2 ? stepTwo : null}
				{this.state.step === 3 ? stepThree : null}
  		</div>
  	)
	}

}

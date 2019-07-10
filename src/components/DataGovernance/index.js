import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
// import { maincolors } from '../../utils/colors'
import { Table } from 'antd'
import 'echarts-wordcloud'
export default class DataGovernance extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			currentPage:1,
			pageSize:5,
			modelCurrentPage:1
		}
	}
	pageonChange =(page)=> {
		this.setState({
			currentPage:page
		})
	}
  modelPageonChange =(page)=> {
  	this.setState({
  		modelCurrentPage:page
  	})
  }

  componentDidMount () {
  	this.timer=setInterval(()=>{
  		if(this.state.currentPage===3) {
  			this.setState({
  				currentPage:1
  			}, ()=>{
  				this.pageonChange(this.state.currentPage)
  			})
  		}else{
  			this.pageonChange(this.state.currentPage+1)
  		}
  	}, 5000)
  	this.timer1=setInterval(()=>{
  		if(this.state.modelCurrentPage===2) {
  			this.setState({
  				modelCurrentPage:1
  			}, ()=>{
  				this.modelPageonChange(this.state.modelCurrentPage)
  			})
  		}else{
  			this.modelPageonChange(this.state.modelCurrentPage+1)
  		}
  	}, 4000)
  }
  componentWillUnmount () {
  	clearInterval(this.timer)
  	clearInterval(this.timer1)
  }
  render () {
  	const option4={
  		// backgroundColor:'#fff',
  		series: [{
  			type: 'wordCloud',
  			shape: 'circle',
  			left: 'center',
  			top: 'center',
  			width: '70%',
  			height: '80%',
  			right: null,
  			bottom: null,
  			sizeRange: [12, 60],
  			rotationRange: [-90, 90],
  			rotationStep: 45,
  			gridSize: 8,

  			drawOutOfBound: true,
  			textStyle: {
  				normal: {
  					fontFamily: 'sans-serif',
  					fontWeight: 'bold',
  					color: function () {
  						// Random color
  						return 'rgb(' + [
  							Math.round(Math.random() * 160),
  							Math.round(Math.random() * 160),
  							Math.round(Math.random() * 160)
  						].join(',') + ')'
  					}
  				},
  				emphasis: {
  					shadowBlur: 10,
  					shadowColor: '#333'
  				}
  			},

  			data: [{
  					'name': 'CC_META_INFO',
  					'value':928
  				},
  				{
  					'name': 'CC_HADOOP_JOB_ID',
  					'value': 928
  				},
  				{
  					'name': 'count',
  					'value': 906
  				},
  				{
  					'name': 'resourceName',
  					'value': 825
  				},
  				{
  					'name': 'abstract',
  					'value': 514
  				},
  				{
  					'name': 'resourceCode',
  					'value': 486
  				},
  				{
  					'name': 'Provider',
  					'value': 53
  				},
  				{
  					'name': 'providerName',
  					'value': 163
  				},
  				{
  					'name': 'proN',
  					'value': 86
  			},
  			{
  					'name': 'abstract',
  					'value': 514
  				},
  				{
  					'name': 'resourceCode',
  					'value': 486
  				},
  				{
  					'name': 'Provider',
  					'value': 53
  				},
  				{
  					'name': 'providerName',
  					'value': 163
  				},
  				{
  					'name': 'proN',
  					'value': 86
  			},
  			{
  					'name': 'abstract',
  					'value': 514
  				},
  				{
  					'name': 'resourceCode',
  					'value': 486
  				},
  				{
  					'name': 'Provider',
  					'value': 53
  				},
  				{
  					'name': 'providerName',
  					'value': 163
  				},
  				{
  					'name': 'proN',
  					'value': 86
  				}]
  		}],
  	}
  	const option3={
  		title: {
  			text: '数据元审核情况',
  			left: 'center',
  			top: 20,
  			textStyle: {
  				color: '#ccc'
  			}
  		},

  		tooltip : {
  			trigger: 'item',
  			formatter: '{a} <br/>{b} : {c} ({d}%)'
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
  				name:'审核情况',
  				type:'pie',
  				radius : '55%',
  				center: ['50%', '50%'],
  				data:[
  					{ value:335, name:'未审核' },
  					{ value:310, name:'待审核' },
  					{ value:274, name:'审核驳回' },
  					{ value:274, name:'审核通过' }
  				].sort(function (a, b) { return a.value - b.value }),
  				roseType: 'radius',
  				label: {
  					normal: {
  						textStyle: {
  							color: '#fff'
  						}
  					}
  				},
  				labelLine: {
  					normal: {
  						lineStyle: {
  							color: 'rgba(255, 255, 255, 0.3)'
  						},
  						smooth: 0.2,
  						length: 10,
  						length2: 20
  					}
  				},
  				itemStyle: {
  					normal: {
  						color: '#c23531',
  						shadowBlur: 200,
  						shadowColor: 'rgba(0, 0, 0, 0.5)'
  					}
  				}
  			}
  		]
  	}
  	const option2={
  		tooltip : {
  			formatter: '{a} <br/>{b} : {c}%'
  		},
  		series: [
  			{
  				radius: '70%',
  				axisLine: { // 坐标轴线
  					lineStyle: { // 属性lineStyle控制线条样式
  						color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
  						width: 3,
  						shadowColor : '#fff', //默认透明
  						shadowBlur: 10
  					}
  				},
  				axisLabel: { // 坐标轴小标记
  					textStyle: { // 属性lineStyle控制线条样式
  						fontWeight: 'bolder',
  						color: '#fff',
  						shadowColor : '#fff', //默认透明
  						shadowBlur: 10
  					}
  				},
  				axisTick: { // 坐标轴小标记
  					length :15, // 属性length控制线长
  					lineStyle: { // 属性lineStyle控制线条样式
  						color: 'auto',
  						shadowColor : '#fff', //默认透明
  						shadowBlur: 10
  					}
  				},
  				splitLine: { // 分隔线
  					length :25, // 属性length控制线长
  					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
  						width:3,
  						color: '#fff',
  						shadowColor : '#fff', //默认透明
  						shadowBlur: 10
  					}
  				},
  				pointer: { // 分隔线
  					shadowColor : '#fff', //默认透明
  					shadowBlur: 5
  				},
  				name: '数据模型审核通过率',
  				type: 'gauge',
  				detail: { formatter:'{value}%' },
  				title:{
  					color:'#fff'
  				},
  				data: [
  					{ value: 47.7,
  						name: '审核通过率'
  					}
  				]
  			}
  		]
  	}
  	const option = {
  		color:['#ffff34'],
  		tooltip: {
  			trigger: 'axis'
  		},
  		legend: {
  			data: ['数据资源分级情况'],
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
  				{ name: '公开', max: 350 },
  				{ name: '一般', max: 350 },
  				{ name: '内部', max: 350 },
  				{ name: '秘密', max: 350 },
  				{ name: '机密', max: 350 },
  				{ name: '绝密', max: 350 }
  			],

  			splitArea:{
  				areaStyle:{
  					color:['#62fdfdf6', '#5bf1dfc2']
  				}

  			}
  		},
  		series: [{
  			itemStyle: {
  				normal: {
  					areaStyle:{
  						type: 'default'
  					}
  				}
  			},
  			name: '',
  			type: 'radar',
  			// areaStyle: {normal: {}},
  			data : [
  				{
  					value : [256, 280, 275, 321, 301, 225],
  					name : '数据资源分级情况'
  				}
  			]
  		}]
  	}
  	const columnsStandard=[
  		{
  			title: '资源名称',
  			dataIndex: 'dataResourceName',
  			width:100
  		},
  		{
  			title: '级别',
  			dataIndex: 'level',
  			width:40
  		},
  		{
  			title: '更新日期',
  			dataIndex: 'data',
  			width:120
  		},
  	]
  	const columnsModel=[
  		{
  			title: '模型名称',
  			dataIndex: 'modelName',
  			width:100
  		},
  		{
  			title: '共享类型',
  			dataIndex: 'shareType',
  			width:90
  		},
  		{
  			title: '分级类型',
  			dataIndex: 'levelType',
  			width:80
  		},
  		{
  			title: '审核状态',
  			dataIndex: 'status',
  			width:80
  		}
  	]
  	const dataModel=[
  		{
  			key: '1',
  			modelName: '测试模型',
  			shareType: '条件共享',
  			levelType:'一般',
  			status:'审核通过'
  		},
  		{
  			key: '2',
  			modelName: '测试',
  			shareType: '不共享',
  			levelType:'内部',
  			status:'审核通过'
  		},
  		{
  			key: '3',
  			modelName: 'lele',
  			shareType: '无条件共享',
  			levelType:'公开',
  			status:'未审核'
  		},
  		{
  			key: '4',
  			modelName: 'qqq',
  			shareType: '无条件共享',
  			levelType:'公开',
  			status:'审核驳回'
  		}
  	]
  	const dataStandard=[
  		{
  			key: '1',
  			dataResourceName: '图书馆演示数据源',
  			level: '公开',
  			data:'2018-10-24'
  		},
  		{
  			key: '2',
  			dataResourceName: '数据管理平台后台',
  			level: '一般',
  			data:'2018-10-24'
  		},
  		{
  			key: '3',
  			dataResourceName: '33',
  			level: '公开',
  			data:'2018-10-24'
  		},
  		{
  			key: '4',
  			dataResourceName: '44',
  			level: '内部',
  			data:'2018-10-24'
  		},
  		{
  			key: '5',
  			dataResourceName: '55',
  			level: '内部',
  			data:'2018-10-24'
  		},
  		{
  			key: '6',
  			dataResourceName: '66',
  			level: '一般',
  			data:'2018-10-24'
  		},
  		{
  			key: '7',
  			dataResourceName: '77',
  			level: '一般',
  			data:'2018-10-24'
  		},
  		{
  			key: '8',
  			dataResourceName: '88',
  			level: '公开',
  			data:'2018-10-24'
  		},
  		{
  			key: '9',
  			dataResourceName: '99',
  			level: '机密',
  			data:'2018-10-24'
  		},
  		{
  			key: '10',
  			dataResourceName: '10',
  			level: '绝密',
  			data:'2018-10-24'
  		},
  		{
  			key: '11',
  			dataResourceName: '99',
  			level: '机密',
  			data:'2018-10-24'
  		},
  		{
  			key: '12',
  			dataResourceName: '10',
  			level: '绝密',
  			data:'2018-10-24'
  		}
  	]
  	return (
  		<div className="dataGovernance">
  			<div className="maintitle">数据治理概况</div>
  			<div className='divider'/>
  			<div className="title">数据资源</div>
  			<div className="dataResourceGroup">
        	<ReactEcharts className="dataRecourceChart" option={option}/>
  				<div className="dataRecourceTable">
  					<Table size="small" columns={columnsStandard} dataSource={dataStandard} pagination={{ defaultPageSize:4, onChange:this.pageonChange, current:this.state.currentPage }} />
  				</div>
  			</div>
  			<div className="title">数据模型</div>
  			<div className="dataModelGroup">
  				<div className="dataModelTable">
  					<Table size="small" columns={columnsModel} dataSource={dataModel} pagination={{ defaultPageSize:4, onChange:this.modelPageonChange, current:this.state.modelCurrentPage }} />
  				</div>
  				<ReactEcharts className="dataModelChart" option={option2}/>
  			</div>
  			<div className="title">数据元</div>
  			<div className="dataElement">
  			  <ReactEcharts className="dataModelChart" option={option3}/>
  				<ReactEcharts className="wordCloudChart" option={option4}/>
  			</div>
  		</div>
  	)
  }

}

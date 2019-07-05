import React from 'react'
import './scss/news.scss'
import { Carousel, Table } from 'antd'
import 'antd/dist/antd.css'

export default class News extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			currentPage:1,
			pageSize:3,
			projectCurrentPage:1
		}
	}

	componentDidMount () {
		this.timer=setInterval(()=>{
			if(this.state.currentPage===3) {
				this.setState({
					currentPage:1
				}, ()=>{
					this.pageonChange(this.state.currentPage)
				})
			}else if(this.state.projectCurrentPage===2) {
				this.setState({
					projectCurrentPage:1
				}, ()=>{
					this.projectPageonChange(this.state.projectCurrentPage)
				})
			} else{
				this.pageonChange(this.state.currentPage+1)
				this.projectPageonChange(this.state.projectCurrentPage+1)
			}
		}, 5000)
	}
	componentWillUnmount () {
		clearInterval(this.timer)
	}
	pageonChange =(page)=> {
		this.setState({
			currentPage:page
		})
	}
  projectPageonChange=(page)=>{
  	this.setState({
  		projectCurrentPage:page
  	})
  }
  render () {
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
  			title: '数据量',
  			dataIndex: 'num',
  			defaultSortOrder: 'descend',
  			sorter: (a, b) => a.num - b.num,
  		},
  	]
  	const columnsStandard=[
  		{
  			title: '数据源名称',
  			dataIndex: 'datasourceName'
  		},
  		{
  			title: '所属部门',
  			dataIndex: 'department'
  		},
  	]
  	const columnsProject=[
  		{
  			title: '支撑项目',
  			dataIndex: 'project',
  			width:90
  		},
  		{
  			title: '数据简介',
  			dataIndex: 'projectNum'
  		},
  	]
  	const dataProject=[
  		{
  			key: '1',
  			project: '知文智用',
  			projectNum: '北京、上海、重庆等委办局公文公告数据'
  		},
  		{
  			key: '2',
  			project: '一网通办',
  			projectNum: '浪潮业务系统部分数据、高新区政务公开数据'
  		},
  		{
  			key: '3',
  			project: '智慧问答',
  			projectNum: '贵阳市交管局在线互动数据、贵州省政务服务网办事指南'
  		},
  		{
  			key: '4',
  			project: '公安项目',
  			projectNum: '新浪微博、百度贴吧、天涯论坛云南省上访相关数据'
  		},
  	]
  	const dataStandard=[
  		{
  			key: '1',
  			datasourceName: '图书馆演示数据源',
  			department: '北京办事处'
  		},
  		{
  			key: '2',
  			datasourceName: '数据管理平台后台',
  			department: '共性技术研究中心'
  		},
  		{
  			key: '3',
  			datasourceName: 'mysql204',
  			department: '共性技术研究中心'
  		}
  	]
  	const data = [
  		{
  			key: '1',
  			area: '成都市',
  			government: 53,
  			num: 34664,
  		},
  		{
  			key: '2',
  			area: '四川省',
  			government: 54,
  			num: 106486,
  		},
  		{
  			key: '3',
  			area: '中央',
  			government: 54,
  			num: 268724,
  		},
  		{
  			key: '4',
  			area: '北京市',
  			government: 34,
  			num: 64865,
  		},
  		{
  			key: '5',
  			area: '重庆市',
  			government: 32,
  			num: 59287,
  		},
  		{
  			key: '6',
  			area: '上海市',
  			government: 41,
  			num: 78762,
  		},
  		{
  			key: '7',
  			area: '贵州省',
  			government: 56,
  			num: 103024,
  		},
  		{
  			key: '8',
  			area: '贵阳市',
  			government: 54,
  			num: 19287,
  		},
  		{
  			key: '9',
  			area: '全国科技口',
  			government: 38,
  			num: 73975,
  		}
  	]
  	return(
  		<div className="News">
  			<div className="newsTitle">
          平台概况
  			</div>
  			<div className="newsMain" >
  			<Carousel dotPosition="left" autoplay autoplayInterval={500} dots={false} >
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
  			<div className="newsTitleTwo">
          平台数据源概览
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columnsStandard} dataSource={dataStandard} pagination={{ defaultPageSize:3, onChange:this.pageonChange, current:this.state.currentPage }} />
  			</div>
  			<div className="newsTitleTwo">
          平台政策公文数据概览
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columns} dataSource={data} pagination={{ defaultPageSize:3, onChange:this.pageonChange, current:this.state.currentPage }} />
  			</div>
  			<div className="newsTitleTwo">
          平台项目支撑情况
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columnsProject} dataSource={dataProject} pagination={{ defaultPageSize:2, onChange:this.projectPageonChange, current:this.state.projectCurrentPage }} />
  			</div>
  		</div>

  	)
  }

}

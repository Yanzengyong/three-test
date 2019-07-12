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
  			title: '系统名',
  			dataIndex: 'area',
  			width:180
  		},
  		{
  			title: '机构',
  			dataIndex: 'government'
  		}
  	]
  	const columnsStandard=[
  		{
  			title: '系统名',
  			dataIndex: 'datasourceName',
  			width:180
  		},
  		{
  			title: '质量状况',
  			dataIndex: 'department'
  		},
  	]
  	const columnsProject=[
  		{
  			title: '应用',
  			dataIndex: 'project',
  			width:120
  		},
  		{
  			title: '类型',
  			dataIndex: 'projectNum'
  		},
  	]
  	const dataProject=[
  		{
  			key: '1',
  			project: '一网通办',
  			projectNum: '政务'
  		},
  		{
  			key: '2',
  			project: '政务服务中心',
  			projectNum: '政务'
  		},
  		{
  			key: '3',
  			project: '旅游一路通',
  			projectNum: '行业'
  		}
  	]
  	const dataStandard=[
  		{
  			key: '1',
  			datasourceName: '物价管理系统',
  			department: '发改委'
  		},
  		{
  			key: '2',
  			datasourceName: '安全许可经营管理系统',
  			department: '安监局'
  		},
  		{
  			key: '3',
  			datasourceName: '出入境游客大数据平台',
  			department: '旅发委'
  		}
  	]
  	const data = [
  		{
  			key: '1',
  			area: '安全许可经营管理系统',
  			government: '优',
  		},
  		{
  			key: '2',
  			area: '出入境游客大数据平台',
  			government: '优'
  		},
  		{
  			key: '3',
  			area: '装修施工许可证登记系统',
  			government: '良'
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
						1. 2019年4月5日，水文监测站数据采集系统接入平台。
  					</div>
  					<div className="BOX">
						2. 2019年第一季度新增数据82GB。
  					</div>
  					<div className="BOX">
					  3. 2019年第一季度数据质量评估：优。
  					</div>
  					<div className="BOX">
					  4. 2019年第一季度数据安全评估：优。
  					</div>
  					<div className="BOX">
            5. 2019年第一季度提供共享数据205GB
  					</div>
  					<div className="BOX">
					  6. 2019年第一季度新增数据应用12个。
  					</div>
  					<div className="BOX">
						7. 2019年5月20日数据治理委员会全体会议召开
  					</div>
  			</Carousel>
  		</div>
  			<div className="newsTitleTwo">
          数据提供排名
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columnsStandard} dataSource={dataStandard} pagination={false}/>
  			</div>
  			<div className="newsTitleTwo">
          数据质量排名
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columns} dataSource={data} pagination={false} />
  			</div>
  			<div className="newsTitleTwo">
          数据使用数量排名
  			</div>
  			<div className="tableMain">
  				<Table size="small" columns={columnsProject} dataSource={dataProject} pagination={false} />
  			</div>
  		</div>

  	)
  }

}

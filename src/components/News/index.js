import React from 'react'
import './scss/news.scss'
import { Carousel, Table } from 'antd'
import 'antd/dist/antd.css'

export default class News extends React.Component {
	constructor (props) {
		super(props)
	}
	onChange (pagination, filters, sorter) {
		console.log('params', pagination, filters, sorter)
	}
	render () {
		const columns = [
			{
				title: '区域',
				dataIndex: 'area'
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
				area: '全国各级.科技口',
				government: 38,
				num: 73975,
			}
		]
  	return(
			<div >
				<div className="newsTitle">
          平台概况
				</div>
				<div className="newsMain" >
  			<Carousel dotPosition="left" autoplay autoplayInterval={300} dots={false} >
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
          政策公文数据概览
				</div>
				<div className="tableMain">
					<Table size="small" columns={columns} dataSource={data} onChange={this.onChange} pagination={{ defaultPageSize:3 }} />

				</div>
			</div>

  	)
	}

}

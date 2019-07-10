import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
// import ''
// import axios from 'axios'

export default class DataGovernanceInfo extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className="DataGovernance">
				<div className='Introduction'>
					<img src='assets/images/model.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>数据资源高效整合</div>
						<div className='IntroductionDescription'>将原始数据高效接入平台，完成多元异构数据资源高性能整合</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/model.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>数据元有效梳理</div>
						<div className='IntroductionDescription'>针对原始数据资源进行数据处理，根据数据字段梳理所需数据元，并提供智能化数据元生成解决方案</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/model.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>数据模型快速构建</div>
						<div className='IntroductionDescription'>通过可视化操作界面，利用已通过审核数据元，快速构建数据模型，数据资产化提供良好基础</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/model.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>完善的审核处理制度</div>
						<div className='IntroductionDescription'>针对数据元与数据模型，提供完善的审核制度，实现对有效数据元、数据资源的管理</div>
					</span>
				</div>
			</div>
		)
	}

}

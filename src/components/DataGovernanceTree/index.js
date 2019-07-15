import React from 'react'
import './scss/index.scss'

export default class DataGovernanceInfo extends React.Component {
	constructor (props) {
		super(props)
		console.log(props)
	}
	render () {
		return (
			<div className="DataGovernance">
				<div className='title'>数据治理流程</div>
				<div className='proceed'>
					<div className='proceedStep'>
						<div className='proceedStepTitle' style={this.props.step === 1 ? { border: '2px #4AFFFE solid', opacity: '0.8' } : null}>
							数据元
						</div>
						<div className='proceedStepDescription'>
							将原始数据资源集中处理，获取数据元，并提交审核
						</div>
					</div>
					<img src='assets/images/arrowgroup.gif' className='arrow'/>
					<div className='proceedStep'>
						<div className='proceedStepTitle' style={this.props.step === 2 ? { border: '2px #4AFFFE solid', opacity: '0.8' } : null}>
							数据模型
						</div>
						<div className='proceedStepDescription'>
						将审核通过的数据元，进行重新组合，构建全新数据模型
						</div>
					</div>
					<img src='assets/images/arrowgroup.gif' className='arrow'/>
					<div className='proceedStep'>
						<div className='proceedStepTitle' style={this.props.step === 3 ? { border: '2px #4AFFFE solid', opacity: '0.8' } : null}>
							数据资产
						</div>
						<div className='proceedStepDescription'>
							将原始数据根据对应字段血缘与通过审核的数据模型，实现数据资产化，获得数据资产
						</div>
					</div>
				</div>
			</div>
		)
	}

}

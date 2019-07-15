import React from 'react'
import './scss/index.scss'

export default class DataGovernanceInfo extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className="DataGovernance">
				<div className='title'>数据治理流程</div>
				<div className='proceed'>
					<div className='proceedStep'>
						<div className='proceedStepTitle'>
							数据元
						</div>
						<div className='proceedStepDescription'>
							DES
						</div>
					</div>
					<div className='arrow'>
						arrow
					</div>
					<div className='proceedStep'>
						<div className='proceedStepTitle'>
							数据模型
						</div>
						<div className='proceedStepDescription'>
							DES 2
						</div>
					</div>
					<div className='arrow'>
						arrow
					</div>
					<div className='proceedStep'>
						<div className='proceedStepTitle'>
							数据资产
						</div>
						<div className='proceedStepDescription'>
							DES 3
						</div>
					</div>
				</div>
			</div>
		)
	}

}

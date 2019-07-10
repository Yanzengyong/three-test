import React from 'react'
import './index.scss'

export default class DataAssetsInfo extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className='DataAssetsInfo'>
				<div className='Introduction'>
					<img src='assets/images/fl.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>高性能数据API</div>
						<div className='IntroductionDescription'>数据共享开放API接口统一设计，提供完整高效实用文档</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/fl.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>跨领域跨行业的数据开放</div>
						<div className='IntroductionDescription'>多行业领域数据接入并实现数据资产化与数据共享开放</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/fl.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>政府公开数据统一安全开放</div>
						<div className='IntroductionDescription'>多家政府单位数据资源接入平台，实现数据的安全开放共享</div>
					</span>
				</div>
				<div className='Introduction'>
					<img src='assets/images/fl.png' className='IntroductionImg'/>
					<span className='IntroductionInfo'>
						<div className='IntroductionName'>更多个性化数据应用定制服务</div>
						<div className='IntroductionDescription'>为客户提供更为个性化的大数据应用定制化服务</div>
					</span>
				</div>
			</div>
		)
	}
}


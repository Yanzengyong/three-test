import React from 'react'
import './scss/index.scss'
export default class LeftIntroduction extends React.Component {
	constructor (props) {
		super(props)
		this.state={

		}
	}
	render () {
		return(
			<div className="leftIntroduction">
				<div className="introSourceBox">
					{/* <h1>数据来源</h1> */}
					<div className="mainbox">数据从哪来？</div>
				</div>
				<div className="arrowGroup">
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
				</div>
				<div className="introSourceBox">
					{/* <h1>数据治理</h1> */}
					<div className="mainbox">数据怎么加工？</div>
				</div>
				<div className="arrowGroup">
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
					<img src='assets/images/arrow.svg' className='arrow'/>
				</div>
				<div className="introSourceBox">
					{/* <h1>数据应用</h1> */}
					<div className="mainbox"> 数据用到了哪儿？	</div>
				</div>
			</div>
		)
	}
}

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
			<div className="LeftIntro">
				<div className="firstIntro">
					<img src="assets/images/fl.png" className="firstIntroImg"></img>
					<div className="firstIntroText">
						<h1>分类分级</h1>
						<div>介绍比比比比比比比比比</div>
					</div>
				</div>
				<div className="firstIntro">
					<div className="secondIntroText">
						<h1 className="modelText">数据模型</h1>
						<div>介绍比比比比比比比比比</div>
					</div>
					<img src="assets/images/model.png" className="secondIntroImg"></img>
				</div>
				<div className="firstIntro">
					<img src="assets/images/lock.png" className="thirdIntroImg"></img>
					<div >
						<h1 className="lockText">安全加密</h1>
						<div>介绍比比比比比比比比比</div>
					</div>
				</div>
				<div className="firstIntro">
					<div className="secondIntroText">
						<h1 className="modelText">共享开放</h1>
						<div>介绍比比比比比比比比比</div>
					</div>
					<img src="assets/images/share.png" className="secondIntroImg"></img>
				</div>
			</div>
		)
	}
}

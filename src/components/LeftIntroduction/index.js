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
						<div className="text">分类分级</div>
						{/* <div className="flfj">分类分级从隐私安全与保护成本的角度出发，对数据进行分类和等级划分</div> */}
					</div>
				</div>
				<div className="firstIntro">
					<div className="secondIntroText">
						<div className="text">标准模型</div>
						{/* <div className="flfj">数据模型从抽象层次上描述了系统的静态特征、动态行为和约束条件</div> */}
					</div>
					<img src="assets/images/model.png" className="secondIntroImg"></img>
				</div>
				<div className="firstIntro">
					<img src="assets/images/lock.png" className="thirdIntroImg"></img>
					<div >
						<div className="text">安全监控</div>
						{/* <div className="flfj">数据安全加密利用密码技术对信息进行加密，实现信息隐蔽，从而起到保护信息的安全的作用。</div> */}
					</div>
				</div>
				<div className="firstIntro">
					<div className="secondIntroText">
						<div className="text">质量监测</div>
						{/* <div className="flfj">打破数据孤岛，法律讨论先行，技术堡垒破除，人财物保障持续跟进</div> */}
					</div>
					<img src="assets/images/share.png" className="secondIntroImg"></img>
				</div>
			</div>
		)
	}
}

import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import './scss/index.scss'
export default class BriefIntroduction extends React.Component {
	constructor (props) {
		super(props)
		this.state={

		}
	}
	render () {
		return(
			<div className="briefIntroduciton">
				<div className="textGroup">
					<BannerAnim autoPlay arrow={false} thumb={false} >
						<Element
							prefixCls=""
							key="0"
						>
							<TweenOne animation={{ y: 40, opacity: 0, type: 'from' }}>
            数据治理平台，提升政府治理能力
							</TweenOne>
							<TweenOne
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
            数据采集平台，汇聚来自各方数据
							</TweenOne>
							<TweenOne
								animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
							>
            数据XX平台，XXXXXXXXXXXX
							</TweenOne>
						</Element>
						<Element
							prefixCls="banner-user-elem"
							key="1"
						>
							<TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
            汇聚各方数据，汇聚各方数据
							</TweenOne>
							<TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
            汇聚各方数据，汇聚各方数据
							</TweenOne>
							<TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
            汇聚各方数据，汇聚各方数据
							</TweenOne>
						</Element>
					</BannerAnim>
				</div>

				<div className="leftIntroduction">
					<div className="introSourceBox">
						<div className="mainbox">数据从哪来？</div>
					</div>
					<div className="arrowGroup">
						<img src='assets/images/arrowgroup.gif' className='arrow'/>
					</div>
					<div className="introSourceBox">
						<div className="mainbox">数据怎么加工？</div>
					</div>

					<div className="arrowGroup">
						<img src='assets/images/arrowgroup.gif' className='arrow'/>
					</div>
					<div className="introSourceBox">
						<div className="mainbox"> 数据用到了哪儿？	</div>
					</div>
				</div>
			</div>
		)
	}
}

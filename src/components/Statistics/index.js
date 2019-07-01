import React from 'react'
import './scss/index.scss'
export default class Statistics extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			data:[
				{
					name:'平台数据资源总数',
					num:'5456184条'
				},
				{
					name:'平台数据总量',
					num:'5TB'
				},
				{
					name:'平台标准文件个数',
					num:'1586个'
				}
			]
		}
	}
	render () {
		return(
			<div className="Statistics">
				{this.state.data.map(({ name, num }) => (
					<div key={name} className="stat">
						<h2>{name}</h2>
						<h1>{num}</h1>
					</div>
				))}
			</div>
		)
	}
}

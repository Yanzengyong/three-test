import React from 'react'
import './scss/index.scss'
export default class Statistics extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			data:[
				{
					name:'数据接入总量',
					num:'540.6GB'
				},
				{
					name:'数据治理总量',
					num:'103.0GB'
				},
				{
					name:'数据开放API总数',
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

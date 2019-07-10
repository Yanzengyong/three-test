import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'
// import ''
import axios from 'axios'

export default class DataAssets extends React.Component {
	constructor (props) {
		super(props)
	}
	componentDidMount () {
		console.log('55555553335')
		axios.get('/api/dataSourceTree').then((res)=>{
			console.log(res)
			console.log('555')
		})
	}
	render () {
		const option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			series: [
				{
					type: 'tree',

					// data: [data],

					top: '18%',
					bottom: '14%',

					layout: 'radial',

					symbol: 'emptyCircle',

					symbolSize: 7,

					initialTreeDepth: 3,

					animationDurationUpdate: 750

				}
			]
		}
		return (
			<div className="datasource">
				<ReactEcharts className="firstPie" option={option}/>
			</div>
		)
	}

}

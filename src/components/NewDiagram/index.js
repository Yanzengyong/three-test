import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './scss/index.scss'

export default function NewDiagram ({ data }) {
	if (!data || Object.keys(data).length==0) {
		return null
	}
	const option = {
		tooltip: {},

		animationDurationUpdate: 3000,
		// animationEasingUpdate: 'quinticInOut',
		color:['#83e0ff', '#45f5ce', '#b158ff'],
		series: [
			{
				type: 'graph',
				layout: 'force',
				force:{
					repulsion:1000,
					edgeLength:40
				},
				// roam: true,
				label: {
					normal: {
						show: true
					}
				},
				data: data.data,
				links: data.links,
				lineStyle: {
					normal: {
						opacity: 0.9,
						width: 5,
						curveness: 0
					}
				},
				categories:[
					{ name: '0' },
					{ name: '1' },
					{ name: '2' }
				]
			}
		]
	}

	return (
		<div className="NewDiagram">
			<ReactEcharts className="newDiagramMain" option={option}/>
		</div>
	)
}

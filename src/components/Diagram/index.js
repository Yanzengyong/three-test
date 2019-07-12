import React from 'react'
import ReactEcharts from 'echarts-for-react'
import data from './Data/les-miserables.gexf'
import echarts from 'echarts'
import 'echarts/dist/extension/dataTool.js'
import './scss/index.scss'

export default class Diagram extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			data:''
		}
	}

	onclick = {
		'click': this.clickEcharts.bind(this)
	}
  getEchart = (e) => {
  	if (e) {
  		this.echart = e.getEchartsInstance()
  	}
  }
  clickEcharts (e) {
  	this.echart.dispatchAction({
  		type: 'focusNodeAdjacency',
  		// name: e.name,
  		dataIndex:e.dataIndex
  	})
  }

  render () {
  	var xmlHttp = new XMLHttpRequest()
  	xmlHttp.open('GET', data, false)
  	xmlHttp.send()
  	var xmlDoc =xmlHttp.responseXML
  	console.log(xmlDoc)
  	var graph = echarts.dataTool.gexf.parse(xmlDoc)
  	console.log(graph)

  	var categories = []
  	for (var i = 0; i < 9; i++) {
  		categories[i] = {
  			name: '类目' + i
  		}
  	}
  	graph.nodes.forEach((node) => {
  		node.itemStyle = null
  		node.value = node.symbolSize
  		node.symbolSize /= 1.5
  		node.label = {
  			normal: {
  				show: node.symbolSize > 30
  			}
  		}
  		node.category = node.attributes.modularity_class
  	})
  	const option={
  		// title: {
  		// 	// text: 'data',
  		// 	// subtext: 'Default layout',
  		// 	top: 'bottom',
  		// 	left: 'right'
  		// },
  		tooltip: {},
  		legend: [{
  			// selectedMode: 'single',
  			data: categories.map(function (a) {
  				return a.name
  			}),
  			textStyle:{
  				color:'#fff'
  			}
  		}],
  		animationDuration: 1500,
  		animationEasingUpdate: 'quinticInOut',
  		series : [
  			{
  				name: 'Les Miserables',
  				type: 'graph',
  				layout: 'none',
  				data: graph.nodes,
  				links: graph.links,
  				categories: categories,
  				roam: true,
  				// focusNodeAdjacency: true,
  				// focusNodeAdjacencyOn: 'click',
  				itemStyle: {
  					normal: {
  						borderColor: '#fff',
  						borderWidth: 1,
  						shadowBlur: 10,
  						shadowColor: 'rgba(0, 0, 0, 0.3)'
  					}
  				},
  				label: {
  					position: 'right',
  					formatter: '{b}'
  				},
  				lineStyle: {
  					color: 'source',
  					curveness: 0.3
  				},
  				emphasis: {
  					lineStyle: {
  						width: 10
  					}
  				}
  			}
  		]
  	}
  	return(
  		<div className="Diagram">
  			<ReactEcharts id ="diagram" className="diagramMain" option={option} onEvents={this.onclick} ref={(e) =>this.getEchart(e)}/>
  		</div>
  	)
  }
}

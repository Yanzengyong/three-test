import React from 'react'
import './scss/index.scss'
export default class Clock extends React.Component {
	constructor (props) {
		super(props)
		this.state={
			time:''
		}
	}
	componentDidMount () {
		setInterval(()=>{
			this.displayTime()
		}, 1000)
	}
	check (val) {
		if (val < 10) {
			return ('0' + val)
		}
		else {
			return (val)
		}
	}
	displayTime () {
		//获取div元素

		//获取系统当前的年、月、日、小时、分钟、毫秒
		var date = new Date()
		var year = date.getFullYear()
		var month = date.getMonth() + 1
		var day = date.getDate()
		var hour = date.getHours()
		var minutes = date.getMinutes()
		var second = date.getSeconds()
		var timestr = year + '年' + month + '月' + day + '日  ' + this.check(hour)
				+ ':' + this.check(minutes) + ':' + this.check(second)
		//将系统时间设置到div元素中
		this.setState({
			time:timestr
		})
	}




	render () {
		return(
			<div className="Clock">
				{this.state.time}
			</div>
		)
	}
}

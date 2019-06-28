import React, { useEffect, useState } from 'react'
import anime from 'animejs'
import './index.scss'

function ProdPage () {
	useEffect(() => {
		anime({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
	}, [])
	const slideOutHandle = () => {
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 750
		})
		tl.add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '0',
			duration: 200
		}).add({
			targets: '#info1',
			left: 0
		}).add({
			targets: '#info2',
			bottom: 0,
			delay: 750
		})
	}
	const backInitHandle = () => {
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 250
		})
		tl.add({
			targets: '#info1',
			left: '-50%'
		}).add({
			targets: '#info2',
			bottom: '-20%',
		}).add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
	}
	return (
		<div className='prod_container'>
			<div className='prod_header_box'>
				<div className='prod_title_box'>
					<div className='prod_title'>
						<button onClick={backInitHandle}>返回到初始页面</button>
						<div className='prod_title_fill'></div>
						<div className='prod_title_center'>国家工程实验室</div>
						<div className='prod_title_fill'></div>
						<button onClick={slideOutHandle}>滑出的过渡效果</button>
					</div>
				</div>
				<div className='prod_header_right'>
          (先占位子，若没有内容可放就废弃)
				</div>
				<div className='prod_bottom_line'></div>
			</div>
			<div className='prod_content'>
				<div id='init1' className='prod_content_left'>
          这里是一些饼状图、折线图、雷达图等
				</div>
				<div id='init2' className='prod_content_leftBottom'>
          这里一个实时统计的接入数据量与转换量的数值
				</div>
				<div id='init3' className='prod_content_leftTop'>
          这里此平台的文字介绍（介绍过多可以加入滚动效果）
				</div>
				<div id='init4' className='prod_content_right'>
          这里是一些会实时滚动的信息统计
				</div>
				<div id='init5' className='prod_content_rightBottom'>
          这里是一个无框的表格统计图
				</div>
				<div id='info1' className='prod_info_left'>
          这里是单个详情时候的饼图、折线图、雷达图等
				</div>
				<div id='info2' className='prod_info_rightBottom'>
          这里是单个详情时候的无框的表格统计图
				</div>
			</div>
		</div>
	)
}

export default ProdPage

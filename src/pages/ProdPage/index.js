import React, { useEffect, useState } from 'react'
import './index.scss'

function ProdPage () {
	return (
		<div className='prod_container'>
			<div className='prod_header_box'>
				<div className='prod_title_box'>
					<div className='prod_title'>
						<div className='prod_title_fill'></div>
						<div className='prod_title_center'>国家工程实验室</div>
						<div className='prod_title_fill'></div>
					</div>
				</div>
				<div className='prod_header_right'>
          (先占位子，若没有内容可放就废弃)
				</div>
				<div className='prod_bottom_line'></div>
			</div>
			<div className='prod_content'>
				<div className='prod_content_left'>
          这里是一些饼状图、折线图等
				</div>
				<div className='prod_content_leftBottom'>
          这里一个实时统计的接入数据量与转换量的数值
				</div>
				<div className='prod_content_leftTop'>
          这里此平台的文字介绍（介绍过多可以加入滚动效果）
				</div>
				<div className='prod_content_right'>
          这里是一些会实时滚动的信息统计
				</div>
				<div className='prod_content_rightBottom'>
          这里是一个无框的表格统计图
				</div>
			</div>
		</div>
	)
}

export default ProdPage

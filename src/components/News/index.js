import React, { useEffect } from 'react'
import './scss/news.scss'
import $ from 'jquery'
export default function News () {
	useEffect(() => {
		init()
	}, [])
	const init=()=>{
		$('#express').ready(function () {
			//书讯快递循环垂直向上滚动
			function movedome () {
				var margintop=0//上边距的偏移量
				var stop=false
				setInterval(function () {
					if(stop==true) {
						return
					}
					$('#express').children('li').first().animate({ 'margin-top':margintop-- }, 0, function () {
						var $li=$(this)
						if(!$li.is(':animated')) { //第一个li的动画结束时
							if(-margintop>$li.height()) {
								$li.css('margin-top', '0px').appendTo($('#express'))
								margintop=0
							}
						}
					})
				}, 50)
				//鼠标放到快递信息(ul)上时
				$('#express').hover(function () {
					$(this).css('cursor', 'pointer')
					stop=true//停止动画
				}, function () {
					stop=false//开始动画
				})
			}
			movedome()
		})
	}
	return(
		<div className="newsMain">
			<div className="title">
        数据源实时获取信息
			</div>
			<div className="bigBox">
				<div className="newsBox">
					<ul id="express">
						<li>・2010考研英语大纲到货75折...</li>
						<li>・权威定本四大名著（人民文...</li>
						<li>・口述历史权威唐德刚先生国...</li>
						<li>・袁伟民与体坛风云：实话实...</li>
						<li>・我们台湾这些年：轰动两岸...</li>
						<li>・畅销教辅推荐：精品套书50...</li>
						<li>・2010版法律硕士联考大纲75...</li>
						<li>・计算机新书畅销书75折抢购</li>
						<li>・2009年孩子最喜欢的书&gt;&gt;</li>
						<li>・弗洛伊德作品精选集59折</li>
						<li>・2010考研英语大纲到货75折...</li>
						<li>・权威定本四大名著（人民文...</li>
						<li>・口述历史权威唐德刚先生国...</li>
						<li>・2009年孩子最喜欢的书&gt;&gt;</li>
						<li>・弗洛伊德作品精选集59折</li>
						<li>・2010考研英语大纲到货75折...</li>
						<li>・权威定本四大名著（人民文...</li>
						<li>・口述历史权威唐德刚先生国gagagag...</li>
						<li>・2009年孩子最喜欢的书&gt;&gt;</li>
						<li>・弗洛伊德作品精选集59折</li>
						<li>・2010考研英语大纲到货75折...</li>
						<li>・权威定本四大名著（人民文...</li>
						<li>・口述历史权威唐德刚先生国...</li>
					</ul>
				</div>
			</div>

		</div>

	)
}

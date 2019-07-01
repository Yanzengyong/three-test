import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import anime from 'animejs'
import SphereModel from '../../components/ThreeObject/sphereCenterModel'
import './index.scss'
import News from '../../components/News'
import Statistics from '../../components/Statistics'
import LineChart from '../../components/LineChart'

// 把初始化需要定义的一些变量都写在此处（避免因为setState造成渲染问题）

// 创建场景
let scene = new THREE.Scene()

// 创建透视相机
let camera

// 相机镜头视野终点
let cameraTarget = new THREE.Vector3(0, 0, 0)

// 创建渲染器
let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

// 创建css2d渲染器
let labelRenderer = new CSS2DRenderer()

// 创建css3d渲染器
let css3DRenderer = new CSS3DRenderer()

// 为点击声明的变量 （广播 、 鼠标）
let raycaster = new THREE.Raycaster()
let mouse = new THREE.Vector2()

// 创建应用平台组 ----- 展示在中心部位 （坐标处于 0 0 0位置）
let group_apply = new THREE.Group()
scene.add(group_apply)

// 创建源组 ---- 展示平台获取数据的源头 （坐标处于0 -y -z位置）
let group_source = new THREE.Group()
scene.add(group_source)

// 创建使用加工后的组 ----- 展示平台把数据加工后应用展示 （坐标处于0 y z位置）
let group_use = new THREE.Group()
scene.add(group_use)

function ProdPage () {
	useEffect(() => {
		anime({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
		camera = new THREE.PerspectiveCamera(75, document.getElementById('content').offsetWidth / document.getElementById('content').offsetHeight, 0.1, 1000)
		init()
	}, [])

	// 切换到详情时滑块的处理函数
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
			opacity: '1',
			delay: 250
		})
	}

	// 返回到初始化的处理函数
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
			opacity: '0',
		}).add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
	}

	// 加载3d效果的初始函数
	const init = () => {
		// 获取盒子的dom元素
		const container = document.getElementById('canvas')
		// 相机所在位子
		camera.position.set(0, 0, 600)
		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 1)
		scene.add(light)
		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 1)
		dirLight.position.set(300, 300, 600)
		scene.add(dirLight)
		// 中心圆球的
		const sphere_options = {
			sphereRadius: 100,
			widthSegments: 20,
			heightSegments: 20,
			meshObj: { color: 0xffffff, wireframe: true }
		}
		let sphereModel = new SphereModel({
			...sphere_options
		})
		group_source.add(sphereModel.group)
		// 像素点
		renderer.setPixelRatio(window.devicePixelRatio)
		// 场景尺寸
		renderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		container.appendChild(renderer.domElement)
		// 2d渲染器
		labelRenderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		labelRenderer.domElement.style.position = 'absolute'
		labelRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(labelRenderer.domElement)
		// 3d文字渲染器
		css3DRenderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		css3DRenderer.domElement.style.position = 'absolute'
		css3DRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(css3DRenderer.domElement)
		const animate = () => {
			// 必须写的
			requestAnimationFrame(animate)
			// 设置相机镜头的朝向
			camera.lookAt(cameraTarget)
			// 渲染
			renderer.render(scene, camera)
			labelRenderer.render(scene, camera)
			css3DRenderer.render(scene, camera)
		}
		animate()
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
			<div id='content' className='prod_content'>
				<div id='canvas'></div>
				<div id='init1' className='prod_content_left'>
          这里是一些饼状图、折线图、雷达图等
				</div>
				<div id='init2' className='prod_content_leftBottom'>
					<Statistics></Statistics>
				</div>
				<div id='init3' className='prod_content_leftTop'>
          这里此平台的文字介绍（介绍过多可以加入滚动效果）
				</div>
				<div id='init4' className='prod_content_right'>
					<News></News>
				</div>
				<div id='init5' className='prod_content_rightBottom'>
					<LineChart></LineChart>
				</div>
				<div id='info1' className='prod_info_left'>
          这里是单个详情时候的饼图、折线图、雷达图等
				</div>
				{/* <div id='info2' className='prod_info_rightBottom'>
          这里是单个详情时候的无框的表格统计图
				</div> */}
			</div>
		</div>
	)
}

export default ProdPage

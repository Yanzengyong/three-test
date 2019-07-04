import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import anime from 'animejs'
import TWEEN from '@tweenjs/tween.js'
import Orbitcontrols from 'three-orbitcontrols'
import './index.scss'
import News from '../../components/News'
import Statistics from '../../components/Statistics'
import LineChart from '../../components/LineChart'
import CreateObject from './createObjects'
import CreateParticle from './createParticles'
import CreateCloud from './createCloud'
import Positions from './getPosition'
import BriefIntroduction from '../../components/BriefIntroduction'
import LeftIntroduction from '../../components/LeftIntroduction'
import DataSource from '../../components/DataSource'
import { groupSource, animateSource } from './sourceChunk'
import { groupApply,	animateApply } from './applyChunk'
import { groupCenter, animateCenter } from './centerChunk'
import ApplyInfo from './applyInfo'

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
group_source.position.set(0, 0, 1000)
scene.add(group_source)

// 创建源组 ---- 展示平台获取数据的源头 ----- 外环
let group_source_ring = new THREE.Group()
scene.add(group_source_ring)

// 创建使用加工后的组 ----- 展示平台把数据加工后应用展示 （坐标处于0 y z位置）
let group_use = new THREE.Group()
group_use.position.set(0, 0, -150 * 1.5)
scene.add(group_use)

// 创建一个云层的变量 ---- 方便删除添加
let cloud
let centerModel

// 创建球点对象
let sphereParticles = new THREE.Object3D()

// 创建三维对象
let vector = new THREE.Vector3()

// 创建锥子的位子
let rocket_position = []

// 创建可以被点击的纹理数组
let clickObjectArr = []

function ProdPage () {

	useEffect(() => {
		anime({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
		camera = new THREE.PerspectiveCamera(75, document.getElementById('content').offsetWidth / document.getElementById('content').offsetHeight, 0.1, 3000)
		init()
	}, [])

	// 封装的一个 动画完成的函数 ----- promise函数
	const animateHandle = (current, target, geometry, type, time, cameraTar) => {
		return new Promise((resolve) => {
			new TWEEN.Tween({
				x: current.x,
				y: current.y,
				z: current.z,
				xc: cameraTarget.x,
				yc: cameraTarget.y,
				zc: cameraTarget.z,
			})
				.to({
					x: target.x,
					y: target.y,
					z: target.z,
					xc: cameraTar ? cameraTar.x : cameraTarget.x,
					yc: cameraTar ? cameraTar.y : cameraTarget.y,
					zc: cameraTar ? cameraTar.z : cameraTarget.z,
				}, time || 1000)
				.easing(type || TWEEN.Easing.Linear.None)
				.onUpdate(obj => {
					geometry.position.x = obj.x
					geometry.position.y = obj.y
					geometry.position.z = obj.z
					cameraTarget.x = obj.xc
					cameraTarget.y = obj.yc
					cameraTarget.z = obj.zc
				}).start()
			let timer = setTimeout(() => {
				resolve('success')
				clearTimeout(timer)
			}, time + 100 || 1100)
		})
	}

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
			targets: '#canvas',
			top: '-25%',
			left: '25%',
			scale: 0.5
		}).add({
			targets: '#info1',
			left: 0
		}).add({
			targets: '#info2',
			opacity: '1',
			delay: 250
		}).add({
			targets: '#backBtn',
			opacity: '1'
		})
	}

	// 返回到初始化的处理函数
	const backInitHandle = () => {
		animateHandle(camera.position, {
			x: 600,
			y: 800,
			z: 300
		}, camera, TWEEN.Easing.Circular.InOut, 2400)
		scene.add(group_source_ring)
		scene.add(group_source)
		scene.add(group_use)
		group_apply.add(cloud)
		group_apply.remove(centerModel)
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
			targets: '#backBtn',
			opacity: '0'
		}).add({
			targets: '#canvas',
			top: '0',
			left: '0',
			scale: 1
		}).add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
	}

	// 查看中间模型详情的处理函数 ----- 视角切换、动画执行等
	const checkOperateHandle = () => {
		slideOutHandle()
		animateHandle(camera.position, {
			x: 0,
			y: 0,
			z: 500
		}, camera, TWEEN.Easing.Circular.InOut, 2400)
			.then(() => {
				return animateHandle(camera.position, {
					x: 0,
					y: 260,
					z: 0
				}, camera, TWEEN.Easing.Circular.InOut, 2400)
			})
			.then(() => {
				centerModel = new ApplyInfo().createMoreCube()
				group_apply.add(centerModel)
			})
		scene.remove(group_source_ring)
		scene.remove(group_source)
		scene.remove(group_use)
		group_apply.remove(cloud)
	}

	// 查看源模型详情的处理函数 ----- 视角切换、动画执行等
	const checkSourceHandle = () => {
		slideOutHandle()
		animateHandle(camera.position, {
			x: 0,
			y: 0,
			z: 500
		}, camera, TWEEN.Easing.Circular.InOut, 2400)
			.then(() => {
				return animateHandle(camera.position, {
					x: 0,
					y: 260,
					z: 0
				}, camera, TWEEN.Easing.Circular.InOut, 2400)
			})
			.then(() => {
				centerModel = new ApplyInfo().createMoreCube()
				group_apply.add(centerModel)
			})
		scene.remove(group_source_ring)
		scene.remove(group_source)
		scene.remove(group_use)
		group_apply.remove(cloud)
	}

	const checkInfoHandle = (name) => {
		console.log(name)
		switch (name) {
		case 'source': checkSourceHandle()
			break
		case 'operate': checkOperateHandle()
			break
		case 'apply': checkSourceHandle()
			break
		}
	}

	// 加载3d效果的初始函数
	const init = () => {
		let helper = new THREE.AxesHelper(1000)
		scene.add(helper)
		// 获取盒子的dom元素
		const container = document.getElementById('canvas')

		// 监听点击模型事件
		container.addEventListener('click', (event) => {
			event.preventDefault()
			mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 -1
			mouse.y = (event.clientY / renderer.domElement.clientHeight) * 2 -1
			raycaster.setFromCamera(mouse, camera)
			let intersects = raycaster.intersectObjects(clickObjectArr)
			console.log(intersects)
			if (intersects.length > 0) {
				// 说明存在被点击的模型
				// 如果被点击的是中心圆球的话执行动画的切换
				// console.log(currentFlyNum)
				// if (intersects.some((item) => (item.object.name === 'centerSphereModel')) && currentFlyNum === 0) {
				// 	flyAndPush()
				// 	setCurrentStep(1)
				// }
			} else {
				// 不存在被点击的模型
			}
		}, true)

		// 相机所在位子
		camera.position.set(600, 800, 300)

		// 设置环境光
		let light = new THREE.AmbientLight(0xffffff, 1)
		scene.add(light)

		// 设置平行光
		// let dirLight = new THREE.DirectionalLight(0xffffff, 5)
		// dirLight.position.set(400, 400, 1000)
		// scene.add(dirLight)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true

		// 创建光锥的位置
		rocket_position = new Positions().getSpherePosition(150)
		group_apply.rotation.x = -0.5 * Math.PI

		// 创建圆环的位置
		// let ring_position = new Positions().getRingPosition(100, 0, 0, 200, 100)
		// console.log(ring_position)

		// 球面打点
		let particles = new CreateParticle(sphereParticles).createEarthParticles()
		group_apply.add(particles)

		// 光锥
		new CreateObject(rocket_position, group_apply).createObjects()

		// 外层 云层
		cloud = new CreateCloud().createCloudGrid()
		cloud.name = 'centerSphereCloud'
		clickObjectArr.push(cloud)
		group_apply.add(cloud)

		// 外层环
		let centerOutRing = new THREE.TorusGeometry(150 * 1.5, 3, 16, 100)
		let materialRing = new THREE.MeshBasicMaterial({ color: 0xffff00 })
		let torus = new THREE.Mesh(centerOutRing, materialRing)
		group_source_ring.add(torus)
		group_source_ring.add(groupCenter)

		// const getcylposition = () => {
		// 	let positions = []
		// 	for (let i = 0; i < 150; i++) {
		// 		let object = new THREE.Object3D()
		// 		object.position.setFromCylindrical(new THREE.Cylindrical(100, 0, 100))
		// 		positions.push(object)
		// 	}
		// 	return positions
		// }
		// console.log(getcylposition())
		const generatePointCloudGeometry2 = () => {
			let geometry = new THREE.Geometry()
			let material = new THREE.PointsMaterial({ size: 1, color: 0xffff00 })
			let radians = (Math.PI / 180)
			for (let i = 0; i < 3000; i++) {
				//创建随机粒子并添加到geometry中
				let particle = new THREE.Vector3(parseInt(Math.random()*(100 * Math.sin(radians * i) - (-100 * Math.sin(radians * i)) + 1) + (-100 * Math.sin(radians * i)), 10), parseInt(Math.random()*(100 * Math.cos(radians * i) - (-100 * Math.cos(radians * i)) + 1) + (-100 * Math.cos(radians * i)), 10), parseInt(Math.random()*(350 - 120 + 1) + 130, 10))
				geometry.vertices.push(particle)
			}
			return (new THREE.Points(geometry, material))
		}
		scene.add(generatePointCloudGeometry2())
		// 导入源头模型
		group_source.add(groupSource)
		group_use.add(groupApply)

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
			// 必须再此调用
			TWEEN.update()
			animateSource()
			animateApply()
			group_source_ring.rotation.z += Math.PI / 2 * 0.002
			group_apply.rotation.y += 0.002
			let objects = sphereParticles.children
			objects.forEach(obj => {
				let material = obj.material
				material.t_ += material.speed_
				material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
				material.needsUpdate = true
			})
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
			<div id='content' className='prod_content'>
				<div id='canvas'></div>
				<div id='backBtn' className='prod_info_backBtn'>
					<button onClick={backInitHandle}>back</button>
				</div>
				<div id='init1' className='prod_content_left'>
					<LeftIntroduction></LeftIntroduction>
				</div>
				<div id='init2' className='prod_content_leftBottom'>
					<Statistics></Statistics>
				</div>
				<div id='init3' className='prod_content_leftTop'>
					<BriefIntroduction onClick={checkInfoHandle}></BriefIntroduction>
				</div>
				<div id='init4' className='prod_content_right'>
					<News></News>
				</div>
				<div id='init5' className='prod_content_rightBottom'>
					<LineChart></LineChart>
				</div>
				<div id='info1' className='prod_info_left'>
					<DataSource></DataSource>
				</div>
				{/* <div id='info2' className='prod_info_rightBottom'>
          这里是单个详情时候的无框的表格统计图
				</div> */}
			</div>
		</div>
	)
}

export default ProdPage

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

// 创建源组 ---- 展示平台获取数据的源头 ----- 外环
let group_source_ring = new THREE.Group()
scene.add(group_source_ring)

// 创建使用加工后的组 ----- 展示平台把数据加工后应用展示 （坐标处于0 y z位置）
let group_use = new THREE.Group()
scene.add(group_use)

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
		camera.position.set(600, 200, 100)
		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 1)
		scene.add(light)
		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 5)
		dirLight.position.set(400, 400, 1000)
		scene.add(dirLight)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true

		// 创建光锥的位置
		rocket_position = new Positions().getSpherePosition(100)
		group_source.rotation.x = -0.5 * Math.PI

		// 创建圆环的位置
		let ring_position = new Positions().getRingPosition(100, 0, 0, 200, 100)
		console.log(ring_position)

		let pointArray = []
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
		const generatePointCloudGeometry = () => {
			let geometry = new THREE.Geometry()
			let material = new THREE.PointsMaterial({ size: 1, color: 0xffff00 })
			let radians = (Math.PI / 180)
			for (let i = 0; i < 3000; i++) {
				//创建随机粒子并添加到geometry中
				let particle = new THREE.Vector3(parseInt(Math.random()*(100 * Math.sin(radians * i) - (-100 * Math.sin(radians * i)) + 1) + (-100 * Math.sin(radians * i)), 10), parseInt(Math.random()*(100 * Math.cos(radians * i) - (-100 * Math.cos(radians * i)) + 1) + (-100 * Math.cos(radians * i)), 10), parseInt(Math.random()*(350 - 120 + 1) + 130, 10))
				geometry.vertices.push(particle)
				// pointArray.push(geometry)
			}
			return (new THREE.Points(geometry, material))
		}
		let aa = generatePointCloudGeometry()
		aa.geometry.verticesNeedUpdate = true
		scene.add(aa)
		console.log(generatePointCloudGeometry())
		for (let i = 0; i < aa.geometry.vertices.length; i++) {
			new TWEEN.Tween({
				x: aa.geometry.vertices[i].x,
				y: aa.geometry.vertices[i].y,
				z: aa.geometry.vertices[i].z,
			})
				.to({
					x: 0,
					y: 0,
					z: 0
				}, 5000)
				.easing(TWEEN.Easing.Linear.None)
				.onUpdate(obj => {
					aa.geometry.vertices[i].x = obj.x
					aa.geometry.vertices[i].y = obj.y
					aa.geometry.vertices[i].z = obj.z
				}).start()
		}

		// 球面打点
		let particles = new CreateParticle(sphereParticles).createEarthParticles()
		group_source.add(particles)

		// 光锥
		new CreateObject(rocket_position, group_source).createObjects()

		// 外层 云层
		let cloud = new CreateCloud().createCloudGrid()
		cloud.name = 'centerSphereCloud'
		clickObjectArr.push(cloud)
		group_source.add(cloud)

		// 外层环
		let centerOutRing = new THREE.TorusGeometry(100 * 1.6, 3, 16, 100)
		let materialRing = new THREE.MeshBasicMaterial({ color: 0xffff00 })
		var torus = new THREE.Mesh(centerOutRing, materialRing)
		group_source_ring.add(torus)

		const getPoint = (radius, ox, oy, count) => {
			let points = []
			let radians = (Math.PI / 180) * Math.round(360 / count) //弧度
			for (let i = 0; i < count; i++) {
				let x = ox + radius * Math.sin(radians * i)
				let y = oy + radius * Math.cos(radians * i)
				points.unshift({ x:x, y:y }) //保持数据顺时针
			}
			return points
		}
		// function generatePointCloudGeometry (color, width, length) {
		// 	var geometry = new THREE.BufferGeometry()
		// 	var numPoints = width * length
		// 	var positions = new Float32Array(numPoints * 3)
		// 	var colors = new Float32Array(numPoints * 3)
		// 	var k = 0
		// 	for (var i = 0; i < width; i ++) {
		// 		for (var j = 0; j < length; j ++) {
		// 			var u = i / width
		// 			var v = j / length
		// 			var x = u - 0.5
		// 			var y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20
		// 			var z = v - 0.5
		// 			positions[3 * k] = x
		// 			positions[3 * k + 1] = y
		// 			positions[3 * k + 2] = z
		// 			var intensity = (y + 0.1) * 5
		// 			colors[3 * k] = color.r * intensity
		// 			colors[3 * k + 1] = color.g * intensity
		// 			colors[3 * k + 2] = color.b * intensity
		// 			k ++
		// 		}
		// 	}
		// 	geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
		// 	geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3))
		// 	geometry.computeBoundingBox()
		// 	return geometry
		// }
		// function generatePointcloud (color, width, length) {
		// 	var geometry = generatePointCloudGeometry(color, width, length)
		// 	var material = new THREE.PointsMaterial({ size: 5, vertexColors: THREE.VertexColors })
		// 	return new THREE.Points(geometry, material)
		// }
		// var pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), 80, 160)
		// pcBuffer.scale.set(5, 10, 10)
		// pcBuffer.position.set(- 5, 0, 0)
		// scene.add(pcBuffer)

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
			// group_source.rotation.y += 0.002
			let objects = sphereParticles.children
			aa.geometry.verticesNeedUpdate = true
			for (let i = 0; i < aa.geometry.vertices.length; i++) {
				new TWEEN.Tween({
					x: aa.geometry.vertices[i].x,
					y: aa.geometry.vertices[i].y,
					z: aa.geometry.vertices[i].z,
				})
					.to({
						x: 0,
						y: 0,
						z: 0
					}, 60)
					.easing(TWEEN.Easing.Linear.None)
					.onUpdate(obj => {
						aa.geometry.vertices[i].x = obj.x
						aa.geometry.vertices[i].y = obj.y
						aa.geometry.vertices[i].z = obj.z
					}).start()
			}
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

import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import anime from 'animejs'
import SphereModel from '../../components/ThreeObject/sphereCenterModel'
import Orbitcontrols from 'three-orbitcontrols'
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

const CITY_RADIUS = 100,
	CITY_MARGIN = 1,
	BLINT_SPEED = 0.05,
	HEXAGON_RADIUS = 5,
	radius = 100
let earthImg, earthData, earthParticles = new THREE.Object3D(),
	cloud = new THREE.Object3D(),
	hexagon = new THREE.Object3D(),
	dotTexture = new THREE.TextureLoader().load('assets/images/dot.png'),
	coneImg = ['assets/images/lightray.jpg', 'assets/images/lightray_yellow.jpg'],
	hexagonColor = [0xffffff, 0xffff00]
let vector = new THREE.Vector3()
let sphere_field = []
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
		// 相机所在位子
		camera.position.set(300, -200, 600)
		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 1)
		scene.add(light)
		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 5)
		dirLight.position.set(400, 400, 1000)
		scene.add(dirLight)
		// 中心圆球的
		// const sphere_options = {
		// 	sphereRadius: 80,
		// 	widthSegments: 300,
		// 	heightSegments: 300,
		// 	meshObj: { emissive: 0xffe51b, emissiveIntensity: 1, lightMapIntensity: 10 }
		// }
		// let sphereModel = new SphereModel({
		// 	...sphere_options
		// })
		// group_source.add(sphereModel.group)
    		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true
		let earthImgData
		const main = () => {
			earthImg = document.createElement('img')
			earthImg.src = 'assets/images/earth.jpg'
			earthImg.onload = function () {
				let earthCanvas = document.createElement('canvas')
				let earthCtx = earthCanvas.getContext('2d')
				earthCanvas.width = earthImg.width
				earthCanvas.height = earthImg.height
				earthCtx.drawImage(earthImg, 0, 0, earthImg.width, earthImg.height)
				earthImgData = earthCtx.getImageData(0, 0, earthImg.width, earthImg.height)
				// basic scene
				// createBasicScene()
				for (let i = 0; i < 150; i++) {
					let phi = Math.acos(- 1 + (1 * i) / 300)
					let theta = Math.sqrt(600 * Math.PI) * phi
					let object = new THREE.Object3D()
					object.position.setFromSphericalCoords(100, phi, theta)
					vector.copy(object.position).multiplyScalar(2)
					object.lookAt(vector)
					sphere_field.push(object)
				}
				group_source.rotation.x = -0.5 * Math.PI
				// 光锥
				createObjects()
				// 球面打点
				createEarthParticles()
			}
		}
		const createObjects = () => {
			// 地标及光锥
			for (let i = 0, length = sphere_field.length; i < length; i++) {
				let position = sphere_field[i].position
				const index = Math.floor(Math.random() * 2)
				createHexagon(position, index) // 地标
				createCone(position, index) // 光锥
			}
		}
		const createPosition = (lnglat) => {
			let spherical = new THREE.Spherical()
			spherical.radius = radius
			const lng = lnglat[0]
			const lat = lnglat[1]
			// const phi = (180 - lng) * (Math.PI / 180)
			// const theta = (90 + lat) * (Math.PI / 180)
			const theta = (lng + 90) * (Math.PI / 180)
			const phi = (90 - lat) * (Math.PI / 180)
			spherical.phi = phi
			spherical.theta = theta
			let position = new THREE.Vector3()
			position.setFromSpherical(spherical)
			return position
		}

		const createHexagon = (position, index) => {
			const color = hexagonColor[index]
			let hexagonLine = new THREE.CircleGeometry(HEXAGON_RADIUS, 6)
			let hexagonPlane = new THREE.CircleGeometry(HEXAGON_RADIUS - CITY_MARGIN, 6)
			let vertices = hexagonLine.vertices
			vertices.shift() // 第一个节点是中心点
			let circleLineGeom = new THREE.Geometry()
			circleLineGeom.vertices = vertices
			let materialLine = new THREE.MeshBasicMaterial({
				color: color,
				side: THREE.DoubleSide
			})
			let materialPlane = new THREE.MeshBasicMaterial({
				color: color,
				side: THREE.DoubleSide,
				opacity: 0.5
			})
			let circleLine = new THREE.LineLoop(circleLineGeom, materialLine)
			let circlePlane = new THREE.Mesh(hexagonPlane, materialPlane)
			circleLine.position.copy(position)
			circlePlane.position.copy(position)
			circlePlane.lookAt(new THREE.Vector3(0, 0, 0))
			circleLine.lookAt(new THREE.Vector3(0, 0, 0))

			hexagon.add(circleLine)
			hexagon.add(circlePlane)
			group_source.add(hexagon)
		}

		const createCone = (position, index) => {
			let texture = new THREE.TextureLoader().load(coneImg[index]),
				material = new THREE.MeshBasicMaterial({
					map: texture,
					transparent: true,
					depthTest: false,
					side: THREE.DoubleSide,
					blending: THREE.AdditiveBlending
				}),
				height = Math.random() * 50,
				geometry = new THREE.PlaneGeometry(HEXAGON_RADIUS * 2, height),
				matrix1 = new THREE.Matrix4,
				plane1 = new THREE.Mesh(geometry, material)
			matrix1.makeRotationX(Math.PI / 2)
			matrix1.setPosition(new THREE.Vector3(0, 0, height / -2))
			geometry.applyMatrix(matrix1)
			let plane2 = plane1.clone()
			plane2.rotation.z = Math.PI / 2
			plane1.add(plane2)
			plane1.position.copy(position)
			plane1.lookAt(0, 0, 0)
			group_source.add(plane1)
		}

		const createEarthParticles = () => {
			let positions = []
			let materials = []
			let sizes = []
			for (var i = 0; i < 2; i++) {
				positions[i] = {
					positions: []
				}
				sizes[i] = {
					sizes: []
				}
				let mat = new THREE.PointsMaterial()
				mat.size = 2
				mat.color = new THREE.Color(0x03d98e)
				mat.map = dotTexture
				mat.depthWrite = false
				mat.transparent = true
				mat.opacity = 0
				mat.side = THREE.FrontSide
				mat.blending = THREE.AdditiveBlending
				let n = i / 2
				mat.t_ = n * Math.PI * 2
				mat.speed_ = BLINT_SPEED
				mat.min_ = .2 * Math.random() + .5
				mat.delta_ = .1 * Math.random() + .1
				mat.opacity_coef_ = 1
				materials.push(mat)
			}
			var spherical = new THREE.Spherical()
			spherical.radius = radius
			const step = 260
			for (let i = 0; i < step; i++) {
				let vec = new THREE.Vector3()
				let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + 1 // 每个纬线圈内的角度均分
				for (let j = 0; j < step; j += radians) {
					let c = j / step, // 底图上的横向百分比
						f = i / step, // 底图上的纵向百分比
						index = Math.floor(2 * Math.random())
					let pos = positions[index]
					let size = sizes[index]
					spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
					spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
					vec.setFromSpherical(spherical) // 夹角转换为世界坐标
					pos.positions.push(vec.x)
					pos.positions.push(vec.y)
					pos.positions.push(vec.z)
					if (j % 3 === 0) {
						size.sizes.push(6.0)
					}
				}
			}
			for (let i = 0; i < positions.length; i++) {
				let pos = positions[i],
					size = sizes[i],
					bufferGeom = new THREE.BufferGeometry(),
					typedArr1 = new Float32Array(pos.positions.length),
					typedArr2 = new Float32Array(size.sizes.length)
				for (let j = 0; j < pos.positions.length; j++) {
					typedArr1[j] = pos.positions[j]
				}
				for (let j = 0; j < size.sizes.length; j++) {
					typedArr2[j] = size.sizes[j]
				}
				bufferGeom.addAttribute('position', new THREE.BufferAttribute(typedArr1, 3))
				bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
				bufferGeom.computeBoundingSphere()
				let particle = new THREE.Points(bufferGeom, materials[i])
				console.log(materials[i])
				earthParticles.add(particle)
			}
			group_source.add(earthParticles)
		}
		main()
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
			group_source.rotation.y += 0.002
			let objects = earthParticles.children
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

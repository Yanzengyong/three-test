/* eslint-disable react-hooks/exhaustive-deps */
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
import DataSource from '../../components/DataSource'//数据源1
import DataSourceType from '../../components/DataSourceType'//数据源2
import DataGovernance from '../../components/DataGovernance'//数据加工1
import DataGovernanceInfo from '../../components/DataGovernanceTree'//数据加工2
import DataAssets from '../../components/DataAssets'
import DataAssetsInfo from '../../components/DataAssetsInfo'
import NewDiagram from '../../components/NewDiagram'
import Clock from '../../components/Clock'
import { groupSource, animateSource, animateSource2 } from './sourceChunk'
import { groupApply,	animateApply } from './applyChunk'
import { groupCenter } from './centerChunk'
import ApplyInfo from './applyInfo'
import { allData, IndCommerceData, revolutionDept, securityDept, meteorologyDept, travelDept, houseDept, foodMedicalDept, marrigeDept } from './dataSourceJson'
//一网通办，政务通，旅游一路通，安监小精灵，平安出入境，看天气
import { ywtbdata, zwtdata, lyyltdata, ajxjldata, pacrjdata, ktqdata } from './diagramJson'

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

// 创建一个查看使用详情的组 ---- 一个由片状组成的球体
let group_use_info = new THREE.Group()
group_use_info.position.set(0, 0, -400)
group_use_info.rotation.x = -0.5 * Math.PI
scene.add(group_use_info)

let group_source_info = new THREE.Group()
group_source_info.position.set(0, 0, 600)
group_source_info.rotation.x = 0.5 * Math.PI
// group_source_info.rotation.z = Math.PI
scene.add(group_source_info)

// 创建一个云层的变量 ---- 方便删除添加
let cloud
let centerModel
let infoModel_Arr = []
let infoSource_Arr = []
let particlesArr
let showSourceInfo = false
let choiceUsePlane = false
let choiceSourcePlane = false
let isCenterModelCheck = false
let hasCenterModel = false

// 创建球点对象
let sphereParticles = new THREE.Object3D()

// 创建三维对象
let vector = new THREE.Vector3()

// 创建锥子的位子
let rocket_position = []

// 创建可以被点击的纹理数组
let clickObjectArr = []

function ProdPage () {
	const [currentModel, setCurrentModel] = useState(null)
	const [dataSourceData, setDataSourceData] = useState(allData)
	const [dataModelStep, setDataModelStep] = useState(null)
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

	//创造星空
	const createParticles = (size, transparent, opacity, vertexColors, sizeAttenuation, color, num) => {
		let geometry = new THREE.Geometry()
		let material = new THREE.PointsMaterial({ size: size, transparent: transparent, opacity: opacity, vertexColors: vertexColors, sizeAttenuation: sizeAttenuation, color: color })
		let range = window.innerWidth
		for (let i = 0; i < num; i++) {
			//创建随机粒子并添加到geometry中
			let particle = new THREE.Vector3(Math.random() *range - range / 4, Math.random() * range - range / 4, Math.random() * range - range / 4)
			geometry.vertices.push(particle)

			//创建颜色数组geometry.colors
			let color = new THREE.Color(0xffffff)
			geometry.colors.push(color)
		}
		return (new THREE.Points(geometry, material))
	}

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
			scale: 1,
			delay: 250
		}).add({
			targets: '#backBtn',
			opacity: '1'
		})
	}

	// 返回到初始化的处理函数
	const backInitHandle = () => {
		for (let i = 0; i < infoSource_Arr.length; i++) {
			group_source_info.remove(infoSource_Arr[i])
		}
		for (let i = 0; i < infoModel_Arr.length; i++) {
			group_use_info.add(infoModel_Arr[i])
		}
		setCurrentModel(null)
		showSourceInfo = false
		animateHandle(camera.position, {
			x: 650,
			y: 850,
			z: 350
		}, camera, TWEEN.Easing.Circular.InOut, 2400, {
			x: 0,
			y: 0,
			z: 0
		})
		scene.add(group_source_ring)
		scene.add(group_source)
		scene.add(group_use)
		scene.add(group_apply)
		scene.add(particlesArr)
		scene.add(group_use_info)
		group_apply.add(cloud)
		isCenterModelCheck = false
		if (hasCenterModel) {
			centerModel.deletedFn()
			hasCenterModel = false
		}
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 250
		})
		tl.add({
			targets: '#info1',
			left: '-50%'
		}).add({
			targets: '#info2',
			scale: 0,
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

	// 中间动画执行的逻辑
	const playLoop = async () => {
		centerModel = new ApplyInfo(group_apply).createMoreCube()
		hasCenterModel = true
		setDataModelStep(1)
		await centerModel.classifyDataHandle(3000, 3000)
		console.log('分类')
		await centerModel.changeCube(2000, 5000)
		console.log('变成矩形')
		setDataModelStep(2)
		await centerModel.changeSphere(2000, 20000)
		console.log('变成球体')
		setDataModelStep(3)
		let timer = setTimeout(() => {
			clearTimeout(timer)
			centerModel.deletedFn()
			if (isCenterModelCheck) {
				playLoop()
			} return
		}, 20000)
	}

	// 查看中间模型详情的处理函数 ----- 视角切换、动画执行等
	const checkOperateHandle = () => {
		setCurrentModel('apply')
		slideOutHandle()
		setDataModelStep(1)
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
				isCenterModelCheck = true
				playLoop()
			})
		for (let i = 0; i < infoModel_Arr.length; i++) {
			group_use_info.remove(infoModel_Arr[i])
		}
		scene.remove(group_source_ring)
		scene.remove(group_source)
		scene.remove(group_use)
		scene.remove(group_use_info)
		group_apply.remove(cloud)
	}

	// 查看源模型详情的处理函数 ----- 视角切换、动画执行等
	const checkSourceHandle = () => {
		setCurrentModel('source')
		slideOutHandle()
		animateHandle(camera.position, {
			x: 0,
			y: 0,
			z: 0
		}, camera, TWEEN.Easing.Circular.InOut, 2400, {
			x: 0,
			y: 0,
			z: 600
		})
			.then(() => {
				return animateHandle(camera.position, {
					x: 0,
					y: 0,
					z: 600
				}, camera, TWEEN.Easing.Circular.InOut, 2400, {
					x: 0,
					y: 0,
					z: 600
				})
			})
			.then(() => {
				showSourceInfo = true
				for (let i = 0; i < infoSource_Arr.length; i++) {
					group_source_info.add(infoSource_Arr[i])
					let geometry = new THREE.PlaneGeometry(150, 220)
					let material = new THREE.MeshBasicMaterial({ color: 0xffff00, visible:false })
					let plane = new THREE.Mesh(geometry, material)
					plane.position.set(infoSource_Arr[i].position.x, infoSource_Arr[i].position.y, infoSource_Arr[i].position.z)
					vector.x = infoSource_Arr[i].position.x * -2
					vector.y = infoSource_Arr[i].position.y
					vector.z = infoSource_Arr[i].position.z * -2
					plane.lookAt(vector)
					plane.name = 'sourcePlane'
					plane.keyword = infoSource_Arr[i].name
					group_source_info.add(plane)
					clickObjectArr.push(plane)
				}
				return animateHandle(camera.position, {
					x: 0,
					y: 0,
					z: 700
				}, camera, TWEEN.Easing.Linear.None, 2000, {
					x: 0,
					y: 500,
					z: 700
				})
			})
		for (let i = 0; i < infoModel_Arr.length; i++) {
			group_use_info.remove(infoModel_Arr[i])
		}
		scene.remove(group_source_ring)
		scene.remove(group_apply)
		scene.remove(group_use)
		scene.remove(group_use_info)
		group_apply.remove(cloud)
	}

	// 查看使用模型详情的处理函数 ----- 视角切换、动画执行等
	const checkUseHandle = () => {
		setCurrentModel('use')
		slideOutHandle()
		animateHandle(camera.position, {
			x: 0,
			y: 0,
			z: 0
		}, camera, TWEEN.Easing.Circular.InOut, 2400, {
			x: 0,
			y: 0,
			z: -500
		})
			.then(() => {
				return animateHandle(camera.position, {
					x: 0,
					y: 0,
					z: -550
				}, camera, TWEEN.Easing.Circular.InOut, 2400, {
					x: 0,
					y: 0,
					z: -780
				})
			})
			.then(() => {
				return animateHandle(camera.position, {
					x: 0,
					y: 0,
					z: -780
				}, camera, TWEEN.Easing.Linear.None, 1000, {
					x: 0,
					y: -750,
					z: -780
				})
			})
		scene.remove(group_source_ring)
		scene.remove(group_source)
		scene.remove(group_apply)
		scene.remove(particlesArr)
		group_apply.remove(cloud)
	}

	const checkInfoHandle = (name) => {
		switch (name) {
		case 'source': checkSourceHandle()
			break
		case 'operate': checkOperateHandle()
			break
		case 'apply': checkUseHandle()
			break
		}
	}

	let infoSourceArr = [
		{
			img: 'assets/images/gongshang.png',
			text: '工商局',
			keyword: '工商局'
		}, {
			img: 'assets/images/fagai.png',
			text: '发改委',
			keyword: '发改委'
		}, {
			img: 'assets/images/anjian.png',
			text: '安监局',
			keyword: '安监局'
		}, {
			img: 'assets/images/qixiang.png',
			text: '气象局',
			keyword: '气象局'
		}, {
			img: 'assets/images/lvfa.png',
			text: '旅发委',
			keyword: '旅发委'
		}, {
			img: 'assets/images/zhujian.png',
			text: '住建局',
			keyword: '住建局'
		}, {
			img: 'assets/images/shiyaojian.png',
			text: '食药监局',
			keyword: '食药监局'
		}, {
			img: 'assets/images/minzheng.png',
			text: '民政局',
			keyword: '民政局'
		}]

	// 改变浏览器大小重置camera和renderer
	window.addEventListener('resize', ()=>{
		camera.aspect = document.getElementById('content').offsetWidth / document.getElementById('content').offsetHeight
		camera.updateProjectionMatrix()
		renderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
	}, false)

	// 根据不同的委办局名称使用不同的数据
	const getDepartmentInfoData = (name) => {
		switch (name) {
		case '全部': setDataSourceData(allData)
			break
		case '工商局': setDataSourceData(IndCommerceData)
			break
		case '发改委': setDataSourceData(revolutionDept)
			break
		case '安监局': setDataSourceData(securityDept)
			break
		case '气象局': setDataSourceData(meteorologyDept)
			break
		case '旅发委': setDataSourceData(travelDept)
			break
		case '住建局': setDataSourceData(houseDept)
			break
		case '食药监局': setDataSourceData(foodMedicalDept)
			break
		case '民政局': setDataSourceData(marrigeDept)
			break
		}
	}

	// 加载3d效果的初始函数
	const init = () => {
		// let helper = new THREE.AxesHelper(1000)
		// scene.add(helper)
		// 获取盒子的dom元素
		const container = document.getElementById('canvas')
		// 监听点击模型事件
		container.addEventListener('click', (event) => {
			event.preventDefault()
			mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1
			mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
			raycaster.setFromCamera(mouse, camera)
			let intersects = raycaster.intersectObjects(clickObjectArr)
			if (intersects.length > 0) {
				// 说明存在被点击的模型
				if (intersects.some((item) => (item.object.name === 'usePlane'))) {
					choiceUsePlane = !choiceUsePlane
				} else if (intersects.some((item) => (item.object.name === 'sourcePlane'))) {
					choiceSourcePlane = !choiceSourcePlane
					if (choiceSourcePlane) {
						let index = infoSourceArr.findIndex((item) => (item.keyword === intersects[0].object.keyword))
						if (index + 1 === infoSourceArr.length) {
							getDepartmentInfoData(infoSourceArr[0].keyword)
						} else {
							getDepartmentInfoData(infoSourceArr[index + 1].keyword)
						}
					} else {
						getDepartmentInfoData('全部')
					}
				}
			} else {
				// 不存在被点击的模型
			}
		}, false)

		// 背景星空 ----- 调用函数
		let backgroundCloud = createParticles(2, true, 0.7, 0xffffff, false, 0xffffff, 1000)
		scene.add(backgroundCloud)

		// 相机所在位子
		camera.position.set(650, 850, 350)

		// 设置环境光
		let light = new THREE.AmbientLight(0xffffff, 1)
		scene.add(light)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		// let orbitControls = new Orbitcontrols(camera)
		// orbitControls.enableDamping = true

		// 创建光锥的位置
		rocket_position = new Positions().getSpherePosition(150)
		group_apply.rotation.x = -0.5 * Math.PI

		// 球面打点
		let particles = new CreateParticle(sphereParticles).createEarthParticles()
		group_apply.add(particles)

		// 光锥
		// new CreateObject(rocket_position, group_apply).createObjects()

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

		// 创建流动的例子位置
		const generatePointCloudGeometry2 = () => {
			let geometry = new THREE.Geometry()
			let material = new THREE.PointsMaterial({ size: 1, color: 0xffff00 })
			let radians = (Math.PI / 180)
			for (let i = 0; i < 3000; i++) {
				//创建随机粒子并添加到geometry中
				let particle = new THREE.Vector3(parseInt(Math.random()*(100 * Math.sin(radians * i) - (-100 * Math.sin(radians * i)) + 1) + (-100 * Math.sin(radians * i)), 10), parseInt(Math.random()*(100 * Math.cos(radians * i) - (-100 * Math.cos(radians * i)) + 1) + (-100 * Math.cos(radians * i)), 10), parseInt(Math.random()*(400 - 120 + 1) + 130, 10))
				geometry.vertices.push(particle)
			}
			return (new THREE.Points(geometry, material))
		}
		particlesArr = generatePointCloudGeometry2()
		scene.add(particlesArr)

		// 相关使用详情的模型
		// 环形的效果
		let infoPlaneArr = [
			{
				img: 'assets/images/ly.png',
				text: '通过数据的采集、整合，提供公共资源统一进场交易。'
			}, {
				img: 'assets/images/jt.png',
				text: '通过数据的采集、整合，让公众便利获得全面、准确的出行信息服务，让管理方能更及时地处理数据。'
			}, {
				img: 'assets/images/jy.png',
				text: '通过数据的采集、整合，让学校能更清楚的了解学生的成绩走向，为学生提供更优质、完善的资料。'
			}, {
				img: 'assets/images/hy.png',
				text: '通过数据的采集、整合，为环境相关部门提供精准的人与环境、社会与环境等之间的关系。'
			}, {
				img: 'assets/images/yl.png',
				text: '通过数据的采集、整合，为医院提供更疾病预防控制、计划免疫、急救、采血服务的精准数据查询。'
			}, {
				img: 'assets/images/sm.png',
				text: '政府一般是提供办事的主体，通过采集、整合，提供网上办事、办事指南、进度查询、结果公布、网上评议、网上投诉功能等服务。'
			}]
		for (let i = 0; i < infoPlaneArr.length; i++) {
			let souceDiv = document.createElement('div')
			souceDiv.className = 'element_info'
			souceDiv.style.backgroundColor = new THREE.Color('#c0ff00')
			let symbol = document.createElement('img')
			symbol.className = 'img_info'
			symbol.src = infoPlaneArr[i].img
			souceDiv.appendChild(symbol)
			let details = document.createElement('div')
			details.className = 'details_info'
			details.innerHTML = infoPlaneArr[i].text
			souceDiv.appendChild(details)
			let theta = i * (2 * Math.PI) / 6
			let y = 376
			let object = new CSS3DObject(souceDiv)
			object.position.setFromCylindricalCoords(200, theta, y)
			vector.x = object.position.x * -2
			vector.y = object.position.y
			vector.z = object.position.z * -2
			object.lookAt(vector)
			infoModel_Arr.push(object)
		}
		// 添加卡片到组内
		for (let i = 0; i < infoModel_Arr.length; i++) {
			group_use_info.add(infoModel_Arr[i])
			let geometry = new THREE.PlaneGeometry(150, 220)
			let material = new THREE.MeshBasicMaterial({ color: 0xffff00, visible:false })
			let plane = new THREE.Mesh(geometry, material)
			plane.position.set(infoModel_Arr[i].position.x, infoModel_Arr[i].position.y, infoModel_Arr[i].position.z)
			vector.x = infoModel_Arr[i].position.x * -2
			vector.y = infoModel_Arr[i].position.y
			vector.z = infoModel_Arr[i].position.z * -2
			plane.lookAt(vector)
			plane.name = 'usePlane'
			group_use_info.add(plane)
			clickObjectArr.push(plane)
		}
		// 数据源详情的模型
		for (let i = 0; i < infoSourceArr.length; i++) {
			let souceDiv = document.createElement('div')
			souceDiv.className = 'source_info'
			souceDiv.style.backgroundColor = new THREE.Color('#c0ff00')
			let symbol = document.createElement('img')
			symbol.className = 'source_img_info'
			symbol.src = infoSourceArr[i].img
			souceDiv.appendChild(symbol)
			let details = document.createElement('div')
			details.className = 'source_details_info'
			details.innerHTML = infoSourceArr[i].text
			souceDiv.appendChild(details)
			let theta = i * (2 * Math.PI) / 8
			let y = 100
			let object = new CSS3DObject(souceDiv)
			object.position.setFromCylindricalCoords(100, theta, y)
			vector.x = object.position.x * -2
			vector.y = object.position.y
			vector.z = object.position.z * -2
			object.lookAt(vector)
			object.name = infoSourceArr[i].keyword
			infoSource_Arr.push(object)
		}

		// 导入源头模型
		group_source.add(groupSource)

		// var curve = new THREE.QuadraticBezierCurve3(
		// 	new THREE.Vector3(0, 130, -300),
		// 	new THREE.Vector3(0, 0, -350),
		// 	new THREE.Vector3(0, 0, -600)
		// )

		// let point = curve.getPoints(100)
		// console.log(point)
		// let geometry = new THREE.BufferGeometry().setFromPoints(point)
		function CustomSinCurve (scale) {

			THREE.Curve.call(this)

			this.scale = (scale === undefined) ? 1 : scale

		}

		CustomSinCurve.prototype = Object.create(THREE.Curve.prototype)
		CustomSinCurve.prototype.constructor = CustomSinCurve

		CustomSinCurve.prototype.getPoint = function (t) {

			var tx = 0
			var ty = Math.sin(3 * Math.PI * t)
			var tz = -300

			return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale)

		}

		var path = new CustomSinCurve(10)
		var geometry = new THREE.TubeGeometry(path, 64, 2, 20, false)

		let material = new THREE.PointsMaterial({ size: 1, color : 0xfff00 })

		let curveObject = new THREE.Points(geometry, material)
		group_source.add(curveObject)

		// 导入应用模型
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
			if (!showSourceInfo) {
				animateSource()
			} else {
				animateSource2()
			}
			animateApply()
			group_source_ring.rotation.z += Math.PI / 2 * 0.002
			group_apply.rotation.y -= Math.PI / 2 * 0.002
			// 是否点击了源详情的纸片
			if (!choiceSourcePlane) {
				group_source_info.rotation.y -= 0.002
			} else {
				// console.log(Math.abs(group_source_info.rotation.y) % (Math.PI * 2 / infoSourceArr.length))
				if (Math.abs(group_source_info.rotation.y) % (Math.PI * 2 / infoSourceArr.length) > 0.01) {
					// Math.abs(group_source_info.rotation.y) % (Math.PI * 2 / infoSourceArr.length) - 0.01
					group_source_info.rotation.y -= 0.01
				}
			}
			// 是否点击了使用详情的纸片
			if (!choiceUsePlane) {
				group_use_info.rotation.y -= Math.PI / 2 * 0.002
			} else {
				if (Math.abs(group_use_info.rotation.y) % (Math.PI * 2 / infoPlaneArr.length) > 0.01) {
					group_use_info.rotation.y -= 0.01
				}
			}
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
						政务数据治理平台
					</div>
				</div>
				<div className='prod_header_left'>
					<img src='../../assets/images/logo.png' className='logoImg'/>
					<div className='logoName'>
						<p className='description'>提升政府治理能力大数据应用技术</p>
						<p className='labName'>国家工程实验室</p>
					</div>
				</div>
				<div className='prod_header_right'>
					<Clock></Clock>
				</div>
				<div className='prod_bottom_line'></div>
			</div>
			<div id='content' className='prod_content'>
				<div id='canvas'></div>
				<div id='backBtn' className='prod_info_backBtn'>
					<button onClick={backInitHandle}>返回</button>
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
					{currentModel === 'source' ? (<DataSource dataSet={dataSourceData}/>) :
						currentModel === 'apply' ? (<DataGovernance step={dataModelStep}/>) : (<DataAssets/>)}
				</div>
				<div id='info2' className='prod_info_rightBottom'>

					{/* {currentModel === 'source' ? (<DataSourceType/>) :
						currentModel === 'apply' ? (<DataGovernanceInfo/>) : (<NewDiagram/>)} */}
					{/* <Diagram></Diagram> */}
					{currentModel === 'source' ? (<DataSourceType dept={dataSourceData.title}/>) :
						currentModel === 'apply' ? (<DataGovernanceInfo step={dataModelStep}/>) : (<NewDiagram data={zwtdata}></NewDiagram>)}
				</div>
			</div>
		</div>
	)
}

export default ProdPage

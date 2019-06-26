/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import './index.scss'
import Orbitcontrols from 'three-orbitcontrols'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import TWEEN from '@tweenjs/tween.js'
// import DataElement from '../../components/DataElement'
import DataAssets from '../../components/DataAssets'
import FlyLine from './flyLine'

function FinalPage () {
	useEffect(() => {
		init()
	}, [])

	// 一些判断是否显示div的state
	const [isShowDiv, setIsShowDiv] = useState(true)

	// 创建场景
	let scene = new THREE.Scene()

	// 创建透视相机
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)

	// 创建渲染器
	let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

	// 创建向量
	let vector = new THREE.Vector3()

	// 相机镜头视野终点
	let cameraTarget = new THREE.Vector3(0, 0, 100)

	// 创建css2d渲染器
	let labelRenderer = new CSS2DRenderer()

	// 创建css3d渲染器
	let css3DRenderer = new CSS3DRenderer()

	// 为点击声明的变量 （广播 、 鼠标）
	let raycaster = new THREE.Raycaster()
	let mouse = new THREE.Vector2()

	// 文字声明 / 详情面板（为了提供动态删除的可能性）
	let field_info_plane

	// 可以被点击的模型对象数组
	let clickObjectArr = []

	// 分类后（编目后）被分成了5分，每一份的几何声明
	let thunk_one = []
	let thunk_two = []
	let thunk_three = []
	let thunk_four = []
	let thunk_five = []

	// filed组成的模型的名称声明 （目的提供全局使用该坐标） 当前的状态
	let irregular_field = []
	let cube_field = []
	let annular_field = []
	let sphere_field = []
	let init_field = []
	let currentField = 'init'
	let currentData = 1
	let group_source_array = []

	// 判断的关键字声明
	let hasSource = true

	// 创建数据源组 ----- 球形
	let group_source_sphere = new THREE.Group()
	scene.add(group_source_sphere)

	// 创建数据源组
	let group_source = new THREE.Group()
	scene.add(group_source)

	// 创建数据源filed的详情面板组
	let group_field_info = new THREE.Group()
	scene.add(group_field_info)

	// 创建数据源组 ----- 球体 --- 上方的文字
	let group_source_sphere_text = new THREE.Group()
	group_source_sphere_text.position.set(0, 800, 0)
	scene.add(group_source_sphere_text)

	// 创建围绕中新球体的球体
	let group_rotate = new THREE.Group()
	scene.add(group_rotate)

	// 创建标题组 ----- 球体 --- 整体的标题 3d效果
	let group_title = new THREE.Group()
	group_title.position.set(0, 830, 0)
	scene.add(group_title)

	let group_flyLine = new THREE.Group()
	scene.add(group_flyLine)

	// 初始化轨道控制
	let trackballControls
	const initTrackballControls = (camera, renderer) => {
		const trackballControls = new TrackballControls(
			camera,
			renderer.domElement
		)
		trackballControls.rotateSpeed = 1.0
		trackballControls.zoomSpeed = 1.2
		trackballControls.panSpeed = 0.8
		trackballControls.noZoom = false
		trackballControls.noPan = false
		trackballControls.staticMoving = true
		trackballControls.dynamicDampingFactor = 0.3
		trackballControls.keys = [65, 83, 68]

		return trackballControls
	}

	// 数据源 小方块在球体中的循环转动的效果 ---- 不规则旋转
	const animateCubeTranslate = (current, target, type1, type2, cube) => {
		const uploadHandle = () => {
			cube.rotation.x += Math.random() * 0.05
			cube.rotation.y += Math.random() * 0.05
			cube.rotation.z += Math.random() * 0.05
		}
		let position = current
		let translate1 = new TWEEN.Tween(position)
			.to({
				x: 200 * (2.0 * Math.random() - 1.0),
				y: 200 * (2.0 * Math.random() - 1.0),
				z: 200 * (2.0 * Math.random() - 1.0)
			}, 3600)
			.easing(type1)
			.onUpdate(() => {
				uploadHandle()
			})
		let translate2 = new TWEEN.Tween(position)
			.to(target, 3600)
			.easing(type2)
			.onUpdate(() => {
				uploadHandle()
			})
		translate1.chain(translate2)
		translate2.chain(translate1)
		translate1.start()
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

	// 动态添加文字处理函数
	const dynamicAddText = (group, text, x, y, z, size) => {
		// 为这个模型几何加上label文案
		let labelDiv = document.createElement('div')
		labelDiv.className = size === 'small' ? 'label_small' : 'label'
		labelDiv.textContent = text
		labelDiv.style.marginTop = '-1em'
		let modelLabel = new CSS2DObject(labelDiv)
		modelLabel.position.set(x || 0, y || 0, z || 0)
		group.add(modelLabel)
		return modelLabel
	}

	// 动态清除group的2d文字
	const dynamicDeleteText = (group, labelModel) => {
		group.remove(group, labelModel)
	}

	// 这是分装的一个动画过程函数（调用即可） ----- 主题为编目
	const classifyDataHandle = (time) => {
		return new Promise((resolve) => {
			for (let i = 0; i < group_source_array.length; i++) {
				let unit = group_source_array.length / 5
				if (i < unit) {
					animateHandle(group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * 160 + 250,
						y: (2.0 * Math.random() - 1.0) * 160 + 250,
						z: (2.0 * Math.random() - 1.0) * 160 + 250
					}, group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					group_source_array[i].material.color = new THREE.Color('#007eff')
					thunk_one.push(group_source_array[i])
				} else if (i < unit * 2) {
					animateHandle(group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * -160 - 250,
						y: (2.0 * Math.random() - 1.0) * 160 + 250,
						z: (2.0 * Math.random() - 1.0) * 160 + 250
					}, group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					group_source_array[i].material.color = new THREE.Color('#00ff66')
					thunk_two.push(group_source_array[i])
				} else if (i < unit * 3) {
					animateHandle(group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * -160 - 250,
						y: (2.0 * Math.random() - 1.0) * -160 - 250,
						z: (2.0 * Math.random() - 1.0) * 160 + 250
					}, group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					group_source_array[i].material.color = new THREE.Color('#c0ff00')
					thunk_three.push(group_source_array[i])
				} else if (i < unit * 4) {
					animateHandle(group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * 160 + 250,
						y: (2.0 * Math.random() - 1.0) * -160 - 250,
						z: (2.0 * Math.random() - 1.0) * 160 + 250
					}, group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					group_source_array[i].material.color = new THREE.Color('#fff700')
					thunk_four.push(group_source_array[i])
				} else if (i < unit * 5) {
					animateHandle(group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * 160,
						y: (2.0 * Math.random() - 1.0) * 160,
						z: (2.0 * Math.random() - 1.0) * 160 + 250
					}, group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					thunk_five.push(group_source_array[i])
				}
			}
			let timer = setTimeout(() => {
				resolve('success')
				currentData = 2
				clearTimeout(timer)
			}, time + 100 || 1100)
		})
	}

	// 这是将分类的数据资源缩小成一个小的球体的动画过程 ---- 并且在此时形成字段效果
	const shrinkDataHandle = (time, delay) => {
		return new Promise((resolve) => {
			let timer_delay = setTimeout(() => {
				for (let i = 0; i < thunk_one.length; i++) {
					// 添加卡片
					let souceDiv = document.createElement('div')
					souceDiv.setAttribute('id', `plane${i}`)
					souceDiv.className = 'element'
					souceDiv.style.backgroundColor = thunk_one[i].material.color.getStyle()
					let symbol = document.createElement('div')
					symbol.setAttribute('id', `planeSymbol${i}`)
					symbol.className = 'symbol'
					symbol.textContent = 'Field'
					souceDiv.appendChild(symbol)
					let details = document.createElement('div')
					details.setAttribute('id', `planeDetail${i}`)
					details.className = 'details'
					details.innerHTML = Math.ceil(Math.random() * 10) > 5 ? 'str' : 'int'
					souceDiv.appendChild(details)
					let object = new CSS3DObject(souceDiv)
					object.position.x = Math.random() * 800 - 400
					object.position.y = Math.random() * 800 - 400
					object.position.z = Math.random() * 800 - 400
					// group_source.add(object)
					init_field.push(object)
					clickObjectArr.push(group_source)
					object.name = 'soucePlane'
					// 执行缩小动画
					animateHandle(thunk_one[i].position, {
						x: 250,
						y: 250,
						z: 250,
					}, thunk_one[i], TWEEN.Easing.Linear.None, time || 1000)
					// 删除定时器
					let timer = setTimeout(() => {
						group_source.remove(thunk_one[i])
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < thunk_two.length; i++) {
					// 添加卡片
					let souceDiv = document.createElement('div')
					souceDiv.setAttribute('id', `plane${i}`)
					souceDiv.className = 'element'
					souceDiv.style.backgroundColor = thunk_two[i].material.color.getStyle()
					let symbol = document.createElement('div')
					symbol.setAttribute('id', `planeSymbol${i}`)
					symbol.className = 'symbol'
					symbol.textContent = 'Field'
					souceDiv.appendChild(symbol)
					let details = document.createElement('div')
					details.setAttribute('id', `planeDetail${i}`)
					details.className = 'details'
					details.innerHTML = Math.ceil(Math.random() * 10) > 5 ? 'str' : 'int'
					souceDiv.appendChild(details)
					let object = new CSS3DObject(souceDiv)
					object.position.x = Math.random() * 800 - 400
					object.position.y = Math.random() * 800 - 400
					object.position.z = Math.random() * 800 - 400
					// group_source.add(object)
					init_field.push(object)
					clickObjectArr.push(group_source)
					object.name = 'soucePlane'
					// 执行缩小动画
					animateHandle(thunk_two[i].position, {
						x: -250,
						y: 250,
						z: 250,
					}, thunk_two[i], TWEEN.Easing.Linear.None, time || 1000)
					// 删除定时器
					let timer = setTimeout(() => {
						group_source.remove(thunk_two[i])
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < thunk_three.length; i++) {
					// 添加卡片
					let souceDiv = document.createElement('div')
					souceDiv.setAttribute('id', `plane${i}`)
					souceDiv.className = 'element'
					souceDiv.style.backgroundColor = thunk_three[i].material.color.getStyle()
					let symbol = document.createElement('div')
					symbol.setAttribute('id', `planeSymbol${i}`)
					symbol.className = 'symbol'
					symbol.textContent = 'Field'
					souceDiv.appendChild(symbol)
					let details = document.createElement('div')
					details.setAttribute('id', `planeDetail${i}`)
					details.className = 'details'
					details.innerHTML = Math.ceil(Math.random() * 10) > 5 ? 'str' : 'int'
					souceDiv.appendChild(details)
					let object = new CSS3DObject(souceDiv)
					object.position.x = Math.random() * 800 - 400
					object.position.y = Math.random() * 800 - 400
					object.position.z = Math.random() * 800 - 400
					// group_source.add(object)
					init_field.push(object)
					clickObjectArr.push(group_source)
					object.name = 'soucePlane'
					// 执行缩小动画
					animateHandle(thunk_three[i].position, {
						x: -250,
						y: -250,
						z: 250,
					}, thunk_three[i], TWEEN.Easing.Linear.None, time || 1000)
					// 删除定时器
					let timer = setTimeout(() => {
						group_source.remove(thunk_three[i])
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < thunk_four.length; i++) {
					// 添加卡片
					let souceDiv = document.createElement('div')
					souceDiv.setAttribute('id', `plane${i}`)
					souceDiv.className = 'element'
					souceDiv.style.backgroundColor = thunk_four[i].material.color.getStyle()
					let symbol = document.createElement('div')
					symbol.setAttribute('id', `planeSymbol${i}`)
					symbol.className = 'symbol'
					symbol.textContent = 'Field'
					souceDiv.appendChild(symbol)
					let details = document.createElement('div')
					details.setAttribute('id', `planeDetail${i}`)
					details.className = 'details'
					details.innerHTML = Math.ceil(Math.random() * 10) > 5 ? 'str' : 'int'
					souceDiv.appendChild(details)
					let object = new CSS3DObject(souceDiv)
					object.position.x = Math.random() * 800 - 400
					object.position.y = Math.random() * 800 - 400
					object.position.z = Math.random() * 800 - 400
					// group_source.add(object)
					init_field.push(object)
					clickObjectArr.push(group_source)
					object.name = 'soucePlane'
					// 执行缩小动画
					animateHandle(thunk_four[i].position, {
						x: 250,
						y: -250,
						z: 250,
					}, thunk_four[i], TWEEN.Easing.Linear.None, time || 1000)
					// 删除定时器
					let timer = setTimeout(() => {
						group_source.remove(thunk_four[i])
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < thunk_five.length; i++) {
					// 添加卡片
					let souceDiv = document.createElement('div')
					souceDiv.setAttribute('id', `plane${i}`)
					souceDiv.className = 'element'
					souceDiv.style.backgroundColor = thunk_five[i].material.color.getStyle()
					let symbol = document.createElement('div')
					symbol.setAttribute('id', `planeSymbol${i}`)
					symbol.className = 'symbol'
					symbol.textContent = 'Field'
					souceDiv.appendChild(symbol)
					let details = document.createElement('div')
					details.setAttribute('id', `planeDetail${i}`)
					details.className = 'details'
					details.innerHTML = Math.ceil(Math.random() * 10) > 5 ? 'str' : 'int'
					souceDiv.appendChild(details)
					let object = new CSS3DObject(souceDiv)
					object.position.x = Math.random() * 800 - 400
					object.position.y = Math.random() * 800 - 400
					object.position.z = Math.random() * 800 - 400
					// group_source.add(object)
					init_field.push(object)
					clickObjectArr.push(group_source)
					object.name = 'soucePlane'
					// 执行缩小动画
					animateHandle(thunk_five[i].position, {
						x: 0,
						y: 0,
						z: 250,
					}, thunk_five[i], TWEEN.Easing.Linear.None, time || 1000)
					// 删除定时器
					let timer = setTimeout(() => {
						group_source.remove(thunk_five[i])
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				let timer = setTimeout(() => {
					resolve('success')
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay)
		})
	}

	// 这是一个分类后的数据资源变成一个一个字段的动画过程
	const showFieldHandle = (time, delay) => {
		return new Promise((resolve) => {
			let timer_delay = setTimeout(() => {
				let unit = group_source_array.length / 5
				for (let i = 0; i < init_field.length; i++) {
					if (i < unit) {
						group_source.add(init_field[i])
						new TWEEN.Tween({
							x: 250,
							y: 250,
							z: 250
						})
							.to({
								x: init_field[i].position.x,
								y: init_field[i].position.y,
								z: init_field[i].position.z
							}, time || 1000)
							.easing(TWEEN.Easing.Linear.None)
							.onUpdate(obj => {
								init_field[i].position.x = obj.x
								init_field[i].position.y = obj.y
								init_field[i].position.z = obj.z
							}).start()
					} else if (i < unit * 2) {
						group_source.add(init_field[i])
						new TWEEN.Tween({
							x: -250,
							y: 250,
							z: 250
						})
							.to({
								x: init_field[i].position.x,
								y: init_field[i].position.y,
								z: init_field[i].position.z
							}, time || 1000)
							.easing(TWEEN.Easing.Linear.None)
							.onUpdate(obj => {
								init_field[i].position.x = obj.x
								init_field[i].position.y = obj.y
								init_field[i].position.z = obj.z
							}).start()
					} else if (i < unit * 3) {
						group_source.add(init_field[i])
						new TWEEN.Tween({
							x: -250,
							y: -250,
							z: 250
						})
							.to({
								x: init_field[i].position.x,
								y: init_field[i].position.y,
								z: init_field[i].position.z
							}, time || 1000)
							.easing(TWEEN.Easing.Linear.None)
							.onUpdate(obj => {
								init_field[i].position.x = obj.x
								init_field[i].position.y = obj.y
								init_field[i].position.z = obj.z
							}).start()
					} else if (i < unit * 4) {
						group_source.add(init_field[i])
						new TWEEN.Tween({
							x: 250,
							y: -250,
							z: 250
						})
							.to({
								x: init_field[i].position.x,
								y: init_field[i].position.y,
								z: init_field[i].position.z
							}, time || 1000)
							.easing(TWEEN.Easing.Linear.None)
							.onUpdate(obj => {
								init_field[i].position.x = obj.x
								init_field[i].position.y = obj.y
								init_field[i].position.z = obj.z
							}).start()
					} else if (i < unit * 5) {
						group_source.add(init_field[i])
						new TWEEN.Tween({
							x: 0,
							y: 0,
							z: 250
						})
							.to({
								x: init_field[i].position.x,
								y: init_field[i].position.y,
								z: init_field[i].position.z
							}, time || 1000)
							.easing(TWEEN.Easing.Linear.None)
							.onUpdate(obj => {
								init_field[i].position.x = obj.x
								init_field[i].position.y = obj.y
								init_field[i].position.z = obj.z
							}).start()
					}
				}
				let timer = setTimeout(() => {
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}

	// 这是数据源头 --- 缩小为一个点后 ---- 扩散成数据元的动画过程
	const sourceChangeField = async () => {
		let a = await meteorHandle()
		console.log(a)
		// await shrinkDataHandle(3000)
		// showFieldHandle(3000)
		// hasSource = false
	}

	// 切回到观察中心圆球的视角
	const backSourceFn = () => {
		animateHandle({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 0,
			y: 100,
			z: 1400
		}, camera, TWEEN.Easing.Quadratic.Out)
		group_field_info.remove(field_info_plane)
	}

	// 切换会最初状态
	const resetFn = () => {
		animateHandle({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 0,
			y: 100,
			z: 1300
		}, camera, TWEEN.Easing.Quadratic.Out)
		cameraTarget = new THREE.Vector3(0, 0, 100)
		group_field_info.remove(field_info_plane)
	}

	// 切换字段组成形状效果的 --------  过渡效果函数
	const filedChangeTransform = (targets, duration) => {
		for (let i = 0; i < 300; i ++) {
			let object = init_field[i]
			let target = targets[i]
			new TWEEN.Tween(object.position)
				.to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start()
			new TWEEN.Tween(object.rotation)
				.to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start()
		}
	}

	// 切换字段效果的组成形状的 处理函数
	const filedGeometryChangeFn = (name) => {
		currentField = name
		TWEEN.removeAll()
		if (name === 'Sphere') {
			filedChangeTransform(sphere_field, 2000)
		} else if (name === 'Cube') {
			filedChangeTransform(cube_field, 2000)
		} else if (name === 'Annular') {
			filedChangeTransform(annular_field, 2000)
		} else {
			filedChangeTransform(irregular_field, 2000)
		}
	}

	// 流星雨的特效 函数
	const meteorHandle = () => {
		const flData = new Array(5).fill(0).map(()=>{
			return [new THREE.Vector3(1000, 1000, 0), new THREE.Vector3(0, 0, 0), group_flyLine]
		})
		const flList = flData.map(v => new FlyLine(...v, { controlPointText:false }))
		return flList.map((v, k) =>
			new Promise((resolve) => {
				v.fly({ loop: false, delay: (k + 1) * 2000, duration: 1500 })
				let timer = setTimeout(() => {
					resolve('success')
					clearTimeout(timer)
				}, (k + 1) * 2000)
			})
		)
	}

	// 查看生成详情的字段信息 --- 点击
	const fieldInfoFn = () => {
		filedChangeTransform(sphere_field, 1000)
		animateHandle(camera.position, {
			x: 0,
			y: 0,
			z: 500
		}, camera, TWEEN.Easing.Circular.InOut, 2400)
		let timer = setTimeout(() => {
			let souceDiv = document.createElement('div')
			souceDiv.className = 'element_big'
			souceDiv.style.backgroundColor = 'rgb(6, 90, 245)'
			let symbol = document.createElement('div')
			symbol.className = 'symbol_big'
			symbol.textContent = '字段名称：Name'
			souceDiv.appendChild(symbol)
			let nameDiv = document.createElement('div')
			nameDiv.className = 'symbol_big'
			nameDiv.textContent = '中文名称：姓名'
			souceDiv.appendChild(nameDiv)
			let modelDiv = document.createElement('div')
			modelDiv.className = 'symbol_big'
			modelDiv.textContent = '所属模型：暂无'
			souceDiv.appendChild(modelDiv)
			let rangeDiv = document.createElement('div')
			rangeDiv.className = 'symbol_big'
			rangeDiv.textContent = '值域：1 -- 4'
			souceDiv.appendChild(rangeDiv)
			let bornDiv = document.createElement('div')
			bornDiv.className = 'symbol_big'
			bornDiv.textContent = '来源方式：自动生成'
			souceDiv.appendChild(bornDiv)
			let descDiv = document.createElement('div')
			descDiv.className = 'details_big'
			souceDiv.appendChild(descDiv)
			let descTitleDiv = document.createElement('div')
			descTitleDiv.className = 'title_big'
			descTitleDiv.textContent = '描述：'
			descDiv.appendChild(descTitleDiv)
			let infoDiv = document.createElement('div')
			infoDiv.className = 'info_big'
			infoDiv.innerHTML = '<p>大法师是好好干过过过过过过过过各行的哈的火锅店嘎哈的sad公司大好时光的阿斯钢大会时代光华个韩国短时搭嘎说过的话撒多好的感动行阿十多个安徽大的大说过的话阿萨德刚爱上低功耗对哈</p>'
			descDiv.appendChild(infoDiv)
			let typeDiv = document.createElement('div')
			typeDiv.className = 'type_big'
			typeDiv.innerHTML = Math.ceil(Math.random() * 10) > 5 ? '(类型：str)' : '(类型：int)'
			symbol.appendChild(typeDiv)
			field_info_plane = new CSS3DObject(souceDiv)
			group_field_info.add(field_info_plane)
			clearTimeout(timer)
		}, 2500)
	}

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

	// 点击事件 --- 流程 --- div
	const onClickStep = () => {

	}

	// 初始化函数
	const init = () => {
		// scene.add(particleSystem)
		let helper = new THREE.AxesHelper(3000)
		scene.add(helper)
		// const clock = new THREE.Clock()
		// 获取盒子的dom元素
		const container = document.getElementById('box')

		// 加入轨道控制器
		trackballControls = initTrackballControls(camera, renderer)

		// 监听点击模型事件
		container.addEventListener('click', (event) => {
			event.preventDefault()
			console.log(event.target.getAttribute('id'))
			mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 -1
			mouse.y = (event.clientY / renderer.domElement.clientHeight) * 2 -1
			raycaster.setFromCamera(mouse, camera)
			let intersects = raycaster.intersectObjects(clickObjectArr)
			console.log(intersects)
			if (intersects.length > 0) {
				// 说明存在被点击的模型
				// 如果被点击的是中心圆球的话执行动画的切换
				if (intersects.some((item) => (item.object.name === 'centerSphereModel')) && hasSource) {
					// 调用数据源切换到数据元场景的动画合集
					// switch (currentData) {
					// case 1: classifyDataHandle(3000)
					// 	break
					// case 2: sourceChangeField()
					// 	break
					// }
					sourceChangeField()
				} else if (intersects.some((item) => (item.object.name === 'centerSphereModel')) && !event.target.getAttribute('id')) {
					// 调用数据模型切换的动画
					switch (currentField) {
					case 'init': filedGeometryChangeFn('Cube')
						break
					case 'Cube': filedGeometryChangeFn('Annular')
						break
					case 'Annular': filedGeometryChangeFn('Sphere')
						break
					default: filedGeometryChangeFn('init')
					}
				} else if (intersects.some((item) => (item.object.name === 'centerSphereModel')) && event.target.getAttribute('id') && event.target.getAttribute('id').indexOf('plane') !== -1) {
					// 查看数据元详情
					fieldInfoFn()
					setIsShowDiv(false)
				}
			} else {
				// 不存在被点击的模型
				backSourceFn()
				setIsShowDiv(true)
			}
		}, true)

		// 背景星空 ----- 调用函数
		let backgroundCloud = createParticles(2, true, 0.7, 0xffffff, false, 0xffffff, 2000)
		scene.add(backgroundCloud)

		// 相机所在位子
		camera.position.set(0, 100, 1400)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true

		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 1)
		scene.add(light)

		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 1)
		dirLight.position.set(100, 1000, 1600)
		scene.add(dirLight)

		// let mixer
		// 添加整体标题
		new THREE.FontLoader().load('assets/font/FangSong_GB2312_Regular.json', (font) => {
			let geometry = new THREE.TextGeometry('实验室数据治理平台', {
				font: font,
				size: 100,
				height: 5,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 10,
				bevelSize: 8,
				bevelSegments: 5
			})
			geometry.computeBoundingBox()
			geometry.computeVertexNormals()
			geometry = new THREE.BufferGeometry().fromGeometry(geometry)
			let materials = [
				new THREE.MeshPhongMaterial({ color: 0x1F89B5, flatShading: true }), // front
				new THREE.MeshPhongMaterial({ color: 0x1F89B5 }) // side
			]
			let textMesh = new THREE.Mesh(geometry, materials)
			textMesh.position.x = -625
			textMesh.position.y = 0
			textMesh.position.z = 0
			textMesh.rotation.x = 0
			textMesh.rotation.y = 0
			group_title.add(textMesh)
		})

		// 中心的球体 ------- 数据源 -------- 以无数粒子方式展示效果
		const souce_show_handle = () => {

			// 在中心创建一个原型包裹这些立方体
			let sphere = new THREE.SphereGeometry(700, 35, 35)
			let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x1d87c4, wireframe: true })
			let sphere_model = new THREE.Mesh(sphere, sphereMaterial)
			console.log(sphereMaterial.color.getStyle())
			sphere_model.updateMatrix()
			clickObjectArr.push(sphere_model)
			sphere_model.name = 'centerSphereModel'
			group_source_sphere.add(sphere_model)
			// 为这个球体几何加上label文案
			// dynamicAddText(sphere_model, '我是数据源', 0, 800, 0)

			// 创建 长宽高都为40的立方体
			let cube = new THREE.BoxBufferGeometry(40, 40, 40)

			// 循环渲染 400 个立方体盒子 为其添加上纹理
			for (let i = 0; i < 300; i++) {
        	// 材质进行设置
				let cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffd0 })
				let cube_model = new THREE.Mesh(cube, cubeMaterial)
				cube_model.position.x = 400 * (2.0 * Math.random() - 1.0)
				cube_model.position.y = 400 * (2.0 * Math.random() - 1.0)
				cube_model.position.z = 400 * (2.0 * Math.random() - 1.0)
				cube_model.rotation.x = Math.random() * Math.PI
				cube_model.rotation.y = Math.random() * Math.PI
				cube_model.rotation.z = Math.random() * Math.PI
				cube_model.updateMatrix()
				// group_source.add(cube_model)
				group_source_array.push(cube_model)
				// 球体中粒子的动画
				animateCubeTranslate({}, {}, TWEEN.Easing.Linear.None, TWEEN.Easing.Back.Out, cube_model)
			}

			// 动画的第二部 ---- 将这些方块变换成有文字的plan 进行组合
			// 无规则的效果
			for (let i = 0; i < 300; i++) {
				let object = new THREE.Object3D()
				object.position.x = Math.random() * 800 - 400
				object.position.y = Math.random() * 800 - 400
				object.position.z = Math.random() * 800 - 400
				irregular_field.push(object)
			}

			// 矩形的效果
			for (let i = 0; i < 300; i++) {
				let object = new THREE.Object3D()
				object.position.x = ((i % 5) * 100) - 200
				object.position.y = (- (Math.floor(i / 5) % 5) * 100) + 200
				object.position.z = (Math.floor(i / 25)) * 45 - 247
				cube_field.push(object)
			}

			// 环形的效果
			for (let i = 0; i < 300; i++) {
				let theta = i * 0.175 + Math.PI
				let y = -(i * 3) + 450
				let object = new THREE.Object3D()
				object.position.setFromCylindricalCoords(400, theta, y)
				vector.x = object.position.x * 2
				vector.y = object.position.y * 0.2
				vector.z = object.position.z * 2
				object.lookAt(vector)
				annular_field.push(object)
			}

			// 圆形球体的效果
			for (let i = 0; i < 300; i++) {
				let phi = Math.acos(- 1 + (2 * i) / 300)
				let theta = Math.sqrt(300 * Math.PI) * phi
				let object = new THREE.Object3D()
				object.position.setFromSphericalCoords(560, phi, theta)
				vector.copy(object.position).multiplyScalar(2)
				object.lookAt(vector)
				sphere_field.push(object)
			}

		}

		// 初次渲染时候的背景颜色
		renderer.setClearColor(0x000000)
		// 像素点
		renderer.setPixelRatio(window.devicePixelRatio)
		// 场景尺寸
		renderer.setSize(window.innerWidth, window.innerHeight)
		container.appendChild(renderer.domElement)
		// 2d渲染器
		labelRenderer.setSize(window.innerWidth, window.innerHeight)
		labelRenderer.domElement.style.position = 'absolute'
		labelRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(labelRenderer.domElement)
		// 3d文字渲染器
		css3DRenderer.setSize(window.innerWidth, window.innerHeight)
		css3DRenderer.domElement.style.position = 'absolute'
		css3DRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(css3DRenderer.domElement)
		const animate = () => {
			// 球体中粒子的动画
			// let time = clock.getDelta()
			// update 推进混合器时间并更新动画
			// if (mixer) {
			// 	mixer.update(time)
			// }
			// 必须写的
			requestAnimationFrame(animate)
			trackballControls.update(new THREE.Clock().getDelta())
			// 必须再此调用
			TWEEN.update()
			// 数据源展示中 圆球的转动效果
			group_source_sphere.rotation.y += 0.001
			if (!hasSource) {
				group_source.rotation.y += 0.003
			}
			group_rotate.rotation.y += 0.002
			// 设置相机镜头的朝向
			camera.lookAt(cameraTarget)
			// 渲染
			renderer.render(scene, camera)
			labelRenderer.render(scene, camera)
			css3DRenderer.render(scene, camera)
		}
		souce_show_handle()
		animate()
	}
	return (
		<div>
			{isShowDiv ? (
				<div className='plane_container'>
					<div className='plane_left'>
						{/* <DataElement /> */}
						<DataAssets />
					</div>
					<div className='plane_right'>
						<div className='operationBar'>
							<div className='title'>
								<p>数据流程</p>
							</div>
							<div className='divider'/>
							<div onClick={onClickStep} className='stepButton'>
								<img src='assets/images/1.svg' className='opr_icon'/>
								<span>1. 数据资源</span>
							</div>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<div onClick={onClickStep} className='stepButton'>
								<img src='assets/images/1.svg' className='opr_icon'/>
								<span>2. 数据元</span>
							</div>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<img src='assets/images/arrow.svg' className='opr_arrow'/>
							<div onClick={onClickStep} className='stepButton'>
								<img src='assets/images/1.svg' className='opr_icon'/>
								<span>3. 数据资产</span>
							</div>
						</div>
					</div>
				</div>
			) : null}
			<div id='box'></div>
		</div>
	)
}

export default FinalPage

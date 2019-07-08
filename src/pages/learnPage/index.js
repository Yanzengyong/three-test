/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import TWEEN from '@tweenjs/tween.js'
import Orbitcontrols from 'three-orbitcontrols'

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

// 创建可以被点击的纹理数组
let clickObjectArr = []

function ProdPage () {
	useEffect(() => {
		camera = new THREE.PerspectiveCamera(75, document.getElementById('content').offsetWidth / document.getElementById('content').offsetHeight, 0.1, 3000)
		init()
	}, [])


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
		camera.position.set(650, 1000, 350)

		// 设置环境光
		let light = new THREE.AmbientLight(0xffffff, 1)
		scene.add(light)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true


		var curve = new THREE.QuadraticBezierCurve3(
			new THREE.Vector3(0, 0, -200),
			new THREE.Vector3(350, 0, 0),
			new THREE.Vector3(0, 0, 200)
		)

		var points = curve.getPoints(50)
		var geometry = new THREE.BufferGeometry().setFromPoints(points)

		var material = new THREE.LineBasicMaterial({ color : 0xff0000 })

		// Create the final object to add to the scene
		var curveObject = new THREE.Line(geometry, material)
		scene.add(curveObject)


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
			<div id='content' className='prod_content'>
				<div id='canvas'></div>
			</div>
		</div>
	)
}

export default ProdPage

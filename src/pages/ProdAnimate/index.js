import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import './index.scss'
import Orbitcontrols from 'three-orbitcontrols'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import TWEEN from '@tweenjs/tween.js'

let scene = new THREE.Scene() // 创建场景
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000) // 创建透视相机
let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }) // 创建渲染器
let cameraTarget = new THREE.Vector3(0, 0, 100)

function ModelPage () {
	useEffect(() => {
		console.log(TWEEN)
		init()
	})
	// 相机控制函数
	const animateCamera = (current, target, type, time) => {
		new TWEEN.Tween({
			x: current.x,
			y: current.y,
			z: current.z
		})
			.to({
				x: target.x,
				y: target.y,
				z: target.z
			}, time || 1000)
			.easing(type)
			.onUpdate(obj => {
				camera.position.x = obj.x
				camera.position.y = obj.y
				camera.position.z = obj.z
			}).start()
	}
	// 数据源小方块飞行的效果
	const animateCubeFly = (current, target, type, cube) => {
		new TWEEN.Tween({
			x: current.x,
			y: current.y,
			z: current.z,
		})
			.delay(1000)
			.to({
				x: target.x,
				y: target.y,
				z: target.z
			}, 2600)
			.easing(type)
			.repeat(Infinity)
			.onUpdate(obj => {
				cube.position.x = obj.x
				cube.position.y = obj.y
				cube.position.z = obj.z
			}).start()
	}
	// 数据源 小方块在球体中的循环移动的效果
	const animateCubeTranslate = (current, target, type1, type2, cube) => {
		const uploadHandle = (obj) => {
			cube.position.x = obj.x
			cube.position.y = obj.y
			cube.position.z = obj.z
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
			.onUpdate(obj => {
				uploadHandle(obj)
			})
		let translate2 = new TWEEN.Tween(position)
			.to(target, 3600)
			.easing(type2)
			.onUpdate(obj => {
				uploadHandle(obj)
			})
		translate1.chain(translate2)
		translate2.chain(translate1)
		translate1.start()
	}
	// 切换视角
	const clickFn = () => {
		animateCamera({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 1200,
			y: 800,
			z: 600
		}, TWEEN.Easing.Circular.InOut, 1200)
		cameraTarget = new THREE.Vector3(1200, 700, 100)
	}
	// 切换会最初状态
	const resetFn = () => {
		animateCamera({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 0,
			y: 0,
			z: 1400
		}, TWEEN.Easing.Quadratic.Out)
		cameraTarget = new THREE.Vector3(0, 0, 100)
	}
	// 初始化函数
	const init = () => {
		let helper = new THREE.AxesHelper(1000)
		scene.add(helper)
		const clock = new THREE.Clock()
		// 获取盒子的dom元素
		const container = document.getElementById('box')
		// 创建数据源组
		let group_source = new THREE.Group()
		scene.add(group_source)
		// 创建数据源组 ----- 球形
		let group_source_sphere = new THREE.Group()
		scene.add(group_source_sphere)
		// 创建数据源组 ----- 球体 --- 上方的文字
		let group_source_sphere_text = new THREE.Group()
		group_source_sphere_text.position.set(0, 800, 0)
		scene.add(group_source_sphere_text)
		// 创建加工组
		let group_process = new THREE.Group()
		group_process.position.set(1200, 800, -800)
		scene.add(group_process)
		// 给场景添加星空盒子纹理
		new THREE.CubeTextureLoader()
			.setPath('assets/images/')
			.load([
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg' 		// 六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
			], (texture) => {
				scene.background = texture // 添加背景到场景
			})
		// 相机所在位子
		camera.position.set(0, 0, 1400)
		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true
		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 3)
		scene.add(light)
		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 16)
		dirLight.position.set(100, 1000, 1600)
		// let dirLight_helper = new THREE.DirectionalLightHelper(dirLight, 2)
		// scene.add(dirLight_helper)
		scene.add(dirLight)
		// 第一屏 ------- 数据源 -------- 以无数粒子方式展示效果
		const souce_show_handle = () => {
			// 在中心创建一个原型包裹这些立方体
			let sphere = new THREE.SphereGeometry(670, 100, 100)
			let sphereMaterial = new THREE.MeshNormalMaterial({ opacity: .7, wireframe: true })
			let sphere_model = new THREE.Mesh(sphere, sphereMaterial)
			sphere_model.updateMatrix()
			group_source_sphere.add(sphere_model)
			// 创建 长宽高都为40的立方体
			let cube = new THREE.BoxBufferGeometry(40, 40, 40)
			// 材质进行设置
			let cubeMaterial = new THREE.MeshNormalMaterial({ opacity: .9, transparent: true })
			// 循环渲染 400 个立方体盒子 为其添加上纹理
			for (let i = 0; i < 520; i++) {
				let cube_model = new THREE.Mesh(cube, cubeMaterial)
				cube_model.position.x = 360 * (2.0 * Math.random() - 1.0)
				cube_model.position.y = 360 * (2.0 * Math.random() - 1.0)
				cube_model.position.z = 360 * (2.0 * Math.random() - 1.0)
				cube_model.rotation.x = Math.random() * Math.PI
				cube_model.rotation.y = Math.random() * Math.PI
				cube_model.rotation.z = Math.random() * Math.PI
				cube_model.updateMatrix()
				group_source.add(cube_model)
				// 球体中粒子的动画
				animateCubeTranslate({
					x: cube_model.position.x,
					y: cube_model.position.y,
					z: cube_model.position.z,
				}, {
					x: cube_model.position.x,
					y: cube_model.position.y,
					z: cube_model.position.z,
				}, TWEEN.Easing.Linear.None, TWEEN.Easing.Back.Out, cube_model)
				// 飞行动画
				if (i > 510) {
					animateCubeFly({
						x: cube_model.position.x,
						y: cube_model.position.y,
						z: cube_model.position.z
					}, {
						x: 1190,
						y: 800,
						z: -800
					}, TWEEN.Easing.Linear.None, cube_model)
				}
			}
			// 给这个球体添加上文字
			let materials = [
				new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
				new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
			]
			new THREE.FontLoader().load('assets/font/gentilis_bold.typeface.json', font => {
				var geometry = new THREE.TextGeometry('souce data', {
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
				let textMesh1 = new THREE.Mesh(geometry, materials)
				textMesh1.position.x = -300
				textMesh1.position.y = 0
				textMesh1.position.z = 0
				textMesh1.rotation.x = 0
				textMesh1.rotation.y = 0
				group_source_sphere_text.add(textMesh1)
			})
		}
		let robot_model_mixer
		new GLTFLoader().load('assets/utilModel/scene.gltf',
			// onLoad
			gltf => {
				gltf.scene.scale.set(16, 16, 16)
				gltf.scene.position.y = -850
				group_process.add(gltf.scene)
				robot_model_mixer = new THREE.AnimationMixer(gltf.scene)
				robot_model_mixer.clipAction(gltf.animations[0]).setDuration(12).play()
			}, xhr => {
				console.log(xhr)
			}, err => {
				console.error('Error loading glTF asset', err)
			}
		)

		// 初次渲染时候的背景颜色
		renderer.setClearColor(0x000000)
		// 像素点
		renderer.setPixelRatio(window.devicePixelRatio)
		// 场景尺寸
		renderer.setSize(window.innerWidth, window.innerHeight)
		container.appendChild(renderer.domElement)
		const animate = () => {
			let time = clock.getDelta()
			// update 推进混合器时间并更新动画
			if (robot_model_mixer) {
				robot_model_mixer.update(time)
			}
			// 必须写的
			requestAnimationFrame(animate)
			// 必须再此调用
			TWEEN.update()
			// 数据源展示中 圆球的转动效果
			group_source_sphere.rotation.y += 0.005
			// 设置相机镜头的朝向
			camera.lookAt(cameraTarget)
			// 渲染
			renderer.render(scene, camera)
		}
		souce_show_handle()
		animate()
	}
	return (
		<div id='box'>
			<button onClick={clickFn}>click</button>
			<button onClick={resetFn}>reset</button>
			<div className='illustration'>
        这是一段讲解
			</div>
		</div>
	)
}

export default ModelPage

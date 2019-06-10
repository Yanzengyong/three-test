import React, { useEffect } from 'react'
import * as THREE from 'three'
import Orbitcontrols from 'three-orbitcontrols'
import Stats from '../../assets/others/stats.min'
import './index.scss'

function MainPage () {
	useEffect(() => {
		initThree()
	}, [])

	const initThree = () => {
		const container = document.getElementById('WebGL-output')
		let	scene = new THREE.Scene()
		let group = new THREE.Group()
		let camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 2000)
		let stats = new Stats()
		let render = new THREE.WebGLRenderer()
		const init = () => {
		// 创建场景和组
			scene.add(group)
			// 创建透视相机
			// camera.position.x = -10
			// camera.position.y = 15
			// camera.position.z = 500
			camera.position.set(-10, 15, 500)
			camera.lookAt(scene.position)
			// 相机作为orbitcontrol的参数，支持鼠标交互
			let orbitControls = new Orbitcontrols(camera)
			orbitControls.autoRotate = false
			// 添加光源：环境光（氛围灯）和平行光源（射入光源）
			let ambi = new THREE.AmbientLight(0x000000) // 氛围灯
			scene.add(ambi)
			let spotLight = new THREE.DirectionalLight(0xffffff) // 射入光源
			spotLight.position.set(550, 100, 550)
			spotLight.intensity = 0.6 // 光的强度
			scene.add(spotLight)
			// 创建模型和材质
			let loader = new THREE.TextureLoader() // 纹理loader
			let planetTexture = require('../../assets/images/ironman.jpg')
			loader.load(planetTexture, (texture) => {
				let geometry = new THREE.SphereGeometry(200, 300, 100) // 创建一个球形几何体
				let material = new THREE.MeshBasicMaterial({ map: texture }) // 创建基础为网格基础材料
				let mesh = new THREE.Mesh(geometry, material)
				group.add(mesh)
			})
			// let geometry = new THREE.BoxGeometry(200, 200, 200) // 创建一个球形几何体
			// let material = new THREE.MeshBasicMaterial({ color: '#2969a0', overdraw: 0.3 }) // 创建基础为网格基础材料
			// let mesh = new THREE.Mesh(geometry, material)
			// group.add(mesh)
			// 渲染
			render.setClearColor(0xffffff)
			render.setPixelRatio(window.devicePixelRatio)
			console.log(container.clientWidth)
			console.log(container.clientHeight)
			render.setSize(container.clientWidth, container.clientHeight)
			render.setClearColor(0x9acd32, 0.3)
			container.appendChild(render.domElement)
			container.appendChild(stats.dom)
		}
		const animate = () => {
			requestAnimationFrame(animate)
			group.rotation.y -= 0.005 // 这行可以控制地球自转
			render.render(scene, camera)
			stats.update()
		}
		init()
		animate()
	}
	return (
		<div className='webgl_box' id='WebGL-output'>
			{/* <p>hello asdasdsd</p> */}
		</div>
	)
}

export default MainPage

import React, { useEffect } from 'react'
import * as THREE from 'three'
import './index.scss'

function FontPage () {
	useEffect(() => {
		init()
	}, [])
	const init = () => {
		const container = document.querySelector('#box')
		let scene = new THREE.Scene()
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600)
		let renderer = new THREE.WebGLRenderer({ antialias: true })
		let dirLight = new THREE.DirectionalLight(0xffffff, 1)
		let pointLight = new THREE.PointLight(0xffffff, 1.5)

		let group = new THREE.Group()

		// 场景的设置
		let textureBg = new THREE.CubeTextureLoader()
			.setPath('assets/images/')
			.load([
				'ironman.jpg',
				'ironman.jpg',
				'ironman.jpg',
				'ironman.jpg',
				'ironman.jpg',
				'ironman.jpg'
			], (texture) => {
				scene.background = texture
			})
		console.log(textureBg)
		// textureBg.wrapS = 1024
		// textureBg.wrapT = 1024
		// // textureBg.center.set(0.5, 0.5)
		// // scene.background = new THREE.Color(0x9acd32)
		// // 灯光
		dirLight.position.set(0, 0, 1).normalize()
		scene.add(dirLight)
		pointLight.position.set(0, 100, 90)
		scene.add(pointLight)
		// 组的设置
		group.position.y = 100
		scene.add(group)
		new THREE.TextureLoader().load('assets/images/ironman.jpg', (texture) => {
			let geometry = new THREE.BoxGeometry(200, 300, 100) // 创建一个球形几何体 SphereGeometry
			let material = new THREE.MeshStandardMaterial({ map: texture }) // 创建基础为网格基础材料
			let mesh = new THREE.Mesh(geometry, material)
			// mesh.rotation.x = 1
			console.log(texture)
			// scene.background = texture
			group.add(mesh)
		})
		// 相机的设置
		camera.position.set(100, 100, 500)
		// 渲染器的设置
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setClearColor(0xeeeeee)
		// 将渲染器放入容器中
		container.appendChild(renderer.domElement)
		const animate = () => {
			scene.background = textureBg
			requestAnimationFrame(animate)
			group.rotation.y += 0.0015
			// camera.lookAt(cameraTarget)
			renderer.clear()
			renderer.render(scene, camera)
		}
		animate()
	}
	return (
		<div id='box'></div>
	)
}

export default FontPage

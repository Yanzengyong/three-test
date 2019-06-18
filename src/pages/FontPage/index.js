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
		let helper1 = new THREE.CameraHelper(dirLight.shadow.camera)
		scene.add(helper1)
		var helper = new THREE.AxesHelper(1000)
		scene.add(helper)
		// 场景的设置
		new THREE.CubeTextureLoader()
			.setPath('assets/images/')
			.load([
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg'
			], (texture) => {
				scene.background = texture
			})
		// 灯光
		dirLight.position.set(0, 0, 1).normalize()
		scene.add(dirLight)
		pointLight.position.set(0, 0, 90)
		scene.add(pointLight)
		// 组的设置
		group.position.y = 100
		scene.add(group)
		// new THREE.TextureLoader().load('assets/images/ironman.jpg', (texture) => {
		// 	let geometry = new THREE.BoxGeometry(200, 300, 100) // 创建一个球形几何体 SphereGeometry
		// 	let material = new THREE.MeshStandardMaterial({ map: texture }) // 创建基础为网格基础材料
		// 	let mesh = new THREE.Mesh(geometry, material)
		// 	// mesh.rotation.x = 1
		// 	console.log(texture)
		// 	// scene.background = texture
		// 	group.add(mesh)
		// })
		var loader = new THREE.FontLoader()
		let materials = [
			new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
			new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
		]
		loader.load('assets/font/gentilis_bold.typeface.json', function (font) {
			var geometry = new THREE.TextGeometry('Hello three.js!', {
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
			textMesh1.position.x = -400
			textMesh1.position.y = -160
			textMesh1.position.z = 0
			textMesh1.rotation.x = 0
			textMesh1.rotation.y = 0
			group.add(textMesh1)
		})

		// 相机的设置
		camera.position.set(0, 0, 500)
		// 渲染器的设置
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setClearColor(0xeeeeee)
		// 将渲染器放入容器中
		container.appendChild(renderer.domElement)
		const animate = () => {
			requestAnimationFrame(animate)
			// group.rotation.y += 0.0015
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

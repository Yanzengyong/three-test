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
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
		let renderer = new THREE.WebGLRenderer({ antialias: true })
		let dirLight = new THREE.DirectionalLight(0xffffff, 0.125)
		let pointLight = new THREE.PointLight(0xffffff, 1.5)
		let materials = [
			new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
			new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
		]

		let group = new THREE.Group()
		const threeInit = () => {
			// 场景的设置
			scene.background = new THREE.Color(0x9acd32)
			scene.fog = new THREE.Fog(0x000000, 250, 1400)
			// 灯光
			dirLight.position.set(0, 0, 1).normalize()
			scene.add(dirLight)
			pointLight.position.set(0, 100, 90)
			scene.add(pointLight)
			// 组的设置
			group.position.y = 100
			scene.add(group)
			var fontLoader = new THREE.FontLoader()
			fontLoader.load('assets/font/gentilis_bold.typeface.json', function (response) {
				let textGeo = new THREE.TextGeometry('three', {
					font: response,
					size: 70,
					height: 20,
					curveSegments: 4,
					bevelThickness: 2,
					bevelSize: 1.5,
					bevelEnabled: true
				})
				textGeo.computeBoundingBox()
				textGeo.computeVertexNormals()
				let textMesh1 = new THREE.Mesh(textGeo, materials)
				group.add(textMesh1)
			})
			// 相机的设置
			camera.position.set(0, 400, 0)
			// 渲染器的设置
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(window.innerWidth, window.innerHeight)
			// 将渲染器放入容器中
			container.appendChild(renderer.domElement)
		}
		const animate = () => {
			requestAnimationFrame(animate)
			group.rotation.y += 0.15
			// camera.lookAt(cameraTarget)
			renderer.clear()
			renderer.render(scene, camera)
			// stats.update()
		}
		threeInit()
		animate()
	}
	return (
		<div id='box'></div>
	)
}

export default FontPage

import React, { useEffect } from 'react'
import * as THREE from 'three'
import Orbitcontrols from 'three-orbitcontrols'
import Stats from '../../utils/stats.min'
import './index.scss'

function MainPage () {
	useEffect(() => {
		initThree()
	}, [])

	const initThree = () => {
		const container = document.getElementById('WebGL-output')
		let	scene = new THREE.Scene()
		let group = new THREE.Group()
		let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50000)
		let stats = new Stats()
		let render = new THREE.WebGLRenderer()
		let cameraTarget = new THREE.Vector3(10, 10, 50)
		const init = () => {
			//六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。

			// scene.background = new THREE.CubeTextureLoader()
			// 	.setPath('assets/images/')
			// 	.load([
			// 		'ironman.jpg',
			// 		'ironman.jpg',
			// 		'ironman.jpg',
			// 		'ironman.jpg',
			// 		'ironman.jpg',
			// 		'ironman.jpg'
			// 	])
			// 创建场景和组
			scene.add(group)
			// 创建透视相机
			camera.position.set(10, 15, 500)
			// 相机作为orbitcontrol的参数，支持鼠标交互
			let orbitControls = new Orbitcontrols(camera)
			orbitControls.autoRotate = false
      				// LIGHTS
			var dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
			dirLight.position.set(0, 0, 1).normalize()
			scene.add(dirLight)
			var pointLight = new THREE.PointLight(0xffffff, 1.5)
			pointLight.position.set(0, 100, 90)
			scene.add(pointLight)
			// 添加光源：环境光（氛围灯）和平行光源（射入光源）
			// let ambi = new THREE.AmbientLight(0x000000) // 氛围灯
			// scene.add(ambi)
			// let spotLight = new THREE.DirectionalLight(0xffffff) // 射入光源
			// spotLight.position.set(550, 100, 550)
			// spotLight.intensity = 0.6 // 光的强度
			// scene.add(spotLight)
			// 创建模型和材质
			// 纹理loader
			let texture = new THREE.TextureLoader().load('assets/images/ironman.jpg', (texture) => {
				let geometry = new THREE.BoxGeometry(200, 300, 100) // 创建一个球形几何体 SphereGeometry
				let material = new THREE.MeshStandardMaterial({ map: texture }) // 创建基础为网格基础材料
				let mesh = new THREE.Mesh(geometry, material)
				// console.log(mesh)
				texture.wrapS = THREE.RepeatWrapping
				texture.wrapT = THREE.RepeatWrapping
				texture.repeat.set(4, 4)
				group.add(mesh)
			})
			// let geometry = new THREE.BoxGeometry(200, 200, 200) // 创建一个球形几何体
			// let material = new THREE.MeshBasicMaterial({ color: '#2969a0', overdraw: 0.3 }) // 创建基础为网格基础材料
			// let mesh = new THREE.Mesh(geometry, material)
			// group.add(mesh)
			// 创建线（被几何体挡住了）
			let geometry_line = new THREE.Geometry()
			let material_line = new THREE.LineBasicMaterial({ color: 0x0000ff })
			geometry_line.vertices.push(new THREE.Vector3(-100, 0, 0))
			geometry_line.vertices.push(new THREE.Vector3(0, 100, 0))
			geometry_line.vertices.push(new THREE.Vector3(100, 0, 0))
			let line = new THREE.Line(geometry_line, material_line)
			// console.log(line)
			// group.add(line)

			// console.log(Text_3D)
			// 渲染
			render.setClearColor(0xffffff)
			render.setPixelRatio(window.devicePixelRatio)
			render.setSize(window.innerWidth/2, window.innerHeight/2)
			render.setClearColor(0x9acd32, 0.3)

			container.appendChild(render.domElement)
			container.appendChild(stats.dom)

		}
		const animate = () => {
			requestAnimationFrame(animate)
			// group.rotation.y -= 0.005 // 这行可以控制地球自转
			// group.rotation.x += 0.01
			group.rotation.y += 0.01
			camera.lookAt(cameraTarget)
			render.render(scene, camera)
			stats.update()
		}
		init()
		animate()
	}
	return (
		<div className='webgl_box' id='WebGL-output'>
			<div id="info">Description</div>
		</div>
	)
}

export default MainPage

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
		let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50000)
		let stats = new Stats()
		let render = new THREE.WebGLRenderer()
		const init = () => {
		// 创建场景和组
			scene.add(group)
			// 创建透视相机
			camera.position.set(10, 15, 500)
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
			// 纹理loader
			let texture = new THREE.TextureLoader().load(require('../../assets/images/ironman.jpg'), (texture) => {
				let geometry = new THREE.BoxGeometry(200, 300, 100) // 创建一个球形几何体 SphereGeometry
				let material = new THREE.MeshBasicMaterial({ map: texture }) // 创建基础为网格基础材料
				let mesh = new THREE.Mesh(geometry, material)
				// group.add(mesh)
			})
			texture.wrapS = THREE.RepeatWrapping
			texture.wrapT = THREE.RepeatWrapping
			texture.repeat.set(4, 4)
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
			group.add(line)
			// 创建几何文字
			// new THREE.FontLoader().load('../../assets/font/gentilis_bold.typeface.json', function (font) {
			// 	let geometry = new THREE.TextGeometry('Hello three.js!', {
			// 		font: font,
			// 		size: 80,
			// 		height: 5,
			// 		curveSegments: 12,
			// 		bevelEnabled: true,
			// 		bevelThickness: 10,
			// 		bevelSize: 8,
			// 		bevelSegments: 5
			// 	})
			// 	let materials = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true })
			// 	let textMesh1 = new THREE.Mesh(geometry, materials)

			// 	group.add(textMesh1)
			// })


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
			group.rotation.x += 0.01
			group.rotation.y += 0.01
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

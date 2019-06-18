import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
// import Stats from '../../utils/stats.min.js'
import './index.scss'
import Orbitcontrols from 'three-orbitcontrols'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function ModelPage () {
	useEffect(() => {
		init()
	})
	let manager = new THREE.LoadingManager()
	let scene = new THREE.Scene()
	let loader = new GLTFLoader(manager)
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
	let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
	let cameraTarget = new THREE.Vector3(0, 0, 0)
	const init = () => {
		const container = document.getElementById('box')
		//给场景添加天空盒子纹理
		let cubeTextureBg = new THREE.CubeTextureLoader()
		cubeTextureBg.setPath('assets/images/').load([
			'xk2.jpg', 'xk2.jpg',
			'xk2.jpg', 'xk2.jpg',
			'xk2.jpg', 'xk2.jpg'
		], cubeTexture => {
			scene.background = cubeTexture
		})
		cubeTextureBg.minFilter = THREE.NearestFilter
		camera.position.set(600, 250, 1000)
		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.autoRotate = false
		let light = new THREE.AmbientLight(0x000000, 3) // soft white light
		scene.add(light)
		let hemiLight = new THREE.HemisphereLight(0x005aff, 0xffffff, 22) // 蓝色到白色
		hemiLight.position.set(0, 300, 0)
		// scene.add(hemiLight)
		let dirLight = new THREE.DirectionalLight(0xffffff, 16)
		dirLight.position.set(100, 100, 400)
		let dirLight_helper = new THREE.DirectionalLightHelper(dirLight, 5)
		scene.add(dirLight_helper)
		dirLight.shadow.camera.near = 20 //产生阴影的最近距离
		dirLight.shadow.camera.far = 1000 //产生阴影的最远距离
		dirLight.shadow.camera.left = -800 //产生阴影距离位置的最左边位置
		dirLight.shadow.camera.right = 800 //最右边
		dirLight.shadow.camera.top = 600 //最上边
		dirLight.shadow.camera.bottom = -600 //最下面
		dirLight.shadow.mapSize.height = 1024
		dirLight.shadow.mapSize.width = 1024
		dirLight.castShadow = true
		scene.add(dirLight)
		//辅助工具
		new THREE.TextureLoader().load('assets/images/ironman.jpg', (texture) => {
			let geometry = new THREE.BoxGeometry(200, 300, 100) // 创建一个球形几何体 SphereGeometry
			let material = new THREE.MeshBasicMaterial({ map: texture }) // 创建基础为网格基础材料
			let mesh = new THREE.Mesh(geometry, material)
			mesh.position.set(400, 300, -50)
			mesh.castShadow = true
			scene.add(mesh)
		})
		var helper = new THREE.AxesHelper(1000)
		scene.add(helper)
		//六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
		loader.load('assets/other/scene.gltf',
			// onLoad
			gltf => {
				scene.add(gltf.scene)
				gltf.scene.traverse(object => {
					object.castShadow = true
				})
			}, xhr => {
				// console.log((xhr.loaded / xhr.total * 100) + '% loaded')
			}, err => {
				console.error('Error loading glTF asset', err)
			}
		)

		let plane = new THREE.PlaneGeometry(1300, 1300)
		let plane2 = new THREE.PlaneGeometry(1300, 1300)
		let plane3 = new THREE.PlaneGeometry(1300, 1300)
		let material = new THREE.MeshLambertMaterial({ color: 0xffffff })
		let planeMesh = new THREE.Mesh(plane, material)
		let planeMesh2 = new THREE.Mesh(plane2, material)
		let planeMesh3 = new THREE.Mesh(plane3, material)
		planeMesh.position.set(0, -300, 20)
		planeMesh2.position.set(0, 300, 20)
		planeMesh3.position.set(0, 0, -400)
		planeMesh.rotation.x = - 0.5 * Math.PI
		planeMesh.rotation.y = 0
		planeMesh2.rotation.x = - 0.5 * Math.PI
		planeMesh2.rotation.y = 0
		planeMesh.receiveShadow = true
		planeMesh3.receiveShadow = true
		scene.add(planeMesh)
		// scene.add(planeMesh2)
		scene.add(planeMesh3)

		let helper1 = new THREE.CameraHelper(dirLight.shadow.camera)
		scene.add(helper1)
		renderer.setClearColor(0x000000)
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap
		renderer.gammaOutput = true
		renderer.gammaFactor = 2.2
		container.appendChild(renderer.domElement)
		const animate = () => {
			requestAnimationFrame(animate)
			camera.lookAt(cameraTarget)
			// scene.rotation.y += 0.001
			renderer.render(scene, camera)
			// stats.update()
		}
		animate()
	}
	return (
		<div id='box'>

		</div>
	)
}

export default ModelPage

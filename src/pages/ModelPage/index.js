import React, { useEffect } from 'react'
import * as THREE from 'three'
// import Stats from '../../utils/stats.min.js'
import './index.scss'
import Orbitcontrols from 'three-orbitcontrols'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function ModelPage () {
	useEffect(() => {
		init()
	})
	let scene = new THREE.Scene()
	let loader = new GLTFLoader()
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
	let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
	let cameraTarget = new THREE.Vector3(0, 0, 50)
	const init = () => {
		const container = document.getElementById('box')
		const initThree = () => {
			scene.background = new THREE.Color(0x9acd32)
			camera.position.set(10, 15, 600)
			// 相机作为orbitcontrol的参数，支持鼠标交互
			let orbitControls = new Orbitcontrols(camera)
			orbitControls.autoRotate = false
			let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
			hemiLight.position.set(0, 500, 0)
			scene.add(hemiLight)
			let dirLight = new THREE.DirectionalLight(0xffffff, 6)
			dirLight.position.set(60, 100, 2000)
			dirLight.position.multiplyScalar(500)
			dirLight.name = 'dirlight'
			dirLight.castShadow = true
			dirLight.shadow.mapSize.width = dirLight.shadow.mapSize.height = 1024*2
			const d = 700
			dirLight.shadow.camera.left = -d
			dirLight.shadow.camera.right = d
			dirLight.shadow.camera.top = d
			dirLight.shadow.camera.bottom = -d

			dirLight.shadow.camera.far = 500
			dirLight.shadow.bias = -0.0001

			scene.add(dirLight)

			loader.load('assets/other/scene.gltf',
				// onLoad
				gltf => {
					console.log(gltf)
					scene.add(gltf.scene)

					gltf.scene.traverse(object => {
						if(object.isMesh) object.castShadow = true
					})
				}, xhr => {
					console.log(xhr)
				}, err => {
					console.error('Error loading glTF asset', err)
				}
			)
			renderer.setClearColor(0x000000)
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(window.innerWidth, window.innerHeight)
			renderer.gammaOutput = true
			renderer.gammaFactor = 2.2
			container.appendChild(renderer.domElement)
		}
		const animate = () => {
			requestAnimationFrame(animate)
			camera.lookAt(cameraTarget)
			scene.rotation.y += 0.001
			renderer.render(scene, camera)
			// stats.update()
		}
		initThree()
		animate()
	}
	return (
		<div id='box'></div>
	)
}

export default ModelPage

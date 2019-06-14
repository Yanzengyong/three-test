import React, { useEffect } from 'react'
import * as THREE from 'three'
// import Stats from '../../assets/others/stats.min'
import './index.scss'
// const three = require('three/examples/js/loaders/GLTFLoader')
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function ModelPage () {
	useEffect(() => {
		new GLTFLoader().load(require('../../assets/others/scene.gltf'), gltf => {
			console.log(gltf)
		}, xhr => {
			console.log(xhr)
		}, err => {
			console.error('Error loading glTF asset', err)
		}
		)
		init()
	})
	let scene = new THREE.Scene()
	let loader = new GLTFLoader()
	let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 2000)

	const init = () => {
		const container = document.getElementById('box')
		scene.background = new THREE.Color(0x9acd32)

		let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
		hemiLight.position.set(0, 500, 0)
		scene.add(hemiLight)

		let dirLight = new THREE.DirectionalLight(0xffffff, 1)
		dirLight.position.set(-1, 0.75, 1)
		dirLight.position.multiplyScalar(50)
		dirLight.name = 'dirlight'

		dirLight.castShadow = true
		dirLight.shadow.mapSize.width = dirLight.shadow.mapSize.height = 1024*2

		const d = 300
		dirLight.shadow.camera.left = -d
		dirLight.shadow.camera.right = d
		dirLight.shadow.camera.top = d
		dirLight.shadow.camera.bottom = -d

		dirLight.shadow.camera.far = 3500
		dirLight.shadow.bias = -0.0001

		scene.add(dirLight)

		loader.load(require('../../assets/others/scene.gltf'),

			// onLoad
			gltf => {

				scene.add(gltf.scene)

				// gltf.scene.traverse(object => {
				// 	if(object.isMesh) object.castShadow = true
				// })

				// resolve()

			},

			// onProgress
			xhr => { console.log(xhr) },

			// onError
			err => {
				console.error('Error loading glTF asset', err)
				// reject()
			}
		)

		renderer.setClearColor(0x000000, 0)
		renderer.setSize(window.innerHeight, window.innerHeight)
		renderer.gammaOutput = true
		renderer.gammaFactor = 2.2
		container.appendChild(renderer.domElement)
		renderer.render(scene, camera)
		// put canvas in div

	}
	return (
		<div id='box'></div>
	)
}

export default ModelPage

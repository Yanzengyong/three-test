import * as THREE from 'three'

export default class createCloud {
	constructor () {
		this.radius = 150
	}
	createCloudGrid () {
		let geometry = new THREE.SphereGeometry(1.3 * this.radius, 66, 66)
		let map = new THREE.TextureLoader().load('assets/images/clouds.jpg')
		map.wrapT = THREE.ClampToEdgeWrapping
		map.wrapS = THREE.ClampToEdgeWrapping
		let material = new THREE.MeshMatcapMaterial({
			transparent: true,
			map: map,
			alphaProportion: .25,
			color: new THREE.Color(0xffff00),
			opacity: 0.3,
			gridOffsetSpeed: .6
		})
		let mesh = new THREE.Mesh(geometry, material)
		return mesh
	}
}

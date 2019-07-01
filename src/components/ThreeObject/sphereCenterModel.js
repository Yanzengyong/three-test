import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

export default class SphereCenterModel {
	constructor (opt = {}) {
		this.group = this.getGeometry(opt.sphereRadius, opt.widthSegments, opt.heightSegments, opt.meshObj)
	}
	getGeometry (radius, widthSegments, heightSegments, meshObj) {
		const group = new THREE.Group()
		const sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
		const sphereMaterial = new THREE.MeshLambertMaterial(meshObj)
		const sphereModel = new THREE.Mesh(sphere, sphereMaterial)
		const geometry_in = new THREE.TorusGeometry(radius + 50, 1, 30, 200)
		const material = new THREE.MeshMatcapMaterial({ color: 0xcb7713, transparent: true, opacity: 1 })
		const torus_in = new THREE.Mesh(geometry_in, material)
		const geometry3_side = new THREE.TorusGeometry(radius + 70, 2, 30, 200)
		const torus_side = new THREE.Mesh(geometry3_side, material)
		group.add(sphereModel)
		group.add(torus_in)
		group.add(torus_side)
		return group
	}
}

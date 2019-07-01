import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

export default class SphereCenterModel {
	constructor (opt = {}) {
		// this.container = container
		this.group = this.getGeometry(opt.sphereRadius, opt.widthSegments, opt.heightSegments, opt.meshObj)
	}
	getGeometry (radius, widthSegments, heightSegments, meshObj) {
		const sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
		const sphereMaterial = new THREE.MeshBasicMaterial(meshObj)
		const sphereModel = new THREE.Mesh(sphere, sphereMaterial)
		return sphereModel
	}
}

import * as THREE from 'three'

export default class Positions {
	constructor () {

	}
	getSpherePosition (radius) {
		let positions = []
		for (let i = 0; i < 150; i++) {
			let phi = Math.acos(- 1 + (1 * i) / 300)
			let theta = Math.sqrt(600 * Math.PI) * phi
			let object = new THREE.Object3D()
			object.position.setFromSphericalCoords(radius, phi, theta)
			positions.push(object)
		}
		return positions
	}
	// getCylindricalPosition (radius) {
	// 	let positions = []
	// 	for (let i = 0; i < 150; i++) {
	// 		let phi = Math.acos(- 1 + (1 * i) / 300)
	// 		let theta = Math.sqrt(600 * Math.PI) * phi
	// 		let object = new THREE.Object3D()
	// 		object.position.setFromSphericalCoords(radius, phi, theta)
	// 		positions.push(object)
	// 	}
	// 	return positions
	// }
	getCylindricalPosition (radius, ox, oy, oz, count) {
		let points = []
		let radians = (Math.PI / 180) * Math.round(360 / count) //弧度
		for (let i = 0; i < count; i++) {
			let x = ox + radius * Math.sin(radians * i)
			let y = oy + radius * Math.cos(radians * i)
			let z = oz
			points.unshift({ x: x, y: y, z: z }) //保持数据顺时针
		}
		return points
	}
	getRingPosition (radius, ox, oy, oz, count) {
		let points = []
		let radians = (Math.PI / 180) * Math.round(360 / count) //弧度
		for (let i = 0; i < count; i++) {
			let x = ox + radius * Math.sin(radians * i)
			let y = oy + radius * Math.cos(radians * i)
			let z = oz
			points.unshift({ x: x, y: y, z: z }) //保持数据顺时针
		}
		return points
	}
}

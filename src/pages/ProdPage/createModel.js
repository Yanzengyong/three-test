import * as THREE from 'three'

export default class createModel {
	constructor () {

	}
	createNormalTorus (radius, tube, opacity, x, y, z, color) {
		let geometry = new THREE.TorusBufferGeometry(radius, tube, 300, 200)
		let material = new THREE.MeshToonMaterial({ color: color, opacity: opacity, transparent: true })
		let torus = new THREE.Mesh(geometry, material)
		torus.position.set(x, y, z)
		return torus
	}
	createBall (radius, opacity, x, y, z, color) {
		let geometry = new THREE.SphereBufferGeometry(radius, 100, 100)
		let material = new THREE.MeshToonMaterial({ color: color, opacity: opacity, transparent: true })
		let ball = new THREE.Mesh(geometry, material)
		ball.position.set(x, y, z)
		return ball
	}
	createCube (width, height, depth, opacity, x, y, z, color) {
		let geometry = new THREE.BoxBufferGeometry(width, height, depth)
		let material = new THREE.MeshToonMaterial({ color: color, opacity: opacity, transparent: true })
		let cube = new THREE.Mesh(geometry, material)
		cube.position.set(x, y, z)
		cube.rotation.z = - Math.atan(x/y)
		return cube
	}
	createCylinder (radius, height, opacity, x, y, z, color) {
		let material = new THREE.MeshToonMaterial({ color: color, opacity: opacity, transparent: true, wireframe: true })
		let geometry = new THREE.CylinderBufferGeometry(radius, radius, height, 100, 100, true)
		let geometry2 = new THREE.CylinderBufferGeometry(radius - 10, radius - 10, height, 100, 100, true)
		let cylinder = new THREE.Mesh(geometry, material)
		cylinder.add(new THREE.Mesh(geometry2, material))
		cylinder.position.set(x, y, z)
		cylinder.rotation.x = - Math.PI / 2

		let torus = new THREE.Mesh(new THREE.TorusBufferGeometry(radius + 20, 20, 300, 200), material)
		torus.position.set(x, y, z+height/2)

		let cylinderTorus = new THREE.Group()
		cylinderTorus.add(cylinder)
		cylinderTorus.add(torus)
		return cylinderTorus
	}
	createNormalCylinder (radius, height, opacity, x, y, z, color) {
		let material = new THREE.MeshToonMaterial({ color: color, opacity: opacity, transparent: true })
		let geometry = new THREE.CylinderBufferGeometry(radius, radius, height, 300, 300)
		let cylinder = new THREE.Mesh(geometry, material)
		cylinder.position.set(x, y, z)
		cylinder.rotation.x = - Math.PI / 2
		return cylinder
	}
}

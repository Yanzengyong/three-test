import * as THREE from 'three'

export default class CreateOaaa {
	constructor (rocket_position, group) {
		this.CITY_MARGIN = 1
		this.HEXAGON_RADIUS = 5
		this.radius = 100
		this.hexagon = new THREE.Object3D()
		this.coneImg = ['assets/images/lightray.jpg', 'assets/images/lightray_yellow.jpg']
		this.hexagonColor = [0xffffff, 0xffff00]
		this.vector = new THREE.Vector3()
		this.rocket_position = rocket_position
		this.group = group
	}
	createObjects () {
  	// 地标及光锥
  	for (let i = 0, length = this.rocket_position.length; i < length; i++) {
  		let position = this.rocket_position[i].position
  		const index = Math.floor(Math.random() * 2)
  		this.createHexagon(position, index) // 地标
  		this.createCone(position, index) // 光锥
  	}
	}
	createHexagon (position, index) {
  	const color = this.hexagonColor[index]
  	let hexagonLine = new THREE.CircleGeometry(this.HEXAGON_RADIUS, 6)
  	let hexagonPlane = new THREE.CircleGeometry(this.HEXAGON_RADIUS - this.CITY_MARGIN, 6)
  	let vertices = hexagonLine.vertices
  	vertices.shift() // 第一个节点是中心点
  	let circleLineGeom = new THREE.Geometry()
  	circleLineGeom.vertices = vertices
  	let materialLine = new THREE.MeshBasicMaterial({
  		color: color,
  		side: THREE.DoubleSide
  	})
  	let materialPlane = new THREE.MeshBasicMaterial({
  		color: color,
  		side: THREE.DoubleSide,
  		opacity: 0.5
  	})
  	let circleLine = new THREE.LineLoop(circleLineGeom, materialLine)
  	let circlePlane = new THREE.Mesh(hexagonPlane, materialPlane)
  	circleLine.position.copy(position)
  	circlePlane.position.copy(position)
  	circlePlane.lookAt(new THREE.Vector3(0, 0, 0))
  	circleLine.lookAt(new THREE.Vector3(0, 0, 0))

  	this.hexagon.add(circleLine)
  	this.hexagon.add(circlePlane)
  	this.group.add(this.hexagon)
	}
	createCone (position, index) {
  	let texture = new THREE.TextureLoader().load(this.coneImg[index]),
  		material = new THREE.MeshBasicMaterial({
  			map: texture,
  			transparent: true,
  			depthTest: false,
  			side: THREE.DoubleSide,
  			blending: THREE.AdditiveBlending
  		}),
  		height = Math.random() * 50,
  		geometry = new THREE.PlaneGeometry(this.HEXAGON_RADIUS * 2, height),
  		matrix1 = new THREE.Matrix4,
  		plane1 = new THREE.Mesh(geometry, material)
  	matrix1.makeRotationX(Math.PI / 2)
  	matrix1.setPosition(new THREE.Vector3(0, 0, height / -2))
  	geometry.applyMatrix(matrix1)
  	let plane2 = plane1.clone()
  	plane2.rotation.z = Math.PI / 2
  	plane1.add(plane2)
  	plane1.position.copy(position)
  	plane1.lookAt(0, 0, 0)
  	this.group.add(plane1)
	}
}

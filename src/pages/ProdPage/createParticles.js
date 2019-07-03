import * as THREE from 'three'

export default class CreateParticle {
	constructor (particles) {
		this.BLINT_SPEED = 0.05
		this.radius = 150
		this.dotTexture = new THREE.TextureLoader().load('assets/images/dot.png')
		this.particles = particles
	}
  createEarthParticles = () => {
  	let positions = []
  	let materials = []
  	let sizes = []
  	for (let i = 0; i < 2; i++) {
  		positions[i] = {
  			positions: []
  		}
  		sizes[i] = {
  			sizes: []
  		}
  		let mat = new THREE.PointsMaterial()
  		mat.size = 2
  		mat.color = new THREE.Color(0x03d98e)
  		mat.map = this.dotTexture
  		mat.depthWrite = false
  		mat.transparent = true
  		mat.opacity = 0
  		mat.side = THREE.FrontSide
  		mat.blending = THREE.AdditiveBlending
  		let n = i / 2
  		mat.t_ = n * Math.PI * 2
  		mat.speed_ = this.BLINT_SPEED
  		mat.min_ = .2 * Math.random() + .5
  		mat.delta_ = .1 * Math.random() + .1
  		mat.opacity_coef_ = 1
  		materials.push(mat)
  	}
  	let spherical = new THREE.Spherical()
  	spherical.radius = this.radius
  	const step = 260
  	for (let i = 0; i < step; i++) {
  		let vec = new THREE.Vector3()
  		let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + 1 // 每个纬线圈内的角度均分
  		for (let j = 0; j < step; j += radians) {
  			let c = j / step, // 底图上的横向百分比
  				f = i / step, // 底图上的纵向百分比
  				index = Math.floor(2 * Math.random())
  			let pos = positions[index]
  			let size = sizes[index]
  			spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
  			spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
  			vec.setFromSpherical(spherical) // 夹角转换为世界坐标
  			pos.positions.push(vec.x)
  			pos.positions.push(vec.y)
  			pos.positions.push(vec.z)
  			if (j % 3 === 0) {
  				size.sizes.push(6.0)
  			}
  		}
  	}
  	for (let i = 0; i < positions.length; i++) {
  		let pos = positions[i],
  			size = sizes[i],
  			bufferGeom = new THREE.BufferGeometry(),
  			typedArr1 = new Float32Array(pos.positions.length),
  			typedArr2 = new Float32Array(size.sizes.length)
  		for (let j = 0; j < pos.positions.length; j++) {
  			typedArr1[j] = pos.positions[j]
  		}
  		for (let j = 0; j < size.sizes.length; j++) {
  			typedArr2[j] = size.sizes[j]
  		}
  		bufferGeom.addAttribute('position', new THREE.BufferAttribute(typedArr1, 3))
  		bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
  		bufferGeom.computeBoundingSphere()
  		let particle = new THREE.Points(bufferGeom, materials[i])
  		this.particles.add(particle)
  	}
  	// this.group.add(this.earthParticles)
  	return this.particles
  }
}

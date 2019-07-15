import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

export default class ApplyInfo {
	constructor (group) {
		this.group_source_array = []
		// this.group = new THREE.Group()
		this.group = group
		this.thunk_one = []
		this.thunk_two = []
		this.thunk_three = []
		this.thunk_four = []
		this.thunk_five = []
		this.init_field = []
		this.sphere_field = []
		this.annular_field = []
		this.cube_field = []
	}
	// 封装的一个 动画完成的函数 ----- promise函数
	animateHandle (current, target, geometry, type, time) {
		return new Promise((resolve) => {
			new TWEEN.Tween({
				x: current.x,
				y: current.y,
				z: current.z
			})
				.to({
					x: target.x,
					y: target.y,
					z: target.z
				}, time || 1000)
				.easing(type || TWEEN.Easing.Linear.None)
				.onUpdate(obj => {
					geometry.position.x = obj.x
					geometry.position.y = obj.y
					geometry.position.z = obj.z
				}).start()
			let timer = setTimeout(() => {
				resolve('success')
				clearTimeout(timer)
			}, time + 100 || 1100)
		})
	}
	// 删除该模型
	deleted () {
		// this.group.remove
		this.thunk_one = []
		this.thunk_two = []
		this.thunk_three = []
		this.thunk_four = []
		this.thunk_five = []
		this.init_field = []
	}
	// 切换字段组成形状效果的 --------  过渡效果函数
	filedChangeTransform (targets, duration) {
		for (let i = 0; i < this.init_field.length; i ++) {
			let object = this.init_field[i]
			let target = targets[i]
			new TWEEN.Tween(object.position)
				.to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start()
			new TWEEN.Tween(object.rotation)
				.to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
				.easing(TWEEN.Easing.Exponential.InOut)
				.start()
		}
	}
	// 变成环形
	changeCylind (time, delay) {
		return new Promise((resolve) => {
			let vector = new THREE.Vector3()
			let timer_delay = setTimeout(() => {
				for (let i = 0; i < this.init_field.length; i++) {
					let theta = i * 0.075 + Math.PI
					let y = -(i * 0.04) + 60
					let object = new THREE.Object3D()
					object.position.setFromCylindricalCoords(100, theta, y)
					vector.x = object.position.x * 2
					vector.y = object.position.y * 0.2
					vector.z = object.position.z * 2
					object.lookAt(vector)
					this.annular_field.push(object)
				}
				this.filedChangeTransform(this.annular_field, time)
				// 删除定时器
				let timer = setTimeout(() => {
					resolve('success')
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}
	// 变成圆形
	changeSphere (time, delay) {
		return new Promise((resolve) => {
			let vector = new THREE.Vector3()
			let timer_delay = setTimeout(() => {
				for (let i = 0; i < this.init_field.length; i++) {
					let phi = Math.acos(- 1 + (2 * i) / this.init_field.length)
					let theta = Math.sqrt(this.init_field.length * Math.PI) * phi
					let object = new THREE.Object3D()
					object.position.setFromSphericalCoords(110, phi, theta)
					vector.copy(object.position).multiplyScalar(2)
					object.lookAt(vector)
					this.sphere_field.push(object)
				}
				this.filedChangeTransform(this.sphere_field, time)
				let animateTimer = setTimeout(() => {
					clearTimeout(animateTimer)
					resolve('success')
				}, time)
				// 删除定时器
				let timer = setTimeout(() => {
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}
	// 变成方形
	changeCube (time, delay) {
		return new Promise((resolve) => {
			let timer_delay = setTimeout(() => {
				let vertices = new THREE.BoxGeometry(120, 120, 120, 23, 23, 23).vertices
				for (let i = 0; i < vertices.length; i++) {
					let geometry = new THREE.BoxGeometry(1, 1, 1)
					let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
					let cube = new THREE.Mesh(geometry, material)
					cube.position.x = vertices[i].x
					cube.position.y = vertices[i].y
					cube.position.z = vertices[i].z
					this.cube_field.push(cube)
				}
				this.filedChangeTransform(this.cube_field, time)
				let animateTimer = setTimeout(() => {
					clearTimeout(animateTimer)
					resolve('success')
				}, time)
				// 删除定时器
				let timer = setTimeout(() => {
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}
	// 这是将分类的数据资源缩小成一个小的球体的动画过程 ---- 并且在此时形成字段效果
	shrinkDataHandle (time, delay) {
		return new Promise((resolve) => {
			this.init_field = []
			let timer_delay = setTimeout(() => {
				for (let i = 0; i < this.thunk_one.length; i++) {
					// 执行缩小动画
					this.animateHandle(this.thunk_one[i].position, {
						x: 80 * (2.0 * Math.random() - 1.0),
						y: 80 * (2.0 * Math.random() - 1.0),
						z: 80 * (2.0 * Math.random() - 1.0),
					}, this.thunk_one[i], TWEEN.Easing.Linear.None, time || 1000)
					this.init_field.push(this.thunk_one[i])
					// 删除定时器
					let timer = setTimeout(() => {
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < this.thunk_two.length; i++) {
					// 执行缩小动画
					this.animateHandle(this.thunk_two[i].position, {
						x: 80 * (2.0 * Math.random() - 1.0),
						y: 80 * (2.0 * Math.random() - 1.0),
						z: 80 * (2.0 * Math.random() - 1.0),
					}, this.thunk_two[i], TWEEN.Easing.Linear.None, time || 1000)
					this.init_field.push(this.thunk_two[i])
					// 删除定时器
					let timer = setTimeout(() => {
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < this.thunk_three.length; i++) {
					// 执行缩小动画
					this.animateHandle(this.thunk_three[i].position, {
						x: 80 * (2.0 * Math.random() - 1.0),
						y: 80 * (2.0 * Math.random() - 1.0),
						z: 80 * (2.0 * Math.random() - 1.0),
					}, this.thunk_three[i], TWEEN.Easing.Linear.None, time || 1000)
					this.init_field.push(this.thunk_three[i])
					// 删除定时器
					let timer = setTimeout(() => {
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < this.thunk_four.length; i++) {
					// 执行缩小动画
					this.animateHandle(this.thunk_four[i].position, {
						x: 80 * (2.0 * Math.random() - 1.0),
						y: 80 * (2.0 * Math.random() - 1.0),
						z: 80 * (2.0 * Math.random() - 1.0),
					}, this.thunk_four[i], TWEEN.Easing.Linear.None, time || 1000)
					this.init_field.push(this.thunk_four[i])
					// 删除定时器
					let timer = setTimeout(() => {
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				for (let i = 0; i < this.thunk_five.length; i++) {
					// 执行缩小动画
					this.animateHandle(this.thunk_five[i].position, {
						x: 80 * (2.0 * Math.random() - 1.0),
						y: 80 * (2.0 * Math.random() - 1.0),
						z: 80 * (2.0 * Math.random() - 1.0),
					}, this.thunk_five[i], TWEEN.Easing.Linear.None, time || 1000)
					this.init_field.push(this.thunk_five[i])
					// 删除定时器
					let timer = setTimeout(() => {
						clearTimeout(timer)
					}, time + (delay || 0))
				}
				let timer = setTimeout(() => {
					resolve('success')
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}
	// 这是分装的一个动画过程函数（调用即可） ----- 主题为编目
	classifyDataHandle (time, delay) {
		return new Promise((resolve) => {
			let timer_delay = setTimeout(() => {
				this.thunk_one = []
				this.thunk_two = []
				this.thunk_three = []
				this.thunk_four = []
				this.thunk_five = []
				for (let i = 0; i < this.group_source_array.length; i++) {
					let unit = this.group_source_array.length / 5
					if (i < unit) {
						this.animateHandle(this.group_source_array[i].position, {
							x: (2.0 * Math.random() - 1.0) * 30 + 50,
							y: (2.0 * Math.random() - 1.0) * 30 + 50,
							z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
						}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
						this.group_source_array[i].material.color = new THREE.Color('#007eff')
						this.thunk_one.push(this.group_source_array[i])
						this.init_field.push(this.group_source_array[i])
					} else if (i < unit * 2) {
						this.animateHandle(this.group_source_array[i].position, {
							x: (2.0 * Math.random() - 1.0) * -30 - 50,
							y: (2.0 * Math.random() - 1.0) * 30 + 50,
							z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
						}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
						this.group_source_array[i].material.color = new THREE.Color('#00ffd0')
						this.thunk_two.push(this.group_source_array[i])
						this.init_field.push(this.group_source_array[i])
					} else if (i < unit * 3) {
						this.animateHandle(this.group_source_array[i].position, {
							x: (2.0 * Math.random() - 1.0) * -30 - 50,
							y: (2.0 * Math.random() - 1.0) * -30 - 50,
							z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
						}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
						this.group_source_array[i].material.color = new THREE.Color('#ff8d00')
						this.thunk_three.push(this.group_source_array[i])
						this.init_field.push(this.group_source_array[i])
					} else if (i < unit * 4) {
						this.animateHandle(this.group_source_array[i].position, {
							x: (2.0 * Math.random() - 1.0) * 30 + 50,
							y: (2.0 * Math.random() - 1.0) * -30 - 50,
							z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
						}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
						this.group_source_array[i].material.color = new THREE.Color('#fff700')
						this.thunk_four.push(this.group_source_array[i])
						this.init_field.push(this.group_source_array[i])
					} else if (i < unit * 5) {
						this.animateHandle(this.group_source_array[i].position, {
							x: (2.0 * Math.random() - 1.0) * 30,
							y: (2.0 * Math.random() - 1.0) * 30,
							z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
						}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
						this.thunk_five.push(this.group_source_array[i])
						this.init_field.push(this.group_source_array[i])
					}
				}
				let timer = setTimeout(() => {
					resolve('success')
					clearTimeout(timer)
					clearTimeout(timer_delay)
				}, time + (delay || 0) || 1100)
			}, delay || 0)
		})
	}
	playLoop () {
		this.classifyDataHandle(3000, 3000)
			.then(() => {
				return this.shrinkDataHandle(3000, 3500)
			})
			.then(() => {
				return this.changeSphere(3000, 3500)
			})
			.then(() => {
				return this.changeCylind(3000, 3500)
			})
			.then(() => {
				return this.changeCube(3000, 3500)
			})
			.then(() => {
				this.playLoop()
			})
	}
	// 创建粒子
	createMoreCube () {
		// 循环渲染 400 个立方体盒子 为其添加上纹理
		let cube = new THREE.BoxBufferGeometry(1, 1, 1)
		for (let i = 0; i < 3174; i++) {
			// 材质进行设置
			let cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xfff00 })
			let cube_model = new THREE.Mesh(cube, cubeMaterial)
			cube_model.position.x = 80 * (2.0 * Math.random() - 1.0)
			cube_model.position.y = 80 * (2.0 * Math.random() - 1.0)
			cube_model.position.z = 80 * (2.0 * Math.random() - 1.0)
			cube_model.rotation.x = Math.random() * Math.PI
			cube_model.rotation.y = Math.random() * Math.PI
			cube_model.rotation.z = Math.random() * Math.PI
			cube_model.updateMatrix()
			this.group_source_array.push(cube_model)
			this.group.add(cube_model)
		}
		console.log('我被执行了')
		// this.playLoop()
		// return this.group
		return this
	}
	// 删除粒子
	deletedFn () {
		for (let i = 0; i < this.init_field.length; i++) {
			this.group.remove(this.init_field[i])
		}
		for (let i = 0; i < this.group_source_array.length; i++) {
			this.group.remove(this.group_source_array[i])
		}
		this.init_field = []
		this.group_source_array = []
	}
}

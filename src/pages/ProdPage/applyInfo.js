import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

export default class ApplyInfo {
	constructor () {
		this.group_source_array = []
		this.group = new THREE.Group()
		this.thunk_one = []
		this.thunk_two = []
		this.thunk_three = []
		this.thunk_four = []
		this.thunk_five = []
		this.init_field = []
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
	// 变成矩形
	// 变成圆形
	// 变成方形
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
			}, delay)
		})
	}
	// 这是分装的一个动画过程函数（调用即可） ----- 主题为编目
	classifyDataHandle (time) {
		return new Promise((resolve) => {
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
				} else if (i < unit * 2) {
					this.animateHandle(this.group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * -30 - 50,
						y: (2.0 * Math.random() - 1.0) * 30 + 50,
						z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
					}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					this.group_source_array[i].material.color = new THREE.Color('#00ffd0')
					this.thunk_two.push(this.group_source_array[i])
				} else if (i < unit * 3) {
					this.animateHandle(this.group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * -30 - 50,
						y: (2.0 * Math.random() - 1.0) * -30 - 50,
						z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
					}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					this.group_source_array[i].material.color = new THREE.Color('#ff8d00')
					this.thunk_three.push(this.group_source_array[i])
				} else if (i < unit * 4) {
					this.animateHandle(this.group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * 30 + 50,
						y: (2.0 * Math.random() - 1.0) * -30 - 50,
						z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
					}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					this.group_source_array[i].material.color = new THREE.Color('#fff700')
					this.thunk_four.push(this.group_source_array[i])
				} else if (i < unit * 5) {
					this.animateHandle(this.group_source_array[i].position, {
						x: (2.0 * Math.random() - 1.0) * 30,
						y: (2.0 * Math.random() - 1.0) * 30,
						z: Math.random() > 0.5 ? (2.0 * Math.random() - 1.0) * 30 + 50 : -1 * ((2.0 * Math.random() - 1.0) * 30 + 50)
					}, this.group_source_array[i], TWEEN.Easing.Linear.None, time || 1000)
					this.thunk_five.push(this.group_source_array[i])
				}
			}
			let timer = setTimeout(() => {
				resolve('success')
				// this.currentData = 2
				clearTimeout(timer)
			}, time + 100 || 1100)
		})
	}
	// 创建粒子
	createMoreCube () {
		// 循环渲染 400 个立方体盒子 为其添加上纹理
		let cube = new THREE.BoxBufferGeometry(1, 1, 1)
		for (let i = 0; i < 3000; i++) {
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
		this.classifyDataHandle(5000)
		this.shrinkDataHandle(3000, 6000)
		return this.group
	}
}

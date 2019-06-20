import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import './index.scss'
import Orbitcontrols from 'three-orbitcontrols'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import TWEEN from '@tweenjs/tween.js'
var table = [
	'H', 'Hydrogen', '1.00794', 1, 1,
	'He', 'Helium', '4.002602', 18, 1,
	'Li', 'Lithium', '6.941', 1, 2,
	'Be', 'Beryllium', '9.012182', 2, 2,
	'B', 'Boron', '10.811', 13, 2,
	'C', 'Carbon', '12.0107', 14, 2,
	'N', 'Nitrogen', '14.0067', 15, 2,
	'O', 'Oxygen', '15.9994', 16, 2,
	'F', 'Fluorine', '18.9984032', 17, 2,
	'Ne', 'Neon', '20.1797', 18, 2,
	'Na', 'Sodium', '22.98976...', 1, 3,
	'Mg', 'Magnesium', '24.305', 2, 3,
	'Al', 'Aluminium', '26.9815386', 13, 3,
	'Si', 'Silicon', '28.0855', 14, 3,
	'P', 'Phosphorus', '30.973762', 15, 3,
	'S', 'Sulfur', '32.065', 16, 3,
	'Cl', 'Chlorine', '35.453', 17, 3,
	'Ar', 'Argon', '39.948', 18, 3,
	'K', 'Potassium', '39.948', 1, 4,
	'Ca', 'Calcium', '40.078', 2, 4,
	'Sc', 'Scandium', '44.955912', 3, 4,
	'Ti', 'Titanium', '47.867', 4, 4,
	'V', 'Vanadium', '50.9415', 5, 4,
	'Cr', 'Chromium', '51.9961', 6, 4,
	'Mn', 'Manganese', '54.938045', 7, 4,
	'Fe', 'Iron', '55.845', 8, 4,
	'Co', 'Cobalt', '58.933195', 9, 4,
	'Ni', 'Nickel', '58.6934', 10, 4,
	'Cu', 'Copper', '63.546', 11, 4,
	'Zn', 'Zinc', '65.38', 12, 4,
	'Ga', 'Gallium', '69.723', 13, 4,
	'Ge', 'Germanium', '72.63', 14, 4,
	'As', 'Arsenic', '74.9216', 15, 4,
	'Se', 'Selenium', '78.96', 16, 4,
	'Br', 'Bromine', '79.904', 17, 4,
	'Kr', 'Krypton', '83.798', 18, 4,
	'Rb', 'Rubidium', '85.4678', 1, 5,
	'Sr', 'Strontium', '87.62', 2, 5,
	'Y', 'Yttrium', '88.90585', 3, 5,
	'Zr', 'Zirconium', '91.224', 4, 5,
	'Nb', 'Niobium', '92.90628', 5, 5,
	'Mo', 'Molybdenum', '95.96', 6, 5,
	'Tc', 'Technetium', '(98)', 7, 5,
	'Ru', 'Ruthenium', '101.07', 8, 5,
	'Rh', 'Rhodium', '102.9055', 9, 5,
	'Pd', 'Palladium', '106.42', 10, 5,
	'Ag', 'Silver', '107.8682', 11, 5,
	'Cd', 'Cadmium', '112.411', 12, 5,
	'In', 'Indium', '114.818', 13, 5,
	'Sn', 'Tin', '118.71', 14, 5,
	'Sb', 'Antimony', '121.76', 15, 5,
	'Te', 'Tellurium', '127.6', 16, 5,
	'I', 'Iodine', '126.90447', 17, 5,
	'Xe', 'Xenon', '131.293', 18, 5,
	'Cs', 'Caesium', '132.9054', 1, 6,
	'Ba', 'Barium', '132.9054', 2, 6,
	'La', 'Lanthanum', '138.90547', 4, 9,
	'Ce', 'Cerium', '140.116', 5, 9,
	'Pr', 'Praseodymium', '140.90765', 6, 9,
	'Nd', 'Neodymium', '144.242', 7, 9,
	'Pm', 'Promethium', '(145)', 8, 9,
	'Sm', 'Samarium', '150.36', 9, 9,
	'Eu', 'Europium', '151.964', 10, 9,
	'Gd', 'Gadolinium', '157.25', 11, 9,
	'Tb', 'Terbium', '158.92535', 12, 9,
	'Dy', 'Dysprosium', '162.5', 13, 9,
	'Ho', 'Holmium', '164.93032', 14, 9,
	'Er', 'Erbium', '167.259', 15, 9,
	'Tm', 'Thulium', '168.93421', 16, 9,
	'Yb', 'Ytterbium', '173.054', 17, 9,
	'Lu', 'Lutetium', '174.9668', 18, 9,
	'Hf', 'Hafnium', '178.49', 4, 6,
	'Ta', 'Tantalum', '180.94788', 5, 6,
	'W', 'Tungsten', '183.84', 6, 6,
	'Re', 'Rhenium', '186.207', 7, 6,
	'Os', 'Osmium', '190.23', 8, 6,
	'Ir', 'Iridium', '192.217', 9, 6,
	'Pt', 'Platinum', '195.084', 10, 6,
	'Au', 'Gold', '196.966569', 11, 6,
	'Hg', 'Mercury', '200.59', 12, 6,
	'Tl', 'Thallium', '204.3833', 13, 6,
	'Pb', 'Lead', '207.2', 14, 6,
	'Bi', 'Bismuth', '208.9804', 15, 6,
	'Po', 'Polonium', '(209)', 16, 6,
	'At', 'Astatine', '(210)', 17, 6,
	'Rn', 'Radon', '(222)', 18, 6,
	'Fr', 'Francium', '(223)', 1, 7,
	'Ra', 'Radium', '(226)', 2, 7,
	'Ac', 'Actinium', '(227)', 4, 10,
	'Th', 'Thorium', '232.03806', 5, 10,
	'Pa', 'Protactinium', '231.0588', 6, 10,
	'U', 'Uranium', '238.02891', 7, 10,
	'Np', 'Neptunium', '(237)', 8, 10,
	'Pu', 'Plutonium', '(244)', 9, 10,
	'Am', 'Americium', '(243)', 10, 10,
	'Cm', 'Curium', '(247)', 11, 10,
	'Bk', 'Berkelium', '(247)', 12, 10,
	'Cf', 'Californium', '(251)', 13, 10,
	'Es', 'Einstenium', '(252)', 14, 10,
	'Fm', 'Fermium', '(257)', 15, 10,
	'Md', 'Mendelevium', '(258)', 16, 10,
	'No', 'Nobelium', '(259)', 17, 10,
	'Lr', 'Lawrencium', '(262)', 18, 10,
	'Rf', 'Rutherfordium', '(267)', 4, 7,
	'Db', 'Dubnium', '(268)', 5, 7,
	'Sg', 'Seaborgium', '(271)', 6, 7,
	'Bh', 'Bohrium', '(272)', 7, 7,
	'Hs', 'Hassium', '(270)', 8, 7,
	'Mt', 'Meitnerium', '(276)', 9, 7,
	'Ds', 'Darmstadium', '(281)', 10, 7,
	'Rg', 'Roentgenium', '(280)', 11, 7,
	'Cn', 'Copernicium', '(285)', 12, 7,
	'Nh', 'Nihonium', '(286)', 13, 7,
	'Fl', 'Flerovium', '(289)', 14, 7,
	'Mc', 'Moscovium', '(290)', 15, 7,
	'Lv', 'Livermorium', '(293)', 16, 7,
	'Ts', 'Tennessine', '(294)', 17, 7,
	'Og', 'Oganesson', '(294)', 18, 7
]
function FinalPage () {
	useEffect(() => {
		console.log(TWEEN)
		init()
	})
	// 创建场景
	let scene = new THREE.Scene()

	// 创建透视相机
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)

	// 创建渲染器
	let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

	// 相机镜头视野终点
	let cameraTarget = new THREE.Vector3(0, 0, 100)

	// 创建css2d渲染器
	let labelRenderer = new CSS2DRenderer()

	// 创建css3d渲染器
	let css3DRenderer = new CSS3DRenderer()

	// 文字声明 （为了提供动态删除的可能性）
	let model_text

	// 创建数据源组 ----- 球形
	let group_source_sphere = new THREE.Group()
	scene.add(group_source_sphere)

	// 创建数据源组
	let group_source = new THREE.Group()
	scene.add(group_source)

	// 创建数据源组 ----- 球体 --- 上方的文字
	let group_source_sphere_text = new THREE.Group()
	group_source_sphere_text.position.set(0, 800, 0)
	scene.add(group_source_sphere_text)

	// 创建加工组
	let group_process = new THREE.Group()
	group_process.position.set(1200, 800, -800)
	scene.add(group_process)

	// 创建一个平面展示组
	let group_plane_news = new THREE.Group()
	group_plane_news.position.set(800, 0, 0)
	scene.add(group_plane_news)

	// 创建一个可以侧面展示文字的平面
	let planeDiv = document.createElement('div')
	planeDiv.className = 'illustration'
	let titleDiv = document.createElement('div')
	titleDiv.className = 'title'
	titleDiv.textContent = '这是一段讲解'
	let contentDiv = document.createElement('div')
	contentDiv.className = 'content'
	contentDiv.textContent = '不好的不好好不包含呵呵回家大啥黑科技阿实践活动加速度计安徽省大家啊收到就好点击阿斯加德很骄傲的加厚的加上回到家爱上大酒店加上的吉安市加上的黄寺大街按时间段按实际就'
	planeDiv.appendChild(titleDiv)
	planeDiv.appendChild(contentDiv)
	let planeObject = new CSS3DObject(planeDiv)
	// planeObject.position.set(900, 100, 500)
	// planeObject.rotation.y = -0.5 * Math.PI

	// 相机控制函数
	const animateCamera = (current, target, type, time) => {
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
			.easing(type)
			.onUpdate(obj => {
				camera.position.x = obj.x
				camera.position.y = obj.y
				camera.position.z = obj.z
			}).start()
	}

	// 数据源小方块飞行的效果
	const animateCubeFly = (current, target, type, cube) => {
		new TWEEN.Tween({
			x: current.x,
			y: current.y,
			z: current.z,
		})
			.delay(1000)
			.to({
				x: target.x,
				y: target.y,
				z: target.z
			}, 2600)
			.easing(type)
			.repeat(Infinity)
			.onUpdate(obj => {
				cube.position.x = obj.x
				cube.position.y = obj.y
				cube.position.z = obj.z
			}).start()
	}

	// 数据源 小方块在球体中的循环移动的效果
	const animateCubeTranslate = (current, target, type1, type2, cube) => {
		const uploadHandle = (obj) => {
			cube.position.x = obj.x
			cube.position.y = obj.y
			cube.position.z = obj.z
			cube.rotation.x += Math.random() * 0.05
			cube.rotation.y += Math.random() * 0.05
			cube.rotation.z += Math.random() * 0.05
		}
		let position = current
		let translate1 = new TWEEN.Tween(position)
			.to({
				x: 200 * (2.0 * Math.random() - 1.0),
				y: 200 * (2.0 * Math.random() - 1.0),
				z: 200 * (2.0 * Math.random() - 1.0)
			}, 3600)
			.easing(type1)
			.onUpdate(obj => {
				uploadHandle(obj)
			})
		let translate2 = new TWEEN.Tween(position)
			.to(target, 3600)
			.easing(type2)
			.onUpdate(obj => {
				uploadHandle(obj)
			})
		translate1.chain(translate2)
		translate2.chain(translate1)
		translate1.start()
	}

	// 动态添加文字处理函数
	const dynamicAddText = (group, text, x, y, z) => {
		// 为这个模型几何加上label文案
		let labelDiv = document.createElement('div')
		labelDiv.className = 'label'
		labelDiv.textContent = text
		labelDiv.style.marginTop = '-1em'
		let modelLabel = new CSS2DObject(labelDiv)
		modelLabel.position.set(x || 0, y || 0, z || 0)
		group.add(modelLabel)
		return modelLabel
	}

	// 动态清除group的2d文字
	const dynamicDeleteText = (group, labelModel) => {
		group.remove(group, labelModel)
	}

	// 切换视角
	const clickFn = () => {
		animateCamera({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 1200,
			y: 800,
			z: 600
		}, TWEEN.Easing.Circular.InOut, 1200)
		cameraTarget = new THREE.Vector3(1200, 700, 100)
		model_text = dynamicAddText(group_process, '我可以加工数据', 0, 68, 0)
		planeObject.scale.set(.3, .3, .3)
	}

	// 切换会最初状态
	const resetFn = () => {
		animateCamera({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 0,
			y: 0,
			z: 1400
		}, TWEEN.Easing.Quadratic.Out)
		cameraTarget = new THREE.Vector3(0, 0, 100)
		dynamicDeleteText(group_process, model_text)
		planeObject.scale.set(0, 0, 0)
	}

	// 查看详情版面
	const checkFn = () => {
		animateCamera({
			x: 0,
			y: 0,
			z: 0
		}, {
			x: 1600,
			y: 0,
			z: 700
		}, TWEEN.Easing.Circular.InOut, 1200)
		cameraTarget = new THREE.Vector3(1600, 0, 0)
		planeObject.rotation.y = 0
	}

	// 初始化函数
	const init = () => {
		let helper = new THREE.AxesHelper(3000)
		scene.add(helper)
		// const clock = new THREE.Clock()

		// 获取盒子的dom元素
		const container = document.getElementById('box')

		// 给场景添加星空盒子纹理
		new THREE.CubeTextureLoader()
			.setPath('assets/images/')
			.load([
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg',
				'xk1.jpg' 		// 六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
			], (texture) => {
				scene.background = texture // 添加背景到场景
			})

		// 相机所在位子
		camera.position.set(0, 0, 1400)

		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true

		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 3)
		scene.add(light)

		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 16)
		dirLight.position.set(100, 1000, 1600)
		scene.add(dirLight)

		// let mixer
		var objects = []
		var targets = { table: [], sphere: [], helix: [], grid: [] }

		// 中心的球体 ------- 数据源 -------- 以无数粒子方式展示效果
		const souce_show_handle = () => {

			// 在中心创建一个原型包裹这些立方体
			let sphere = new THREE.SphereGeometry(700, 100, 100)
			let sphereMaterial = new THREE.MeshNormalMaterial({ opacity: .7, wireframe: true })
			let sphere_model = new THREE.Mesh(sphere, sphereMaterial)
			sphere_model.updateMatrix()
			group_source_sphere.add(sphere_model)

			// 为这个球体几何加上label文案
			let sphereDiv = document.createElement('div')
			sphereDiv.className = 'label'
			sphereDiv.textContent = '我是数据源'
			sphereDiv.style.marginTop = '-1em'
			let sphereLabel = new CSS2DObject(sphereDiv)
			sphereLabel.position.set(0, 800, 0)
			sphere_model.add(sphereLabel)

			// 创建 长宽高都为40的立方体
			let cube = new THREE.BoxBufferGeometry(40, 40, 40)

			// 材质进行设置
			let cubeMaterial = new THREE.MeshNormalMaterial({ opacity: .9, transparent: true })

			// 循环渲染 400 个立方体盒子 为其添加上纹理
			for (let i = 0; i < 520; i++) {
				let cube_model = new THREE.Mesh(cube, cubeMaterial)
				cube_model.position.x = 360 * (2.0 * Math.random() - 1.0)
				cube_model.position.y = 360 * (2.0 * Math.random() - 1.0)
				cube_model.position.z = 360 * (2.0 * Math.random() - 1.0)
				cube_model.rotation.x = Math.random() * Math.PI
				cube_model.rotation.y = Math.random() * Math.PI
				cube_model.rotation.z = Math.random() * Math.PI
				cube_model.updateMatrix()
				// group_source.add(cube_model)

				// 球体中粒子的动画
				animateCubeTranslate({
					x: cube_model.position.x,
					y: cube_model.position.y,
					z: cube_model.position.z,
				}, {
					x: cube_model.position.x,
					y: cube_model.position.y,
					z: cube_model.position.z,
				}, TWEEN.Easing.Linear.None, TWEEN.Easing.Back.Out, cube_model)

				// 飞行动画
				// if (i > 510) {
				// 	animateCubeFly({
				// 		x: cube_model.position.x,
				// 		y: cube_model.position.y,
				// 		z: cube_model.position.z
				// 	}, {
				// 		x: 1190,
				// 		y: 800,
				// 		z: -800
				// 	}, TWEEN.Easing.Linear.None, cube_model)
				// }
			}

			// 动画的第二部 ---- 将这些方块变换成有文字的plan 进行组合
			// for (let i = 0; i < table.length; i += 5) {
			// 	console.log(table)
			// 	let souceDiv = document.createElement('div')
			// 	souceDiv.className = 'element'
			// 	souceDiv.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
			// 	var symbol = document.createElement('div')
			// 	symbol.className = 'symbol'
			// 	symbol.textContent = table[i]
			// 	souceDiv.appendChild(symbol)
			// 	var details = document.createElement('div')
			// 	details.className = 'details'
			// 	details.innerHTML = table[i + 1]
			// 	souceDiv.appendChild(details)
			// 	var object = new CSS3DObject(souceDiv)
			// 	object.position.x = Math.random() * 800 - 400
			// 	object.position.y = Math.random() * 800 - 400
			// 	object.position.z = Math.random() * 800 - 400
			// 	// group_source.add(object)
			// 	objects.push(object)
			// 	//
			// 	// var object = new THREE.Object3D()
			// 	// object.position.x = (table[i + 3] * 140) - 1330
			// 	// object.position.y = - (table[i + 4] * 180) + 990
			// 	// targets.table.push(object)
			// }

			// for (var i = 0; i < table.length; i ++) {
			// let souceDiv = document.createElement('div')
			// souceDiv.className = 'element'
			// souceDiv.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
			// var symbol = document.createElement('div')
			// symbol.className = 'symbol'
			// symbol.textContent = table[i]
			// souceDiv.appendChild(symbol)
			// var details = document.createElement('div')
			// details.className = 'details'
			// details.innerHTML = table[i + 1]
			// souceDiv.appendChild(details)
			// var object = new CSS3DObject(souceDiv)
			// 	object.position.x = ((i % 5) * 400) - 800
			// 	object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800
			// 	object.position.z = (Math.floor(i / 25)) * 1000 - 2000
			// 	// targets.grid.push(object)
			// 	group_source.add(object)
			// }

			// var vector = new THREE.Vector3()
			// for (var i = 0, l = table.length; i < l; i ++) {
			// 	var theta = i * 0.175 + Math.PI
			// 	var y = - (i * 8) + 450
			// let souceDiv = document.createElement('div')
			// souceDiv.className = 'element'
			// souceDiv.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
			// var symbol = document.createElement('div')
			// symbol.className = 'symbol'
			// symbol.textContent = table[i]
			// souceDiv.appendChild(symbol)
			// var details = document.createElement('div')
			// details.className = 'details'
			// details.innerHTML = table[i + 1]
			// souceDiv.appendChild(details)
			// var object = new CSS3DObject(souceDiv)
			// 	object.position.setFromCylindricalCoords(600, theta, y)
			// 	vector.x = object.position.x * 2
			// 	vector.y = object.position.y
			// 	vector.z = object.position.z * 2
			// 	// object.lookAt(vector)
			// 	targets.helix.push(object)
			// 	group_source.add(object)
			// }

			var vector = new THREE.Vector3()
			for (var i = 0, l = table.length; i < l; i ++) {
				var phi = Math.acos(- 1 + (2 * i) / l)
				var theta = Math.sqrt(l * Math.PI) * phi
				let souceDiv = document.createElement('div')
				souceDiv.className = 'element'
				souceDiv.style.backgroundColor = 'rgba(6, 90, 245,' + (Math.random() * 0.5 + 0.35) + ')'
				var symbol = document.createElement('div')
				symbol.className = 'symbol'
				symbol.textContent = 'a'
				souceDiv.appendChild(symbol)
				var details = document.createElement('div')
				details.className = 'details'
				details.innerHTML = 'str'
				souceDiv.appendChild(details)
				var object = new CSS3DObject(souceDiv)
				object.position.setFromSphericalCoords(500, phi, theta)
				vector.copy(object.position).multiplyScalar(2)
				object.lookAt(vector)
				targets.sphere.push(object)
				group_source.add(object)
			}

		}


		// 初次渲染时候的背景颜色
		renderer.setClearColor(0x000000)
		// 像素点
		renderer.setPixelRatio(window.devicePixelRatio)
		// 场景尺寸
		renderer.setSize(window.innerWidth, window.innerHeight)
		container.appendChild(renderer.domElement)
		// 2d渲染器
		labelRenderer.setSize(window.innerWidth, window.innerHeight)
		labelRenderer.domElement.style.position = 'absolute'
		labelRenderer.domElement.style.top = 20 + 'px'
		container.appendChild(labelRenderer.domElement)
		// 3d文字渲染器
		css3DRenderer.setSize(window.innerWidth, window.innerHeight)
		css3DRenderer.domElement.style.position = 'absolute'
		css3DRenderer.domElement.style.top = 20 + 'px'
		container.appendChild(css3DRenderer.domElement)
		const animate = () => {
			// let time = clock.getDelta()
			// update 推进混合器时间并更新动画
			// if (mixer) {
			// 	mixer.update(time)
			// }
			// 必须写的
			requestAnimationFrame(animate)
			// 必须再此调用
			TWEEN.update()
			// scene.rotation.y += 0.001
			// 数据源展示中 圆球的转动效果
			group_source_sphere.rotation.y += 0.001
			// 设置相机镜头的朝向
			camera.lookAt(cameraTarget)
			// 渲染
			renderer.render(scene, camera)
			labelRenderer.render(scene, camera)
			css3DRenderer.render(scene, camera)
		}
		souce_show_handle()
		animate()
	}
	return (
		<div id='box'>
			<button onClick={clickFn}>click</button>
			<button onClick={resetFn}>reset</button>
			<button onClick={checkFn}>checkInfo</button>
		</div>
	)
}

export default FinalPage

import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import anime from 'animejs'
import SphereModel from '../../components/ThreeObject/sphereCenterModel'
import Orbitcontrols from 'three-orbitcontrols'
import './index.scss'

// 把初始化需要定义的一些变量都写在此处（避免因为setState造成渲染问题）

// 创建场景
let scene = new THREE.Scene()

// 创建透视相机
let camera

// 相机镜头视野终点
let cameraTarget = new THREE.Vector3(0, 0, 0)

// 创建渲染器
let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

// 创建css2d渲染器
let labelRenderer = new CSS2DRenderer()

// 创建css3d渲染器
let css3DRenderer = new CSS3DRenderer()

// 为点击声明的变量 （广播 、 鼠标）
let raycaster = new THREE.Raycaster()
let mouse = new THREE.Vector2()

// 创建应用平台组 ----- 展示在中心部位 （坐标处于 0 0 0位置）
let group_apply = new THREE.Group()
scene.add(group_apply)

// 创建源组 ---- 展示平台获取数据的源头 （坐标处于0 -y -z位置）
let group_source = new THREE.Group()
scene.add(group_source)

// 创建使用加工后的组 ----- 展示平台把数据加工后应用展示 （坐标处于0 y z位置）
let group_use = new THREE.Group()
scene.add(group_use)

var countries = [{
	name: '中国',
	position: [116.20, 39.55]
}, {
	name: '中非共和国',
	position: [18.35, 4.23]
}, {
	name: '智利',
	position: [-70.40, -33.24]
}, {
	name: '乍得',
	position: [14.59, 12.10]
}, {
	name: '赞比亚',
	position: [28.16, -15.28]
}, {
	name: '越南',
	position: [105.55, 21.05]
}, {
	name: '约旦',
	position: [35.52, 31.57]
}, {
	name: '英属维尔京群岛',
	position: [-64.37, 18.27]
}, {
	name: '英国',
	position: [-0.05, 51.36]
}, {
	name: '印度尼西亚',
	position: [106.49, -6.09]
}, {
	name: '印度',
	position: [77.13, 28.37]
}, {
	name: '意大利',
	position: [12.29, 41.54]
}, {
	name: '以色列',
	position: [35.12, 31.47]
}, {
	name: '伊朗',
	position: [51.30, 35.44]
}, {
	name: '伊拉克',
	position: [44.30, 33.20]
}, {
	name: '亚美尼亚',
	position: [44.31, 40.10]
}, {
	name: '牙买加',
	position: [-76.50, 18.00]
}, {
	name: '匈牙利',
	position: [19.05, 47.29]
}, {
	name: '新西兰',
	position: [174.46, -41.19]
}, {
	name: '新喀里多尼亚',
	position: [166.30, -22.17]
}, {
	name: '希腊',
	position: [23.46, 37.58]
}, {
	name: '西班牙',
	position: [-3.45, 40.25]
}, {
	name: '乌兹别克斯坦',
	position: [69.10, 41.20]
}, {
	name: '乌拉圭',
	position: [-56.11, -34.50]
}, {
	name: '乌克兰',
	position: [30.28, 50.30]
}, {
	name: '乌干达',
	position: [32.30, 0.20]
}, {
	name: '文莱',
	position: [115.00, 4.52]
}, {
	name: '委内瑞拉',
	position: [-66.55, 10.30]
}, {
	name: '危地马拉',
	position: [-90.22, 14.40]
}, {
	name: '瓦努阿图',
	position: [168.18, -17.45]
}, {
	name: '土库曼斯坦',
	position: [57.50, 38.00]
}, {
	name: '土耳其',
	position: [32.54, 39.57]
}, {
	name: '图瓦卢',
	position: [179.13, -8.31]
}, {
	name: '突尼斯',
	position: [10.11, 36.50]
}, {
	name: '汤加',
	position: [-174.00, -21.10]
}, {
	name: '坦桑尼亚',
	position: [35.45, -6.08]
}, {
	name: '泰国',
	position: [100.35, 13.45]
}, {
	name: '塔吉克斯坦',
	position: [68.48, 38.33]
}, {
	name: '索马里',
	position: [45.25, 2.02]
}, {
	name: '所罗门群岛',
	position: [159.57, -9.27]
}, {
	name: '苏里南',
	position: [-55.10, 5.50]
}, {
	name: '苏丹',
	position: [32.35, 15.31]
}, {
	name: '斯威士兰',
	position: [31.06, -26.18]
}, {
	name: '斯洛文尼亚',
	position: [14.33, 46.04]
}, {
	name: '斯洛伐克',
	position: [17.07, 48.10]
}, {
	name: '圣文森特和格林纳丁斯',
	position: [-61.10, 13.10]
}, {
	name: '圣皮埃尔和密克隆',
	position: [-56.12, 46.46]
}, {
	name: '圣马力诺',
	position: [12.30, 43.55]
}, {
	name: '圣卢西亚',
	position: [-60.58, 14.02]
}, {
	name: '圣基茨和尼维斯',
	position: [-62.43, 17.17]
}, {
	name: '圣多美和普林西比',
	position: [6.39, 0.10]
}, {
	name: '沙特阿拉伯',
	position: [46.42, 24.41]
}, {
	name: '塞浦路斯',
	position: [33.25, 35.10]
}, {
	name: '塞内加尔',
	position: [-17.29, 14.34]
}, {
	name: '塞拉利昂',
	position: [-13.17, 8.30]
}, {
	name: '萨摩亚',
	position: [-171.50, -13.50]
}, {
	name: '萨尔瓦多',
	position: [-89.10, 13.40]
}, {
	name: '瑞士',
	position: [7.28, 46.57]
}, {
	name: '瑞典',
	position: [18.03, 59.20]
}, {
	name: '葡萄牙',
	position: [-9.10, 38.42]
}, {
	name: '帕劳',
	position: [134.28, 7.20]
}, {
	name: '诺福克岛',
	position: [168.43, -45.20]
}, {
	name: '挪威',
	position: [10.45, 59.55]
}, {
	name: '尼日利亚',
	position: [7.32, 9.05]
}, {
	name: '尼日尔',
	position: [2.06, 13.27]
}, {
	name: '尼加拉瓜',
	position: [-86.20, 12.06]
}, {
	name: '尼泊尔',
	position: [85.20, 27.45]
}, {
	name: '南斯拉夫',
	position: [20.37, 44.50]
}, {
	name: '纳米比亚',
	position: [17.04, -22.35]
}, {
	name: '墨西哥',
	position: [-99.10, 19.20]
}, {
	name: '莫桑比克',
	position: [32.32, -25.58]
}, {
	name: '摩尔多瓦共和国',
	position: [28.50, 47.02]
}, {
	name: '缅甸',
	position: [96.20, 16.45]
}, {
	name: '秘鲁',
	position: [-77.00, -12.00]
}, {
	name: '孟加拉国',
	position: [90.26, 23.43]
}, {
	name: '美属维尔京群岛',
	position: [-64.56, 18.21]
}, {
	name: '美属萨摩亚',
	position: [-170.43, -14.16]
}, {
	name: '美国',
	position: [-77.02, 39.91]
}, {
	name: '毛里塔尼亚',
	position: [57.30, -20.10]
}, {
	name: '马约特岛',
	position: [45.14, -12.48]
}, {
	name: '马提尼克岛',
	position: [-61.02, 14.36]
}, {
	name: '马其顿',
	position: [21.26, 42.01]
}, {
	name: '马里',
	position: [-7.55, 12.34]
}, {
	name: '马来西亚',
	position: [101.41, 3.09]
}, {
	name: '马拉维',
	position: [33.48, -14.00]
}, {
	name: '马耳他',
	position: [14.31, 35.54]
}, {
	name: '马尔代夫',
	position: [73.28, 4.00]
}, {
	name: '马达加斯加',
	position: [47.31, -18.55]
}, {
	name: '罗马尼亚',
	position: [26.10, 44.27]
}, {
	name: '卢旺达',
	position: [30.04, -1.59]
}, {
	name: '卢森堡',
	position: [6.09, 49.37]
}, {
	name: '列支敦士登',
	position: [9.31, 47.08]
}, {
	name: '利比里亚',
	position: [-10.47, 6.18]
}, {
	name: '立陶宛',
	position: [25.19, 54.38]
}, {
	name: '黎巴嫩',
	position: [35.31, 33.53]
}, {
	name: '老挝',
	position: [102.36, 17.58]
}, {
	name: '莱索托',
	position: [27.30, -29.18]
}, {
	name: '拉脱维亚',
	position: [24.08, 56.53]
}, {
	name: '肯尼亚',
	position: [36.48, -1.17]
}, {
	name: '克罗地亚',
	position: [15.58, 45.50]
}, {
	name: '科威特',
	position: [48.00, 29.30]
}, {
	name: '科特迪瓦',
	position: [-5.17, 6.49]
}, {
	name: '科摩罗',
	position: [43.16, -11.40]
}, {
	name: '开曼群岛',
	position: [-81.24, 19.20]
}, {
	name: '卡塔尔',
	position: [51.35, 25.15]
}, {
	name: '喀麦隆',
	position: [11.35, 3.50]
}, {
	name: '津巴布韦',
	position: [31.02, -17.43]
}, {
	name: '捷克共和国',
	position: [14.22, 50.05]
}, {
	name: '柬埔寨',
	position: [104.55, 11.33]
}, {
	name: '加蓬',
	position: [9.26, 0.25]
}, {
	name: '加纳',
	position: [-0.06, 5.35]
}, {
	name: '加拿大',
	position: [-75.42, 45.27]
}, {
	name: '几内亚比绍',
	position: [-15.45, 11.45]
}, {
	name: '几内亚',
	position: [-13.49, 9.29]
}, {
	name: '吉尔吉斯斯坦',
	position: [74.46, 42.54]
}, {
	name: '吉布提',
	position: [42.20, 11.08]
}, {
	name: '基里巴斯',
	position: [173.00, 1.30]
}, {
	name: '洪都拉斯',
	position: [-87.14, 14.05]
}, {
	name: '赫德岛和麦当劳群岛',
	position: [74.00, -53.00]
}, {
	name: '荷属安的列斯',
	position: [-69.00, 12.05]
}, {
	name: '荷兰',
	position: [4.54, 52.23]
}, {
	name: '韩国',
	position: [126.58, 37.31]
}, {
	name: '海地',
	position: [-72.20, 18.40]
}, {
	name: '哈萨克斯坦',
	position: [71.30, 51.10]
}, {
	name: '圭亚那',
	position: [-58.12, 6.50]
}, {
	name: '瓜德罗普岛',
	position: [-61.44, 16.00]
}, {
	name: '古巴',
	position: [-82.22, 23.08]
}, {
	name: '根西岛',
	position: [-2.33, 49.26]
}, {
	name: '格鲁吉亚',
	position: [44.50, 41.43]
}, {
	name: '格陵兰',
	position: [-51.35, 64.10]
}, {
	name: '哥斯达黎加',
	position: [-84.02, 9.55]
}, {
	name: '哥伦比亚',
	position: [-74.00, 4.34]
}, {
	name: '刚果',
	position: [15.12, -4.09]
}, {
	name: '刚果(扎伊尔)',
	position: [15.15, -4.20]
}, {
	name: '冈比亚',
	position: [-16.40, 13.28]
}, {
	name: '福克兰群岛(马尔维纳斯群岛)',
	position: [-59.51, -51.40]
}, {
	name: '佛得角',
	position: [-23.34, 15.02]
}, {
	name: '芬兰',
	position: [25.03, 60.15]
}, {
	name: '斐济',
	position: [178.30, -18.06]
}, {
	name: '菲律宾',
	position: [121.03, 14.40]
}, {
	name: '法属圭亚那',
	position: [-52.18, 5.05]
}, {
	name: '法属波利尼西亚',
	position: [-149.34, -17.32]
}, {
	name: '法罗群岛',
	position: [-6.56, 62.05]
}, {
	name: '法国',
	position: [2.20, 48.50]
}, {
	name: '厄立特里亚',
	position: [38.55, 15.19]
}, {
	name: '厄瓜多尔',
	position: [-78.35, -0.15]
}, {
	name: '俄罗斯',
	position: [37.35, 55.45]
}, {
	name: '多米尼加共和国',
	position: [-69.59, 18.30]
}, {
	name: '多米尼加',
	position: [-61.24, 15.20]
}, {
	name: '多哥',
	position: [1.20, 6.09]
}, {
	name: '东帝汶',
	position: [125.34, -8.29]
}, {
	name: '德国',
	position: [13.25, 52.30]
}, {
	name: '丹麦',
	position: [12.34, 55.41]
}, {
	name: '赤道几内亚',
	position: [8.50, 3.45]
}, {
	name: '朝鲜',
	position: [125.30, 39.09]
}, {
	name: '布隆迪',
	position: [29.18, -3.16]
}, {
	name: '布基纳法索',
	position: [-1.30, 12.15]
}, {
	name: '不丹',
	position: [89.45, 27.31]
}, {
	name: '博茨瓦纳',
	position: [25.57, -24.45]
}, {
	name: '伯利兹',
	position: [-88.30, 17.18]
}, {
	name: '玻利维亚',
	position: [-68.10, -16.20]
}, {
	name: '波斯尼亚和黑塞哥维那',
	position: [18.26, 43.52]
}, {
	name: '波兰',
	position: [21.00, 52.13]
}, {
	name: '波多黎各',
	position: [-66.07, 18.28]
}, {
	name: '冰岛',
	position: [-21.57, 64.10]
}, {
	name: '比利时',
	position: [4.21, 50.51]
}, {
	name: '比勒陀利亚',
	position: [28.12, -25.44]
}, {
	name: '贝宁',
	position: [2.42, 6.23]
}, {
	name: '北马里亚纳群岛',
	position: [145.45, 15.12]
}, {
	name: '保加利亚',
	position: [23.20, 42.45]
}, {
	name: '白俄罗斯',
	position: [27.30, 53.52]
}, {
	name: '巴西',
	position: [-47.55, -15.47]
}, {
	name: '巴拿马',
	position: [-79.25, 9.00]
}, {
	name: '巴林',
	position: [50.30, 26.10]
}, {
	name: '巴拉圭',
	position: [-57.30, -25.10]
}, {
	name: '巴基斯坦',
	position: [73.10, 33.40]
}, {
	name: '巴哈马',
	position: [-77.20, 25.05]
}, {
	name: '巴布亚新几内亚',
	position: [147.08, -9.24]
}, {
	name: '巴巴多斯',
	position: [-59.30, 13.05]
}, {
	name: '澳大利亚',
	position: [149.08, -35.15]
}, {
	name: '奥地利',
	position: [16.22, 48.12]
}, {
	name: '安提瓜和巴布达',
	position: [-61.48, 17.20]
}, {
	name: '安哥拉',
	position: [13.15, -8.50]
}, {
	name: '安道尔',
	position: [1.32, 42.31]
}, {
	name: '爱沙尼亚',
	position: [24.48, 59.22]
}, {
	name: '爱尔兰',
	position: [-6.15, 53.21]
}, {
	name: '埃塞俄比亚',
	position: [38.42, 9.02]
}, {
	name: '埃及',
	position: [31.14, 30.01]
}, {
	name: '阿塞拜疆',
	position: [49.56, 40.29]
}, {
	name: '阿曼',
	position: [58.36, 23.37]
}, {
	name: '阿鲁巴',
	position: [-70.02, 12.32]
}, {
	name: '阿联酋',
	position: [54.22, 24.28]
}, {
	name: '阿拉伯叙利亚共和国',
	position: [36.18, 33.30]
}, {
	name: '阿拉伯利比亚民众国',
	position: [13.07, 32.49]
}, {
	name: '阿根廷',
	position: [-60.00, -36.30]
}, {
	name: '阿富汗',
	position: [69.11, 34.28]
}, {
	name: '阿尔及利亚',
	position: [3.08, 36.42]
}, {
	name: '阿尔巴尼亚',
	position: [19.49, 41.18]
}]

const CITY_RADIUS = 100,
	CITY_MARGIN = 1,
	BLINT_SPEED = 0.05,
	HEXAGON_RADIUS = 5,
	radius = 100
let earthImg, earthData, earthParticles = new THREE.Object3D(),
	cloud = new THREE.Object3D(),
	hexagon = new THREE.Object3D(),
	dotTexture = new THREE.TextureLoader().load('assets/images/dot.png'),
	coneImg = ['assets/images/lightray.jpg', 'assets/images/lightray_yellow.jpg'],
	hexagonColor = [0xffffff, 0xffff00]
let vector = new THREE.Vector3()
let sphere_field = []
function ProdPage () {
	useEffect(() => {
		anime({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
		camera = new THREE.PerspectiveCamera(75, document.getElementById('content').offsetWidth / document.getElementById('content').offsetHeight, 0.1, 1000)
		init()
	}, [])

	// 切换到详情时滑块的处理函数
	const slideOutHandle = () => {
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 750
		})
		tl.add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '0',
			duration: 200
		}).add({
			targets: '#info1',
			left: 0
		}).add({
			targets: '#info2',
			opacity: '1',
			delay: 250
		})
	}

	// 返回到初始化的处理函数
	const backInitHandle = () => {
		let tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 250
		})
		tl.add({
			targets: '#info1',
			left: '-50%'
		}).add({
			targets: '#info2',
			opacity: '0',
		}).add({
			targets: ['#init1', '#init2', '#init3', '#init4', '#init5'],
			opacity: '1',
			duration: 1500,
			easing: 'linear'
		})
	}

	// 加载3d效果的初始函数
	const init = () => {
		let helper = new THREE.AxesHelper(1000)
		scene.add(helper)
		// 获取盒子的dom元素
		const container = document.getElementById('canvas')
		// 相机所在位子
		camera.position.set(300, -200, 600)
		// 设置环境光
		let light = new THREE.AmbientLight(0x000000, 1)
		scene.add(light)
		// 设置平行光
		let dirLight = new THREE.DirectionalLight(0xffffff, 5)
		dirLight.position.set(400, 400, 1000)
		scene.add(dirLight)
		// 中心圆球的
		// const sphere_options = {
		// 	sphereRadius: 80,
		// 	widthSegments: 300,
		// 	heightSegments: 300,
		// 	meshObj: { emissive: 0xffe51b, emissiveIntensity: 1, lightMapIntensity: 10 }
		// }
		// let sphereModel = new SphereModel({
		// 	...sphere_options
		// })
		// group_source.add(sphereModel.group)
    		// 相机作为orbitcontrol的参数，支持鼠标交互
		let orbitControls = new Orbitcontrols(camera)
		orbitControls.enableDamping = true
		let earthImgData
		const main = () => {
			earthImg = document.createElement('img')
			earthImg.src = 'assets/images/earth.jpg'
			earthImg.onload = function () {
				let earthCanvas = document.createElement('canvas')
				let earthCtx = earthCanvas.getContext('2d')
				earthCanvas.width = earthImg.width
				earthCanvas.height = earthImg.height
				earthCtx.drawImage(earthImg, 0, 0, earthImg.width, earthImg.height)
				earthImgData = earthCtx.getImageData(0, 0, earthImg.width, earthImg.height)
				// basic scene
				// createBasicScene()
				for (let i = 0; i < 150; i++) {
					let phi = Math.acos(- 1 + (1 * i) / 300)
					let theta = Math.sqrt(600 * Math.PI) * phi
					let object = new THREE.Object3D()
					object.position.setFromSphericalCoords(100, phi, theta)
					vector.copy(object.position).multiplyScalar(2)
					object.lookAt(vector)
					sphere_field.push(object)
				}
				group_source.rotation.x = -0.5 * Math.PI
				// 光锥
				createObjects()
				// 球面打点
				createEarthParticles()
			}
		}
		const createObjects = () => {
			console.log(countries)
			console.log(sphere_field)
			// 地标及光锥
			for (let i = 0, length = sphere_field.length; i < length; i++) {
				let position = sphere_field[i].position
				const index = Math.floor(Math.random() * 2)
				createHexagon(position, index) // 地标
				createCone(position, index) // 光锥
			}
		}
		const createPosition = (lnglat) => {
			let spherical = new THREE.Spherical()
			spherical.radius = radius
			const lng = lnglat[0]
			const lat = lnglat[1]
			// const phi = (180 - lng) * (Math.PI / 180)
			// const theta = (90 + lat) * (Math.PI / 180)
			const theta = (lng + 90) * (Math.PI / 180)
			const phi = (90 - lat) * (Math.PI / 180)
			spherical.phi = phi
			spherical.theta = theta
			let position = new THREE.Vector3()
			position.setFromSpherical(spherical)
			return position
		}

		const createHexagon = (position, index) => {
			const color = hexagonColor[index]
			let hexagonLine = new THREE.CircleGeometry(HEXAGON_RADIUS, 6)
			let hexagonPlane = new THREE.CircleGeometry(HEXAGON_RADIUS - CITY_MARGIN, 6)
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

			hexagon.add(circleLine)
			hexagon.add(circlePlane)
			group_source.add(hexagon)
		}

		const createCone = (position, index) => {
			let texture = new THREE.TextureLoader().load(coneImg[index]),
				material = new THREE.MeshBasicMaterial({
					map: texture,
					transparent: true,
					depthTest: false,
					side: THREE.DoubleSide,
					blending: THREE.AdditiveBlending
				}),
				height = Math.random() * 50,
				geometry = new THREE.PlaneGeometry(HEXAGON_RADIUS * 2, height),
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
			group_source.add(plane1)
		}

		const createEarthParticles = () => {
			let positions = []
			let materials = []
			let sizes = []
			for (var i = 0; i < 2; i++) {
				positions[i] = {
					positions: []
				}
				sizes[i] = {
					sizes: []
				}
				let mat = new THREE.PointsMaterial()
				mat.size = 2
				mat.color = new THREE.Color(0x03d98e)
				mat.map = dotTexture
				mat.depthWrite = false
				mat.transparent = true
				mat.opacity = 0
				mat.side = THREE.FrontSide
				mat.blending = THREE.AdditiveBlending
				let n = i / 2
				mat.t_ = n * Math.PI * 2
				mat.speed_ = BLINT_SPEED
				mat.min_ = .2 * Math.random() + .5
				mat.delta_ = .1 * Math.random() + .1
				mat.opacity_coef_ = 1
				materials.push(mat)
			}
			var spherical = new THREE.Spherical()
			spherical.radius = radius
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
				console.log(materials[i])
				earthParticles.add(particle)
			}
			group_source.add(earthParticles)
		}
		main()
		// 像素点
		renderer.setPixelRatio(window.devicePixelRatio)
		// 场景尺寸
		renderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		container.appendChild(renderer.domElement)
		// 2d渲染器
		labelRenderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		labelRenderer.domElement.style.position = 'absolute'
		labelRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(labelRenderer.domElement)
		// 3d文字渲染器
		css3DRenderer.setSize(document.getElementById('content').offsetWidth, document.getElementById('content').offsetHeight)
		css3DRenderer.domElement.style.position = 'absolute'
		css3DRenderer.domElement.style.top = 0 + 'px'
		container.appendChild(css3DRenderer.domElement)
		const animate = () => {
			// 必须写的
			requestAnimationFrame(animate)
			group_source.rotation.y += 0.002
			let objects = earthParticles.children
			objects.forEach(obj => {
				let material = obj.material
				material.t_ += material.speed_
				material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
				material.needsUpdate = true
			})
			// 设置相机镜头的朝向
			camera.lookAt(cameraTarget)
			// 渲染
			renderer.render(scene, camera)
			labelRenderer.render(scene, camera)
			css3DRenderer.render(scene, camera)
		}
		animate()
	}
	return (
		<div className='prod_container'>
			<div className='prod_header_box'>
				<div className='prod_title_box'>
					<div className='prod_title'>
						<button onClick={backInitHandle}>返回到初始页面</button>
						<div className='prod_title_fill'></div>
						<div className='prod_title_center'>国家工程实验室</div>
						<div className='prod_title_fill'></div>
						<button onClick={slideOutHandle}>滑出的过渡效果</button>
					</div>
				</div>
				<div className='prod_header_right'>
          (先占位子，若没有内容可放就废弃)
				</div>
				<div className='prod_bottom_line'></div>
			</div>
			<div id='content' className='prod_content'>
				<div id='canvas'></div>
				<div id='init1' className='prod_content_left'>
          这里是一些饼状图、折线图、雷达图等
				</div>
				<div id='init2' className='prod_content_leftBottom'>
          这里一个实时统计的接入数据量与转换量的数值
				</div>
				<div id='init3' className='prod_content_leftTop'>
          这里此平台的文字介绍（介绍过多可以加入滚动效果）
				</div>
				<div id='init4' className='prod_content_right'>
          这里是一些会实时滚动的信息统计
				</div>
				<div id='init5' className='prod_content_rightBottom'>
          这里是一个无框的表格统计图
				</div>
				<div id='info1' className='prod_info_left'>
          这里是单个详情时候的饼图、折线图、雷达图等
				</div>
				<div id='info2' className='prod_info_rightBottom'>
          这里是单个详情时候的无框的表格统计图
				</div>
			</div>
		</div>
	)
}

export default ProdPage

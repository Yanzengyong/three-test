import CreateModel from './createModel'
import * as THREE from 'three'
import Positions from './getPosition'

let groupCenter = new THREE.Group()
let z = 0

// 右侧黄色部分
let core = new THREE.Group()
new Positions().getRingPosition(150 * 1.7, 0, 0, z, 80).forEach(item => {
	core.add(new CreateModel().createCube(2, 5, 2, 0.7, item.x, item.y, item.z, 0xCC0001))
})
new Positions().getRingPosition(150 * 1.8, 0, 0, z, 80).forEach(item => {
	core.add(new CreateModel().createCube(2, 2, 2, 0.7, item.x, item.y, item.z, 0x4AFFFE))
})
new Positions().getRingPosition(150 * 1.9, 0, 0, z, 80).forEach(item => {
	core.add(new CreateModel().createCube(2, 10, 2, 0.7, item.x, item.y, item.z, 0x4AFFFE))
})
new Positions().getRingPosition(150 * 1.9, 0, 0, z, 150).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 2, 0.7, item.x, item.y, item.z, 0xCC0001))
})

groupCenter.add(core)

const animateCenter = () => {
	core.rotation.z += Math.PI / 2 * 0.01
}

export {
	groupCenter,
	animateCenter
}

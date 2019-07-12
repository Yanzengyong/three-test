import CreateModel from './createModel'
import * as THREE from 'three'
import Positions from './getPosition'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

let groupApply = new THREE.Group()
let z = -30

// 右侧黄色部分
let core = new THREE.Group()
new Positions().getRingPosition(80, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createNormalCylinder(2, 200, 0.8, item.x, item.y, item.z - 50, 0xF3D225))
})
new Positions().getRingPosition(70, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createCube(4, 20, 4, 0.6, item.x, item.y, item.z - 150, 0xF3D225))
	core.add(new CreateModel().createCube(4, 20, 4, 0.6, item.x, item.y, item.z + 50, 0xF3D225))
})
new Positions().getRingPosition(95, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createNormalCylinder(2, 100, 0.8, item.x, item.y, item.z - 100, 0x4AFFFE))
})
new Positions().getRingPosition(85, 0, 0, z, 50).forEach(item => {
	core.add(new CreateModel().createCube(5, 5, 10, 0.5, item.x, item.y, item.z - 170, 0x4AFFFE))
})
new Positions().getRingPosition(115, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 160, 0xCC0001))
})
new Positions().getRingPosition(130, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 180, 0x4AFFFE))
})
groupApply.add(core)

//18. 右侧部分圆管组合
let rightTorus = new THREE.Group()
rightTorus.add(new CreateModel().createNormalTorus(100, 10, 0.7, 0, 0, z - 195, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 10, 0.7, 0, 0, z - 200, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 10, 0.7, 0, 0, z - 205, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 10, 0.7, 0, 0, z - 210, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 10, 0.7, 0, 0, z - 215, 0x4AFFFE))

rightTorus.add(new CreateModel().createNormalTorus(130, 5, 0.7, 0, 0, z - 230, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(160, 5, 0.7, 0, 0, z - 240, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(190, 5, 0.7, 0, 0, z - 250, 0x4AFFFE))

new Positions().getRingPosition(120, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 5, 0.4, item.x, item.y, item.z - 220, 0xCC0001))
})
new Positions().getRingPosition(150, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 5, 0.4, item.x, item.y, item.z - 235, 0xCC0001))
})
new Positions().getRingPosition(170, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 5, 0.4, item.x, item.y, item.z - 245, 0xCC0001))
})

// 19.章鱼脚
let rightFooter = new THREE.Group()
new Positions().getRingPosition(165, 0, 0, z, 6).forEach(item => {
	rightFooter.add(new CreateModel().createTiltObj(3, 150, 180, 1, item.x, item.y, item.z - 325, 0x4AFFFE))
})


groupApply.add(rightTorus)
groupApply.add(rightFooter)

const animateApply = () => {
	core.rotation.z += Math.PI / 2 * 0.01
	rightFooter.rotation.z += Math.PI / 2 * 0.002
}

export {
	groupApply,
	animateApply
}

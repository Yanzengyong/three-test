import CreateModel from './createModel'
import * as THREE from 'three'
import Positions from './getPosition'

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
new Positions().getRingPosition(85, 0, 0, z, 8).forEach(item => {
	core.add(new CreateModel().createNormalCylinder(2, 100, 0.8, item.x, item.y, item.z - 150, 0x4AFFFE))
})
new Positions().getRingPosition(85, 0, 0, z, 50).forEach(item => {
	core.add(new CreateModel().createCube(5, 5, 10, 0.5, item.x, item.y, item.z - 160, 0x4AFFFE))
})
new Positions().getRingPosition(100, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 150, 0xCC0001))
})
new Positions().getRingPosition(110, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 170, 0x4AFFFE))
})
groupApply.add(core)

//18. 右侧部分圆管组合
let rightTorus = new THREE.Group()
rightTorus.add(new CreateModel().createNormalTorus(150, 8, 0.7, 0, 0, z - 200, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(130, 8, 0.7, 0, 0, z - 210, 0x4AFFFE))
// rightTorus.add(new CreateModel().createNormalTorus(90, 8, 0.7, 0, 0, z - 220, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(200, 8, 0.7, 0, 0, z - 230, 0x4AFFFE))
new Positions().getRingPosition(350, 0, 0, 80).forEach(item => {
	rightTorus.add(new CreateModel().createCube(3, 3, 20, 0.6, item.x, item.y, item.z - 215, 0x4AFFFE))
})
rightTorus.add(new CreateModel().createNormalTorus(100, 20, 0.7, 0, 0, z - 160, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 20, 0.7, 0, 0, z - 160, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 20, 0.7, 0, 0, z - 185, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 20, 0.7, 0, 0, z - 200, 0x4AFFFE))
rightTorus.add(new CreateModel().createNormalTorus(100, 20, 0.7, 0, 0, z - 205, 0x4AFFFE))

rightTorus.add(new CreateModel().createNormalTorus(230, 10, 0.7, 0, 0, z - 240, 0x4AFFFE))
new Positions().getRingPosition(350, 0, 0, 5).forEach(item => {
	rightTorus.add(new CreateModel().createCube(20, 20, 80, 0.6, item.x, item.y, item.z - 250, 0x4AFFFE))
})

rightTorus.add(new CreateModel().createNormalCylinder(100, 30, 0.9, 0, 0, z - 220, 0x4AFFFE))
new Positions().getRingPosition(150, 0, 0, 10).forEach(item => {
	rightTorus.add(new CreateModel().createCube(30, 30, 150, 0.7, item.x, item.y, item.z - 220, 0x4AFFFE))
})
groupApply.add(rightTorus)

const animateApply = () => {

}

export {
	groupApply,
	animateApply
}

import CreateModel from './createModel'
import * as THREE from 'three'
import Positions from './getPosition'

let groupSource = new THREE.Group()
let z = -80
//1. 三球环绕旋转
let threeBallRotate = new THREE.Group()
new Positions().getRingPosition(40, 0, 0, z, 3).forEach(item => {
	threeBallRotate.add(new CreateModel().createBall(6, 0.7, item.x, item.y, item.z, 0x4AFFFE))
})
groupSource.add(threeBallRotate)

//2. 红蓝小圈组合
let redBlueSmallGroup = new THREE.Group()
new Positions().getRingPosition(30, 0, 0, z, 10).forEach(item => {
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z, 0xCC0001))
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z - 8, 0x4AFFFE))
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z - 45, 0x4AFFFE))
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z - 55, 0xCC0001))
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z - 60, 0x4AFFFE))
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.5, item.x, item.y, item.z - 65, 0xCC0001))
})
groupSource.add(redBlueSmallGroup)

//3. 红色点阵圈
let redCircle = new THREE.Group()
new Positions().getRingPosition(40, 0, 0, z, 30).forEach(item => {
	redBlueSmallGroup.add(new CreateModel().createCube(2, 2, 3, 0.3, item.x, item.y, item.z - 20, 0xCC0001))
})
groupSource.add(redCircle)

//4. 圆环
let normalTorus = new CreateModel().createNormalTorus(50, 3, 0.7, 0, 0, z - 35, 0x4AFFFE)
groupSource.add(normalTorus)

//6. 半透明圆圈组合（红、蓝、红、蓝）
let transparentCircleGroup = new THREE.Group()
new Positions().getRingPosition(50, 0, 0, z, 50).forEach(item => {
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 75, 0xCC0001))
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 85, 0x4AFFFE))
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 95, 0xCC0001))
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 105, 0x4AFFFE))
})
groupSource.add(transparentCircleGroup)

//7.多层半透明嵌套
new Positions().getRingPosition(60, 0, 0, z, 60).forEach(item=>{
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 80, 0xCC0001))
})
new Positions().getRingPosition(70, 0, 0, z, 60).forEach(item=>{
	transparentCircleGroup.add(new CreateModel().createBall(2, 0.3, item.x, item.y, item.z - 80, 0x4AFFFE))
})

//8. 橙色圈
let orangeCircle = new THREE.Group()
new Positions().getRingPosition(80, 0, 0, z, 50).forEach(item => {
	orangeCircle.add(new CreateModel().createCube(2, 2, 3, 0.4, item.x, item.y, item.z - 110, 0xFF5500))
})
groupSource.add(orangeCircle)

//9. 特殊组合一：圆环、方块、圆环
let specialGroup1 = new THREE.Group()
new Positions().getRingPosition(80, 0, 0, z, 30).forEach(item => {
	specialGroup1.add(new CreateModel().createCube(5, 8, 3, 0.5, item.x, item.y, item.z - 130, 0x4AFFFE))
})
specialGroup1.add(new CreateModel().createNormalTorus(70, 3, 0.5, 0, 0, z - 130, 0x4AFFFE))
specialGroup1.add(new CreateModel().createNormalTorus(80, 3, 0.5, 0, 0, z - 130, 0x4AFFFE))
new Positions().getRingPosition(80, 0, 0, z, 3).forEach(item => {
	specialGroup1.add(new CreateModel().createCube(10, 12, 8, 0.9, item.x, item.y, item.z - 130, 0x4AFFFE))
})
groupSource.add(specialGroup1)

//10. 齿轮
let gear = new THREE.Group()
new Positions().getRingPosition(135, 0, 0, z, 80).forEach(item => {
	gear.add(new CreateModel().createCube(3, 9, 5, 0.5, item.x, item.y, item.z - 160, 0x4AFFFE))
})
gear.add(new CreateModel().createNormalTorus(120, 10, 0.5, 0, 0, z - 160, 0x4AFFFE))
groupSource.add(gear)

//11. 6个同心圆
let rings = new THREE.Group()
let ringsRadius = 180
rings.add(new CreateModel().createNormalTorus(ringsRadius, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
rings.add(new CreateModel().createNormalTorus(ringsRadius + 0, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
rings.add(new CreateModel().createNormalTorus(ringsRadius + 10, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
rings.add(new CreateModel().createNormalTorus(ringsRadius + 20, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
rings.add(new CreateModel().createNormalTorus(ringsRadius + 30, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
rings.add(new CreateModel().createNormalTorus(ringsRadius + 40, 1, 0.5, 0, 0, z - 180, 0x4AFFFE))
groupSource.add(rings)

//12. 特殊组合
let specialGroup2 = new THREE.Group()
let sg2_cube = new THREE.Group()
let sg2_leftSlice = new THREE.Group()
let sg2_rightSlice = new THREE.Group()
new Positions().getRingPosition(120, 0, 0, z, 8).forEach(item => {
	sg2_cube.add(new CreateModel().createCube(26, 33, 66, 0.8, item.x, item.y, item.z - 220, 0x4AFFFE))
	sg2_leftSlice.add(new CreateModel().createCube(4, 33, 66, 0.8, item.x, item.y, item.z - 220, 0x4AFFFE))
	sg2_rightSlice.add(new CreateModel().createCube(4, 33, 66, 0.8, item.x, item.y, item.z - 220, 0x4AFFFE))
})
sg2_leftSlice.rotateOnAxis(new THREE.Vector3(0, 0, 250).normalize(), 40)
sg2_rightSlice.rotateOnAxis(new THREE.Vector3(0, 0, 250).normalize(), 10)
specialGroup2.add(sg2_cube)
specialGroup2.add(sg2_leftSlice)
specialGroup2.add(sg2_rightSlice)
groupSource.add(specialGroup2)

//12. 圆环2
let normalTorus2 = new CreateModel().createNormalTorus(85, 16, 0.9, 0, 0, z - 340, 0x4AFFFE)
groupSource.add(normalTorus2)

//13.散点圆
let scatterRing = new THREE.Group()
new Positions().getRingPosition(200, 0, 0, z, 20).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 25, 2, 0.5, item.x, item.y, item.z - 240, 0x4AFFFE))
})
new Positions().getRingPosition(180, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 12, 2, 0.5, item.x, item.y, item.z - 250, 0x4AFFFE))
})
new Positions().getRingPosition(150, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 5, 2, 0.3, item.x, item.y, item.z - 250, 0x4AFFFE))
})
new Positions().getRingPosition(155, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 5, 2, 0.3, item.x, item.y, item.z - 250, 0xCC0001))
})
new Positions().getRingPosition(160, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 5, 2, 0.3, item.x, item.y, item.z - 250, 0x4AFFFE))
})
new Positions().getRingPosition(180, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 15, 2, 0.3, item.x, item.y, item.z - 280, 0xFF5500))
})
new Positions().getRingPosition(180, 0, 0, z, 20).forEach(item => {
	scatterRing.add(new CreateModel().createCube(10, 5, 25, 0.8, item.x, item.y, item.z - 320, 0x4AFFFE))
})
new Positions().getRingPosition(150, 0, 0, z, 60).forEach(item => {
	scatterRing.add(new CreateModel().createCube(5, 15, 2, 0.5, item.x, item.y, item.z - 390, 0x4AFFFE))
})
groupSource.add(scatterRing)

//14. 内部长条立方体圆环
let specialGroup3 = new THREE.Group()
new Positions().getRingPosition(53, 0, 0, z, 10).forEach(item => {
	specialGroup3.add(new CreateModel().createCube(5, 5, 150, 0.6, item.x, item.y, item.z - 233, 0x4AFFFE))
})
groupSource.add(specialGroup3)

//15. 特殊水管管道模型
let specialGroup4 = new CreateModel().createCylinder(85, 40, 0.5, 0, 0, z - 420, 0x4AFFFE)
groupSource.add(specialGroup4)

//16.圆环与钉子
let torusWithNail = new THREE.Group()
let nailPart = new THREE.Group()
new Positions().getRingPosition(80, 0, 0, z, 3).forEach(item => {
	nailPart.add(new CreateModel().createNormalCylinder(5, 20, 0.6, item.x, item.y, item.z - 472, 0x4AFFFE))
	nailPart.add(new CreateModel().createNormalCylinder(10, 5, 0.6, item.x, item.y, item.z - 460, 0x4AFFFE))
})
let torusPart = new CreateModel().createNormalTorus(80, 5, 0.6, 0, 0, z - 475, 0x4AFFFE)
torusWithNail.add(torusPart)
torusWithNail.add(nailPart)
groupSource.add(torusWithNail)

//17. 核心部分
// 左侧黄色部分
let core = new THREE.Group()
new Positions().getRingPosition(80, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createNormalCylinder(2, 200, 0.8, item.x, item.y, item.z - 616, 0xF3D225))
})
new Positions().getRingPosition(75, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createCube(4, 20, 4, 0.6, item.x, item.y, item.z - 516, 0xF3D225))
	core.add(new CreateModel().createCube(4, 20, 4, 0.6, item.x, item.y, item.z - 716, 0xF3D225))
})
new Positions().getRingPosition(85, 0, 0, z, 10).forEach(item => {
	core.add(new CreateModel().createNormalCylinder(2, 100, 0.8, item.x, item.y, item.z - 566, 0x4AFFFE))
})
new Positions().getRingPosition(85, 0, 0, z, 50).forEach(item => {
	core.add(new CreateModel().createCube(5, 5, 10, 0.5, item.x, item.y, item.z - 500, 0x4AFFFE))
})
new Positions().getRingPosition(100, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 510, 0xCC0001))
})
new Positions().getRingPosition(110, 0, 0, z, 60).forEach(item => {
	core.add(new CreateModel().createCube(3, 3, 3, 0.4, item.x, item.y, item.z - 526, 0x4AFFFE))
})
groupSource.add(core)

const animateSource = () => {
	threeBallRotate.rotation.z -= Math.PI / 2 * 0.01
	normalTorus.rotation.z += Math.PI / 2 * 0.01
	redBlueSmallGroup.rotation.z += Math.PI / 2 * 0.01
	gear.rotation.z -= Math.PI / 2 * 0.01
	transparentCircleGroup.rotation.z += Math.PI / 2 * 0.01
	specialGroup2.rotation.z -= Math.PI / 2 * 0.01
	scatterRing.rotation.z -= Math.PI / 2 * 0.01
	core.rotation.z += Math.PI / 2 * 0.01
}

export {
	groupSource,
	animateSource
}

import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import anime from 'animejs'

export default class FlyLine {
  count = 150;

  pointCounts = 900;

  constructor (start, end, container, opt = {}) {
  	this.opt = opt
  	this.start = start
  	this.end = end
  	this.mid = new THREE.Vector3(
  		this.average('x'),
  		this.average('y') + 100,
  		this.average('z')
  	)
  	this.scale = opt.scale
  	this.progress = 0
  	this.scene = opt.scene || {}
  	let controlPoint, path

  	if(opt.type && opt.type === 'line') {
  		path = new THREE.LineCurve3(start, end)
  	}else{
  		controlPoint = typeof opt.generateControlPoint === 'function' ? opt.generateControlPoint() : this.getControlPoint()
  		// console.log("controlpoint",controlPoint)
  		// path = new THREE.QuadraticBezierCurve3(start, controlPoint, end);
  		path = new THREE.CatmullRomCurve3([start, controlPoint, end])
  	}

  	const vertices = path.getPoints(this.pointCounts)
  	this.vertices = vertices
  	this.map = this.generateSprite()
  	this.group = this.getGeometry()
  	const names = opt.name
  	this.names = names
  	this.tweenGroup = new TWEEN.Group()
  	this.container = container
  	this.startLightPoint = this.addName(start, names && names[0])
  	this.endLightPoint = this.addName(end, names && names[1])
  	if(opt.controlPointText) {
  		this.controlPointText = this.addName(controlPoint, opt.controlPointText)
  	}else{
  		this.controlPointText = null
  	}
  	// this.texture = this.getText(opt.name);
  }

  getText (name) {
  	var canvas = document.createElement('canvas')

  	const ctx = canvas.getContext('2d')
  	const width = 128
  	ctx.canvas.width = width
  	const height = 100
  	ctx.fillStyle = 'transparent'
  	// ctx.fillStyle = 'blue'
  	ctx.fillRect(0, 0, width, height)

  	ctx.fillStyle = 'white'
  	ctx.font = '30px arial'
  	ctx.textAlign = 'left'
  	ctx.textBaseline = 'middle'
  	ctx.textAlign = 'center'
  	ctx.fillText(name, width / 2, height + 10, width)

  	// document.getElementById("threejs").appendChild(canvas)

  	var texture = new THREE.CanvasTexture(canvas)

  	// texture.needsUpdate = true;

  	return texture
  }

  addText (point, text) {
  	const texture = this.getText(text)
  	const spriteMaterial = new THREE.SpriteMaterial({
  		map: texture,
  		color: 0xffffff,
  		depthTest: false,
  	})
  	const sprite = new THREE.Sprite(spriteMaterial)
  	sprite.scale.multiplyScalar(4)
  	sprite.position.copy(point)
  	return sprite
  }

  addName (point, depart) {
  	const { map, scale = 5, container, opt } = this

  	const geo = new THREE.Geometry()
  	geo.vertices.push(point)
  	const material = new THREE.PointsMaterial({
  		size: scale,
  		map,
  		transparent: true,
  		opacity: 0.8,
  		color: 0x00ffff,
  		blending: THREE.AdditiveBlending,
  		depthTest: false,
  	})
  	const lightPoint = new THREE.Points(geo, material)
  	const sprite = depart ? this.addText(point, depart) : null
  	sprite && sprite.scale.multiplyScalar(opt.textScale || 24)
  	return {
  		start: () => {
  			container.add(lightPoint)
  			sprite && container.add(sprite)
  		},
  		end: () => {
  			container.remove(lightPoint)
  			sprite && container.remove(sprite)
  		},
  		getPoint: () => lightPoint,
  	}
  }

  getControlPoint () {
  	const { r = 150, r1 = 200 } = this.opt
  	const average = this.average.bind(this)
  	const { sin, cos } = Math
  	const xm = average('x'),
  		ym = average('y'),
  		zm = average('z')
  	let fa = 0,
  		seta = 0,
  		x = 0,
  		y = 0,
  		z = 0
  	fa = Math.acos(zm / r)
  	seta = Math.asin(ym / (r * Math.sin(fa)))
  	if (ym < 0) {
  		seta += Math.PI
  	}
  	x = r1 * sin(fa) * cos(seta)
  	y = r1 * sin(fa) * sin(seta)
  	z = r1 * cos(fa)
  	// console.log("control",x,y,z)
  	return new THREE.Vector3(x, y, z)
  }

  average (attr) {
  	return (this.start[attr] + this.end[attr]) / 2
  }

  drawLine () {
  	const { vertices, scene } = this
  	const geo = new THREE.Geometry()
  	geo.vertices = vertices
  	const line = new THREE.Line(
  		geo,
  		new THREE.LineBasicMaterial({ color: '#fcff23' })
  	)
  	scene.add(line)
  }

  generateSprite () {
  	var canvas = document.createElement('canvas')

  	canvas.width = 60

  	canvas.height = 60

  	var context = canvas.getContext('2d')

  	var gradient = context.createRadialGradient(
  		canvas.width / 2,
  		canvas.height / 2,
  		0,
  		canvas.width / 2,
  		canvas.height / 2,
  		canvas.width / 2
  	)

  	gradient.addColorStop(0, 'rgba(255,255,255,1)')

  	gradient.addColorStop(0.2, 'rgba(0,0,0,1)')

  	gradient.addColorStop(0.4, 'rgba(0,0,0,1)')

  	gradient.addColorStop(1, 'rgba(0,0,0,.2)')

  	// gradient.addColorStop(0, '#00ffff');
  	// gradient.addColorStop(0.4, '#00ff80');
  	// gradient.addColorStop(1, 'rgba(0,0,0,.2)');

  	context.fillStyle = gradient

  	context.fillRect(0, 0, canvas.width, canvas.height)

  	var texture = new THREE.Texture(canvas)

  	texture.needsUpdate = true

  	return texture
  }

  getGeometry () {
  	const { count, scale = 100 } = this
  	const group = new THREE.Group()
  	const map = this.generateSprite()
  	for (let i = 0; i < count; i++) {
  		const geo = new THREE.Geometry()
  		geo.vertices.push(new THREE.Vector3(0, 0, 0))
  		const mat = new THREE.PointsMaterial({
  			size: scale * (i / count),
  			transparent: true,
  			opacity: 0.6,
  			color: 0xfcff23,
  			blending: THREE.AdditiveBlending,
  			depthTest: false,
  			map,
  		})
  		group.add(new THREE.Points(geo, mat))
  	}
  	// scene.add(group);
  	// this.group = group;
  	return group
  }

  flyBySprit () {
  	let { vertices, count, group, pointCounts, tweenGroup, container } = this
  	if (!group) return
  	const tween = new TWEEN.Tween({ index: 0 }, tweenGroup)
  		.to({ index: pointCounts }, 2000 * 2)
  		.onUpdate(o => {
  			const progress = Math.ceil(o.index) - 1
  			vertices.slice(progress, progress + count).forEach((v, k) => {
  				group.children[k].position.set(v.x, v.y, v.z)
  			})
  		})
  		.onStart(() => {
  			container.add(group)
  			this.startLightPoint.start()
  			this.endLightPoint.start()
  		})
  		.onComplete(() => {
  			container.remove(group)
  			this.startLightPoint.end()
  			this.endLightPoint.end()
  		})
  	return {
  		group: tweenGroup,
  		tween,
  	}
  }

  fly (opt = {}) {
  	let { vertices, count, group, pointCounts, tweenGroup, container } = this
  	if (!group) return
  	const targets = { index: 0 }
  	const stop = ()=>{
  		container.remove(group)
  		this.startLightPoint.end()
  		this.endLightPoint.end()
  		this.controlPointText && this.controlPointText.end()
  	}
  	return {
  		anime:anime({
  			targets,
  			index: pointCounts,
  			easing: 'linear',
  			duration: 3 * 1500,
  			update: anim => {
  				// console.log("o", targets.index);
  				vertices
  					.slice(
  						Math.ceil(targets.index) - 1,
  						Math.ceil(targets.index) - 1 + count
  					)
  					.forEach((v, k) => {
  						group.children[k].position.set(v.x, v.y, v.z)
  					})
  				if (Math.ceil(targets.index) + count === (pointCounts - 1)) {
  					this.endLightPoint.start()
  				}
  			},
  			changeBegin: () => {
  				// console.log("begin",opt,new Date().valueOf() )
  				container.add(group)
  				this.startLightPoint.start()
  				this.controlPointText && this.controlPointText.start()
  				// this.endLightPoint.end();
  			},
  			changeComplete: stop,
  			// autoplay: false,
  			...opt,
  		}),
  		stop
  	}
  }

	/* fly() {
    let { progress, scene, vertices, name } = this;
    this.progress += 1;
    if (this.progress > 100) {
      this.progress = 0;
    } else {
      const o = scene.getObjectByName(name);
      if (o) {
        scene.remove(o);
      }
      const lineGeometry = new THREE.Geometry();
      const steps = 15;
      lineGeometry.vertices = vertices.slice(progress, progress + steps);
      let r = 1,
        a = 1;
      for (let i = 0; i < steps; i++) {
        r -= 1 / steps;
        // a -= 0.05;
        lineGeometry.colors.push(new THREE.Color(r, 1, 1));
      }
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.name = name;
      scene.add(line);
    }
  } */
}

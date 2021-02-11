import Stats from 'stats.js'
import { AxesHelper, CameraHelper } from 'three'
import { getCamera } from './camera'
import { getScene } from './scene'
import { getRenderer } from './renderer'
import { getLights } from './light'
import { getHeart, getFloor } from './mesh'

const [w, h] = [window.innerWidth, window.innerHeight]
const camera = getCamera(w, h)
const scene = getScene()
const renderer = getRenderer(w, h)
const lights = getLights()
const heart = getHeart()

lights.forEach(l => scene.add(l))
scene.add(getFloor())
scene.add(heart)

const isDev = process.env.NODE_ENV === 'development'
const stats = new Stats()
if (isDev) {
  stats.showPanel(0)
  document.body.appendChild(stats.dom)
  const axesHelper = new AxesHelper(5)
  scene.add(axesHelper)
  const lightHelpers = lights.map(l => new CameraHelper(l.shadow.camera))
  lightHelpers.forEach(h => { scene.add(h) })
}

function animation (time: number) {
  if (isDev) stats.begin()
  const heartScale = 0.015 + Math.abs(Math.sin(time / 1000)) / 300
  const heartAngle = time / 2000
  heart.scale.set(heartScale, heartScale, heartScale)
  heart.rotation.x = heartAngle
  heart.rotation.y = heartAngle
  heart.rotation.z = heartAngle
  renderer.render(scene, camera)
  if (isDev) stats.end()
}

export function init (rendererContainer: HTMLElement) {
  renderer.setAnimationLoop(animation)
  rendererContainer.appendChild(renderer.domElement)
}

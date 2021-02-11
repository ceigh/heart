import Stats from 'stats.js'
import { AxesHelper, CameraHelper } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { getCamera } from './camera'
import { getScene } from './scene'
import { getRenderer } from './renderer'
import { getLights } from './light'
import { getHeart, getFloor } from './mesh'
import { degree } from './_'

const [w, h] = [window.innerWidth, window.innerHeight]
const camera = getCamera(w, h)
const scene = getScene()
const renderer = getRenderer(w, h)
const controls = new OrbitControls(camera, renderer.domElement)
const lights = getLights()
const heart = getHeart()

controls.minDistance = 5
controls.maxDistance = 20
controls.maxPolarAngle = 89 * degree

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
  const sec = time / 1000
  const heartScale = 1 + (1 + Math.sin(sec)) / 10
  heart.scale.set(heartScale, heartScale, heartScale)
  heart.rotation.y = sec
  renderer.render(scene, camera)
  if (isDev) stats.end()
}

export function init (rendererContainer: HTMLElement) {
  renderer.setAnimationLoop(animation)
  rendererContainer.appendChild(renderer.domElement)
}

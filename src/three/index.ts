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
const [camera, renderer] = [getCamera(w, h), getRenderer(w, h)]
const [scene, lights] = [getScene(), getLights()]

const controls = new OrbitControls(camera, renderer.domElement)
const heart = getHeart()

const isDev = process.env.NODE_ENV === 'development'
let stats: { showPanel: Function; dom: HTMLElement; begin: Function; end: Function }
let infoWasPrinted = false

if (isDev) {
  const axesHelper = new AxesHelper(5)
  scene.add(axesHelper)

  const lightHelpers = lights.map(l => new CameraHelper(l.shadow.camera))
  lightHelpers.forEach(h => { scene.add(h) })

  stats = new Stats()
  stats.showPanel(0)
  document.body.appendChild(stats.dom)
}

controls.minDistance = 8
controls.maxDistance = 20
controls.maxPolarAngle = 85 * degree

scene.add(getFloor())
scene.add(heart)
lights.forEach(l => scene.add(l))

function animation (time: number) {
  if (isDev) stats.begin()

  const sec = time / 1000
  const heartScale = 1 + (1 + Math.sin(sec)) / 10
  heart.scale.set(heartScale, heartScale, heartScale)
  heart.rotation.y = sec
  renderer.render(scene, camera)

  if (isDev) {
    stats.end()
    if (!infoWasPrinted) {
      console.log(renderer.info.render)
      infoWasPrinted = true
    }
  }
}

export function init (rendererContainer: HTMLElement) {
  rendererContainer.appendChild(renderer.domElement)
  renderer.setAnimationLoop(animation)
}

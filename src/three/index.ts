import { getCamera } from './camera'
import { getScene } from './scene'
import { getRenderer } from './renderer'
import { getLight } from './light'
import { getCube, getFloor } from './mesh'

const [w, h] = [window.innerWidth, window.innerHeight]
const camera = getCamera(w, h)
const scene = getScene()
const renderer = getRenderer(w, h)
const light = getLight()
const cube = getCube()

function animation (time: number) {
  cube.rotation.y = time / 2000
  renderer.render(scene, camera)
}

export function init (rendererContainer: HTMLElement) {
  scene.add(light)
  scene.add(getFloor())
  scene.add(cube)
  renderer.setAnimationLoop(animation)
  rendererContainer.appendChild(renderer.domElement)
}

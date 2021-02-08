import { getCamera } from './camera'
import { getScene } from './scene'
import { getRenderer } from './renderer'

import { getMesh } from './mesh'

const [w, h] = [window.innerWidth, window.innerHeight]

const camera = getCamera(w, h)
const scene = getScene()
const renderer = getRenderer(w, h)

const mesh = getMesh()

function animation (time: number) {
  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000

  renderer.render(scene, camera)
}

export function init (rendererContainer: HTMLElement) {
  scene.add(mesh)

  renderer.setAnimationLoop(animation)
  rendererContainer.appendChild(renderer.domElement)
}

import Stats from 'stats.js'
import { getCamera } from './camera'
import { getScene } from './scene'
import { getRenderer } from './renderer'
import { getLight } from './light'
import { getHeart, getFloor } from './mesh'

const [w, h] = [window.innerWidth, window.innerHeight]
const camera = getCamera(w, h)
const scene = getScene()
const renderer = getRenderer(w, h)
const light = getLight()
const heart = getHeart()

const showStats = process.env.NODE_ENV === 'development'
const stats = new Stats()
if (showStats) {
  stats.showPanel(0)
  document.body.appendChild(stats.dom)
}

function animation (time: number) {
  if (showStats) stats.begin()
  const heartScale = 0.015 + Math.abs(Math.sin(time / 1000)) / 300
  heart.scale.set(heartScale, heartScale, heartScale)
  renderer.render(scene, camera)
  if (showStats) stats.end()
}

export function init (rendererContainer: HTMLElement) {
  scene.add(light)
  scene.add(getFloor())
  scene.add(heart)
  renderer.setAnimationLoop(animation)
  rendererContainer.appendChild(renderer.domElement)
}

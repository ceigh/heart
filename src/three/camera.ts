import { PerspectiveCamera } from 'three'
import { degree } from './_'

export function getCamera (w: number, h: number): PerspectiveCamera {
  const camera = new PerspectiveCamera(75, w / h, 0.01, 20)
  camera.position.z = 3.5
  camera.position.y = 5
  camera.rotation.x = -60 * degree
  return camera
}

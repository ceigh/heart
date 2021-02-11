import { PerspectiveCamera } from 'three'
import { degree } from './_'

export function getCamera (w: number, h: number): PerspectiveCamera {
  const camera = new PerspectiveCamera(75, w / h, 0.01, 50)
  camera.position.z = 9
  camera.position.y = 6
  camera.rotation.x = -30 * degree
  return camera
}

import * as THREE from 'three'

export function getCamera (w: number, h: number): THREE.Camera {
  const camera = new THREE.PerspectiveCamera(70, w / h, 0.01, 10)
  camera.position.z = 1
  return camera
}

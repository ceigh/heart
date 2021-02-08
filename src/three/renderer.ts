import * as THREE from 'three'

export function getRenderer (w: number, h: number): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(w, h)
  return renderer
}

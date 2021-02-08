import * as THREE from 'three'

export function appendRenderer (container: HTMLElement) {
  const renderer = new THREE.WebGLRenderer()
  container.appendChild(renderer.domElement)
}

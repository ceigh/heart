import * as THREE from 'three'

export function getMesh (): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}

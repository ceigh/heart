import * as THREE from 'three'
import { degree } from './_'

export function getCube (): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshLambertMaterial({ color: 0x44aa88 })
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}

export function getFloor (): THREE.Mesh {
  const texture = new THREE.TextureLoader()
    .load('/floor.jpg')
  texture.repeat.set(22, 22)
  texture.wrapT = THREE.RepeatWrapping
  texture.wrapS = THREE.RepeatWrapping

  const geometry = new THREE.PlaneBufferGeometry(100, 80)
  const material = new THREE.MeshLambertMaterial({ map: texture })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, -1, 0)
  mesh.rotation.x = -90 * degree
  mesh.rotation.z = -30 * degree
  return mesh
}

import * as THREE from 'three'
import { degree } from './_'

export function getHeart (): THREE.Mesh {
  const shape = new THREE.Shape()
  shape.moveTo(25, 25)
  shape.bezierCurveTo(25, 25, 20, 0, 0, 0)
  shape.bezierCurveTo(-30, 0, -30, 35, -30, 35)
  shape.bezierCurveTo(-30, 55, -10, 77, 25, 95)
  shape.bezierCurveTo(60, 77, 80, 55, 80, 35)
  shape.bezierCurveTo(80, 35, 80, 0, 50, 0)
  shape.bezierCurveTo(35, 0, 25, 25, 25, 25)
  const extrudeSettings = {
    amount: 8,
    bevelEnabled: true,
    bevelSegments: 20,
    steps: 2,
    bevelSize: 20,
    bevelThickness: 20
  }
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  const material = new THREE.MeshPhongMaterial({ color: 0x000000 })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.scale.set(0.02, 0.02, 0.02)
  mesh.position.set(-0.4, 3, 0)
  mesh.rotation.x = 180 * degree
  mesh.castShadow = true
  return mesh
}

export function getFloor (): THREE.Mesh {
  const texture = new THREE.TextureLoader()
    .load('/floor.jpg')
  texture.repeat.set(5, 5)
  texture.wrapT = THREE.RepeatWrapping
  texture.wrapS = THREE.RepeatWrapping
  texture.magFilter = THREE.LinearFilter
  const geometry = new THREE.PlaneBufferGeometry(100, 80)
  const material = new THREE.MeshPhongMaterial({ map: texture })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, 0, 0)
  mesh.rotation.x = -90 * degree
  mesh.receiveShadow = true
  return mesh
}

import * as THREE from 'three'
import { degree } from './_'

export function getHeart (): THREE.Group {
  const shape = new THREE.Shape()
  shape.moveTo(25, 25)
  shape.bezierCurveTo(25, 25, 20, 0, 0, 0)
  shape.bezierCurveTo(-30, 0, -30, 35, -30, 35)
  shape.bezierCurveTo(-30, 55, -10, 77, 25, 95)
  shape.bezierCurveTo(60, 77, 80, 55, 80, 35)
  shape.bezierCurveTo(80, 35, 80, 0, 50, 0)
  shape.bezierCurveTo(35, 0, 25, 25, 25, 25)
  const extrudeSettings = {
    curveSegments: 128,
    amount: 16,
    bevelSegments: 128,
    bevelThickness: 16
  }
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x777777,
    roughness: 0,
    clearcoat: 1,
    transmission: 0.3,
    transparent: true
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.y = -3
  mesh.scale.set(0.02, 0.02, 0.02)
  mesh.rotation.x = 180 * degree
  mesh.castShadow = true
  const box = new THREE.Box3().setFromObject(mesh)
  box.getCenter(mesh.position)
  mesh.position.multiplyScalar(-1)
  const pivot = new THREE.Group()
  pivot.add(mesh)
  return pivot
}

export function getFloor (): THREE.Mesh {
  const texture = new THREE.TextureLoader()
    .load('/floor.jpg')
  texture.repeat.set(5, 5)
  texture.wrapT = THREE.RepeatWrapping
  texture.wrapS = THREE.RepeatWrapping
  texture.magFilter = THREE.LinearFilter
  const geometry = new THREE.PlaneBufferGeometry(100, 80)
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.3
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, 0, 0)
  mesh.rotation.x = -90 * degree
  mesh.receiveShadow = true
  return mesh
}

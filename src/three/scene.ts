import { Scene, FogExp2 } from 'three'

export function getScene (): Scene {
  const scene = new Scene()
  // scene.fog = new FogExp2(0xffffff, 0.07)
  return scene
}

import { SpotLight } from 'three'

export function getLight (): SpotLight {
  const light = new SpotLight(0xffffff, 1)
  light.position.set(0, 40, 20)
  return light
}

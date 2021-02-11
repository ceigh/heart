import { SpotLight } from 'three'

function generateSpotLight (color: number) {
  const spotLight = new SpotLight(color, 2)
  spotLight.castShadow = true
  return spotLight
}

export function getLights (): SpotLight[] {
  const lights = [0xff0000, 0x00ff00, 0x0000ff].map(generateSpotLight)
  lights[0].position.set(0, 6, 2)
  lights[1].position.set(-2, 6, 0)
  lights[2].position.set(2, 6, 0)
  return lights
}

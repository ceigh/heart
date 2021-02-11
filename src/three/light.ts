import { SpotLight } from 'three'

function generateSpotLight (color: number) {
  const spotLight = new SpotLight(color, 2)

  spotLight.penumbra = 1
  spotLight.angle = 0.8

  spotLight.castShadow = true
  spotLight.shadowMapHeight = 2048
  spotLight.shadowMapWidth = 2048

  return spotLight
}

export function getLights (): SpotLight[] {
  const lights = [0xff8888, 0x88ff88, 0x8888ff].map(generateSpotLight)

  lights[0].position.set(0, 10, 5)
  lights[1].position.set(-5, 10, -5)
  lights[2].position.set(5, 10, -5)

  return lights
}

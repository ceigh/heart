import { WebGLRenderer } from 'three'

export function getRenderer (w: number, h: number): WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(w, h)
  return renderer
}

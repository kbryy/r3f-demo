import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

type Props = {
  path: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export const Model = ({
  path,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: Props) => {
  const { scene } = useGLTF(path)
  const modelRef = useRef<THREE.Object3D>(null)

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2
    }
  })

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

useGLTF.preload('./models/model.glb')

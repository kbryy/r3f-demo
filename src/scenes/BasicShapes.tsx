import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

const RotatingBox = () => {
  const meshRef = useRef<Mesh>(null)
  const [clicked, setClicked] = useState(false)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onClick={() => setClicked(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? 'blue' : 'red'} />
    </mesh>
  )
}

export const BasicShapes = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: false,
        stencil: false,
        depth: true,
      }}
      performance={{ min: 0.3 }}
    >
      <color attach="background" args={['white']} />
      <ambientLight intensity={10} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingBox />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  )
}

import { Environment, OrbitControls, Stats, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

useGLTF.preload('./models/model.glb')

export const ModelViewer = () => {
  const { scene } = useGLTF('./models/model.glb')
  const modelRef = useRef<Group>(null)
  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 90 }}
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: false,
        stencil: false,
        depth: true,
      }}
      performance={{ min: 0.3 }}
      shadows="basic"
    >
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={20}
        enableDamping={true}
        dampingFactor={0.05}
      />
      <color attach="background" args={['#f0f0f0']} />
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <primitive
        ref={modelRef}
        object={scene}
        scale={1}
        castShadow
        receiveShadow
      />
      {/* FPSを表示 */}
      <Stats className="right-0 !left-auto" />
    </Canvas>
  )
}

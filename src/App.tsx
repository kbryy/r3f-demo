import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'

const App = () => {
  return (
    <div className="app">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[30, 6, 5]} />
        <OrbitControls
          enablePan={true}
          enableRotate={true}
          enableZoom={true}
          minDistance={1}
          maxDistance={100}
        />
        <ambientLight intensity={0.7} />
        <directionalLight castShadow position={[50, 50, 50]} intensity={1} />
        <Model path="./models/model.glb" />
      </Canvas>
    </div>
  )
}

export default App

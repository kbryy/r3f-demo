import { PresentationControls, RoundedBox, Stats, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

const documentContent = {
  title: 'React Three Fiber',
  subtitle: 'demo',
  sections: [
    { heading: 'README', content: 'プロジェクトの説明' },
    { heading: 'GLB Model', content: 'GLBモデルを表示' },
  ],
}

const paperGeometry = [8, 11, 0.1] as [number, number, number]
const lineGeometry = [6, 0.02] as [number, number]

const Document = () => {
  const meshRef = useRef<Group>(null)
  return (
    <group ref={meshRef}>
      <RoundedBox args={paperGeometry} >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      <Text
        position={[0, 4.5, 0.06]}
        fontSize={0.8}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {documentContent.title}
      </Text>
      <Text
        position={[0, 3.7, 0.06]}
        fontSize={0.4}
        color="gray"
        anchorX="center"
        anchorY="middle"
      >
        {documentContent.subtitle}
      </Text>
      <mesh position={[0, 3.2, 0.06]}>
        <planeGeometry args={lineGeometry} />
        <meshBasicMaterial color="#e2e8f0" />
      </mesh>
      {documentContent.sections.map((section, index) => (
        <group key={section.heading} position={[0, 2 - index * 1.5, 0.06]}>
          <Text
            position={[-3, 0, 0]}
            fontSize={0.35}
            color="black"
            anchorX="left"
            anchorY="middle"
            onClick={() => { console.log("hoge") }}
          >
            {section.heading}
          </Text>
          <Text
            position={[-3, -0.4, 0]}
            fontSize={0.25}
            color="gray"
            anchorX="left"
            anchorY="middle"
          >
            {section.content}
          </Text>
        </group>
      ))}
      <Text
        position={[0, -5, 0.06]}
        fontSize={0.2}
        color="gray"
        anchorX="center"
        anchorY="middle"
      >
        Page 1 of 1
      </Text>
    </group>
  )
}

export const ReadMe = () => {
  return (
    <div className="h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        shadows={false}
        frameloop="always"
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          stencil: false,
          depth: true,
        }}
        performance={{ min: 0.3 }}
      >
        <ambientLight intensity={100} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} />
        <color attach="background" args={['gray']} />
        <PresentationControls
          global={true}
          snap={true}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Document />
        </PresentationControls>
        {/* FPSを表示 */}
        <Stats className="right-0 !left-auto" />
      </Canvas>
    </div>
  )
}

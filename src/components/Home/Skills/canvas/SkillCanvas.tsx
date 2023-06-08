import { OrbitControls, Preload, Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const SkillCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<div>Loading</div>}>
        <OrbitControls enableZoom={false} />
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
          <mesh castShadow receiveShadow>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#fff8eb"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
          </mesh>
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default SkillCanvas

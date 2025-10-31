import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

interface PoolProps {
  dimensions: {
    width: number
    length: number
    depth: number
  }
  color: string
}

function Pool({ dimensions, color }: PoolProps) {
  const waterRef = useRef<Mesh>(null)
  const { width, length, depth } = dimensions

  // Animate water slightly
  useFrame((state) => {
    if (waterRef.current) {
      waterRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Pool walls - outer container */}
      <mesh position={[0, depth / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width + 0.3, depth, length + 0.3]} />
        <meshStandardMaterial 
          color="#e0e0e0" 
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>

      {/* Inner pool space (water container) */}
      <mesh position={[0, depth / 2 + 0.1, 0]}>
        <boxGeometry args={[width, depth - 0.2, length]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.0}
          roughness={0.8}
        />
      </mesh>

      {/* Water surface */}
      <mesh 
        ref={waterRef}
        position={[0, depth - 0.15, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[width - 0.1, length - 0.1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Pool deck/rim */}
      <mesh position={[0, depth + 0.05, 0]} receiveShadow>
        <boxGeometry args={[width + 1, 0.1, length + 1]} />
        <meshStandardMaterial 
          color="#8B7355"
          metalness={0.0}
          roughness={0.8}
        />
      </mesh>

      {/* Pool steps */}
      <group position={[-width / 2 + 0.5, 0, -length / 2 + 0.5]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshStandardMaterial color="#c0c0c0" />
        </mesh>
        <mesh position={[0, 0.7, 0]} castShadow>
          <boxGeometry args={[0.8, 0.2, 0.8]} />
          <meshStandardMaterial color="#c0c0c0" />
        </mesh>
      </group>

      {/* Ground plane */}
      <mesh 
        position={[0, -0.05, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#6B8E23"
          metalness={0.0}
          roughness={0.9}
        />
      </mesh>
    </group>
  )
}

export default Pool


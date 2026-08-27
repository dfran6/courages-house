
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function RotatingBox() {
  const meshRef = useRef()

 

  return (
    <mesh ref={meshRef} position={[0, -22, 0]} receiveShadow>
      <boxGeometry args={[5000,50,5000]} />
      <meshStandardMaterial color="#060000" roughness={1} metalness={0} />
    
    </mesh>
  )
}

export default RotatingBox
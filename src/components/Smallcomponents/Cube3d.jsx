import { useFrame } from "@react-three/fiber";
import React,{ useRef } from "react";
import { Mesh } from "three";

function Cube3D() {
    const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ff0066"
        emissive="#330011"
        emissiveIntensity={0.3}
        wireframe={false}
      />
      {/* Wireframe overlay */}
      <mesh>
        <boxGeometry args={[1.01, 1.01, 1.01]} />
        <meshBasicMaterial
          color="#9966ff"
          wireframe={true}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </mesh>
  )
}

export default Cube3D;
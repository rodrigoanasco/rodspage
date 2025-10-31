import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Banana = (props) => {
  const { nodes, materials } = useGLTF('/models/banana.glb')
  return (
    <Float floatIntensity={1}>
      <group rotation={[-Math.PI / 2, 0, 2.138]} {... props}>
        <group rotation={[Math.PI/ 2, 2, 0]}>
          <group position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials['Material.004']}
            />
          </group>
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/banana.glb')

export default Banana
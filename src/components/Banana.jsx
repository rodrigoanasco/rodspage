import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Banana = (props) => {
  const { nodes, materials } = useGLTF('/models/mechanical_keyboard.glb')
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials['09___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials['02___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials['08___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials['07___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials['01___Default']}
          />
        </group>
      </group>
    </group>
  </Float>
  )
}

useGLTF.preload('/models/mechanical_keyboard.glb')

export default Banana

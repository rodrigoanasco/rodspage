import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const HackerRoom = (props) => { 
  const { nodes, materials } = useGLTF('models/office_room_15_low-poly_3d_model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.lambert2SG}
        />
      </group>
    </group>
  )
}
useGLTF.preload('models/office_room_15_low-poly_3d_model.glb')

export default HackerRoom;

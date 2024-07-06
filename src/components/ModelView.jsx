import { View } from '@react-three/drei'
import React from 'react'

const ModelView = ( { index , groupRef , gsapType , controlRef ,setRotationSize,size,item} ) => {
  return (
  <View 
    index={index}
    id={gsapType}
    className={`border-2 border-red-400 w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
  >
  <ambientLight  intensity={0.3} />
  </View>
  )
}

export default ModelView

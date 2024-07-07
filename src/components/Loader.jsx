import React from 'react'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <Html center>
      <motion.div 
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-16 h-16 border-4 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.p 
          className="mt-4 text-xl font-bold text-blue-500"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </Html>
  )
}

export default Loader
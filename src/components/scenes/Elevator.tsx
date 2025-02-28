// components/scenes/Elevator.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

const Elevator = ({ position, isActive, cameraLookAt }) => {
  const elevatorRef = useRef();
  const doorRef = useRef();

  // In a real implementation, load your GLTF model
  // const { scene, animations } = useGLTF('/models/elevator.glb');
  // const { actions } = useAnimations(animations, elevatorRef);

  useEffect(() => {
    if (isActive) {
      // Play elevator arrival animation
      // actions.elevatorArrival.play();
    }
  }, [isActive]);

  useFrame(() => {
    if (elevatorRef.current && isActive) {
      elevatorRef.current.lookAt(...cameraLookAt);
    }
  });

  return (
    <motion.group
      ref={elevatorRef}
      position={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* For prototype purposes, using simple geometries */}
      <mesh position={[0, 1.5, -1.5]} receiveShadow>
        <boxGeometry args={[3, 3, 0.1]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* Elevator door */}
      <motion.mesh
        ref={doorRef}
        position={[0, 1.5, -1.49]}
        animate={{
          x: isActive ? 1.5 : 0,
        }}
        transition={{
          duration: 1,
          delay: isActive ? 1 : 0,
        }}
      >
        <boxGeometry args={[1.5, 2.5, 0.05]} />
        <meshStandardMaterial color="#333333" />
      </motion.mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Welcome text */}
      <Text
        position={[0, 2, -1.45]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        WELCOME TO LUMON INDUSTRIES
      </Text>
    </motion.group>
  );
};

export default Elevator;

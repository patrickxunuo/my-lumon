// components/scenes/ExitArea.jsx
import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const ExitArea = ({ position, isActive, cameraLookAt }) => {
  const exitRef = useRef();

  return (
    <motion.group
      ref={exitRef}
      position={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Exit hallway */}
      <mesh position={[0, 1.5, -2.5]} receiveShadow>
        <boxGeometry args={[3, 3, 5]} />
        <meshStandardMaterial color="#333333" wireframe />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Exit sign */}
      <group position={[0, 2.2, -5]}>
        <mesh castShadow>
          <boxGeometry args={[1, 0.3, 0.1]} />
          <meshStandardMaterial color="#1c3b34" />
        </mesh>

        <Text
          position={[0, 0, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          EXIT
        </Text>
      </group>

      {/* Personal interests display */}
      <group position={[0, 1.5, -7]}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          PERSONAL INTERESTS
        </Text>

        <Text
          position={[0, 0, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          Photography Mountain Biking Science Fiction Game Development
        </Text>
      </group>
    </motion.group>
  );
};

export default ExitArea;

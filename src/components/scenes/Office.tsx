// components/scenes/Office.jsx
import React, { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Office = ({ position, isActive, cameraLookAt }) => {
  const officeRef = useRef();
  const computerRef = useRef();

  return (
    <motion.group
      ref={officeRef}
      position={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
    >
      {/* Office floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Office walls */}
      <mesh position={[0, 1.5, -5]} receiveShadow>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh
        position={[5, 1.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh
        position={[-5, 1.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[10, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Computer workspace */}
      <group position={[0, 0, -2]}>
        {/* Desk */}
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.05, 0.8]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>

        {/* Desk legs */}
        <mesh position={[-0.65, 0.2, -0.35]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <meshStandardMaterial color="#aaaaaa" />
        </mesh>

        <mesh position={[0.65, 0.2, -0.35]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <meshStandardMaterial color="#aaaaaa" />
        </mesh>

        <mesh position={[-0.65, 0.2, 0.35]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <meshStandardMaterial color="#aaaaaa" />
        </mesh>

        <mesh position={[0.65, 0.2, 0.35]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <meshStandardMaterial color="#aaaaaa" />
        </mesh>

        {/* Computer monitor */}
        <motion.group
          ref={computerRef}
          position={[0, 0.75, 0]}
          animate={{
            rotateX: isActive ? -0.1 : 0,
            y: isActive ? 0.85 : 0.75,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Monitor base */}
          <mesh position={[0, -0.15, 0]} castShadow>
            <boxGeometry args={[0.3, 0.05, 0.2]} />
            <meshStandardMaterial color="#222222" />
          </mesh>

          {/* Monitor stand */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.05, 0.3, 0.05]} />
            <meshStandardMaterial color="#222222" />
          </mesh>

          {/* Monitor screen */}
          <mesh position={[0, 0.15, 0]} castShadow>
            <boxGeometry args={[0.6, 0.4, 0.03]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          {/* Screen content - Experience */}
          <group position={[0, 0.15, 0.02]}>
            <mesh>
              <planeGeometry args={[0.58, 0.38]} />
              <meshBasicMaterial color="#1c3b34" />
            </mesh>

            <Text
              position={[0, 0.15, 0.01]}
              fontSize={0.04}
              color="#ffffff"
              anchorX="center"
              maxWidth={0.5}
            >
              EXPERIENCE
            </Text>

            <Text
              position={[-0.22, 0.05, 0.01]}
              fontSize={0.025}
              color="#ffffff"
              anchorX="left"
              anchorY="top"
              maxWidth={0.5}
            >
              Senior Developer - XYZ Corp Full Stack Engineer - ABC Inc Software
              Architect - DEF Ltd
            </Text>
          </group>
        </motion.group>
      </group>
    </motion.group>
  );
};

export default Office;

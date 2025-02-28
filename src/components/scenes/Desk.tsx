// components/scenes/Desk.jsx
import React, { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Desk = ({ position, isActive, cameraLookAt }) => {
  const deskRef = useRef();
  const drawerRef = useRef();
  const paperRef = useRef();

  return (
    <motion.group
      ref={deskRef}
      position={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
    >
      {/* Desk body - already created in Office component */}

      {/* Drawer */}
      <motion.group
        ref={drawerRef}
        position={[0, 0.2, 0]}
        animate={{
          z: isActive ? 0.3 : 0,
        }}
        transition={{ duration: 0.5, delay: isActive ? 0.5 : 0 }}
      >
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.2, 0.4]} />
          <meshStandardMaterial color="#666666" />
        </mesh>

        {/* Drawer handle */}
        <mesh position={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[0.1, 0.03, 0.02]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      </motion.group>

      {/* Tech stack document */}
      <motion.group
        ref={paperRef}
        position={[0, 0.25, 0]}
        animate={{
          y: isActive ? 0.45 : 0.25,
          rotateX: -Math.PI / 2,
        }}
        transition={{ duration: 0.5, delay: isActive ? 1 : 0 }}
      >
        <mesh castShadow receiveShadow>
          <planeGeometry args={[0.4, 0.3]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>

        {/* Document content */}
        <group>
          {/* Lumon logo */}
          <mesh position={[-0.15, 0.1, 0.01]}>
            <planeGeometry args={[0.05, 0.05]} />
            <meshBasicMaterial color="#1c3b34" />
          </mesh>

          <Text
            position={[-0.15, 0.1, 0.02]}
            fontSize={0.03}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            L
          </Text>

          <Text
            position={[0, 0.1, 0.01]}
            fontSize={0.025}
            color="black"
            fontWeight="bold"
            anchorX="center"
            anchorY="middle"
            maxWidth={0.35}
          >
            TECH PROFICIENCIES
          </Text>

          <Text
            position={[-0.18, 0, 0.01]}
            fontSize={0.018}
            color="black"
            anchorX="left"
            anchorY="middle"
            maxWidth={0.35}
          >
            → JavaScript / TypeScript → React / Three.js / WebGL → Node.js /
            Express → Python / Django → AWS / Docker / CI/CD
          </Text>
        </group>
      </motion.group>
    </motion.group>
  );
};

export default Desk;

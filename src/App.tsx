import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import LoadingScreen from "./components/LoadingScreen";
import Elevator from "./components/scenes/Elevator";
import Office from "./components/scenes/Office";
import Desk from "./components/scenes/Desk";
import ExitArea from "./components/scenes/ExitArea";
import "./App.css";

function App() {
  const [currentLocation, setCurrentLocation] = useState("elevator");
  const [cameraPosition, setCameraPosition] = useState([0, 1.6, 0]);
  const [cameraLookAt, setCameraLookAt] = useState([0, 1.6, -1]);

  // Define camera positions and look-at points for each location
  const locations = {
    elevator: {
      position: [0, 1.6, 0],
      lookAt: [0, 1.6, -1],
    },
    office: {
      position: [5, 1.6, 0],
      lookAt: [5, 1.6, -2],
    },
    desk: {
      position: [5, 1, -1],
      lookAt: [5, 0.5, -2],
    },
    exit: {
      position: [-5, 1.6, 0],
      lookAt: [-5, 1.6, -5],
    },
  };

  const handleNavigate = (location) => {
    setCurrentLocation(location);
    setCameraPosition(locations[location].position);
    setCameraLookAt(locations[location].lookAt);
  };

  return (
    <>
      <LoadingScreen />
      <Navigation
        onNavigate={handleNavigate}
        currentLocation={currentLocation}
      />

      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={cameraPosition}
            fov={75}
            near={0.1}
            far={1000}
          />

          <Elevator
            position={[0, 0, 0]}
            isActive={currentLocation === "elevator"}
            cameraLookAt={cameraLookAt}
          />

          <Office
            position={[5, 0, 0]}
            isActive={currentLocation === "office"}
            cameraLookAt={cameraLookAt}
          />

          <Desk
            position={[5, 0, -2]}
            isActive={currentLocation === "desk"}
            cameraLookAt={cameraLookAt}
          />

          <ExitArea
            position={[-5, 0, 0]}
            isActive={currentLocation === "exit"}
            cameraLookAt={cameraLookAt}
          />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={0.8} castShadow />

          <Environment preset="apartment" />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;

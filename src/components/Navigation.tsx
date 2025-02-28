// components/Navigation.jsx
import React from "react";
import { motion } from "framer-motion";

const Navigation = ({ onNavigate, currentLocation }) => {
  const locations = [
    { id: "elevator", label: "ELEVATOR" },
    { id: "office", label: "EXPERIENCE" },
    { id: "desk", label: "TECH STACK" },
    { id: "exit", label: "PERSONAL" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="navigation"
    >
      {locations.map((location) => (
        <motion.button
          key={location.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`nav-button ${currentLocation === location.id ? "active" : ""}`}
          onClick={() => onNavigate(location.id)}
        >
          {location.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Navigation;

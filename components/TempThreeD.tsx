import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type TempThreeDProps = {
  shapeIndex: number; // 0–4 for 5 shapes
};

const ShapeSelector: React.FC<{ index: number }> = ({ index }) => {
  switch (index) {
    case 0:
      return (
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      );
    case 1:
      return (
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      );
    case 2:
      return (
        <mesh>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      );
    case 3:
      return (
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial color="limegreen" />
        </mesh>
      );
    case 4:
      return (
        <mesh>
          <cylinderGeometry args={[1, 1, 2, 32]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      );
    default:
      return null;
  }
};

const TempThreeD: React.FC<TempThreeDProps> = ({ shapeIndex }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />

        {/* Render shape based on index */}
        <ShapeSelector index={shapeIndex} />
      </Canvas>
    </div>
  );
};

export default TempThreeD;

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cup } from "./models/CoffeeCup";
import { OrbitControls } from "@react-three/drei";

function RotatingCup(props) {
    const ref = React.useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2;
    });
    return <Cup ref={ref} {...props} />;
}

export default function Coffee() {
  return (
    <Canvas
      id="canvas"
      className="w-1/2 h-full relative z-40"
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
        <OrbitControls enableZoom={false} enableDamping={true} dampingFactor={0.25}/>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingCup scale={25} position={[0, 0, 0]} />
    </Canvas>
  );
}

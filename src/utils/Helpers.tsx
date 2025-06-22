import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Dodecahedron } from "./Dodecahedron";

export const Content = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.0025;
    }
  });
  return (
    <group ref={ref} scale={2}>
      <Dodecahedron position={[-2, 0, 0]} text="" />
      <Dodecahedron position={[0, -2, -3]} text="" />
      <Dodecahedron position={[2, 0, 0]} text="" />
    </group>
  );
};

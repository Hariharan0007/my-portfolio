import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";

export const AwardsScene = () => (
  <Canvas
    camera={{ position: [0, 0, 8] }}
    style={{ width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} color={colors.accent4} />
    <mesh scale={2.5}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color={colors.accent4} wireframe />
    </mesh>
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={2.2}
      enablePan={false}
    />
  </Canvas>
);

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";

export const EducationScene = () => (
  <Canvas
    camera={{ position: [0, 0, 8] }}
    style={{ width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} color={colors.accent2} />
    <mesh scale={2.5}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color={colors.accent2} wireframe />
    </mesh>
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={1.2}
      enablePan={false}
    />
  </Canvas>
);

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";

export const CertificatesScene = () => (
  <Canvas
    camera={{ position: [0, 0, 8] }}
    style={{ width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} color={colors.accent3} />
    <mesh scale={2.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colors.accent3} wireframe />
    </mesh>
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={1.8}
      enablePan={false}
    />
  </Canvas>
);

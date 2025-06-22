import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";

export const ContactScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} color={colors.accent3} />
    <mesh scale={2.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={colors.accent3} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
  </Canvas>
);

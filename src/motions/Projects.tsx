import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";

export const ProjectsScene = () => (
  <Canvas camera={{ position: [0, 0, 8] }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} color={colors.accent} />
    <mesh scale={2.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={colors.accent} wireframe />
    </mesh>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
  </Canvas>
);

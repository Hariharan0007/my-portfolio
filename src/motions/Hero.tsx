import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { colors } from "../utils/Constants";
import { Content } from "../utils/Helpers";

export const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 10] }}
    style={{
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    }}
  >
    <pointLight color={colors.accent} />
    <pointLight position={[10, 10, -10]} color={colors.accent5} />
    <pointLight position={[-10, -10, 10]} color={colors.accent2} />
    <Content />
    <OrbitControls
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.5}
      enablePan={false}
    />
  </Canvas>
);

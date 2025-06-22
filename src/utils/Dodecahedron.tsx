import { Html } from "@react-three/drei";
import { colors } from "./Constants";

interface DodecahedronProps {
  position: [number, number, number];
  text?: string;
}

export const Dodecahedron = ({
  position,
  text = "Hello\nWorld",
}: DodecahedronProps) => {
  return (
    <mesh position={position} scale={1}>
      <dodecahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial
        roughness={0.75}
        emissive={colors.accent}
        color={colors.accent}
      />
      <Html distanceFactor={45}>
        <div className="content text-white text-center">
          {text.split("\n").map((line, i) => (
            <p key={i} className={i === 0 ? "text-xl font-bold" : "text-sm"}>
              {line}
            </p>
          ))}
        </div>
      </Html>
    </mesh>
  );
};

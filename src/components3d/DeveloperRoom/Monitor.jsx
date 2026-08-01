import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Monitor = ({ position, rotation, variant = 1 }) => {
  const screenRef = useRef();

  useFrame(({ clock }) => {
    if (!screenRef.current) return;

    const time = clock.getElapsedTime();

    screenRef.current.material.emissiveIntensity =
      1.5 + Math.sin(time * 2 + variant) * 0.2;
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Monitor */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 1.15, 0.12]} />
        <meshStandardMaterial color="#09090d" />
      </mesh>

      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.066]}>
        <planeGeometry args={[1.62, 0.96]} />
        <meshStandardMaterial
          color="#301070"
          emissive="#6d28d9"
          emissiveIntensity={1.6}
        />
      </mesh>

      <CodeLines variant={variant} />

      {/* Stand */}
      <mesh position={[0, -0.78, 0]}>
        <boxGeometry args={[0.12, 0.45, 0.12]} />
        <meshStandardMaterial color="#18181f" />
      </mesh>

      <mesh position={[0, -1.02, 0]}>
        <boxGeometry args={[0.75, 0.08, 0.45]} />
        <meshStandardMaterial color="#18181f" />
      </mesh>
    </group>
  );
};

const CodeLines = ({ variant }) => {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;

    const time = clock.getElapsedTime();

    group.current.children.forEach((child, index) => {
      child.scale.x = 0.7 + Math.sin(time * 1.8 + index + variant) * 0.15;
    });
  });

  const lines = [
    { y: 0.32, width: 1.05, color: "#67e8f9" },
    { y: 0.16, width: 0.8, color: "#c084fc" },
    { y: 0, width: 1.15, color: "#facc15" },
    { y: -0.16, width: 0.65, color: "#4ade80" },
    { y: -0.32, width: 1, color: "#60a5fa" },
  ];

  return (
    <group ref={group} position={[-0.1, 0, 0.073]}>
      {lines.map((line, index) => (
        <mesh key={index} position={[-(1.2 - line.width) / 2, line.y, 0]}>
          <planeGeometry args={[line.width, 0.035]} />

          <meshBasicMaterial color={line.color} />
        </mesh>
      ))}
    </group>
  );
};

export default Monitor;

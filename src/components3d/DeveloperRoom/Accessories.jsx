import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Accessories = () => {
  const rgb = useRef();
  const steam1 = useRef();
  const steam2 = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (rgb.current) {
      rgb.current.material.emissiveIntensity = 1.5 + Math.sin(time * 2) * 0.6;
    }

    if (steam1.current) {
      steam1.current.position.y = 1.65 + ((time * 0.2) % 0.6);

      steam1.current.material.opacity = 0.35 - ((time * 0.2) % 0.3);
    }

    if (steam2.current) {
      steam2.current.position.y = 1.7 + ((time * 0.16) % 0.5);
    }
  });

  return (
    <group>
      {/* PC Tower */}
      <mesh position={[2.15, 1.85, -0.25]} castShadow>
        <boxGeometry args={[0.85, 1.9, 1]} />

        <meshStandardMaterial color="#0c0c12" roughness={0.45} />
      </mesh>

      {/* PC glass panel */}
      <mesh position={[1.715, 1.85, -0.25]}>
        <planeGeometry args={[0.78, 1.7]} />

        <meshStandardMaterial color="#111827" transparent opacity={0.65} />
      </mesh>

      {/* RGB */}
      <mesh ref={rgb} position={[1.7, 2.2, -0.2]}>
        <circleGeometry args={[0.2, 32]} />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Coffee mug */}
      <group position={[1.25, 1.2, 0.45]}>
        <mesh>
          <cylinderGeometry args={[0.18, 0.16, 0.38, 20]} />

          <meshStandardMaterial color="#27272f" />
        </mesh>

        {/* Handle */}
        <mesh position={[0.19, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.13, 0.035, 8, 20]} />

          <meshStandardMaterial color="#27272f" />
        </mesh>
      </group>

      {/* Steam */}
      <mesh ref={steam1} position={[1.2, 1.65, 0.45]}>
        <sphereGeometry args={[0.035, 8, 8]} />

        <meshBasicMaterial color="#ffffff" transparent opacity={0.25} />
      </mesh>

      <mesh ref={steam2} position={[1.3, 1.75, 0.45]}>
        <sphereGeometry args={[0.025, 8, 8]} />

        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>

      {/* Small desk plant */}
      <group position={[-2.25, 1.35, 0.25]}>
        <mesh>
          <cylinderGeometry args={[0.22, 0.18, 0.45, 16]} />

          <meshStandardMaterial color="#20202a" />
        </mesh>

        {[
          [-0.12, 0.35, 0],
          [0.12, 0.38, 0],
          [0, 0.48, 0],
        ].map((position, index) => (
          <mesh
            key={index}
            position={position}
            rotation={[0, 0, index === 0 ? -0.4 : index === 1 ? 0.4 : 0]}
          >
            <coneGeometry args={[0.12, 0.55, 8]} />

            <meshStandardMaterial color="#166534" />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default Accessories;

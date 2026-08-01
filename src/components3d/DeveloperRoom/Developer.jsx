import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Developer = () => {
  const leftArm = useRef();
  const rightArm = useRef();
  const head = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (leftArm.current) {
      leftArm.current.rotation.x = -0.85 + Math.sin(time * 5) * 0.035;
    }

    if (rightArm.current) {
      rightArm.current.rotation.x = -0.85 + Math.sin(time * 5 + 1) * 0.035;
    }

    if (head.current) {
      head.current.rotation.y = Math.sin(time * 0.6) * 0.08;
    }
  });

  return (
    <group position={[0, 0.45, 1.75]}>
      {/* Body */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <capsuleGeometry args={[0.45, 1.1, 8, 16]} />
        <meshStandardMaterial color="#171721" roughness={0.8} />
      </mesh>

      {/* Head */}
      <group ref={head} position={[0, 1.35, -0.05]}>
        <mesh castShadow>
          <sphereGeometry args={[0.42, 24, 24]} />

          <meshStandardMaterial color="#b9785b" roughness={0.8} />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 0.2, -0.03]}>
          <sphereGeometry
            args={[0.43, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2]}
          />

          <meshStandardMaterial color="#101015" />
        </mesh>

        {/* Headphones */}
        <mesh position={[0, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.43, 0.045, 12, 30, Math.PI]} />

          <meshStandardMaterial color="#252532" />
        </mesh>
      </group>

      {/* Left arm */}
      <group
        ref={leftArm}
        position={[-0.48, 0.55, -0.1]}
        rotation={[-0.85, 0, -0.15]}
      >
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.13, 0.65, 8, 12]} />

          <meshStandardMaterial color="#20202b" />
        </mesh>

        {/* Hand */}
        <mesh position={[0, -0.9, -0.05]}>
          <sphereGeometry args={[0.14, 16, 16]} />

          <meshStandardMaterial color="#b9785b" />
        </mesh>
      </group>

      {/* Right arm */}
      <group
        ref={rightArm}
        position={[0.48, 0.55, -0.1]}
        rotation={[-0.85, 0, 0.15]}
      >
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.13, 0.65, 8, 12]} />

          <meshStandardMaterial color="#20202b" />
        </mesh>

        <mesh position={[0, -0.9, -0.05]}>
          <sphereGeometry args={[0.14, 16, 16]} />

          <meshStandardMaterial color="#b9785b" />
        </mesh>
      </group>
    </group>
  );
};

export default Developer;

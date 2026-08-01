const Chair = () => {
  return (
    <group position={[0, -0.2, 2]}>
      {/* Seat */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.3, 0.22, 1.2]} />
        <meshStandardMaterial color="#181820" roughness={0.65} />
      </mesh>

      {/* Back */}
      <mesh position={[0, 1.05, 0.52]} rotation={[-0.08, 0, 0]} castShadow>
        <boxGeometry args={[1.35, 1.9, 0.22]} />
        <meshStandardMaterial color="#15151d" roughness={0.7} />
      </mesh>

      {/* Chair support */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.1, 16]} />
        <meshStandardMaterial color="#22222c" />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.18, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.1, 5]} />
        <meshStandardMaterial color="#17171f" />
      </mesh>

      {/* Wheels */}
      {[
        [-0.48, -1.3, 0],
        [0.48, -1.3, 0],
        [0, -1.3, 0.48],
        [0, -1.3, -0.48],
      ].map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color="#08080c" />
        </mesh>
      ))}
    </group>
  );
};

export default Chair;

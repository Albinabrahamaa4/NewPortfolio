const Desk = () => {
  return (
    <group>
      {/* Desktop */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.8, 0.22, 2.1]} />
        <meshStandardMaterial color="#24242f" roughness={0.6} />
      </mesh>

      {/* Left leg */}
      <mesh position={[-2.35, -0.35, 0]}>
        <boxGeometry args={[0.35, 2.2, 1.6]} />
        <meshStandardMaterial color="#171720" />
      </mesh>

      {/* Right leg */}
      <mesh position={[2.35, -0.35, 0]}>
        <boxGeometry args={[0.35, 2.2, 1.6]} />
        <meshStandardMaterial color="#171720" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 1.02, 0.65]} rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[1.8, 0.08, 0.55]} />
        <meshStandardMaterial color="#111118" />
      </mesh>

      {/* Keyboard glow */}
      <mesh position={[0, 1.065, 0.65]}>
        <boxGeometry args={[1.55, 0.015, 0.4]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Mouse */}
      <mesh position={[1.25, 1.08, 0.72]}>
        <sphereGeometry args={[0.16, 20, 20]} />
        <meshStandardMaterial color="#111118" roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Desk;

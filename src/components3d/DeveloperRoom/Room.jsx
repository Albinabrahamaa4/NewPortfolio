const Room = () => {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#11111a" roughness={0.9} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <planeGeometry args={[14, 10]} />
        <meshStandardMaterial color="#0d0c14" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-6, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 10]} />
        <meshStandardMaterial color="#0b0b11" roughness={0.95} />
      </mesh>

      {/* Purple wall panel */}
      <mesh position={[-2.5, 2.4, -3.94]}>
        <boxGeometry args={[1.4, 1.7, 0.08]} />
        <meshStandardMaterial
          color="#15101f"
          emissive="#7c3aed"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh position={[2.6, 2.8, -3.94]}>
        <boxGeometry args={[1.1, 1.5, 0.08]} />
        <meshStandardMaterial
          color="#15101f"
          emissive="#6d28d9"
          emissiveIntensity={0.12}
        />
      </mesh>
    </group>
  );
};

export default Room;

const Lighting = () => {
  return (
    <>
      {/* Overall visibility */}
      <ambientLight intensity={1.15} color="#d8d8ff" />

      {/* Main soft light - illuminates developer + desk */}
      <directionalLight
        position={[5, 8, 7]}
        intensity={2.8}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Front fill light - VERY important */}
      <pointLight
        position={[0, 4, 6]}
        intensity={18}
        distance={15}
        decay={2}
        color="#c4b5fd"
      />

      {/* Purple monitor/room glow */}
      <pointLight
        position={[-2.5, 3, 1]}
        intensity={10}
        distance={10}
        decay={2}
        color="#8b5cf6"
      />

      {/* Blue secondary light */}
      <pointLight
        position={[3, 3.5, 2]}
        intensity={8}
        distance={10}
        decay={2}
        color="#60a5fa"
      />

      {/* Warm light on developer */}
      <pointLight
        position={[0, 3, 3]}
        intensity={7}
        distance={7}
        decay={2}
        color="#ffd6b3"
      />

      {/* Light behind monitors */}
      <pointLight
        position={[0, 2.5, -2]}
        intensity={10}
        distance={8}
        decay={2}
        color="#7c3aed"
      />

      {/* Floor / bottom fill */}
      <pointLight
        position={[0, -1, 2]}
        intensity={5}
        distance={8}
        decay={2}
        color="#818cf8"
      />
    </>
  );
};

export default Lighting;

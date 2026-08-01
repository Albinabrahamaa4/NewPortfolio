import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import Room from "./Room";
import Desk from "./Desk";
import Monitor from "./Monitor";
import Chair from "./Chair";
import Developer from "./Developer";
import Accessories from "./Accessories";
import Lighting from "./Lighting";

/* =========================================
   CAMERA SCROLL ANIMATION
========================================= */

const CameraAnimation = () => {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      /*
       * Animation completes after roughly
       * 600px of scrolling.
       */
      const progress = Math.min(Math.max(window.scrollY / 600, 0), 1);

      scrollProgress.current = progress;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state) => {
    const progress = scrollProgress.current;

    /*
     * INITIAL CAMERA
     *
     * Shows the WHOLE ROOM.
     */
    const startPosition = new THREE.Vector3(8.5, 6.5, 10.5);

    /*
     * FINAL CAMERA
     *
     * Zoomed into developer workspace.
     */
    const endPosition = new THREE.Vector3(6, 4.5, 7);

    const targetPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      progress,
    );

    /*
     * Smooth camera movement instead of
     * instantly jumping.
     */
    state.camera.position.lerp(targetPosition, 0.045);

    /*
     * Camera target also moves slightly
     * toward the monitors.
     */
    const startTarget = new THREE.Vector3(0, 0.2, 0);

    const endTarget = new THREE.Vector3(0, 0.8, -0.3);

    const target = new THREE.Vector3().lerpVectors(
      startTarget,
      endTarget,
      progress,
    );

    state.camera.lookAt(target);
  });

  return null;
};

/* =========================================
   ROOM
========================================= */

const DeveloperRoom = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded-[28px]">
      <Canvas
        shadows
        camera={{
          /*
           * Start further away.
           * This gives us the full-room view.
           */
          position: [8.5, 6.5, 10.5],

          /*
           * Smaller FOV = cleaner
           * isometric appearance.
           */
          fov: 36,

          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.25]}
      >
        {/* Background */}

        <color attach="background" args={["#0d0c14"]} />

        <fog attach="fog" args={["#0d0c14", 18, 35]} />

        {/* Lighting */}

        <Lighting />

        {/* Room */}

        <Room />

        {/* Workspace */}

        <group position={[0, -1.5, 0]} scale={0.92}>
          <Desk />

          <Monitor
            position={[-1.25, 2.05, -0.15]}
            rotation={[0, 0.08, 0]}
            variant={1}
          />

          <Monitor
            position={[0.75, 2.05, -0.15]}
            rotation={[0, -0.08, 0]}
            variant={2}
          />

          <Chair />

          <Developer />

          <Accessories />
        </group>

        {/* Floor Shadows */}

        <ContactShadows
          position={[0, -2.95, 0]}
          opacity={0.45}
          scale={12}
          blur={2.5}
          far={6}
        />

        {/* Scroll camera */}

        <CameraAnimation />

        {/* Mouse movement */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.15}
          minAzimuthAngle={-0.28}
          maxAzimuthAngle={0.28}
          target={[0, 0.4, 0]}
        />
      </Canvas>
    </div>
  );
};

export default DeveloperRoom;

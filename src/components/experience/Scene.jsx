import { useRef } from "react";
import { House } from "./House";
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { ExperienceController } from "./ExperienceController";
import { CAMERA_TARGET } from "./camera";

export function Scene({ progress }) {
  const controlsRef = useRef();
  

  return (
    <>
      <ambientLight intensity={0.1} />

      <directionalLight
        position={[5, 15, 5]}
        intensity={2}
        castShadow
        color={"#0f0a3d"}
      />

      <pointLight
        position={[-15, 40, -15]}
        intensity={1200}
        distance={200}
        color={"#080718"}
      />


      <Stars
        radius={50}
        depth={30}
        count={1800}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
      <Environment preset="night" />

      <mesh position={CAMERA_TARGET}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </mesh>

      <House progress={progress} />


      <ExperienceController controlsRef={controlsRef} progress={progress} />

      <OrbitControls
        ref={controlsRef}
        enabled={false}
        enableDamping
        enablePan
        enableZoom ={true}
      // minDistance={25}
      // maxDistance={210}
      />

    </>
  );
}
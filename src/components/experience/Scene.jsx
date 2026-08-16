import { useRef } from "react";
import { House } from "./House";
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { ExperienceController } from "./ExperienceController";
import RotatingBox from "../../box";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export function Scene({ onProgressChange }) {
  const controlsRef = useRef();
  const scroll = useScroll();
  const lastProgress = useRef(0);

  useFrame(() => {
    const progress = scroll.offset;

    if (Math.abs(progress - lastProgress.current) > 0.01) {
      lastProgress.current = progress;

      onProgressChange?.(progress);
    }
  });



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

      <House />
      <RotatingBox />

      <ExperienceController controlsRef={controlsRef} />

      <OrbitControls
        ref={controlsRef}
        enabled={scroll.offset > 0.94}
        enableDamping
        enablePan={false}
        enableZoom
        rotateSpeed={0.7}
        zoomSpeed={0.8}
        minDistance={25}
        maxDistance={210}
      />

    </>
  );
}
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { CAMERA_TARGET } from "./camera";

export function ExperienceController({ controlsRef, progress }) {
  const wasExploring = useRef(false);

  useFrame(() => {
    const controls = controlsRef.current;

    if (!controls) return;

    const exploreMode = progress >= 0.9;

    if (!exploreMode) {
      controls.enabled = false;
      wasExploring.current = false;
      return;
    }

    // Only execute this ONCE when entering exploration
    if (!wasExploring.current) {
      controls.target.set(...CAMERA_TARGET);

      controls.enabled = true;
      controls.update();

      wasExploring.current = true;

      return;
    }

    controls.enabled = true;
  });

  return null;
}
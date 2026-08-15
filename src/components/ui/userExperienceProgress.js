import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";

export function useExperienceProgress() {
  const scroll = useScroll();
  const progress = useRef(0);

  useFrame(() => {
    progress.current = scroll.offset;
  });

  return progress;
}
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const CAMERA_TARGET = [0, 3, 0]

export function ExperienceController({ controlsRef }) {
    const scroll = useScroll();
    const wasExploring = useRef(false);

    useFrame(() => {
        if (!controlsRef.current) return;

        const progress = scroll.offset;

        const exploreMode = progress >= 0.8;

        controlsRef.current.enabled = exploreMode;


        if (exploreMode && !wasExploring.current) {
            controlsRef.current.target.set(...CAMERA_TARGET);

            controlsRef.current.update();

            wasExploring.current = true;
        }

        if (!exploreMode) {
            wasExploring.current = false;
        }
    });

    return null;
}
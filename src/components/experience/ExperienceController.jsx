import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const CAMERA_TARGET = [0, 3, 0]

const SCROLL_TOUCH_ACTION = "pan-y";

export function ExperienceController({ controlsRef }) {
    const scroll = useScroll();
    const wasExploring = useRef(false);

    useEffect(() => {
        const el = scroll?.el;

        if (!el) return;

        el.style.setProperty("touch-action", SCROLL_TOUCH_ACTION);
        el.style.setProperty("overscroll-behavior", "contain");
    }, [scroll]);

    useFrame(() => {
        const el = scroll.el;

        // OrbitControls reconnects whenever the camera or the event source
        // changes and re-applies touchAction: none, so keep re-asserting it.
        if (el && el.style.getPropertyValue("touch-action") !== SCROLL_TOUCH_ACTION) {
            el.style.setProperty("touch-action", SCROLL_TOUCH_ACTION);
        }

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

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollExperience({ onProgressChange }) {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    const trigger = ScrollTrigger.create({
      trigger: ".app",
      start: "top top",
      end: "bottom bottom",

      onUpdate: (self) => {
        onProgressChange?.(self.progress);
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.normalizeScroll(false);
    };
  }, [onProgressChange]);

  return null;
}
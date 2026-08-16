import { useEffect, useRef, useState } from "react";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";


export function AudioController() {
    const windRef = useRef(null);
    const cricketRef = useRef(null);

    const fadeFrameRef = useRef(null);
    const activatedRef = useRef(false);

    const [enabled, setEnabled] = useState(false);
    const windSound = "https://pub-cff9d7fca7c74df2998591750ffbdbcb.r2.dev/audio/night-wind.mp3"
    const cricketSound = "https://pub-cff9d7fca7c74df2998591750ffbdbcb.r2.dev/audio/crickets.mp3"


    useEffect(() => {
        const wind = new Audio(windSound);
        const crickets = new Audio(cricketSound);

        wind.loop = true;
        crickets.loop = true;

        wind.volume = 0;
        crickets.volume = 0;

        wind.preload = "auto";
        crickets.preload = "auto";

        windRef.current = wind;
        cricketRef.current = crickets;

        return () => {
            wind.pause();
            crickets.pause();

            if (fadeFrameRef.current) {
                cancelAnimationFrame(fadeFrameRef.current);
            }

            windRef.current = null;
            cricketRef.current = null;
        };
    }, []);

    const fadeIn = () => {
        const wind = windRef.current;
        const crickets = cricketRef.current;

        if (!wind || !crickets) return;

        const targetWind = 0.12;
        const targetCrickets = 0.03;

        const startTime = performance.now();
        const duration = 1200;

        const animate = (time) => {
            const progress = Math.min(
                1,
                (time - startTime) / duration
            );

            // Smooth easing
            const eased =
                1 - Math.pow(1 - progress, 3);
                
            wind.volume = Math.max(
                0,
                Math.min(1, targetWind * eased)
            );

            crickets.volume = Math.max(
                0,
                Math.min(1, targetCrickets * eased)
            );
            if (progress < 1) {
                fadeFrameRef.current =
                    requestAnimationFrame(animate);
            }
        };

        fadeFrameRef.current =
            requestAnimationFrame(animate);
    };

    const activateAudio = async () => {
        if (activatedRef.current) return;

        const wind = windRef.current;
        const crickets = cricketRef.current;

        if (!wind || !crickets) return;

        try {
            await wind.play();
            await crickets.play();

            activatedRef.current = true;
            setEnabled(true);

            fadeIn();

            console.log(" Ambient sound activated");
        } catch (error) {
            console.log(
                "Audio activation was blocked:",
                error
            );
        }
    };

    useEffect(() => {
        const handleWheel = () => {
            activateAudio();
        };

        const handleTouchStart = () => {
            activateAudio();
        };

        window.addEventListener(
            "wheel",
            handleWheel,
            { passive: true }
        );

        window.addEventListener(
            "touchstart",
            handleTouchStart,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "wheel",
                handleWheel
            );

            window.removeEventListener(
                "touchstart",
                handleTouchStart
            );
        };
    }, []);

    const toggleAudio = async () => {
        const wind = windRef.current;
        const crickets = cricketRef.current;

        if (!wind || !crickets) return;

        try {
            if (!enabled) {
                await wind.play();
                await crickets.play();

                wind.volume = 0.12;
                crickets.volume = 0.03;

                activatedRef.current = true;
                setEnabled(true);
            } else {
                wind.pause();
                crickets.pause();

                setEnabled(false);
            }
        } catch (error) {
            console.error("Audio error:", error);
        }
    };

    return (
        <button
            className="audio-button"
            onClick={toggleAudio}
            aria-label={
                enabled
                    ? "Mute ambience"
                    : "Enable ambience"
            }
        >
            {enabled ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
    );
}
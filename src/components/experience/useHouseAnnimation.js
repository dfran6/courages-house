import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { lerp, smoothstep, rangeProgress } from "../../utils/math";
import { animatePart } from "../../utils/animatePart";
import { captureTransform } from "../../utils/transforms";
import { CAMERA_START, CAMERA_END, CAMERA_TARGET } from "./camera";

export function useHouseAnimation(houseRef, nodes, scrollProgress) {
    // Keep the latest GSAP progress available to the render loop
    const progressRef = useRef(scrollProgress);
    progressRef.current = scrollProgress;

    const originalTransforms = useRef(null);

    // Capture the original model transforms once
    if (!originalTransforms.current) {
        originalTransforms.current = {
            leftRoof: captureTransform(nodes.leftRoof),
            rightRoof: captureTransform(nodes.rightRoof),
            backRoof: captureTransform(nodes.backRoof),
            midRoof: captureTransform(nodes.midRoof),

            mainBuild: captureTransform(nodes.mainBuild),
            backWall: captureTransform(nodes.backWall),
            leftWall: captureTransform(nodes.leftWall),
            rightWall: captureTransform(nodes.rightWall),
            entranceWall: captureTransform(nodes.entranceWall),
            entranceTopWall: captureTransform(nodes.entranceTopWall),
            topEntranceWall: captureTransform(nodes.topEntranceWall),

            window: captureTransform(nodes.window),
            window001: captureTransform(nodes.window001),
            window002: captureTransform(nodes.window002),
            window003: captureTransform(nodes.window003),
            window004: captureTransform(nodes.window004),
            window005: captureTransform(nodes.window005),
            window006: captureTransform(nodes.window006),
            window007: captureTransform(nodes.window007),
            window008: captureTransform(nodes.window008),
            window009: captureTransform(nodes.window009),
            window010: captureTransform(nodes.window010),
            window011: captureTransform(nodes.window011),

            briks: captureTransform(nodes.briks),
            support_woods: captureTransform(nodes.support_woods),
            entrance_floor: captureTransform(nodes.entrance_floor),
            innerFloor: captureTransform(nodes.innerFloor),
            door: captureTransform(nodes.door),
            backDoor: captureTransform(nodes.backDoor),
            ironShimmy: captureTransform(nodes.ironShimmy),
            fanMotor: captureTransform(nodes.fanMotor),
            fanStand: captureTransform(nodes.fanStand),
            fanblades: captureTransform(nodes.fanblades),
            Point: captureTransform(nodes.Point),
        };
    }

    useFrame((state, delta) => {
        if (!houseRef.current) return;

        // Get the latest progress coming from GSAP
        const progress = progressRef.current;

        const original = originalTransforms.current;

        // --------------------------------
        // WALL / BUILDING ASSEMBLY
        // --------------------------------

        const wallProgress = smoothstep(
            rangeProgress(progress, 0.15, 0.45)
        );

        nodes.entrance_floor.position.x =
            original.entrance_floor.position.x +
            lerp(-190.5, 0, wallProgress);

        nodes.innerFloor.position.x =
            original.innerFloor.position.x +
            lerp(-350.5, 0, wallProgress);

        // Left wall
        nodes.leftWall.position.x =
            original.leftWall.position.x +
            lerp(-550, 0, wallProgress);

        nodes.leftWall.rotation.y =
            original.leftWall.rotation.y +
            lerp(-0.25, 0, wallProgress);

        // Right wall
        nodes.rightWall.position.x =
            original.rightWall.position.x +
            lerp(70, 0, wallProgress);

        nodes.rightWall.rotation.y =
            original.rightWall.rotation.y +
            lerp(0.25, 0, wallProgress);

        // Back wall
        nodes.backWall.position.z =
            original.backWall.position.z +
            lerp(-150, 0, wallProgress);

        nodes.backWall.rotation.x =
            original.backWall.rotation.x +
            lerp(-0.15, 0, wallProgress);

        // Entrance wall
        nodes.entranceWall.position.z =
            original.entranceWall.position.z +
            lerp(80, 0, wallProgress);

        nodes.entranceWall.rotation.x =
            original.entranceWall.rotation.x +
            lerp(0.25, 0, wallProgress);

        nodes.entranceTopWall.position.y =
            original.entranceTopWall.position.y +
            lerp(51, 0, wallProgress);

        nodes.topEntranceWall.position.y =
            original.topEntranceWall.position.y +
            lerp(50, 0, wallProgress);

        // --------------------------------
        // ROOF
        // --------------------------------

        const roofProgress = smoothstep(
            rangeProgress(progress, 0.45, 0.7)
        );

        nodes.leftRoof.position.y =
            original.leftRoof.position.y +
            lerp(5, 0, roofProgress);

        nodes.rightRoof.position.y =
            original.rightRoof.position.y +
            lerp(5, 0, roofProgress);

        nodes.backRoof.position.y =
            original.backRoof.position.y +
            lerp(1.5, 0, roofProgress);

        nodes.midRoof.position.x =
            original.midRoof.position.x +
            lerp(10, 0, roofProgress);

        // Roof rotation
        nodes.leftRoof.rotation.x =
            original.leftRoof.rotation.x +
            lerp(0.5, 0, roofProgress);

        nodes.rightRoof.rotation.x =
            original.rightRoof.rotation.x +
            lerp(0.5, 0, roofProgress);

        nodes.backRoof.rotation.z =
            original.backRoof.rotation.z +
            lerp(3, 0, roofProgress);

        nodes.midRoof.rotation.z =
            original.midRoof.rotation.z +
            lerp(-3, 0, roofProgress);

        // Main building rises into position
        nodes.mainBuild.position.y =
            original.mainBuild.position.y +
            lerp(-90.5, 0, roofProgress);

        // --------------------------------
        // DETAILS
        // --------------------------------

        const detailProgress = smoothstep(
            rangeProgress(progress, 0.7, 0.85)
        );

        nodes.briks.position.y =
            original.briks.position.y +
            lerp(-10, 0, detailProgress);

        nodes.support_woods.position.y =
            original.support_woods.position.y +
            lerp(-10, 0, detailProgress);

        // Windows
        animatePart(
            nodes.window,
            original.window,
            detailProgress,
            80
        );

        animatePart(
            nodes.window001,
            original.window001,
            detailProgress,
            80
        );

        animatePart(
            nodes.window002,
            original.window002,
            detailProgress,
            80
        );

        animatePart(
            nodes.window003,
            original.window003,
            detailProgress,
            80
        );

        animatePart(
            nodes.window004,
            original.window004,
            detailProgress,
            80
        );

        animatePart(
            nodes.window005,
            original.window005,
            detailProgress,
            80
        );

        animatePart(
            nodes.window006,
            original.window006,
            detailProgress,
            80
        );

        animatePart(
            nodes.window007,
            original.window007,
            detailProgress,
            80
        );

        animatePart(
            nodes.window008,
            original.window008,
            detailProgress,
            80
        );

        animatePart(
            nodes.window009,
            original.window009,
            detailProgress,
            80
        );

        animatePart(
            nodes.window010,
            original.window010,
            detailProgress,
            80
        );

        animatePart(
            nodes.window011,
            original.window011,
            detailProgress,
            80
        );

        animatePart(
            nodes.door,
            original.door,
            detailProgress,
            80
        );

        animatePart(
            nodes.backDoor,
            original.backDoor,
            detailProgress,
            80
        );

        // --------------------------------
        // FINAL DETAILS
        // --------------------------------

        const finalProgress = smoothstep(
            rangeProgress(progress, 0.85, 0.9)
        );

        animatePart(
            nodes.ironShimmy,
            original.ironShimmy,
            finalProgress,
            80
        );

        animatePart(
            nodes.fanMotor,
            original.fanMotor,
            finalProgress,
            80
        );

        animatePart(
            nodes.fanStand,
            original.fanStand,
            finalProgress,
            80
        );

        animatePart(
            nodes.fanblades,
            original.fanblades,
            finalProgress,
            80
        );

        nodes.Point.position.y =
            original.Point.position.y +
            lerp(-300, 0, finalProgress);

        // --------------------------------
        // CAMERA
        // --------------------------------

        const camera = state.camera;

        const cameraProgress = smoothstep(
            rangeProgress(progress, 0.85, 0.9)
        );

        if (progress < 0.9) {
            camera.position.x = lerp(CAMERA_START[0], CAMERA_END[0], cameraProgress);
            camera.position.y = lerp(CAMERA_START[1], CAMERA_END[1], cameraProgress);
            camera.position.z = lerp(CAMERA_START[2], CAMERA_END[2], cameraProgress);

            camera.lookAt(...CAMERA_TARGET);
        }


        if (finalProgress > 0.9) {
            nodes.fanblades.rotation.x += delta * 1.1;
            // console.log(camera.position)
        }
    });
}